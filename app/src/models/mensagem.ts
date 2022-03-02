import { TiposMensagem } from "../enums/tipos-mensagem.js";

export class Mensagem {
    constructor(
        public descricao: string, 
        public tipo: TiposMensagem)
    {
    }
}