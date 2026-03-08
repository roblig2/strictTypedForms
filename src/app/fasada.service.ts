import {inject, Injectable, signal} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ControlEmiter} from "./shared/control-emiter.type";
import {smartControl, smartGroup} from "./shared/smart-control";
import {DaneIdentyfikacyjne, MyForm} from "./shared/my-form";
import {HandlerRegistry} from "./shared/handler-registry";
import {form1Handler} from "./form-handlers/form1.handler";
import {form2Handler} from "./form-handlers/form2.handler";
import {RegistrationFormBuilderService} from "./RegistrationFormBuilderService";
import { ControlInputHandler } from "./shared/control-input-handler.token";



@Injectable()
export class FasadaService implements ControlInputHandler {
  private registrationFormBuilderService = inject(RegistrationFormBuilderService);
  private form = this.registrationFormBuilderService.registerForm();

  private registry = new HandlerRegistry<MyForm>()
    .register(form1Handler)
    .register(form2Handler);

  constructor() {}

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
}
