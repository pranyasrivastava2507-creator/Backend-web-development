### Demo project

# Setup
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

- setup database
    - mongo db atlas
    - copy mongo string and add it to .env
    - export dbname in contsants.js
- Download mongoose, express and dotenv
    - using async await
    - take separate folder, code there and then export and finally import it in index.js folder

- To import dotenv using other other way---->
    - import dotenv from "dotenv";
        dotenv.config({path: './.env'});
    - In package.json
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js

# Summary of files required for mongodb connection
    - make mongodb string in mongodb atlas and store in .env
    - ./index.js -> connectDB() called
    - connectDB in ./db/index.js
    - import dotenv
