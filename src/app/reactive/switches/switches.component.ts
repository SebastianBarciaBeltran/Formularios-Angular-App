import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', [Validators.required]],
    notificiaciones: [true, [Validators.required]],
    terminosYCondiciones: [true, [Validators.requiredTrue]],
  });

  // terminosYCondiciones: FormControl = this.fb.control(true, Validators.required);

  persona = {
    genero: 'F',
    notificiaciones: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      ...this.persona,
      terminosYCondiciones: false
    });


    // this.miFormulario.valueChanges.subscribe( form => {
    //   delete form.terminosYCondiciones;
    //   this.persona = form;
    // });
   
    this.miFormulario.valueChanges.subscribe( ({ terminosYCondiciones, ...rest }) => {
      // delete form.terminosYCondiciones;
      this.persona = rest;
    });

  }


  guardar(){
    const formValue = { ...this.miFormulario.value };
    delete formValue.terminosYCondiciones;
    this.persona = formValue;
  }

}
