import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SmartControl} from "../shared/smart-control";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Form1Component {

  @Input() control!: SmartControl;

}
