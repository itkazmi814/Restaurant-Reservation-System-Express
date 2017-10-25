var path = require('path');

function htmlRoutesListeners (app) {
  // define the home page route
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // define the about route
  app.get('/reserve', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/reserve.html'));
  });

  // define the about route
  app.get('/tables', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/tables.html'));
  });

};

module.exports = htmlRoutesListeners;