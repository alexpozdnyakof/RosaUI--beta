import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { RowTable } from './model/row.model';
import { ConfigService } from '../services/config.service';
import { ToastService } from '@app/modules/overlay/toast/toast.service';
import { ButtonComponent } from '../../../../modules/buttons/button/button/button.component';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'rosa-config',
  templateUrl: './config.component.pug',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  public parseForm: FormGroup;
  @ViewChild('updateFtp')
    submitConfig: ButtonComponent;

  constructor(
    private _fb: FormBuilder,
    private _http: HttpClient,
    private _configService: ConfigService,
    private _toastService: ToastService
  ) { }
  get f() { return this.parseForm.controls; }
  public parsed: RowTable[] = [];
  ngOnInit() {
    this.parseForm = this._fb.group({
      parser: ['', [Validators.required]],
      date: [``, {
        validators: Validators.required,
      }],
    });
    this.parseForm.get('date').valueChanges.subscribe(
      val => console.log(val)
    );
  }
  public onSubmit() {
    if (!this.parseForm.valid) {
      return;
    }
    this.submitConfig.isDisabled = true;
    this.submitConfig.isLoading = true;
    const parsedData = this.convertCsvToObject();
    const startDate = this.f.date.value;

    this._configService.updateFtp(parsedData, startDate)
    .pipe(
      tap(d => {
        this.submitConfig.isDisabled = false;
        this.submitConfig.isLoading = false;
      })
    )
    .subscribe(
      data => this.showToastMessage('Успешно обновлено', 'success'),
      err => this.showToastMessage(`Произошла ошибка ${err}`, 'error')
    );
  }
  public convertCsvToObject(): RowTable[] {
    let csv = this.f.parser.value.split(/\n/g);
    csv = csv.map(row => row.replace(/\t\t/g, '\t')).map(row => row.split(/\t/g));
    for (const row of csv) {
      const RowType =  new RowTable (row[0], row[1], row[2], row[3], row[5], row[6], row[7]) ;
      this.parsed.push(RowType);
    }
    return this.parsed;
  }
  /*
  public showToast() {
    this._toastService.show({
      text: `Toast message ${this.count}`,
      type: 'success',
    });
    this.toastType = `success`;
    this.count += 1;
  }
  */
  public showToastMessage(text, type) {
    this._toastService.show({
      text: `${text}`,
      type: type,
    });
  }
}
