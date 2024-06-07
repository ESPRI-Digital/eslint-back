
# Install

## Run

```bash
npm install -D eslint-config-espri-back@3.0.0
```

## eslint.config.js

```js
import eslintESPRIBack from "eslint-config-espri-back";

export default eslintESPRIBack;
```

# Rules explanations

## Base

- @typescript-eslint/recommended

## Added rules

Each rules can be disable with `// eslint-disable-next-line` but must be justified

### @typescript-eslint/interface-name-prefix

`off` because we do not want this rules from base

[Link](https://typescript-eslint.io/rules/naming-convention/#enforce-that-interface-names-do-not-begin-with-an-i)

### @typescript-eslint/explicit-function-return-type

`off` because we do not want this rules from base

[Link](https://typescript-eslint.io/rules/explicit-function-return-type/)

### @typescript-eslint/explicit-module-boundary-types

`off` because we do not want this rules from base

[Link](https://typescript-eslint.io/rules/explicit-module-boundary-types/)

### @typescript-eslint/no-explicit-any

`off` because we do not want this rules from base

[Link](https://typescript-eslint.io/rules/no-explicit-any/)

### @typescript-eslint/no-empty-function

`off` because we do not want this rules from base

[Link](https://typescript-eslint.io/rules/no-empty-function/)

### @typescript-eslint/comma-dangle

`error, always-multiline` because only the lines you are modifying must be touched

[Link](https://typescript-eslint.io/rules/comma-dangle/)

### @typescript-eslint/semi

`error, always` because we always want a semicolon at the end of each lines

[Link](https://typescript-eslint.io/rules/semi)

### @typescript-eslint/indent

`error, 2` because we want to have an indentation of 2

[Link](https://typescript-eslint.io/rules/indent)

### @typescript-eslint/no-floating-promises

`error` because a "floating" Promise is one that is created without any code set up to handle any errors it might throw. Floating Promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections, and more.

[Link](https://typescript-eslint.io/rules/no-floating-promises/)

### no-async-promise-executor

`error` because it allows to detect potential problems related to the use of asynchronous functions in promise constructors.

[Link](https://eslint.org/docs/latest/rules/no-async-promise-executor#rule-details)

### no-await-in-loop

`error` because the program is not taking full advantage of the parallelization benefits of async/await.

[Link](https://eslint.org/docs/latest/rules/no-await-in-loop#rule-details)

### no-promise-executor-return

`error` because returning a value from an executor function is a possible error because the returned value cannot be used and it doesn’t affect the promise in any way

[link](https://eslint.org/docs/latest/rules/no-promise-executor-return#rule-details)

### no-return-await

`error` prevent a likely common performance hazard due to a lack of understanding of the semantics

[Link](https://eslint.org/docs/latest/rules/no-return-await#rule-details)

### @typescript-eslint/await-thenable

`error` because using await on an object that is not a promise can lead to unexpected behavior and runtime errors.

[Link](https://typescript-eslint.io/rules/await-thenable/)

### @typescript-eslint/no-misused-promises

`error` because improper use of promises can lead to problems such as memory leaks, runtime errors, and unexpected behavior. 

[Link](https://typescript-eslint.io/rules/no-misused-promises/)

### @typescript-eslint/promise-function-async

`error` because require any function or method that returns a Promise to be marked async

[Link](https://typescript-eslint.io/rules/promise-function-async/)