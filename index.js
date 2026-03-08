const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/post').Post
const bcrypt = require('bcrypt');


app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions:{
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
}}))

 app.set('view engine', 'handlebars')
 //body parser
 app.use(bodyParser.urlencoded({extended:false}))
 app.use(bodyParser.json())

 app.get('/',  (req, res) => {
    res.render('log')
 })
 app.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    Post.findOne({ where: { email: email } }).then(async (post) => {
        if (!post) {
            return res.send("Usuário não encontrado")
        }
        const match = await bcrypt.compare(password, post.password)
        
        if (match) {
            res.send("Login realizado com sucesso")
        } else {
            res.send("Senha incorreta")
        }
    })
})

app.post('/cad', (req, res) => { 
    Post.create({
        email: req.body.email,
        password: req.body.password
}).then(() => {
    res.redirect('/')
}).catch((err) => {
    res.send('Houve um erro: ' + err)
})});

app.get('/cad', (req, res) => {
    res.render('cad', {layout: 'cadastro'})})
    app.get("login", (req, res) => {
        res.send('Login bem-sucedido! Bem-vindo, ' + user.email);
        res.render('log', {layout: 'login'})
    })

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running on port 3001');
});