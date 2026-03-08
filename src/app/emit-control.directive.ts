import {Directive, ElementRef, HostListener, inject, OnInit} from "@angular/core";
import {NgControl} from "@angular/forms";
import {FasadaService} from "./fasada.service";
import {SmartControl} from "./shared/smart-control";

@Directive({
  selector: '[emitControlEvent]'
})
export class EmitControlEventDirective implements OnInit {
  private fasadaService = inject(FasadaService);
  private ngControl = inject(NgControl, {optional: true});
  private el = inject(ElementRef<HTMLInputElement>);
  private formControl!: SmartControl<string|number>;

  ngOnInit() {
    this.formControl = this.ngControl?.control as SmartControl<string| number>;
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    if (!(event instanceof InputEvent)) return;

    const input = event.target as HTMLInputElement;

    this.fasadaService.onInput({
      event,
      control: this.formControl,
      value: input.value
    });
  }
}
