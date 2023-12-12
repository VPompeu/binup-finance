import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Finance() {
  const [modalType, setModalType] = useState(null);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);

  const handleAddTransaction = () => {
    if (title && value) {
      const newTransaction = {
        title,
        value: parseFloat(value),
        type: modalType,
      };
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);

      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));

      const apiEndpoint = modalType === 'receita' ? '/adicionarReceitas' : '/adicionarDespesas';
      axios.post(apiEndpoint, { nome: title, valor: parseFloat(value) })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Erro ao adicionar transação:', error);
        });

      setTitle('');
      setValue('');
      setModalType(null);
    }
  };

  const handleOpenModal = (type) => {
    setModalType(type);
  };

  const handleRemoveTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);

    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const calculateTotalBalance = () => {
    let totalBalance = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === 'receita') {
        totalBalance += transaction.value;
      } else if (transaction.type === 'despesa') {
        totalBalance -= transaction.value;
      }
    });

    return totalBalance;
  };

  return (
    <div className="App">
      <h1>Receitas e Despesas</h1>
      <button className="btn btn-success" onClick={() => handleOpenModal('receita')}>
        Cadastrar Receita
      </button>
      <button className="btn btn-danger" onClick={() => handleOpenModal('despesa')}>
        Cadastrar Despesa
      </button>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className={transaction.type === 'despesa' ? 'table-danger' : 'table-success'}>
              <td>{transaction.title}</td>
              <td>{transaction.value}</td>
              <td>{transaction.type}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleRemoveTransaction(index)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="modal" style={{ display: modalType ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {modalType === 'receita' ? 'Cadastrar Receita' : 'Cadastrar Despesa'}
              </h4>
              <button type="button" className="close" onClick={() => setModalType(null)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Título:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Valor:</label>
                  <input
                    type="number"
                    className="form-control"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleAddTransaction}>
                Cadastrar
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => setModalType(null)}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="total-balance">
        <h3>Saldo Total: {calculateTotalBalance()}</h3>
      </div>
    </div>
  );
}

export default Finance;
