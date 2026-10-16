# Demo project

- Setup done
- npm init-> package.json created
- add to git-> git add . -> git commit -m "___"
- New repository created on github and use git commands
- .gitignore and .env important
- npm install -D nodemon -> nodemodules
    - "scripts": {
        "dev": "nodemon src/index.js"
    }
- prettier -> helps to resolve conflicts while working on github in a team
    - npm i -D prettier
    - add new file .prettierrc
        - {
            "singleQuote": false,
            "bracketSpacing": true,
        }
    - .prettierignore -> Add .env, node_modules, /.vscode
