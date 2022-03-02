import { TiposMensagem } from "../enums/tipos-mensagem.js";
import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        let tipoErro = "info";
        if (model.tipo == TiposMensagem.Error)
            tipoErro = "danger";
        return `
            <p class="alert alert-${tipoErro}">${model.descricao}</p>
        `;
    }
}
