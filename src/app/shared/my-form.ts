import {SmartControl, SmartGroup} from "./smart-control";
import {SmartSelectControl} from "./smart-select-control";
import {AbstractControl} from "@angular/forms";

export interface DaneIdentyfikacyjne {
  tytul: SmartSelectControl<string>;
  systemRozliczeniowy: SmartSelectControl<string>;
}

export interface MyForm {
  form1: SmartControl<string>;
  form2: SmartControl<string>;
  daneIdentyfikacyjne: SmartGroup<DaneIdentyfikacyjne>;
  [key: string]: AbstractControl;

}
