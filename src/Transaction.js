const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
 titulo: {
    type: String,
    required: true,
 },
 valor: {
    type: Number,
    required: true,
 },
 tipo: {
    type: String,
    required: true,
    enum: ['receita', 'despesa'],
 },
});


module.exports = mongoose.model('Transaction', TransactionSchema);