import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number){
            super();
    }
    
    public static CriaDe(dataString: string, quantidadeString: string, valorString: string){
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const qtde = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, qtde, valor); 
    }

    get volume() : number {
        return this.quantidade * this.valor;
    }

    get data() : Date{
        return this._data;
    }

    public paraTexto(): string {
         return ` Data: ${this.data}
         Quantidade: ${this.quantidade}
         Valor: ${this.valor}
         Volume: ${this.volume}
         `
    }
}