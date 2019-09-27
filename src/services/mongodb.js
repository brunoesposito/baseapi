const mongoose = require('mongoose');

module.exports = {

  async connectMongo(){
    const connect = await mongoose.connect('mongodb://localhost:27017/api', {
      useNewUrlParser: true,
    });

    connect;
  },

  connect(){
    return (mongoose.connection.readyState === 1) ? 'online' : 'Offline';
  }

}