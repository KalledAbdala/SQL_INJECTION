const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@LavaMe3FibraDeCarbono#', // trocar a senha se for rodar na sua maquina
  database: 'seguranca'
});

app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  const query = 'SELECT * FROM usuarios WHERE usuario = ? AND senha = ?';

  connection.execute(query, [usuario, senha], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      res.send('Login realizado com sucesso!');
    } else {
      res.send('Usuário ou senha incorretos.');
    }
  });
});


app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
