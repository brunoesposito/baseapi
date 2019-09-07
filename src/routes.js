const express = require('express'),
      {status} = require('./controllers/statusController'),
      routes = express();

routes.get('/status', status);

module.exports = routes;