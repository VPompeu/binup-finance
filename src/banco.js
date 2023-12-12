const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Schema do Mongoose para receitas
const ReceitaSchema = new mongoose.Schema({
nome: String,
valor: Number
});

// Schema do Mongoose para despesas
const DespesaSchema = new mongoose.Schema({
nome: String,
valor: Number
});

// Modelo do Mongoose para receitas
const Receita = mongoose.model('Receita', ReceitaSchema);

// Modelo do Mongoose para despesas
const Despesa = mongoose.model('Despesa', DespesaSchema);

// Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/financas', {
useNewUrlParser: true,
useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB');
});

// Rota para adicionar receitas
app.post('/adicionarReceitas', (req, res) => {
const receita = new Receita({
   nome: req.body.nome,
   valor: req.body.valor
});

receita.save().then(() => {
   res.send('Receita adicionada com sucesso!');
}).catch((error) => {
   res.status(400).send('Erro ao adicionar receita: ' + error);
});
});

// Rota para adicionar despesas
app.post('/adicionarDespesas', (req, res) => {
const despesa = new Despesa({
   nome: req.body.nome,
   valor: req.body.valor
});

despesa.save().then(() => {
   res.send('Despesa adicionada com sucesso!');
}).catch((error) => {
   res.status(400).send('Erro ao adicionar despesa: ' + error);
});
});

app.listen(3000, () => {
console.log('Servidor em execução na porta 3000');
});