module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "indent": ["error", 4, { "MemberExpression": 1 }], // Отступ количество пробелов
        "semi": [2, "always"], // Точка с запятой в конце строки
        // "space-before-function-paren": ["error", "newer"],
        // "space-before-function-paren": ["error", {
        //     "anonymous": "newer",
        //     "named": "newer",
        //     "asyncArrow": "newer"
        // }],
        "multiline-ternary": ["off"],
        // Использование двойных кавычек
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        // "padded-blocks": ["error", "newer"]
    }
};
