# Usage

## Plugins:

### typescript-backend

---

```sh
$ npm i -D eslint prettier typescript eslint-plugin-emarsys-tooling
```

`.eslintrc`

```
{
  "extends": [
    "plugin:emarsys-tooling/typescript-backend",
  ]
}
```

> put your prettier config under **.prettierrc**, then run: `eslint --ext .ts --fix`

### javascript-backend

---

```sh
$ npm i -D eslint prettier eslint-plugin-emarsys-tooling
```

`.eslintrc`

```
{
  "extends": [
    "plugin:emarsys-tooling/javascript-backend",
  ]
}
```

> put your prettier config under **.prettierrc**, then run: `eslint --fix`

### testing

---

`.eslintrc`

```
{
  "extends": [
    "plugin:emarsys-tooling/testing",
  ]
}
```

> it should be the last in your extends section
