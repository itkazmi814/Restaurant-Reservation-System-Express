var waitingArr = require('../data/waitinglistData.js');
var tablesArr = require('../data/tableData.js');

console.log(waitingArr)
console.log(tablesArr)

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
};

module.exports = apiRoutesListeners;