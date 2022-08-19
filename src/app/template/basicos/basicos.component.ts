import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm;

  initForm = {
    producto: 'RTX-3070ti',
    preico: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }


  // guardar( miFormulario: NgForm){
  guardar(){
    console.log(this.miFormulario.value );    

    this.miFormulario.resetForm();
    
  }

  productoValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && 
           this.miFormulario?.controls['producto']?.touched;
  }
  
  precioValido(): boolean {
    // return this.miFormulario?.controls['precio']?.invalid && 
    //        this.miFormulario?.controls['precio']?.touched;
    return this.miFormulario?.controls['precio']?.touched && 
           this.miFormulario?.controls['precio']?.value < 0;
  }

}
