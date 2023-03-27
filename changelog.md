# Changelog

## [1.0.0] - 2023-03-27

### Changed

 - Remove rules `'@typescript-eslint/no-explicit-any': 'off'` because this a good practice
 - Add info in the readme
 - Add new rules:
    - '@typescript-eslint/no-floating-promises': 'error'
    - "no-async-promise-executor": "error",
    - "no-await-in-loop": "error",
    - "no-promise-executor-return": "error",
    - "no-return-await": "error",
    - "@typescript-eslint/await-thenable": "error",
    - "@typescript-eslint/no-misused-promises": "error",
    - "@typescript-eslint/promise-function-async": "error”

## [0.2.0] - 2023-01-06

### Changed

 - Set the indent to 2 spaces (previously 4)

### Fixed

 - Attempt to fix the indent rule for decorators 

## [0.1.1] - 2022-09-08

### Fixed

 - Set the parser

## [0.1.0] - 2022-09-08 (Broken : do not use)

### Added

 - Init of rules used By ESPRI for NestJS like backend

