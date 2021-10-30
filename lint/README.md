# Lint React project

This is my Lint config for an angular project step by step. Angular 12+ has removed the linting by default.

We are installing 4 plugins:

- **prettier** to disable rules that conflict with Prettier
- **eslint-config-prettier** to disable rules that conflict with Prettier
- **eslint-plugin-prettier** to disable rules that conflict with Prettier
- **eslint-plugin-react** to disable rules that conflict with eslint
- You can read more [here](https://prettier.io/docs/en/integrating-with-linters.html#tslint)

1. Add **eslint-config-prettier** , **eslint-plugin-prettier**, **eslint-plugin-react** and **prettier**

NPM Commands

```bash
npm install --save-dev eslint-plugin-prettier eslint-config-prettier eslint-plugin-react prettier
```

(or)

```bash
npm install --save-dev eslint-plugin-prettier
```

```bash
npm install --save-dev eslint-config-prettier
```

```bash
npm install --save-dev eslint-plugin-react
```

```bash
npm install --save-dev prettier
```

YARN Commands

```bash
yarn add --dev eslint-plugin-prettier eslint-config-prettier eslint-plugin-react prettier
```

(or)

```bash
yarn add --dev eslint-plugin-prettier
```

```bash
yarn add --dev eslint-config-prettier
```

```bash
yarn add --dev eslint-plugin-react
```

```bash
yarn add --dev prettier
```

3. Create **.prettierrc**

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

4. Create **.prettierignore**

```
package.json
package-lock.json
yarn.lock
node_modules
```

5. Create **.eslintrc**

```js
{
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "no-console": "error", //unused consoles
    "no-eval": "error",
    "no-dupe-keys": "error",
    "no-var": "error", //unused variables
    "no-useless-constructor": "error", //unused variables
    "react/display-name": "off",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "spaced-comment": [2, "always"],
    // "eqeqeq": "error", // Example ==== instrad  ==,
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.13.1",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx"],
      },
    },
  },
};

```

6. Add **Husky** and **pretty-quick** to run prettier in your staged files

NPM Command

```bash
npm install --save-dev husky pretty-quick
```

(or)

```bash
npm install --save-dev husky
```

```bash
npm install --save-dev pretty-quick
```

YARN Command

```bash
yarn add --dev husky pretty-quick
```

(or)

```bash
yarn add --dev husky
```

```bash
yarn add --dev pretty-quick
```

7. Add this code in the package.json

```json
 "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged --check && npm run lint && npm run format"
    }
  }
```

8. Add these two properties inside **scripts** in **package.json**

```
 "format": "prettier --write src/**/*.{js,jsx}",
  "lint": "eslint src/**/*.{js,jsx} --fix"
```

## Usage

```
npm run lint
```

## Disable eslint check while compilation
set below variable in **.env** file

```
DISABLE_ESLINT_PLUGIN=true
```
## Troubleshooting
In case if husky not working Remove .husky from .git folder and then reinstall husky package.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate .

## License

[MIT](https://choosealicense.com/licenses/mit/)
