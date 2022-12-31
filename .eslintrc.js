// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: { // 对新语法使用eslint
    parser: 'babel-eslint',
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'always'],
    // 末尾禁止添加逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 强制使用一致的缩进
    'indent': ['error', 2],
    'semi-style': ['error', 'last'],
  }
}
