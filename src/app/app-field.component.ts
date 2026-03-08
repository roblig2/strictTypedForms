import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-field',
  template: `
    <div class="field">

      <label *ngIf="label">
        {{ label }}
      </label>

      <app-moje-pole></app-moje-pole>

    </div>
  `
})
export class FieldComponent {
  @Input() label?: string;
}
