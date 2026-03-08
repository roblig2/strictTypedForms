import {AbstractControl, FormControl, FormGroup, ValidatorFn} from "@angular/forms";
import {signal, WritableSignal} from "@angular/core";

export interface ControlMeta {
  maxLength: number;
  mask: WritableSignal<string>;
  visible: WritableSignal<boolean>;
  type: WritableSignal<InputType>;
  warning: WritableSignal<string | null>;
}
export type InputType = 'string' | 'number' | 'date' | 'email' | 'password' | 'tel' | 'url' | 'color' | 'datetime-local' | 'month' | 'time' | 'week';
export type SmartControl<T = string> = FormControl<T> & ControlMeta;

export type GroupMeta = {
  visible: WritableSignal<boolean>;
}
export type SmartGroup<T extends { [K in keyof T]: AbstractControl<any, any>; }> = FormGroup<T> & GroupMeta;

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
  ctrl.type = meta.type ?? signal('string');
  ctrl.warning = meta.warning ?? signal(null);
  return ctrl;
}


export function smartGroup<T extends { [K in keyof T]: AbstractControl<any, any>; }>(
  controls: T,
  meta: Partial<GroupMeta> & { validators?: ValidatorFn[] } = {},
): FormGroup<T> & GroupMeta {
  const formGroup = new FormGroup<T>(controls) as SmartGroup<T> & GroupMeta;

  formGroup.visible = meta.visible ?? signal(true);
  return formGroup;
}
