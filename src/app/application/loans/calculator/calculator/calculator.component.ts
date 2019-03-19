import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, tap, map, merge, debounceTime } from 'rxjs/operators';
import { IndexedService } from '@app/bstorage/indexed.service';
import { FormService } from '../services/form.service';
import { CalculatorService } from '../state/calculator.service';
import { Calculator } from '../state/calculator.model';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';
import { CalculatorQuery } from '../state';
import { UserQuery } from '@app/store/user/user.query';
import { CalculatorResultQuery } from '../data/data.query';
import { CalculatorStoryService } from '../data/data.service';
import { ToastService } from '@app/modules/overlay/toast/toast.service';
export interface FormsState {
  calculator: {
    type: string;
    range: number;
    segment: string;
    collateral: string;
    amount: string;
    decent: number;
    note: string;
  };
}
@Component({
  selector: 'rosa-calculator',
  templateUrl: './calculator.component.pug',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {
  public calculator: FormGroup;
  public version: FormGroup;
  public history: FormGroup;
  public activeSettings$ =  this._calculatorService.getState$();
  public lastVersion$  = this._calculatorQuery.lastVersion$;
  public prevVersion$  = this._calculatorQuery.prevVersion$;
  public history$ = this._dataQuery.selectHistory$;
  public calculator$: Observable<any>;
  public manager = {
    name: '',
    id: ''
  };
  public gross: any = 0.00;
  public ftp: any = 0.00;
  public decent: any = 0.00;
  public score: any = 0.00;
  public isOverdraft = false;
  public range  = {
    min: 3,
    max: 84
  };

  public initialValues = {
    collateral: {
        credit: {
          '100': `100% денежное обеспечение`,
          '100-75': `100 - 75% *`,
          '75-50': `75 (включ) - 50% *`,
          '50-0': `50 (включ) - 0% *`
        },
        overdraft: {
          '100-75': `100 - 75% *`,
          '75-50': `75 (включ) - 50% *`,
          '50-0': `50 (включ) - 0% *`,
          '0': 'Без обеспечения'
        }
    },
    amount: {
        micro: {
          '10': `До 10 млн. руб. (включительно)`,
          '11': `Свыше 10 млн. руб.`
        },
        small: {
          '10': `До 10 млн. руб. (включительно)`,
          '11': `Свыше 10 млн. руб.`,
          '20': `Свыше 20 млн. руб.`
        }
    }
  };
  public amount: any = this.initialValues.amount.small;
  public collateral: any = this.initialValues.collateral.credit;
  public storeValue: Observable<any>;
// collateral or security 100, 100-75, 75-50, 50-0,
// amount or limit 10 10+ 20
// period range 0-12, 12-36, 36-60, 64-84




  constructor(
    private _fb: FormBuilder,
    private _formService: FormService,
    private _indexedStore: IndexedService,
    private _calculatorQuery: CalculatorQuery,
    private _calculatorService: CalculatorService,
    private _formsManager: AkitaNgFormsManager<FormsState>,
    private _userQuery: UserQuery,
    private _dataQuery: CalculatorResultQuery,
    private _dataService: CalculatorStoryService,
    private _toastService: ToastService
  ) { }

  ngOnInit() {
    this.initForm();
    this._onChanges();
    this._calculatorService.lastRevision().subscribe();
    this.activeSettings$.subscribe(
      data => {
        console.log(data);
        console.log(this._isStateNullable(data));
        if (!this._isStateNullable(data) ) {
          this._calculateScores(data);
        }
        this.storeValue = data;
      },
    );
    this._userQuery.user$.subscribe(
      data => this._setUser(data),
      err => console.error(err)
    );
    const state = {
      type: this.calculator.controls['type'].value,
      collateral: Object.keys(this.collateral)[0],
      amount: Object.keys(this.amount)[0],
      segment: this.calculator.controls['segment'].value,
      isPrevious: this.version.controls['toggle'].value,
      range: this.calculator.controls['range'].value,
    };
    this._initState(state);
    this._dataService.getCalculateHistory(2).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
    this._dataQuery.selectHistory$.subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
  private _setUser(user) {
    this.manager = {
      name: user.name,
      id: user.id
    };
  }
  private _calculateScores(state) {
    this._calculatorService.calculateScore(state).subscribe(
      data => this.setCalculatorValues(data),
      err => console.log(err)
    );
  }
  private setCalculatorValues(data) {
    this.gross = data.gross;
    this.ftp = data.ftp;
    this.calculateResultScore();
  }

  private calculateResultScore() {
      this.score = parseFloat(this.gross) + parseFloat(this.ftp) + parseFloat(this.decent);
      this.score = this.score.toFixed(2);
  }

  private _isStateNullable(state) {

    return Object.keys(state).every(function(x) {
        return state[x] === '' || state[x] === null;
    });
}

  private _onChanges(): void {
    this.calculator.get('type').valueChanges.pipe(
      debounceTime(300),
    ).subscribe(val => {
      this.isOverdraft = val === 'overdraft' ? true : false;
      if (this.isOverdraft) {
        this.calculator.get('decent').disable();
        this.calculator.get('decent').setValue(false);
      } else {
        this.calculator.get('decent').enable();
      }
      this.collateral = val === `credit` ? this.initialValues.collateral.credit : this.initialValues.collateral.overdraft;
      this.calculator.controls['collateral'].setValue(Object.keys(this.collateral)[0]);
      this._calculatorService.updateState({type: val, collateral: Object.keys(this.collateral)[0]});
    });
    this.calculator.get('segment').valueChanges.pipe(
      debounceTime(300),
    ).subscribe(val => {
      this.amount = val === `micro` ? this.initialValues.amount.micro : this.initialValues.amount.small,
      this.calculator.controls['amount'].setValue(Object.keys(this.amount)[0]);
      this._calculatorService.updateState({segment: val, amount: Object.keys(this.amount)[0]});
    });
    this.calculator.get('amount').valueChanges.pipe(
      debounceTime(300),
    ).subscribe(val => {
      this._calculatorService.updateState({amount: val});
    });
    this.calculator.get('collateral').valueChanges.pipe(
      debounceTime(300),
    ).subscribe(val => {
      this._calculatorService.updateState({collateral: val});
    });
    this.calculator.get('range').valueChanges.pipe(
      debounceTime(300),
    ).subscribe(val => {
      this._calculatorService.updateState({range: val});
    });
    this.calculator.get('decent').valueChanges.pipe(
      debounceTime(300),
    ).subscribe(val => {
      this.decent = val ? -0.3 : 0;
      this.calculateResultScore();
    });
    this.version.get('toggle').valueChanges.pipe(
      debounceTime(300),
    ).subscribe(val => {
      this._calculatorService.updateState({isPrevious: val});
    });
  }

  public initForm(): void {
    this.calculator = this._fb.group({
      type: ['credit', [Validators.required]],
      range: [3, [Validators.required]],
      segment: [`small`, [Validators.required]],
      collateral: [Object.keys(this.collateral)[0], [Validators.required]],
      amount: [Object.keys(this.amount)[0], [Validators.required]],
      margin: ['', []],
      decent: [{value: '', disabled: this.isOverdraft}, []],
    });
    this.version = this._fb.group({
      toggle: [false, []],
    });
    this.history = this._fb.group({
      note: ['', []],
    });

    this._formsManager.upsert('calculator', this.calculator);
    // this._changeCalculatorSettings();
    this._formsManager.selectForm('calculator').subscribe(
        form => {
        }
    );
  }
  private _initState(state) {
    this._calculatorService.updateState(state);
  }

  public saveCalculateResult() {
    const result = {
      ftp: this.ftp,
      gross: this.gross,
      decent: this.decent,
      result: this.score,
      type: this.isOverdraft ? 'Оведрафт' : 'Кредит',
      note: this.history.controls['note'].value,
      managerName: this.manager.name,
      id: this.manager.id
    };
    console.log(result);
    this._dataService.saveCalculate(result).subscribe(
      data => this._pushToStore(data),
      err => console.log(err)
    );
  }
  private _pushToStore(data): void {
    this._dataService.addCalculateToStore(data);
  }
  public setActive(id) {
    this._dataService.toggleActive(id);
  }

  public showToastMessage(text) {
    this._toastService.show({
      text: `${text}`,
      type: 'message',
    });
  }
  ngOnDestroy(): void {
   // this.storageData$.unsubscribe();
  }
}
