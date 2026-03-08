

import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-moje-pole',
  template: `
    <div>moje pole</div>
  `
})
export class MojePoleComponent {
  @Input() label?: string;
}
