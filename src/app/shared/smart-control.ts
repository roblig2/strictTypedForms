import {FormControl, ValidatorFn} from "@angular/forms";
import {signal, WritableSignal} from "@angular/core";

export interface ControlMeta {
  maxLength: number;
  mask: WritableSignal<string>;
  visible: WritableSignal<boolean>;
}

export type SmartControl<T = string> = FormControl<T> & ControlMeta;

export function smartControl<T = string>(
  value: T,
  meta: Partial<ControlMeta> & { validators?: ValidatorFn[] } = {},
): SmartControl<T> {
  const ctrl = new FormControl<T>(value, {
    nonNullable: true,
    validators: meta.validators
  }) as SmartControl<T>;

  ctrl.maxLength = meta.maxLength ?? 255;
  ctrl.mask = meta.mask ?? signal('');
  ctrl.visible = meta.visible ?? signal(true);

  return ctrl;
}
