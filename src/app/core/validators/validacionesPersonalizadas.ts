import { FormControl } from '@angular/forms';

export const noPuedeSerSbarciab = ( control: FormControl ) => {
    const valor: string = control.value?.trim().toLowerCase();

    if (valor === 'sbarciab') {
      return { noSbarciab: true }
    }
    return;
}