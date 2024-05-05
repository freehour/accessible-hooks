import type { HTMLAttributes } from 'react';
import { useState } from 'react';

export type TitleProps = Pick<HTMLAttributes<HTMLElement>, 'title'> &
    Required<Pick<HTMLAttributes<HTMLElement>, 'onMouseEnter'>>;

/**
 * A hook that sets the title attribute of an element when the text content is truncated.
 *
 * @returns The props to apply to the element, includes the title attribute and onMouseEnter event.
 */
export function useTitleWhenTruncated(): TitleProps {
    const [title, setTitle] = useState<string | undefined>(undefined);

    return {
        title,
        onMouseEnter: event => {
            const el = event.currentTarget;
            const isTruncated = el.scrollWidth > el.clientWidth;
            setTitle(isTruncated ? el.textContent ?? undefined : undefined);
        },
    };
}
