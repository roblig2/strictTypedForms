import {FormControl, ValidatorFn} from "@angular/forms";
import {signal, WritableSignal} from "@angular/core";
import {ControlMeta} from "./smart-control";
import {SelectOption} from "./select-option";

export type SmartSelectControl<TKey = string> = FormControl<TKey> & ControlMeta & {
  options: WritableSignal<SelectOption<TKey>[]>;
};

export function ustawWlasciwosciKontrolek<TKey>(ctrl: FormControl<TKey> & ControlMeta,
                                                meta: Partial<ControlMeta> & { validators?: ValidatorFn[] }) {
  ctrl.maxLength = meta.maxLength ?? 255;
  ctrl.mask = meta.mask ?? signal('');
  ctrl.visible = meta.visible ?? signal(true);
  ctrl.type = meta.type ?? signal('string');
  ctrl.warning = meta.warning ?? signal(null);
}

export function smartSelectControl<TKey = string>(
  value: TKey,
  meta: Partial<ControlMeta> & { validators?: ValidatorFn[] } = {},
): SmartSelectControl<TKey> {
  const ctrl = new FormControl<TKey>(value, {
    nonNullable: true,
    validators: meta.validators,
  }) as SmartSelectControl<TKey>;
  ustawWlasciwosciKontrolek(ctrl, meta);
  ctrl.options = signal([]);

  return ctrl;
}
