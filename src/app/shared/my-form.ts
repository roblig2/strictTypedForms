import {SmartControl, SmartGroup} from "./smart-control";

export interface DaneIdentyfikacyjne {
  tytul: SmartControl<string>;
  systemRozliczeniowy: SmartControl<string>;
}

export interface MyForm {
  form1: SmartControl<string>;
  form2: SmartControl<string>;
  daneIdentyfikacyjne: SmartGroup<DaneIdentyfikacyjne>;

}
