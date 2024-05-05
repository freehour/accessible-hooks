import type { HTMLAttributes, LabelHTMLAttributes } from 'react';
import { useId } from 'react';

export interface AriaLabelledBy {
    /** Props to apply to the label element. */
    labelProps: Pick<LabelHTMLAttributes<HTMLLabelElement>, 'id'>;
    /** Props to apply to the field element being labeled. */
    fieldProps: Pick<HTMLAttributes<HTMLElement>, 'aria-labelledby'>;
}

/**
 * A hook that provides accessibility implementation for a label and its associated element using the `aria-labelledby` attribute.
 * If you are associating a `label` element using the `htmlFor` attribute or your field is nested in a `label` element, you do not need aria-labelledby.
 * In any other case, it is recommended to use this hook to ensure correct accessibility.
 *
 * @returns The props to apply to the label and field element.
 */
export function useAriaLabelledBy(): AriaLabelledBy {
    const labelId = useId();
    return {
        labelProps: {
            id: labelId,
        },
        fieldProps: {
            'aria-labelledby': labelId,
        },
    };
}
