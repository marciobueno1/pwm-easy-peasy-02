import './App.css';
import { AdicionarPalavra } from './components/AdicionarPalavra';
import { ContadorPalavras } from './components/ContadorPalavras';
import { ListagemPalavras } from './components/ListagemPalavras';
import { useStoreActions, useStoreState } from 'easy-peasy';

function App() {
  const limparTexto = useStoreActions((actions) => actions.limparTexto);
  const inputPalavra1 = useStoreState((state) => state.inputPalavra.pg1);
  const inputPalavra2 = useStoreState((state) => state.inputPalavra.pg2);
  return (
    <div className="App">
      <h1>Exemplo Simples Easy Peasy</h1>
      <ContadorPalavras />
      <ListagemPalavras />
      <hr />
      <AdicionarPalavra id="pg1" />
      <br />
      <AdicionarPalavra id="pg2" />
      <br />
      <button onClick={() => limparTexto()}>Limpar</button>
      <hr />
      <p>Palavra que está sendo digitada: {inputPalavra1}</p>
      <p>Palavra que está sendo digitada: {inputPalavra2}</p>
    </div>
  );
}

export default App;
