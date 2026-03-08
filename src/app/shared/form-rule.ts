import {SmartControl} from "./smart-control";

export interface FormRule<TValue, TControls> {
  when: (value: TValue) => boolean;
  then: (controls: TControls) => void;
}

export interface ControlHandler<TValue, TControls> {
  forControl: (controls: TControls) => SmartControl<TValue>;
  reset?: (controls: TControls) => void;
  rules: FormRule<TValue, TControls>[];
}
