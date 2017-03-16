var request = require('../server/node_modules/request');
var mongoose = require('../db/config');
var User = require('./user');
var helpers = require('../server/lib/request-handlers');

var newUser = new User({
  username: 'someoneeeeee else',
  firstName: 'WithdsddfsdeeD',
  lastName: 'Notsdsasfdure',
  email: 'justsomdsfdeeemail@somemail.com',
  password: 'passdfsadsword',
  bills: []
});


request.body = newUser;
var test = request;
helpers.userSignUp(test);

