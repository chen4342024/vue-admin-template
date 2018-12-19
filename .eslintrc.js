module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        // "vue/html-indent": [2, 4, {
        //     "attribute": 1,
        //     "baseIndent": 1,
        //     "closeBracket": 0,
        //     "alignAttributesVertically": true,
        //     "ignores": []
        // }],
    }
}
