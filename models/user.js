var mongoose = require('mongoose');
var request = require('request');

var userSchema = mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  role: String,
  bills: [{id: String, code: String}],
});

var User = mongoose.model('User', userSchema);

//user methods... 
  //maybe a method to check if user exists
  //add bill to account
  //modify bill

  //get all user bills - in bills schema..



module.exports = User;