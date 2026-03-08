import {Directive, HostListener, inject, OnInit} from "@angular/core";
import {NgControl} from "@angular/forms";
import {SmartControl} from "./shared/smart-control";
import {ControlEmiter} from "./shared/control-emiter.type";
import {CONTROL_INPUT_HANDLER} from "./shared/control-input-handler.token";

@Directive({
  selector: '[emitControlEvent]'
})
export class EmitControlEventDirective implements OnInit {
  private handler = inject(CONTROL_INPUT_HANDLER);
  private ngControl = inject(NgControl, {optional: true});
  private formControl!: SmartControl<string | number>;

  ngOnInit() {
    this.formControl = this.ngControl?.control as SmartControl<string | number>;
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    if (!(event instanceof InputEvent)) return;

    const input = event.target as HTMLInputElement;
    let emitedValue: ControlEmiter<string | number> = {
      event,
      control: this.formControl,
      value: input.value
    };
    this.handler.onInput(emitedValue);
  }
}
