const express = require('express'),
      {status} = require('./controllers/statusController'),
      {create, show, showOnly, deleteUser} = require('./controllers/userController'),
      routes = express();

routes.get('/status', status);

routes.post('/register', create);
routes.get('/users', show);
routes.get('/user/:id', showOnly);
routes.delete('/user/:id', deleteUser);

module.exports = routes;