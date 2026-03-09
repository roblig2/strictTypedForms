import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Form1Component } from './counter-output/form1.component';
import { StoreModule } from '@ngrx/store';
import {counterReducer} from "./store/counter.reducer";
import {ReactiveFormsModule} from "@angular/forms";
import {EmitControlEventDirective} from "./emit-control.directive";
import {FieldComponent} from "./app-field.component";
import {MojePoleComponent} from "./moje-pole.component";
import {NgxMaskDirective, provideEnvironmentNgxMask} from "ngx-mask";
import {SelectComponent} from "./select/select.component";


@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    EmitControlEventDirective,
    FieldComponent,
    MojePoleComponent,
    SelectComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({
    counter: counterReducer
  }, {}), ReactiveFormsModule, NgxMaskDirective,
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {
}

