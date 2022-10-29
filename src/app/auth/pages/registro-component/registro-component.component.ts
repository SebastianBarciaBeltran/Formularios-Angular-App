import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerSbarciab } from '@core/validators';
import { ValidatorsService } from '@core/validators.service';

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro-component.component.html',
  styleUrls: ['./registro-component.component.css']
})
export class RegistroComponentComponent implements OnInit {
  
  // podemos hacerlo así con los validators en archivos diferentes
  // miFormulario: FormGroup =  this.fb.group({
  //     nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
  //     email: ['', [Validators.required, Validators.pattern(emailPattern)]],
  //     userName: ['', [Validators.required, noPuedeSerSbarciab]],
  // });

  // tambien con un servicio
  miFormulario: FormGroup =  this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
      email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
      userName: ['', [Validators.required, this.vs.noPuedeSerSbarciab]],
      password1: ['', [Validators.required, Validators.minLength(2)]],
      password2: ['', [Validators.required]],
  }, {
    validators: [ this.vs.camposIguales('password1', 'password2')] 
  });

  constructor(private fb: FormBuilder, private vs: ValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sebastian Barcia',
      email: 'sebastianbarciabeltran@gmail.com',
      userName: 'Sebastian Barcia',
    })
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }


  submitFormulario(){
    this.miFormulario.markAllAsTouched();

    console.log(this.miFormulario.value);

  }

}
