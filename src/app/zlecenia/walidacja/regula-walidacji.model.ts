import { FormGroup } from '@angular/forms';

export interface RegulaWalidacji {
  polDocelowe: string;
  wyzwalacze: string[];
  wymagane: (form: FormGroup) => boolean;
}

export interface ZbudowaneReguly {
  /** Reguły wyzwalane przez dane pole (do obsługi blur) */
  pobierzReguly(formControlName: string): RegulaWalidacji[];
  /** Wszystkie reguły targetujące dane pole (do OR-logiki i przeładowania z backendu) */
  pobierzReguleDlaPola(polDocelowe: string): RegulaWalidacji[];
}
