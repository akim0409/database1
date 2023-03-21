const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userController = require('./user-controller');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/users", userController.getAllUsers);
app.get("/users/:userId", userController.getUserById);
app.get("/users/email/:emailString", userController.getUserByEmail);
app.get("/users/age/:age", userController.getUsersByAge)
app.post("/users", userController.createUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});