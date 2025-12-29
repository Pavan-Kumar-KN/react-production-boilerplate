# Husky

```
"prepare": "husky",
```

if we add this prepare script to our package.json file, Husky will automatically install and configure itself when we run npm install or yarn install.

# Commitlint

it's used set the rule for commit message that follows the conventional commit format.
(reconmended for teams and opensource projects)

steps:

- Create commit-msg file in the .husky file
- Then change permission of this

```
chmod +x .husky/commit-msg
```

# ES Lint

- This will help to find bad code practice in the code

# prettier

- Help to format the full code

create .prettierrc file

Add these scripts to

```
        "format:check": "prettier --check .",
        "format:fix": "prettier --write .",


```

eslint-config-prettier package it used to prevent that sometimes eslint and prettier get conflicted

# tailwind css

refer the docs

# Stylelint

used for css linting

# lint-staged

- block the code commit and push if the code format is not followed

# environment management

-> Acessing env type suggestion then we have to use vite-env.d.ts inside src folder

# Envirnoment Validator
