import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmailValidatorService } from '@core/email-validator.service';
import { ValidatorsService } from '@core/validators.service';

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro-component.component.html',
  styleUrls: ['./registro-component.component.css'],
})
export class RegistroComponentComponent implements OnInit {
  // podemos hacerlo así con los validators en archivos diferentes
  // miFormulario: FormGroup =  this.fb.group({
  //     nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
  //     email: ['', [Validators.required, Validators.pattern(emailPattern)]],
  //     userName: ['', [Validators.required, noPuedeSerSbarciab]],
  // });

  // tambien con un servicio
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.vs.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        [this.emailValidator],
      ],
      userName: ['', [Validators.required, this.vs.noPuedeSerSbarciab]],
      password1: ['', [Validators.required, Validators.minLength(2)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [this.vs.camposIguales('password1', 'password2')],
    }
  );

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']) {
      return 'El email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El formato de email no es correcto';
    } else if (errors?.['emailExist']) {
      return 'El email ya existe en nuestra BD';
    }

    return '';
  }
  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sebastian Barcia',
      email: 'test1@test.com',
      userName: 'Sebastian Barcia',
      password1: '123456',
      password2: '123456',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();

    console.log(this.miFormulario.value);
  }
}
