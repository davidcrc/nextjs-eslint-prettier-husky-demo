# Setup

```bash
yarn create next-app
```

# ESlint

```bash
yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-next eslint-plugin-jsx-a11y
```

- update .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "plugins": ["react", "react-hooks", "prettier", "@typescript-eslint"],
  "extends": ["eslint:recommended", "next", "next/core-web-vitals", "prettier"],
  "rules": {
    "indent": ["error", 2],
    // "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "react/no-unescaped-entities": "off",
    "no-unused-vars": "error"
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-undef": "off"
      }
    }
  ]
}
```

- create .prettierrc.js

```js
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
};
```

- also , you can add to package.json

```json
{
  "scripts": {
    // ...
    "format": "next lint  --fix"
  }
}
```

```bash
npx eslint .
```

# Husky ( use nde > 16)

```bash
yarn add -D husky lint-staged
```

```bash
npx husky install
```

```bash
npx husky add .husky/pre-commit "npx --no-install lint-staged"
```

### To options for staged

1.- add to package.json:

```json
{
  // ...
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["npm run lint"]
  }
}
```

2.- before remove "--no-install" from 'pre-commit', then create lint-staged.config.js

```js
module.exports = {
  '*.{js,ts,tsx}': ['eslint --fix'],
};
```
