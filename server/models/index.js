var db = require('../db').connection;

module.exports = {
  messages: {
    get: function () {
    	console.log('get request');	
    	var response = db.query('select * from messages;', function(err, response){
    		console.log(response);
    	});
    	console.log(response);
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
    	var response = db.query('select * from users;', function(err, response){
    		if (!err){
    			console.log(response);
    		}
    	})
    },
    post: function () {}
  }
};

