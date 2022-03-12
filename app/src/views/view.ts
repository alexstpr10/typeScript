export abstract class View<T> {
    
    protected elemento: HTMLElement;

    constructor(seletor: string, escapar? :boolean){
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no Dom`);
        }
    }
    
    protected abstract template(model: T): string;
 
    public update(model: T){
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}