var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
    	models.messages.get(function(data){
    		console.log(data);
    	})
    }, // a function which handles a get request for all messageages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    	console.log('triggering get request for users')
    	models.users.get(function(data){
    		console.log(data);
    	})
    	
    },
    post: function (req, res) {}
  }
};

