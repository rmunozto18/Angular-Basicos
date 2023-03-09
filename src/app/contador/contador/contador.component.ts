import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `
    
        <h1>{{ titulo }}</h1>

        <span>La base es: <strong>{{ base }}</strong></span>

        <button (click)="acumular(base);"> +5 </button>

        <span> {{numero}} </span>

        <button (click)="decrementar(base);"> -5 </button>

    `
})
export class ContadorComponent {

    public titulo:string = 'Contador App desde el componente!!!';
    public numero:number = 0;
    public base:number = 5;

    acumular( valor:number) {
    this.numero += valor; 
    }

    decrementar(valor:number) {
    this.numero -= valor;
  }


}