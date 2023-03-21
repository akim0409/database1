const User = require('./db/User');

const getAllUsers = (req, res) => {
  User.findAll().then((users) => {
    res.status(200).json(users);
  })
};

const getUserById = (req, res) => {
  User.findOne({
    where: { id: req.params.userId }
  }).then((user) => {
    if (user === null) {
      res.status(404).json({ message: 'User not found'});
    } else {
      res.status(200).json(user);
    }
  })
};

const getUserByEmail = (req, res) => {
  User.findOne({
    where: { email: req.params.emailString }
  }).then((user) => {
    if (user === null) {
      res.status(404).json({ message: "Email not found"});
    } else {
      res.status(200).json(user);
    }
  })
};

const getUsersByAge = (req, res) => {
  User.findAll({
    where: { age: req.params.age }
  }).then((users) => {
    res.status(200).json(users);
  })
}

const createUser = (req, res) => {
  User.create(req.body).then((user) => {
    res.status(200).json({ message: "User created"});
    console.log(user);
  }); 
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUsersByAge,
  createUser
};