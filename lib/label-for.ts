import type { HTMLAttributes, LabelHTMLAttributes } from 'react';
import { useId } from 'react';


export interface LabelFor {

    /** Props to apply to the label element. */
    labelProps: Pick<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>;

    /** Props to apply to the field element being labeled. */
    fieldProps: Pick<HTMLAttributes<HTMLElement>, 'id'>;
}

/**
 * A hook that provides a label for an element using the `htmlFor` attribute.
 * The label can be used to focus and control the associated element.
 * If you only need to associate a label with a field for accessibility purposes, use `useAriaLabelledBy` instead.
 * Do not use both hooks on the same field.
 *
 * @returns The props to apply to the label and field element.
 */
export function useLabelFor(): LabelFor {
    const fieldId = useId();
    return {
        labelProps: {
            htmlFor: fieldId,
        },
        fieldProps: {
            id: fieldId,
        },
    };
}
