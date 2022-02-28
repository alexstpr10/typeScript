export class Negociacao {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number){
    }    

    get volume() : number {
        return this.quantidade * this.valor;
    }

    get data() : Date{
        return this._data;
    }

    public static CriaDe(dataString: string, quantidadeString: string, valorString: string){
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const qtde = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, qtde, valor); 
    }
}