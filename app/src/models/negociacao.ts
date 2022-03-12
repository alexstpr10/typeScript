import { Comparavel } from "../interfaces/comparavel.js";
import { Modelo } from "../interfaces/modelo.js";
import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Modelo<Negociacao> {
    
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number){            
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

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate() 
        && this.data.getMonth() === negociacao.data.getMonth()
        && this.data.getFullYear() === negociacao.data.getFullYear()
        && this.quantidade === negociacao.quantidade
        && this.valor === negociacao.valor
    }
}