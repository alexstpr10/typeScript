import { View } from "./view.js";

export class MensagemView extends View<string>{

    public error = false;

    protected template(model: string){
        let tipoErro = "info";

        if(this.error)
            tipoErro = "danger";

        return `
            <p class="alert alert-${tipoErro}">${model}</p>
        `
    }
}