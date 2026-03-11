import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { smartControl } from '../shared/smart-control';
import { ZleceniaForm } from './zlecenia-form';

@Injectable()
export class ZleceniaFormBuilderService {
  buildForm(): FormGroup<ZleceniaForm> {
    return new FormGroup<ZleceniaForm>({
      nazwa: smartControl('', { maxLength: 100 }),
      kodKraju: smartControl('', { maxLength: 2 }),
      miejscowosc: smartControl('', { maxLength: 100 }),
      ulica: smartControl('', { maxLength: 100 }),
    });
  }
}
