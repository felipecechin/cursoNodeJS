var mysql = require('mysql');

var connMySQL = function() {
	console.log('Conexao com Bd foi estabelecida');
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'portal_noticias'
	});
}

module.exports = function () {
	console.log('O autoload carregou o módulo de conexão com o BD');
	return connMySQL;
}