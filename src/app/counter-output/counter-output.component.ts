import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Subscription } from 'rxjs';

import { CounterService } from '../counter.service';
import {UntypedFormControl} from "@angular/forms";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  @Input() control!:UntypedFormControl;
  counter = 0;
  counterServiceSub?: Subscription;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterServiceSub = this.counterService.counterChanged.subscribe(
      (newVal) => (this.counter = newVal)
    );
  }

  ngOnDestroy(): void {
    if (this.counterServiceSub) {
      this.counterServiceSub.unsubscribe();
    }
  }
@Output() controlEmiter = new EventEmitter<ControlEmiter>();
  emitInputControl(event: Event) {
      if (!(event instanceof InputEvent)) return;

      const value = (event.target as HTMLInputElement).value;
      // console.log(value);
      // console.log(event.target);
      //
      // if (event.inputType === 'insertFromPaste') {
      //   console.log('paste');
      // } else if (event.inputType === 'insertText') {
      //   console.log('typing');
      // }
    this.controlEmiter.emit({event: event, control: this.control,value});
    }
}
export type ControlEmiter = {
  event: InputEvent;
  control: UntypedFormControl;
  value: string | number;
}
