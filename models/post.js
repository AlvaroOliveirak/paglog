const db = require ("./db")
const bcrypt = require('bcrypt')

const Post = db.sequelize.define('users', {
    email:{
        type: db.Sequelize.STRING, allowNull: false, unique: true},
    password:{
        type: db.Sequelize.STRING, allowNull: false
    } }, {
  hooks: {
    beforeCreate: async (post) => {
      // Criptografa a senha antes de salvar
      const salt = await bcrypt.genSalt(10);
      post.password = await bcrypt.hash(post.password, salt);
    }
  }
}
)

module.exports = {
    Post: Post
}
//Post.sync({force:true})