const db = require ("./db")

const Post = db.sequelize.define('users', {
    email:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    }
})

module.exports = {
    Post: Post
}
//Post.sync({force:true})