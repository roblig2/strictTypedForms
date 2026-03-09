import {ErrorStateMatcher} from "@angular/material/core";
import {Injectable} from "@angular/core";
import {FormControl, FormGroupDirective, NgForm} from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class CrossFieldErrorMatcher implements ErrorStateMatcher {
  public isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.invalid && (control.touched || (form && form.submitted)));
  }
}
