import {Component, inject} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FasadaService }from "./fasada.service";
import {MyForm} from "./shared/my-form";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FasadaService]
})
export class AppComponent {
  fasadaService = inject(FasadaService);
  form= this.fasadaService.getFormGroup();

}

