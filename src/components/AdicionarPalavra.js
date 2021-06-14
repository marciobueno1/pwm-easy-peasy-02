import { useStoreActions, useStoreState } from 'easy-peasy';

export const AdicionarPalavra = props => {
    const addTexto = useStoreActions((actions) => actions.addTexto);
    const inputPalavra = useStoreState((state) => state.inputPalavra[props.id]);
    const setInputPalavra = useStoreActions((actions) => actions.setInputPalavra);
    return (
      <>
        <input onChange={(e) => setInputPalavra({ id: props.id, texto: e.target.value })} value={inputPalavra} />
        <button onClick={() => addTexto(inputPalavra)}>Adicionar Texto</button>
      </>
    );
  }