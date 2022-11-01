import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable, delay } from 'rxjs';
import { User } from '@core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  private baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);
    return this.http.get<User[]>(`${this.baseUrl}usuarios?q=${email}`).pipe(
      // delay(3000),
      map((resp) => {
        return resp.length === 0 ? null : { emailExist: true };
      })
    );
  }
}
