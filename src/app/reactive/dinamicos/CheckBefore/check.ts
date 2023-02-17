import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    asignaciones: this.fb.array([], Validators.required)
  });

  nuevaAsignacion: FormGroup = this.fb.group({
    user: ['', Validators.required],
    role: ['', Validators.required],
  });

  get favoritosArr(){
    return this.miFormulario.get('asignaciones') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    // this.miFormulario.reset();
  }

  eliminar(i : number){
    this.favoritosArr.removeAt(i);
  }  

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors && 
           this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    if (this.nuevaAsignacion.invalid) { return; }
    console.log('this.nuevaAsignacion.value: ', this.nuevaAsignacion.value);
    this.favoritosArr.push(
      this.fb.group({
        user: [this.nuevaAsignacion.get('user')?.value, Validators.required],
        role: [this.nuevaAsignacion.get('role')?.value, Validators.required],
      })
     );
    this.nuevaAsignacion.reset();
    console.log('this.nuevaAsignacion.value: ', this.nuevaAsignacion.value);
    
  }

}
