const {connectMongo} = require('./services/mongodb');
const {express} = require('./services/express');

connectMongo('27017');
express(3333);