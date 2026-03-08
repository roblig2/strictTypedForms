import {FasadaService} from "./fasada.service";
import {CONTROL_INPUT_HANDLER} from "./shared/control-input-handler.token";
import {Provider} from "@angular/core";
import {RegistrationFormBuilderService} from "./RegistrationFormBuilderService";

export function provideFasada(): Provider[] {
  return [
    RegistrationFormBuilderService,
    FasadaService,
    {
      provide: CONTROL_INPUT_HANDLER,
      useExisting: FasadaService
    }
  ];
}
