
# Husky

   ```
  "prepare": "husky",
  ```


if we add this prepare script to our package.json file, Husky will automatically install and configure itself when we run npm install or yarn install.


# Commitlint
it's used set the rule for commit message that follows the conventional commit format.
(reconmended for teams and opensource projects)

steps: 
* Create commit-msg file in the .husky file
* Then change permission of this 

```
chmod +x .husky/commit-msg
```

# ES Lint
 * This will help to find bad code practice in the code