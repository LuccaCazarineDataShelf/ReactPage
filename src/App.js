import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [calcado, setCalcado] = useState({
    nome: '',
    tamanho: '',
    preco: ''
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCalcado(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem(`Calçado cadastrado: ${calcado.nome}, Tamanho: ${calcado.tamanho}, Preço: R$${calcado.preco}`);
    setCalcado({ nome: '', tamanho: '', preco: '' }); // Limpar o formulário
  };

  return (
    <div className="App">
      <h2>Cadastro de Calçados</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Calçado:</label>
          <input
            type="text"
            name="nome"
            value={calcado.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tamanho do Calçado:</label>
          <input
            type="number"
            name="tamanho"
            value={calcado.tamanho}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Preço do Calçado:</label>
          <input
            type="number"
            name="preco"
            value={calcado.preco}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default App;