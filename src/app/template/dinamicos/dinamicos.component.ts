import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorito, Persona } from '../interfaces/persona.interfaces';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Sebastián',
    favoritos: [
      { id: 1, nombre: 'Warzone'},
      { id: 2, nombre: 'Fifa'}
    ]
  }


  constructor() { }

  ngOnInit(): void {
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push( {...nuevoFavorito} );
    this.nuevoJuego = '';
  }

  eliminar( i : number){
    this.persona.favoritos.splice(i, 1);
  }

  guardar(){
    console.log('formulario posteado')
  }

  nombreValido(){
    return this.miFormulario?.controls['nombre']?.invalid && 
           this.miFormulario?.controls['nombre']?.touched;
  }
}
