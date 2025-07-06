import { Situacao } from './situacao';

export class Boletim {


  CalcularMediaPonderada(b1: number, b2: number, b3: number, b4: number): number {
    return (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10;
  }

  DeterminarSituacaoParcial(media: number): Situacao {
    if (media >= 60) {
      return Situacao.APROVADO;
    } else if (media >= 10) { 
      return Situacao.AVFINAL;
    } else { 
      return Situacao.REPROVADO;
    }
  }

  CalcularMediaFinalAposProvaFinal(mediaParcial: number, notaProvaFinal: number): number {
    return (mediaParcial + notaProvaFinal) / 2;
  }
}