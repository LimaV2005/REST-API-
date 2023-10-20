import mysql from 'mysql'



const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'toor',
  database: 'apiteste'
});

conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
    // Realize operações no banco de dados aqui, se necessário
  }
});
export default conexao