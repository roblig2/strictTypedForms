import { budujReguly } from './reguly-walidacji.builder';
import { ZleceniaWspolneNazwy as N } from '../zlecenia-wspolne-nazwy';

// Reguła: miejscowosc jest wymagana gdy uzupełnione są OBIE: nazwa i kodKraju
// Wyzwalacze: blur na nazwie LUB kodKraju → przelicz warunek od nowa
/**
 * zestaw reguł walidacji dla formularza rejestracji zlecenia
 * aby włączyć debugowanie, dodaj .wTrybieDebug() -> budujReguly().wTrybieDebug()...
 */
export const ZLECENIA_REJESTRACJA_REGULY_WYMAGALNOSCI = budujReguly()
  .wTrybieDebug()

  // Reguła: miejscowosc jest wymagana gdy uzupełnione są OBIE: nazwa i kodKraju
  .gdy([N.NAZWA, N.KOD_KRAJU])
  .wymagajPola(N.MIEJSCOWOSC)
  .jesli(form => !!form.value[N.NAZWA] && !!form.value[N.KOD_KRAJU])

  // Reguła: jak jest ulica to wymagaj miejscowosci
  .gdy([N.ULICA])
  .wymagajPola(N.MIEJSCOWOSC)
  .jesli(form => !!form.value[N.ULICA])

  // Reguła: jak jest ulica to wymagaj miejscowosci
  .gdy([N.ULICA])
  .wymagajPola(N.KOD_KRAJU)
  .jesli(form => !!form.value[N.ULICA])


  .zbuduj();
