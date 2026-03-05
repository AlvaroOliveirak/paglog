const { type } = require('node:os');
const Sequelize = require('sequelize');
 //conexão com o banco de dados
 const sequelize = new Sequelize('login', 'root', 'alvarooliver18', {
    host: "localhost",
    dialect: 'mysql'
});



module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}

//postagem.sync({force: true})