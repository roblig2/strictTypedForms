import {Injectable, signal} from "@angular/core";
import {FormGroup, Validators} from "@angular/forms";
import {ControlEmiter} from "./shared/control-emiter.type";
import {smartControl} from "./shared/smart-control";
import {MyForm} from "./shared/my-form";
import { Builder } from "builder-pattern";

@Injectable()
export class FasadaService {
  private form = new FormGroup<MyForm>({
    form1: smartControl(0, {maxLength: 10, mask: signal('SSSSS')}),
    form2: smartControl('', {maxLength: 5, visible: signal(false)})
  })
  private zmienna :MyForm = this.createZmienna();

  private createZmienna() {
    return Builder<MyForm>()
      .build();
  }
  constructor() {
  }


  onInput(emited: ControlEmiter<string| number>) {
    if (emited.control == this.form.controls.form1 && emited.control.value == 'asd') {
      this.form.controls.form2.visible.set(true);
      this.form.controls.form1.mask?.set('SSSS-S');
    }
    console.log('valid', this.form.controls.form1);


    if (emited.event.inputType === 'insertFromPaste') {
      console.log('paste');//todo
    } else if (emited.event.inputType === 'insertText') {
      console.log('typing');//todo
    }
  }

  getFormGroup() {
    return this.form;
  }

}
