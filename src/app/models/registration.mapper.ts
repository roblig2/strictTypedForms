import {FormGroup} from "@angular/forms";
import {MyForm} from "../shared/my-form";
import {RegistrationModel} from "./registration.model";

export function toRegistrationModel(form: FormGroup<MyForm>): RegistrationModel {
  const raw = form.getRawValue();

  return {
    form1: raw.form1,
    form2: raw.form2,
    daneIdentyfikacyjne: {
      tytul: raw.daneIdentyfikacyjne.tytul,
      systemRozliczeniowy: raw.daneIdentyfikacyjne.systemRozliczeniowy,
    },
  };
}
