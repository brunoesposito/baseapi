module.exports = {

  async connectMongo(port){
    const mongoose = require('mongoose');
    const connect = await mongoose.connect(`mongodb://localhost:${port}/api`, {
      useNewUrlParser: true,
    });

    connect;
  },

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
  }

}