const {connectMongo, express} = require('./services/base');

connectMongo('27017');
express(3333);