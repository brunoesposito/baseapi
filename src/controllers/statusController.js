const {connect} = require('../services/mongodb');

module.exports = {

  status(req, res){
    res.json({
      Api: 'online',
      MongoDB: connect(),
    });
  }

}