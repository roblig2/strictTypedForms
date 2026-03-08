import {InjectionToken} from "@angular/core";
import {ControlEmiter} from "./control-emiter.type";

export interface ControlInputHandler {
  onInput(emited: ControlEmiter<string | number>): void;
}

export const CONTROL_INPUT_HANDLER =
  new InjectionToken<ControlInputHandler>('CONTROL_INPUT_HANDLER');
