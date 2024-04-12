import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numero1: number=0;
  numero2: number=0;
  resultado: number = 0;
  mensaje: string = '';

  constructor() {
  
  }

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      this.resultado = 0; 
      alert('No se puede dividir por cero');
    }
  }

  calcularModulo() {
    this.resultado = this.numero1 % this.numero2;
  }

  verificarParidad() {
    if (this.numero1 % 2 === 0) {
      this.mensaje = this.numero1.toString() + ' es par '; 
    } else {
      this.mensaje = this.numero1.toString() + ' es impar'; 
    }

    if (this.numero2 % 2 === 0) {
      this.mensaje += ' \n' + this.numero2.toString() + ' es par '; 
    } else {
      this.mensaje += ' \n' + this.numero2.toString() + ' es impar'; 
    }
  }

  calcularFibonacci() {
    const n = this.numero1;
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i <= n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    this.mensaje = 'Secuencia de Fibonacci: '+ this.numero1  + fibonacci.join(', ');

    const n2 = this.numero2;
    let fibonacci2 = [];
    fibonacci2[0] = 0;
    fibonacci2[1] = 1;
    for (let j = 2; j <= n2; j++) {
      fibonacci2[j] = fibonacci2[j - 1] + fibonacci2[j - 2];
    }
    this.mensaje += ' \n' + 'Secuencia de Fibonacci: '+ this.numero2 + fibonacci2.join(', ');

  }

  calcularFactorial() {
    const n = this.numero1;
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    this.mensaje = 'Factorial de ' + n + ' es ' + factorial;

    const n2 = this.numero2;
    let factorial2 = 1;
    for (let j = 2; j <= n2; j++) {
      factorial2 *= j;
    }
    this.mensaje += ' \n ' + 'Factorial de ' + n2 + ' es ' + factorial2
  }





}

