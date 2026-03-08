import {SmartControl} from "./smart-control";

export type ControlEmiter<T> = {
  event: InputEvent;
  control: SmartControl<T>;
  value: string | number;
}
