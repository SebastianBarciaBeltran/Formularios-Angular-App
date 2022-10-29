import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern } from '@core/validators';

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro-component.component.html',
  styleUrls: ['./registro-component.component.css']
})
export class RegistroComponentComponent implements OnInit {
  
  // Validacion personalizadas
  noPuedeSerSbarciab( control: FormControl ){
    const valor: string = control.value?.trim().toLowerCase();

    if (valor === 'sbarciab') {
      return { noSbarciab: true }
    }
    return;
  }

  miFormulario: FormGroup =  this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      userName: ['', [Validators.required, this.noPuedeSerSbarciab]],
  });

  constructor(private fb: FormBuilder) { }

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
