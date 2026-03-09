import {inject, Injectable} from "@angular/core";
import {ControlEmiter} from "./shared/control-emiter.type";
import {MyForm} from "./shared/my-form";
import {HandlerRegistry} from "./shared/handler-registry";
import {form1Handler} from "./form-handlers/form1.handler";
import {form2Handler} from "./form-handlers/form2.handler";
import {RegistrationFormBuilderService} from "./RegistrationFormBuilderService";
import {ControlInputHandler} from "./shared/control-input-handler.token";
import {OptionsService} from "./services/options.service";
import {SelectOption} from "./shared/select-option";
import {SmartSelectControl} from "./shared/smart-select-control";
import {Observable} from "rxjs";
import {RegistrationApiService} from "./services/registration-api.service";
import {toRegistrationModel} from "./models/registration.mapper";

@Injectable()
export class FasadaService implements ControlInputHandler {
  private registrationFormBuilderService = inject(RegistrationFormBuilderService);
  private optionsService = inject(OptionsService);
  private apiService = inject(RegistrationApiService);
  private form = this.registrationFormBuilderService.registerForm();

  private registry = new HandlerRegistry<MyForm>()
    .register(form1Handler)
    .register(form2Handler);

  private optionsLoaders: Array<{
    source: Observable<SelectOption<string>[]>;
    target: SmartSelectControl<string>;
  }> = [
    {
      source: this.optionsService.getTytuly(),
      target: this.form.controls.daneIdentyfikacyjne.controls.tytul
    },
    {
      source: this.optionsService.getSystemyRozliczeniowe(),
      target: this.form.controls.daneIdentyfikacyjne.controls.systemRozliczeniowy
    },
  ];

  constructor() {
    this.optionsLoaders.forEach(({source, target}) =>
      source.subscribe(opts => target.options.set(opts))
    );
  }

  onInput(emited: ControlEmiter<string | number>) {
    this.registry.handle(emited, this.form.controls);
    console.log(this.form.value);
  }

  getFormGroup() {
    return this.form;
  }

  getDaneIdentyfikacyjne() {
    return this.form.controls.daneIdentyfikacyjne;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const model = toRegistrationModel(this.form);
    this.apiService.submit(model).subscribe(() => {
      console.log('[Fasada] Wysłano pomyślnie');
    });
  }
}
