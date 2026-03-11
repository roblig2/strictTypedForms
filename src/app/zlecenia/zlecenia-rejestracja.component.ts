import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { POLE_ZMIANA_HANDLER } from '../shared/pole-zmiana.type';
import { ZleceniaFormBuilderService } from './zlecenia-form-builder.service';
import { ZleceniaRejestracjaFormValidatorService } from './walidacja/zlecenia-rejestracja-form-validator.service';

@Component({
  selector: 'app-zlecenia-rejestracja',
  templateUrl: './zlecenia-rejestracja.component.html',
  providers: [
    ZleceniaFormBuilderService,
    ZleceniaRejestracjaFormValidatorService,
    {
      provide: POLE_ZMIANA_HANDLER,
      useExisting: ZleceniaRejestracjaFormValidatorService,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZleceniaRejestracjaComponent implements OnInit {
  private formBuilder = inject(ZleceniaFormBuilderService);
  private validatorService = inject(ZleceniaRejestracjaFormValidatorService);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.buildForm();
    this.validatorService.przypiszForm(this.form);
  }

}
