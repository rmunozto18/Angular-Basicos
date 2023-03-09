import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'./heroe.component.html'
})
export class HeroeComponent {

    public nombre: string = "ironman";
    public edad: number = 28;

    public get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    public obtenerNombre():string {
        return `${this.nombre} - ${this.edad}`;
    }

    public cambiarNombre():void{

        if(this.nombre == "ironman"){
            this.nombre = "Spiderman";
        }else{
            this.nombre = "ironman";
        }
    }

    public cambiarEdad():void{
        if(this.edad == 28){
            this.edad = 45;
        }else {
            this.edad = 28;
        }
    }

}