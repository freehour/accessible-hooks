import type { MutableRefObject, ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

/**
 * A hook that determines if the content of an element is truncated in horizontal direction, e.g. by overflow hidden.
 * The hook returns a ref to attach to the element and a boolean state indicating if the content is truncated.
 * The component re-renders when the truncated state changes.
 *
 * @param content The content to check for truncation.
 * @returns [ref, isTruncated]
 */
export function useIsTruncated(content: ReactNode): [MutableRefObject<HTMLElement | undefined>, boolean] {
    const ref = useRef<HTMLElement>();
    const [isTruncated, setIsTruncated] = useState(false);

    useLayoutEffect(() => {
        const el = ref.current;
        setIsTruncated(el !== undefined && el.scrollWidth > el.clientWidth);
    }, [content]);

    return [ref, isTruncated];
}
