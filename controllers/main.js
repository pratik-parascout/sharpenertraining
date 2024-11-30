const path = require('path');
const User = require('../models/user');

exports.getForm = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.render('index', { users: users });
    })
    .catch((err) => {
      console.error('Error fetching users:', err);
      res.status(500).send('Error fetching users');
    });
};

exports.postForm = (req, res, next) => {
  const { username, email, phone } = req.body;

  User.create({
    username: username,
    email: email,
    phone: phone,
  })
    .then((newUser) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log('Error saving user:', err);
      res.status(500).send('Error saving user');
    });
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.id;
  User.destroy({ where: { id: userId } })
    .then((result) => {
      console.log('User Deleted');
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};
