import { FormGroup } from '@angular/forms';
import { RegulaWalidacji, ZbudowaneReguly } from './regula-walidacji.model';

class RegulyWalidacjiBuilder {
  private reguly: RegulaWalidacji[] = [];
  private aktualneWyzwalacze: string[] = [];
  private debugMode = false;

  wTrybieDebug(): this {
    this.debugMode = true;
    return this;
  }

  gdy(wyzwalacze: string[]): this {
    this.aktualneWyzwalacze = [...wyzwalacze];
    return this;
  }

  wymagajPola(polDocelowe: string): this {
    this.reguly.push({
      polDocelowe,
      wyzwalacze: [...this.aktualneWyzwalacze],
      wymagane: () => true,
    });
    return this;
  }

  jesli(warunek: (form: FormGroup) => boolean): this {
    const ostatnia = this.reguly[this.reguly.length - 1];
    ostatnia.wymagane = this.debugMode
      ? this.owijDebugiem(ostatnia, warunek)
      : warunek;
    return this;
  }

  zbuduj(): ZbudowaneReguly {
    // mapa: wyzwalacz → reguły do odpalenia przy blur
    const mapaWyzwalaczy = new Map<string, RegulaWalidacji[]>();
    // mapa: polDocelowe → wszystkie reguły które je dotyczą (OR-logika)
    const mapaPolaDocelowego = new Map<string, RegulaWalidacji[]>();

    for (const regula of this.reguly) {
      const listaDocelowa = mapaPolaDocelowego.get(regula.polDocelowe) ?? [];
      listaDocelowa.push(regula);
      mapaPolaDocelowego.set(regula.polDocelowe, listaDocelowa);

      for (const wyzwalacz of regula.wyzwalacze) {
        const listaWyzwalaczy = mapaWyzwalaczy.get(wyzwalacz) ?? [];
        listaWyzwalaczy.push(regula);
        mapaWyzwalaczy.set(wyzwalacz, listaWyzwalaczy);
      }
    }

    return {
      pobierzReguly: (formControlName) =>
        mapaWyzwalaczy.get(formControlName) ?? [],
      pobierzReguleDlaPola: (polDocelowe) =>
        mapaPolaDocelowego.get(polDocelowe) ?? [],
    };
  }

  private owijDebugiem(
    regula: RegulaWalidacji,
    warunek: (form: FormGroup) => boolean
  ): (form: FormGroup) => boolean {
    return (form: FormGroup) => {
      const wynik = warunek(form);
      console.group(`Regula: ${regula.polDocelowe}`);
      console.log('wyzwalacze:', regula.wyzwalacze);
      console.log(
        'wartosci:',
        regula.wyzwalacze.reduce(
          (acc, w) => ({ ...acc, [w]: form.value[w] }),
          {} as Record<string, unknown>
        )
      );
      console.log('wynik -> wymagane:', wynik);
      console.groupEnd();
      return wynik;
    };
  }
}

export function budujReguly(): RegulyWalidacjiBuilder {
  return new RegulyWalidacjiBuilder();
}
