const User = require('../models/post');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Busca o usuário no banco
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.render('login', { error: 'Usuário não encontrado' });
    }

    // 2. Compara a senha digitada com a senha hash no banco
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (isMatch) {
      // Senha correta: Iniciar sessão (ex: express-session)
      req.session.userId = user.id;
      res.send('Login bem-sucedido! Bem-vindo, ' + user.email);
    } else {
      // Senha incorreta
      res.render('login', { error: 'Senha incorreta' });
    }
  } catch (error) {
    res.status(500).send('Erro interno');
  }
};
