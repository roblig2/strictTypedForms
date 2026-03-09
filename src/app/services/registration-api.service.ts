import {Injectable} from "@angular/core";
import {delay, Observable, of} from "rxjs";
import {RegistrationModel} from "../models/registration.model";

@Injectable({providedIn: 'root'})
export class RegistrationApiService {

  submit(model: RegistrationModel): Observable<void> {
    console.log('[API] Wysyłanie modelu:', model);
    return of(undefined).pipe(delay(300));
  }
}
