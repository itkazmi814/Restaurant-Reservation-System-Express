var waitingArr = require('../data/waitinglistData.js');
var tablesArr = require('../data/tableData.js');

function apiRoutesListeners (app) {
  // define the get api/friends route
  app.get('/api/tables', function(req, res) {
      res.json(tablesArr);
  });

  // define the post api/friends route
  app.get('/api/waitlist', function(req, res) {
      // friends.push(req.body);
      res.json(waitingArr);
  });
 
  app.post('/api/new', function(req, res) {
  		var newPerson = req.body;
  	 	console.log(newPerson);

  		if(tablesArr.length < 5) {
	  	 	tablesArr.push(newPerson);
	  	 	console.log(tablesArr);
	  	 	res.json(tablesArr);
  		} else {
  			waitingArr.push(newPerson);
	  	 	console.log(waitingArr);
	  	 	res.json(waitingArr);
  		}

  });

  };





module.exports = apiRoutesListeners;