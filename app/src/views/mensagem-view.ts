import { TiposMensagem } from "../enums/tipos-mensagem.js";
import { Mensagem } from "../models/mensagem.js";
import { View } from "./view.js";

export class MensagemView extends View<Mensagem>{

    protected template(model: Mensagem){
        let tipoErro = "info";

        if(model.tipo == TiposMensagem.Error)
            tipoErro = "danger";
        return `
            <p class="alert alert-${tipoErro}">${model.descricao}</p>
        `
    }
}