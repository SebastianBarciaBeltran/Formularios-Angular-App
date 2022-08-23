import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario : FormGroup = new FormGroup({
  //   producto: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });

  miFormulario : FormGroup = this.fb.group({
    producto: [, [Validators.required, Validators.minLength(3)]],
      precio: [, [Validators.required, Validators.min(0)]],
      existencias: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.setValue({
      producto: 'RTX 4080ti',
      precio: 1000,
      existencias: 10
    });
  }


  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }

  campoEsValido( campo: string ){
     return this.miFormulario.controls[campo].errors && 
            this.miFormulario.controls[campo].touched;
  }

}
