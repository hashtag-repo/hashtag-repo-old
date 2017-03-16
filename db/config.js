var mongoose = require('../server/node_modules/mongoose');
mongoose.connect('mongodb://localhost/splitlyDB');

var db = mongoose.connection;

db.on('error', function() {
  console.log('error connecting to database');
});

db.once('open', function(){
  console.log('database is connected');
});

module.exports = mongoose;
//use helper functions from the server configuration to direct the route through
// require the models in the helper functions
// do the work in the helper functions 
// even return the response from the helper funtions
// utility functions can be used anywhere ... 
  // examples, use the express sessions to checkout the session of the user currently logged in and see if they already have an account
