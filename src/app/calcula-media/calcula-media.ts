import { Component } from '@angular/core';
import { Situacao } from './situacao';


@Component({
  selector: 'app-calcula-media',
  standalone: false,
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.css'
})
export class CalculaMedia {
  mediaParcial: number | undefined
  situacao: Situacao
  constructor() {
    this.mediaParcial = undefined
    this.situacao = Situacao.CURSANDO
  }
  calcularMediaParcial(b1: number, b2: number,
                       b3: number, b4: number) {
      this.mediaParcial =
      (b1*2 + b2*2 + b3*3 + b4*3) / 10
      this.modificarSituacao(this.mediaParcial)
  }
  modificarSituacao(mp: number) {
    if (mp >= 60) {
      this.situacao = Situacao.APROVADO
    } else if (mp >= 10) {
      this.situacao = Situacao.AVFINAL
    } else {
      this.situacao = Situacao.REPROVADO
    }
  }
}
