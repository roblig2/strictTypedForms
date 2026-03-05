import { Component } from '@angular/core';
import {FormControl, UntypedFormControl, Validators} from "@angular/forms";
import {ControlEmiter} from "./counter-output/counter-output.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formControl!: UntypedFormControl;
  ngOnInit() {
    this.formControl = new FormControl({value: '', disabled: false});
  }
  onInput(emited: ControlEmiter) {

    const value = (emited.event.target as HTMLInputElement).value;
    console.log("dupadupadua")
    console.log(value);
    console.log(emited.event.target);
    console.log(emited.control.value);
    emited.control.setValidators(Validators.minLength(122));
    emited.control.updateValueAndValidity();
    alert(this.formControl.hasError('minlength'));

    if (emited.event.inputType === 'insertFromPaste') {
      console.log('paste');
    } else if (emited.event.inputType === 'insertText') {
      console.log('typing');
    }
  }
}
