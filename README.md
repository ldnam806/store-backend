## Setup connect to database and run project on local

Step 1
### Create database and connect to database

# Create user
`CREATE USER full_stack_user WITH PASSWORD '1234'`;
# Create database and connect
`CREATE DATABASE dev_db;`  for local development
`CREATE DATABASE test_db;` for test command
# Grant all database privileges to user in both database
`GRANT ALL PRIVILEGES ON DATABASE dev_db to full_stack_user;`
`GRANT ALL PRIVILEGES ON DATABASE test_db to full_stack_user;`
# Run migration
`npm run migration:up`
# Env file variables including port, database name, BE config, etc... app running
PORT=8000
PG_USER = postgres
PG_HOST = localhost
PG_DEV_DB = dev_db
PG_TEST_DB= test_db
PG_PASSWORD = nam205806
PG_PORT = 5432
TOKEN_SECRET_KEY= @$123123man!@%
ENV=dev



Step 2
### Install package and build project
Run command  `npm i` first to install all packages required and `npm run build` 
List packages required:
- Express (typescript)
- db-migrate for migrations
- jsonwebtoken fworking with JWTs
- jasmine for testing app
- Pg for database
- Cors
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

