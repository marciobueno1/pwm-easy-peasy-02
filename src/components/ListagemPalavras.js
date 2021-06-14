import { useStoreState } from 'easy-peasy';

export const ListagemPalavras = () => {
    const textos = useStoreState((state) => state.textos);
    return (
        <ul>
            {
                textos.map((texto, index) => (
                    <li key={index}>{texto}</li>
                ))
            }
        </ul>
    );
}