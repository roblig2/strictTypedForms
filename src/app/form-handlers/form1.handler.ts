import {ControlHandler} from "../shared/form-rule";
import {MyForm} from "../shared/my-form";

export const form1Handler: ControlHandler<string, MyForm> = {
  forControl: (c) => c.form1,

  rules: [
    {
      when: (val) => val !== null && val == '99',
      then: (c) => c.form2.warning.set('Wartość przekracza 100')
    }
  ]
};
