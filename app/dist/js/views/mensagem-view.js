import { View } from "./view.js";
export class MensagemView extends View {
    constructor() {
        super(...arguments);
        this.error = false;
    }
    template(model) {
        let tipoErro = "info";
        if (this.error)
            tipoErro = "danger";
        return `
            <p class="alert alert-${tipoErro}">${model}</p>
        `;
    }
}
