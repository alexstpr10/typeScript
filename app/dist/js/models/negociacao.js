export class Negociacao {
    constructor(_data, quantidade, valor) {
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
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
            && this.quantidade === negociacao.quantidade
            && this.valor === negociacao.valor;
    }
}
//# sourceMappingURL=negociacao.js.map