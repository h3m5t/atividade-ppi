
import { Component } from '@angular/core';
import { Situacao } from './situacao'; 
import { Boletim } from './Boletim'; 

@Component({
  selector: 'app-calcula-media',
  standalone: false,
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.css'
})
export class CalculaMedia {
  notaB1: number
  notaB2: number 
  notaB3: number 
  notaB4: number 
  ProvaFinal: number

  mediaParcial: number | undefined
  situacaoParcial: Situacao 
  situacaoFinal: Situacao
  mediaFinal: number

  private boletim: Boletim

  constructor() {
    this.mediaParcial = undefined
    this.situacaoParcial = Situacao.CURSANDO
    this.boletim = new Boletim()
    this.notaB1 = 0
    this.notaB2 = 0
    this.notaB3 = 0
    this.notaB4 = 0
    this.ProvaFinal = 0
    this.situacaoFinal = Situacao.INDETERMINADO
    this.mediaFinal = 0
  }


  CalculoParcial() {
    if (this.notaB1 != undefined && this.notaB2 != undefined &&
        this.notaB3 != undefined && this.notaB4 != undefined) {

      this.mediaParcial = this.boletim.calcularMediaPonderada(
        this.notaB1, this.notaB2, this.notaB3, this.notaB4
      );
      this.situacaoParcial = this.boletim.determinarSituacao(this.mediaParcial);

    } else {
      this.mediaParcial = undefined;
      this.situacaoParcial = Situacao.CURSANDO;
    }
  }

CalculoMediaFinal(){
  if(this.mediaParcial != undefined){
    this.mediaFinal = (this.mediaParcial + this.ProvaFinal)/2 
  }
}

  CalculoFinal(){
    if(this.mediaParcial != undefined && (this.mediaFinal >=60)){
      this.situacaoFinal = Situacao.APROVADO
    }else {
      this.situacaoFinal = Situacao.REPROVADO
    }
  }
}