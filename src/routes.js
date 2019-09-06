const express = require('express'),
      {online} = require('./controllers/simpleController'),
      routes = express();

routes.get('/', online);

module.exports = routes;