import type { MutableRefObject } from 'react';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';


/**
 * Determines if the content of an element is truncated in horizontal direction, e.g. by overflow hidden.
 *
 * @param element The element to check.
 * @returns true if the content overflows the element in horizontal direction.
 */
export function isTruncated(element: HTMLElement): boolean {
    return element.scrollWidth > element.clientWidth;
}

/**
 * A hook that determines if the content of an element is truncated in horizontal direction, e.g. by overflow hidden.
 * The hook returns a ref to attach to the element and a boolean state indicating if the content is truncated.
 * The component re-renders when the truncated state changes.
 *
 * @returns [ref, isTruncated]
 */
export function useIsTruncated(): [MutableRefObject<HTMLElement | undefined>, boolean] {
    const ref = useRef<HTMLElement>();
    const [truncated, setTruncated] = useState(false);

    const updateTruncated = useCallback(() => {
        if (ref.current) {
            setTruncated(isTruncated(ref.current));
        }
    }, []);

    useLayoutEffect(() => {
        const { current } = ref;
        if (current !== undefined) {
            if ('ResizeObserver' in window) {
                const observer = new ResizeObserver(updateTruncated);
                observer.observe(current);
                return () => observer.disconnect();
            }
            updateTruncated();
        }
        return undefined;
    }, [updateTruncated]);

    return [ref, truncated];
}
