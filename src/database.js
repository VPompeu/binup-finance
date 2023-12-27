var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '3236',
    database: 'finance'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Conectado!");

        var emailUsuario = "vd.pompeu@gmail.com";
        var idReceita = 1;
        var idDespesa = 1;
        var receita = {
            Nome: "Salario",
            Valor: 1070
        };
        var despesa = {
            Nome: "Contas",
            Valor: 499
        };

        insertUsuarios(emailUsuario);
        insertReceitas(idReceita, receita);
        insertDespesas(idDespesa, despesa);

        connection.end(); // Fechar a conexão após as inserções
    } else {
        console.log("Erro de conexão ao banco de dados: " + err);
    }
});

function insertUsuarios(emailUsuario) {
    var query = "INSERT INTO usuarios (email) VALUES (?)";
    connection.query(query, [emailUsuario], function(err, result) {
        if (err) {
            console.error("Erro ao inserir usuário: " + err);
        } else {
            console.log("Usuário inserido com sucesso!");
        }
    });
}


function insertReceitas(idReceita, receita) {
    var query = "INSERT INTO receitas (id, nome, valor) VALUES (?, ?, ?)";
    connection.query(query, [idReceita, receita.Nome, receita.Valor], function(err, result) {
        if (err) {
            console.error("Erro ao inserir receita: " + err);
        } else {
            console.log("Receita inserida com sucesso!");
        }
    });
}

function insertDespesas(idDespesa, despesa) {
    var query = "INSERT INTO despesas (id, nome, valor) VALUES (?, ?, ?)";
    connection.query(query, [idDespesa, despesa.Nome, despesa.Valor], function(err, result) {
        if (err) {
            console.error("Erro ao inserir despesa: " + err);
        } else {
            console.log("Despesa inserida com sucesso!");
        }
    });
}

