const mongoose = require('mongoose');

module.exports = {

  async connectMongo(port){
    const mongoose = require('mongoose');
    const connect = await mongoose.connect(`mongodb://localhost:${port}/api`, {
      useNewUrlParser: true,
    });

    connect;
  },

  connect(){
    return (mongoose.connection.readyState === 1) ? 'online' : 'Offline';
  }

}