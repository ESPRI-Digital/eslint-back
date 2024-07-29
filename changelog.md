# Changelog

## [4.1.0] - 2024-07-29

### Changed
- Change deprecaded rules :
    - @typescript-eslint/comma-dangle -> style/comma-dangle
    - @typescript-eslint/semi -> style/semi
    - @typescript-eslint/indent -> style/indent

## [4.0.0] - 2024-07-29

### Changed
- Remove dependencies @typescript-eslint/eslint-plugin and @typescript-eslint/parser bacause they are already installe in @antfu/eslint-config and can make conflicts

## [3.0.0] - 2024-06-07

### Changed
- Refactor using @antfu/eslint-config as default eslint configuration

## [2.0.0-beta.1] - 2024-02-07

### Changed
- Update eslint version
- Update typescript-eslint version
- Refactor to use eslint flat configuration

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

