import React, { useState } from 'react';
import Modal from 'react-modal';
import '../receitas.css';

Modal.setAppElement('#root');

const Receitas = () => {
 const [modalIsOpen, setModalIsOpen] = useState(false);
 const [despesaIsOpen, setDespesaIsOpen] = useState(false);
 const [receitas, setReceitas] = useState([]);
 const [despesas, setDespesas] = useState([]);
 const [saldo, setSaldo] = useState(0);

 const calcularSaldo = () => {
    const totalReceitas = receitas.reduce((acc, curr) => acc + curr.valor, 0);
    const totalDespesas = despesas.reduce((acc, curr) => acc + curr.valor, 0);
    setSaldo(totalReceitas - totalDespesas);
 };

 const cadastrarReceita = () => {
    setModalIsOpen(true);
 };

 const cadastrarDespesa = () => {
    setDespesaIsOpen(true);
 };

 const adicionarReceita = (receita) => {
    setReceitas([...receitas, receita]);
    setModalIsOpen(false);
    calcularSaldo();
 };

 const adicionarDespesa = (despesa) => {
    setDespesas([...despesas, despesa]);
    setDespesaIsOpen(false);
    calcularSaldo();
 };

 return (
    <div className="App">
      <button onClick={cadastrarReceita}>Cadastrar Receita</button>
      <button onClick={cadastrarDespesa}>Cadastrar Despesa</button>
      <h1>Saldo: {saldo}</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {receitas.map((receita) => (
            <tr key={receita.titulo} className="verde">
              <td>{receita.titulo}</td>
              <td>{receita.valor}</td>
            </tr>
          ))}
          {despesas.map((despesa) => (
            <tr key={despesa.titulo} className="vermelho">
              <td>{despesa.titulo}</td>
              <td>{despesa.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Cadastrar Receita</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            adicionarReceita({
              titulo: formData.get('titulo'),
              valor: parseFloat(formData.get('valor')),
            });
          }}
        >
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" required />
          <br />
          <label htmlFor="valor">Valor:</label>
          <input type="number" id="valor" name="valor" min="0" step="0.01" required />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </Modal>
      <Modal isOpen={despesaIsOpen} onRequestClose={() => setDespesaIsOpen(false)}>
        <h2>Cadastrar Despesa</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            adicionarDespesa({
              titulo: formData.get('titulo'),
              valor: parseFloat(formData.get('valor')),
            });
          }}
        >
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" required />
          <br />
          <label htmlFor="valor">Valor:</label>
          <input type="number" id="valor" name="valor" min="0" step="0.01" required />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </Modal>
    </div>
 );
};

export default Receitas;