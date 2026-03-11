import { AbstractControl } from '@angular/forms';
import { SmartControl } from '../shared/smart-control';

export interface ZleceniaForm {
  nazwa: SmartControl<string>;
  kodKraju: SmartControl<string>;
  miejscowosc: SmartControl<string>;
  ulica: SmartControl<string>;
  [key: string]: AbstractControl;
}
