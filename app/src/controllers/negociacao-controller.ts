import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { TiposMensagem } from "../enums/tipos-mensagem.js";
import { Mensagem } from "../models/mensagem.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');
    /*
    Teste comentário
    */

    constructor(){
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoDeExecucao()
    public adiciona() : void {
        const negociacao = Negociacao.CriaDe(
           this.inputData.value,
           this.inputQuantidade.value,
           this.inputValor.value 
        );
       
        if(!this.ehDiaUtil(negociacao.data))
        {
            this.mensagemView.update(new Mensagem('Informe um dia útil', TiposMensagem.Error));
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();    
    }

    private ehDiaUtil(data: Date): boolean{        
        const dayOfWeek = data.getDay();
        return(dayOfWeek > DiasDaSemana.DOMINGO && dayOfWeek < DiasDaSemana.SABADO);
    }

    private limparFormulario() :void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);      
        this.mensagemView.update(new Mensagem('Negociação adicionada com sucesso', TiposMensagem.Sucess));
    }
}