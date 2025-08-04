# Continuous Slice

> Slice string among interval.

## Example

> Also see [example.html](./example.html).

```js
const cSlice = require("./continuous-slice/dist/index.cjs")

cSlice("hello", [100, 300], (s, isFinal) => {
    console.clear()
    console.warn(s + (isFinal ? "" : "_"))
})
```
