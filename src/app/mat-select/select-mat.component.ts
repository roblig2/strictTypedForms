import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {MatSelectModule} from "@angular/material/select";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {CrossFieldErrorMatcher} from "./ErrorStateMatcher";

@Component({
  selector: 'app-select-mat',
  templateUrl: './select-mat.component.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class SelectMatComponent {
  @Input() control!: FormControl;
  fruits = ['a', 'b'];
  errorMatcher = new CrossFieldErrorMatcher()

}
