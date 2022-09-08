
# Install

## Run

```bash
npm install -D eslint@8.21.0 @typescript-eslint/parser@5.32.0 @typescript-eslint/eslint-plugin@5.32.0 eslint-config-espri-back@0.1.0
```

## .eslintrc.js

```js
module.exports = {
  parser: '@typescript-eslint/parser',
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