import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FasadaService} from "./fasada.service";
import {provideFasada} from "./fasada.providers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    provideFasada()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private fasadaService = inject(FasadaService);
  componentForm = this.fasadaService.getFormGroup();
  daneId = this.fasadaService.getDaneIdentyfikacyjne();

  submit() {
    this.fasadaService.submit();
  }
}

