const {connectMongo} = require('./services/mongodb');
const {express} = require('./services/express');

connectMongo();
express(3333);