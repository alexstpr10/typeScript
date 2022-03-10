import { Imprimivel } from "../utils/imprimivel.js";
export class Negociacao extends Imprimivel {
    constructor(_data, quantidade, valor) {
        super();
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static CriaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const qtde = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, qtde, valor);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        return this._data;
    }
    paraTexto() {
        return ` Data: ${this.data}
         Quantidade: ${this.quantidade}
         Valor: ${this.valor}
         Volume: ${this.volume}
         `;
    }
}
