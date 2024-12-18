# `String.prototype.splice`

Analogous to `Array.prototype.splice`. Refer to
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
for more information on splice.

```js
const string = "abd";
console.log(string.splice(2, 0, "c")); // prints "abcd"
```

Note that string is a primitive type in JavaScript, so strings are immutable.
`String.prototype.splice` will return the modified string, instead of modifying
the original string, as opposed to `Array.prototype.splice`, which modifies the
original array on which the method is called.
