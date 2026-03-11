import { InjectionToken } from '@angular/core';
import { AkcjaPola } from './akcja-pola.enum';

export interface PoleZmiana {
  akcja: AkcjaPola;
  formControlName: string;
}

export interface PoleZmianaHandler {
  obsluzZmianeWartosci(poleZmiana: PoleZmiana): void;
}

export const POLE_ZMIANA_HANDLER = new InjectionToken<PoleZmianaHandler>(
  'POLE_ZMIANA_HANDLER'
);
