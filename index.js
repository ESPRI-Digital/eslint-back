import antfu from '@antfu/eslint-config';
import typescriptParser from "@typescript-eslint/parser"
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin"

export default antfu(
    {
        ignores: [
            'src/*.d.ts',
        ],
    },
    {
        languageOptions: {
            parserOptions: {
                project: ['tsconfig.json'],
            },
            parser: typescriptParser,
        },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
        },
        rules: {
            ...typescriptEslintPlugin.configs.recommended.rules,
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/promise-function-async': 'error',
            'no-async-promise-executor': 'error',
            'no-await-in-loop': 'error',
            'no-promise-executor-return': 'error',
            'no-return-await': 'error',
            'curly': ['error', 'all'],
            'object-shorthand': ['error', 'never'],
            'style/comma-dangle': ['error', 'always-multiline'],
            'style/semi': ['error', 'always'],
            'style/member-delimiter-style': [
                'error',
                {
                    multiline: {
                        delimiter: 'semi',    // 'none' or 'semi' or 'comma'
                        requireLast: true,
                    },
                },
            ],
            'style/indent': [
                'error',
                2,
                {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: { parameters: 1, body: 1 },
                FunctionExpression: { parameters: 1, body: 1 },
                CallExpression: { arguments: 1 },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoreComments: false,
                ignoredNodes: [
                    'TemplateLiteral *',
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXFragment',
                    'JSXOpeningFragment',
                    'JSXClosingFragment',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                    'TSTypeParameterInstantiation',
                    'FunctionExpression > .params[decorators.length > 0]',
                    'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                    'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
                ],
                offsetTernaryExpressions: true,
                },
            ],
        },
    },
);