const Register = require('../models/register');

module.exports = {

  async create(req, res){
    try{
      const mailUser = await req.body.mail;
      const findUser = await Register.find({ mail: mailUser });

      if( !findUser.length ){
        const registerUser = await Register.create(req.body);
        const nameUser = await req.body.name;

        registerUser;

        res.json({
          Menssagem: `Cliente ${nameUser} cadastro com sucesso`,
        });
      }else {
        res.json({
          Menssagem: `Email ${mailUser} já existe`,
        });
      }
    }catch{
      res.json({
        Menssagem: 'Algo de errado aconteceu!',
      });
    }
  },

  async show(req, res){
    const find = await Register.find();
    
    res.json(find);
  },

  async showOnly(req, res){
    const { id } = await req.params;
    const find = await Register.findById(id);
    
    res.json(find);
  },

  async deleteUser(req, res){
    const { id } = await req.params;
    const find = await Register.findById(id);

    if( find != null ){
      const remove = await Register.findByIdAndDelete(id);
      
      remove;

      res.json({
        Menssagem: 'Usuário excluido com sucesso',
      });
    }else{
      res.json({
        Menssagem: 'Esse usuário não existe',
      });
    }
  }

}