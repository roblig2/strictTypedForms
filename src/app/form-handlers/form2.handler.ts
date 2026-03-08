import {ControlHandler} from "../shared/form-rule";
import {MyForm} from "../shared/my-form";

export const form2Handler: ControlHandler<string, MyForm> = {
  forControl: (c) => c.form2,

  reset: (c) => {
    c.form1.mask.set('00-000');
    c.form1.type.set('string');
    c.form1.warning.set(null);
    c.daneIdentyfikacyjne.visible.set(false);
  },

  rules: [
    {
      when: (val) => val === 'pl',
      then: (c) => {
        c.form1.mask.set('AAA');
        c.form1.type.set('password');
        c.form1.warning.set('UWAGA UWAGA');
        c.daneIdentyfikacyjne.visible.set(true);
      }
    },
    {
      when: (val) => val === 'en',
      then: (c) => {
        c.form1.mask.set('ZZZ-ZZZ');
        c.form1.visible.set(false);
      }
    }
  ]
};
