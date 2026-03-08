import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {CounterService} from '../counter.service';
import {SmartControl} from "../shared/smart-control";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component implements OnInit, OnDestroy {

  @Input() control!: SmartControl<number>;
  counter = 0;
  counterServiceSub?: Subscription;

  constructor(private counterService: CounterService) {
  }

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

}
