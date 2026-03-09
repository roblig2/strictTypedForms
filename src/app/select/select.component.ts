import {Component, Input} from '@angular/core';
import {SmartSelectControl} from "../shared/smart-select-control";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() control!: SmartSelectControl<string>;
}
