import { Directive, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AkcjaPola } from './shared/akcja-pola.enum';
import { POLE_ZMIANA_HANDLER } from './shared/pole-zmiana.type';

@Directive({
  selector: '[emitBlurEvent]',
})
export class EmitBlurEventDirective {
  private handler = inject(POLE_ZMIANA_HANDLER);
  private ngControl = inject(NgControl, { optional: true });

  @HostListener('blur')
  onBlur(): void {
    const name = this.ngControl?.name;
    if (typeof name !== 'string') return;

    this.handler.obsluzZmianeWartosci({
      akcja: AkcjaPola.BLUR,
      formControlName: name,
    });
  }
}
