import { action } from 'easy-peasy';

export const model = {
    textos: ['palavra 1', 'palavra 2', 'palavra 3'],
    addTexto: action((state, payload) => {
        state.textos.push(payload);
    }),
    limparTexto: action((state) => {
        state.textos = [];
    }),
    inputPalavra: {
        pg1: '',
        pg2: '',
    },
    setInputPalavra: action((state, payload) => {
        state.inputPalavra[payload.id] = payload.texto;
    }),
};