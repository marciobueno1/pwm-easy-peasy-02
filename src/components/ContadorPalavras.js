import { useStoreState } from 'easy-peasy';

export const ContadorPalavras = () => {
    const textos = useStoreState((state) => state.textos);
    return (
        <h3>Existem {textos.length} textos</h3>
    );
}