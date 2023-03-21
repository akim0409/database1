# Database Day 1

ORM Sequelize
ORM: Object Relational Mapping
    - javascript package/framework that we use to interact with the database, using javascript

SQLite - actual database

+ https://sequelize.org/


Just copy the DB configuration in db/index.js

## User Schema

+ User
  + email
  + username
  + age (number)

## Endpoints

Review
+ GET /users
    -> getAllUsers 
      -> 200
+ GET /users/:userId
    -> getUserById
      -> 200
      -> 404
+ GET /users/email/:email
    -> getUserByEmail
      -> 200
      -> 404
+ GET /users/age/:age
    -> getUsersByAge
      -> 200

New HW
+ PUT /users/:userId
  