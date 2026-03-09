import {Injectable} from "@angular/core";
import {delay, Observable, of} from "rxjs";
import {SelectOption} from "../shared/select-option";

@Injectable({providedIn: 'root'})
export class OptionsService {

  getTytuly(): Observable<SelectOption<string>[]> {
    return of([
      {key: 'mr', label: 'Pan'},
      {key: 'mrs', label: 'Pani'},
      {key: 'dr', label: 'Dr'},
      {key: 'prof', label: 'Prof.'},
    ]).pipe(delay(500));
  }

  getSystemyRozliczeniowe(): Observable<SelectOption<string>[]> {
    return of([
      {key: 'sys_a', label: 'System A'},
      {key: 'sys_b', label: 'System B'},
      {key: 'sys_c', label: 'System C'},
    ]).pipe(delay(300));
  }
}
