const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('../models/post').Post

app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions:{
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
}}))

 app.set('view engine', 'handlebars')
 //body parser
 app.use(bodyParser.urlencoded({extended:false}))
 app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('formulario')}
)

app.post('/', (req, res) => { 
    Post.create({
        email: req.body.email,
        senha: req.body.password
})
});

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running on port 3001');
});