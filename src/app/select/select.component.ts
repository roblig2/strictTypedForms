import {Component, Input} from '@angular/core';
import {SmartSelectControl} from "../shared/smart-select-control";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true
})
export class SelectComponent {
  @Input() control!: SmartSelectControl<string>;
}
