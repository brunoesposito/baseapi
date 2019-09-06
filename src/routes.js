module.exports = {

  routes(){
    server.get('/', (req, res) => {
      res.send('Online')
    });
  }

}