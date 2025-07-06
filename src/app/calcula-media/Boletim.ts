
import { Situacao } from './situacao'; 

export class Boletim {

  calcularMediaPonderada(b1: number, b2: number, b3: number, b4: number): number { // function que recebe valors e retorna a médiaP
    return (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10;
  }

  determinarSituacao(media: number): Situacao {
    if (media >= 60) {
      return Situacao.APROVADO;
    } else if (media >= 10) {
      return Situacao.AVFINAL;
    } else {
      return Situacao.REPROVADO;
    }
  }
  CalcularMediaFinal(mediaParcial: number,notaFinal: number){
      if((mediaParcial+notaFinal)/2 >= 60){
        return Situacao.APROVADO
      } else {
        return Situacao.REPROVADO
      }
  }
}