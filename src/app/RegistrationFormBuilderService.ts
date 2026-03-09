import {smartControl, smartGroup} from "./shared/smart-control";
import {smartSelectControl} from "./shared/smart-select-control";
import {DaneIdentyfikacyjne, MyForm} from "./shared/my-form";
import {Injectable, signal} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Injectable()
export class RegistrationFormBuilderService {

  private stworzGrupeDanychIdentyfikacyjnych = smartGroup<DaneIdentyfikacyjne>({
    tytul: smartSelectControl('', {maxLength: 20}),
    systemRozliczeniowy: smartSelectControl('', {maxLength: 15})
  }, {visible: signal(false)});

  registerForm() {

    return new FormGroup<MyForm>({
      form1: smartControl('', {maxLength: 10, mask: signal('00-000'), type: signal('string')}),
      form2: smartControl('', {maxLength: 5, visible: signal(true)}),
      daneIdentyfikacyjne: this.stworzGrupeDanychIdentyfikacyjnych
    });
  }
}
