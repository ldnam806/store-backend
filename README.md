## Setup connect to database and run project on local

Step 1
### Create database 
`CREATE DATABASE devDB;`  for local development
`CREATE DATABASE testDB;` for test command

Step 2
### Install package and build project
Run command  `npm i` and `npm run build` 

Step 3
### After build done run migration for databases
Run command `npm run migration:run` with .ENV file config

Step 4
### Run project
Run command `npm run start` or `npm run dev` running project on local
### Test code with jasmine package
Test source code 
with command `npm run test-code` or `npm run test` for testing database
### Format
`npm run lint`
`npm run prettier-format`

