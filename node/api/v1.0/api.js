
var bcrypt   = require('bcryptjs');

var DataModel = require('./db/db');


var User = DataModel.User;

var login = function(req, res) {
  console.log('Logging In...')
  var password = req.body.password
  new User({Email: req.body.email.toLowerCase().trim()})
    .fetch()
    .then(function(user){
      bcrypt.compare(password, user.get('PasswordHash').toString('utf8'), function(err, isMatch) {
        console.log('Login Result: ', isMatch);
        if (isMatch) {
          res.send({
            status: 200,
          });
        };
      });
    });
}

var register = function(req, res) {
  var email = req.body.email
  var password = req.body.password
  var message;
  console.log('Registering...')
  new User({Email: email.toLowerCase().trim()})
    .fetch()
    .then(function(user){
      if (user) {
        message = "This email has been registered before!";
        console.log(message);
        res.send({
          status: 406,
          msg: message,
        });
      } else {
        bcrypt.hash(password, 10, function(err, hash) {
          res.send({
            status: 200,
          });
        });

        // TODO: Add to database
        // TODO: Calculate jdenticon

      };
    })
}

module.exports = {
  login: login,
  register: register,
}





// console.log('register start....');
// User.register('yinanfang@gmail.com', '123456', 'lastname')
//   .then(function(result) {
//     console.log("register result");
//     console.log(result);
//   }).catch(function(err) {
//     console.error("Register error");
//     console.error(err);
//   });
/*
console.log('login start....');
User.login('yinanfang@gmail.com', 'qwerty')
  .then(function(user) {
    console.log("login user: " + JSON.stringify(user));
    console.log("user Email: " + user.get('Email'));

    // user.then(function(value) {
    // });

    // res.json(user.omit('password'));
  }).catch(User.NotFoundError, function() {
    console.log("NotFoundError user: " + user);
    // res.json(400, {error: email + ' not found'});
  }).catch(function(err) {
    console.error("Login error: " + err);
  });
*/




// var user = {
//   login: login
// }
// module.exports = user;

// register
// https://nodejs.org/api/buffer.html#buffer_buf_write_string_offset_length_encoding





// Retrieve All users
// new User().fetch().then(function (users) {
//   console.log(Object.prototype.toString.call(users));
//   console.log(users.toJSON().FirstName);
//   console.log(users.toJSON());
// })