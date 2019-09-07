module.exports = {

  express(port){
    const express = require('express'),
          bodyParser = require('body-parser'),
          cors = require('cors'),
          routes = require('../routes'),
          server = express();

    server.use([
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
      cors(),
      routes
    ]).listen(port);
  },

}