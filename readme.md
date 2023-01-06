
# Install

## Run

```bash
npm install -D eslint@8.31.0 @typescript-eslint/eslint-plugin@5.48.0 eslint-config-espri-back@0.2.0
```

## .eslintrc.js

```js
module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    'espri-back',
  ],
  ignorePatterns: ['.eslintrc.js'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
};
```