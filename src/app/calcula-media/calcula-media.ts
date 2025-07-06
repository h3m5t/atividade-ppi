import { Component } from '@angular/core';
import { Situacao } from './situacao';
import { Boletim } from './Boletim';

@Component({
  selector: 'app-calcula-media',
  standalone: false,
  templateUrl: './calcula-media.html',
  styleUrls: ['./calcula-media.css'] // Corrigido para styleUrls
})
export class CalculaMedia {
  notaB1: number;
  notaB2: number;
  notaB3: number;
  notaB4: number;
  ProvaFinal: number;

  mediaParcial: number | undefined;
  situacaoParcial: Situacao;
  mediaFinal: number | undefined; 
  situacaoFinal: Situacao;

  private boletim: Boletim;

  Situacao = Situacao

  constructor() {
    this.boletim = new Boletim();
    this.notaB1 = 0;
    this.notaB2 = 0;
    this.notaB3 = 0;
    this.notaB4 = 0;
    this.ProvaFinal = 0;

    this.mediaParcial = undefined;
    this.situacaoParcial = Situacao.CURSANDO;
    this.mediaFinal = undefined;
    this.situacaoFinal = Situacao.INDETERMINADO;
  }

 
  CalcularTudo() {
    this.ProcessarMediaParcialESituacao();
    this.ProcessarSituacaoFinal();
  }

  private ProcessarMediaParcialESituacao() {
    this.mediaFinal = undefined;
    this.situacaoFinal = Situacao.INDETERMINADO;


    if (this.notaB1 >= 0 && this.notaB2 >= 0 && this.notaB3 >= 0 && this.notaB4 >= 0) {
      this.mediaParcial = this.boletim.CalcularMediaPonderada(
        this.notaB1, this.notaB2, this.notaB3, this.notaB4
      );
      this.situacaoParcial = this.boletim.DeterminarSituacaoParcial(this.mediaParcial);
    } else {
      this.mediaParcial = undefined;
      this.situacaoParcial = Situacao.CURSANDO;
    }
  }

  private ProcessarSituacaoFinal() {
    if (this.mediaParcial == undefined) {
      return;
    }

    if (this.situacaoParcial == Situacao.APROVADO) {
      this.situacaoFinal = Situacao.APROVADO;
      this.mediaFinal = this.mediaParcial; 
    } else if (this.situacaoParcial === Situacao.AVFINAL) {
      if (this.ProvaFinal >= 0) { 
        this.mediaFinal = this.boletim.CalcularMediaFinalAposProvaFinal(this.mediaParcial, this.ProvaFinal);
        
        if (this.mediaFinal >= 60) {
          this.situacaoFinal = Situacao.APROVADO;
        } else {
          this.situacaoFinal = Situacao.REPROVADO;
        }
      } else {
        this.situacaoFinal = Situacao.INDETERMINADO;
        this.mediaFinal = undefined;
      }
    } else if (this.situacaoParcial === Situacao.REPROVADO) {
      this.situacaoFinal = Situacao.REPROVADO;
      this.mediaFinal = this.mediaParcial; 
    }
  }
}