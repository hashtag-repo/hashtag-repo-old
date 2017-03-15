//bills schema
var mongoose = require('mongoose');
var User = require('./user');

var billSchema = mongoose.Schema({
  id: String,
  name: String,
  owner: String,
  code: String,
  amount: Number,
  debt: Number,
  debtors: [{id: String, owed: Number}];
});

var Bill = mongoose.model('Bill', billSchema);


Bill.getBills = function(username){
  return Bill.find({owner: username});
};

Bill.getmyDebts = function(username){
  return User.find({username: username})
  .then(function(userId){
    return Bill.findAll({ debtors: { $elemMatch: { id: userId } } } )
  })
};

module.exports = Bill;