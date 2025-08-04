const ccc = require("./dist/index.cjs")

ccc("hello", [100, 300], (s, isFinal) => {
    console.clear()
    console.warn(s + (isFinal ? "" : "_"))
})
