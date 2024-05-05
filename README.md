# Accessible Hooks

This is a collection of accessibility hooks inspired by react-aria.

### useAriaLabelledBy

Provides a matching (`id`, `aria-labelledby`) pair for a label and field respectively.

```tsx
import { useAriaLabelledBy } from 'accessible-hooks';

function MyComponent() {
    const { labelProps, fieldProps } = useAriaLabelledBy();

    return (
        <div>
            <label {...labelProps}>My Label</label> //id="0"
            <input {...fieldProps} /> //aria-labelledby="0"
        </div>
    );
}
```

### useLabelFor

Provides a matching (`htmlFor`, `id`) pair for a label and a field respectively.

```tsx
import { useLabelFor } from 'accessible-hooks';

function MyComponent() {
    const { labelProps, fieldProps } = useLabelFor();

    return (
        <div>
            <label {...labelProps}>My Label</label> //htmlFor="0"
            <input {...fieldProps} /> //id="0"
        </div>
    );
}
```

### useTitleWhenTruncated

Sets the title attribute of an element when its text content is horizontally truncated (hidden by overflow).

```tsx
import { useIsTruncated } from 'accessible-hooks';

function MyComponent() {
    const titleProps = useTitleWhenTruncated();

    return (
        <div style={{ width: '50px', overflow: 'hidden' }} {...titleProps}>
            This is a long text that will be truncated.
        </div>
    );
}
```

## Installation

### npm

```bash
npm install accessible-hooks
```

### bun

```bash
bun install accessible-hooks
```
