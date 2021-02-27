# FintechSandpit

Create a series of APIs using Nodejs or Typescript using a database of your choice that manage an application:

Create user

Get user

Update user

Delete user

## Technologies

- Node JS + Express
- Typescript
- Postgres + Sequelize/Migrations ORM

```
create .env file:

DB_HOST=localhost
DB_NAME=fintechsandpit_dev
DB_USER=
DB_PASS=

set config.js inside config folder.

$npm i
$npx sequelize-cli db:create
$npx sequelize-cli db:migrate
$npm run dev

```

Routes:

GET http://localhost:8080/api_v1/users

GET http://localhost:8080/api_v1/user/:id

PUT http://localhost:8080/api_v1/user/:id

POST http://localhost:8080/api_v1/signup

DELETE http://localhost:8080/api_v1/user/:id
