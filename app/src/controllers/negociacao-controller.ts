import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { TiposMensagem } from "../enums/tipos-mensagem.js";
import { Mensagem } from "../models/mensagem.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');
    private negociacaoService = new NegociacoesService();

    constructor(){
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect()
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

    importaDados(): void{
        this.negociacaoService
            .obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje){
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
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