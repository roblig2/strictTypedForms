import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AkcjaPola } from '../../shared/akcja-pola.enum';
import { PoleZmiana, PoleZmianaHandler } from '../../shared/pole-zmiana.type';
import { ZLECENIA_REJESTRACJA_REGULY_WYMAGALNOSCI } from './zlecenia-rejestracja-reguly.config';

@Injectable()
export class ZleceniaRejestracjaFormValidatorService implements PoleZmianaHandler {
  private form!: FormGroup;

  przypiszForm(form: FormGroup): void {
    this.form = form;
  }

  obsluzZmianeWartosci({ akcja, formControlName }: PoleZmiana): void {
    if (akcja !== AkcjaPola.BLUR) return;

    // Zbierz unikalne pola docelowe wyzwolone tym polem
    const polaTDocelowe = new Set(
      ZLECENIA_REJESTRACJA_REGULY_WYMAGALNOSCI
        .pobierzReguly(formControlName)
        .map(r => r.polDocelowe)
    );

    // Dla każdego pola docelowego oceń WSZYSTKIE jego reguły (OR-logika)
    polaTDocelowe.forEach(polDocelowe => this.przeliczPole(polDocelowe));
  }

  /** Wywołaj po patchValue/setValue z backendu — przelicza całą wymagalność */
  przeliczWszystkieReguly(): void {
    Object.keys(this.form.controls)
      .filter(key => ZLECENIA_REJESTRACJA_REGULY_WYMAGALNOSCI.pobierzReguleDlaPola(key).length > 0)
      .forEach(pol => this.przeliczPole(pol));
  }

  private przeliczPole(polDocelowe: string): void {
    const control = this.form.controls[polDocelowe];
    if (!control) return;

    // OR: wymagane jeśli choć jedna reguła dla tego pola mówi TAK
    const wymagane = ZLECENIA_REJESTRACJA_REGULY_WYMAGALNOSCI
      .pobierzReguleDlaPola(polDocelowe)
      .some(r => r.wymagane(this.form));

    if (wymagane) {
      control.addValidators(Validators.required);
    } else {
      control.removeValidators(Validators.required);
    }
    control.updateValueAndValidity();
  }
}
