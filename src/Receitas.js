import React, { useState } from 'react';

const App = () => {
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');
    const [receitas, setReceitas] = useState([]);
    const [despesas, setDespesas] = useState([]);
    const [saldo, setSaldo] = useState(0);
    const [modalReceita, setModalReceita] = useState(false);
    const [modalDespesa, setModalDespesa] = useState(false);

    const adicionarReceita = () => {
        const novaReceita = {
          titulo,
          valor: parseFloat(valor),
          tipo: 'receita',
        };
        setReceitas([...receitas, novaReceita]);
        calcularSaldo();
        setModalReceita(false);
        setTitulo('');
        setValor('');
     };
    
     const adicionarDespesa = () => {
        const novaDespesa = {
          titulo,
          valor: parseFloat(valor),
          tipo: 'despesa',
        };
        setDespesas([...despesas, novaDespesa]);
        calcularSaldo();
        setModalDespesa(false);
        setTitulo('');
        setValor('');
     };

     const calcularSaldo = () => {
        const somaReceitas = receitas.reduce(
          (acc, item) => acc + item.valor,
          0
        );
        const somaDespesas = despesas.reduce(
          (acc, item) => acc + item.valor,
          0
        );
        const saldoCalculado = somaReceitas - somaDespesas;
        setSaldo(saldoCalculado);
     };

     return (
        <div className="App">
          <h1>Página de Finanças</h1>
          <button onClick={() => setModalReceita(true)}>
            Cadastrar Receita
          </button>
          <button onClick={() => setModalDespesa(true)}>
            Cadastrar Despesa
          </button>
          <button onClick={calcularSaldo}>
            Calcular Saldo
          </button>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {[...receitas, ...despesas].map((item, index) => (
                <tr key={index} style={{ color: item.tipo === 'receita' ? 'green' : 'red' }}>
                 <td>{item.titulo}</td>
                 <td>{item.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Saldo: {saldo}</h2>
    
          {modalReceita && (
            <div className="modal">
              <h2>Cadastrar Receita</h2>
              <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <input
                type="number"
                placeholder="Valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
              <button onClick={adicionarReceita}>Adicionar</button>
              <button onClick={() => setModalReceita(false)}>Fechar</button>
            </div>
          )}
    
          {modalDespesa && (
            <div className="modal">
              <h2>Cadastrar Despesa</h2>
              <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <input
                type="number"
                placeholder="Valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
              <button onClick={adicionarDespesa}>Adicionar</button>
              <button onClick={() => setModalDespesa(false)}>Fechar</button>
            </div>
          )}
        </div>
      );
    }
    
    export default App;
    