import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormGroup,
  Validator,
  AbstractControl,
  ValidationErrors } from '@angular/forms';


@Component({
  selector: 'rosa-number',
  templateUrl: './number.component.pug',
  styleUrls: ['./number.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberComponent),
      multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NumberComponent),
    multi: true
  }]
})

export class NumberComponent implements OnInit, ControlValueAccessor {
  private _controlOptions: FormControl;
  @ViewChild('inputElement') private _inputElement: ElementRef;
  @Input() public placeholder: string;
  public onTouched: () => void = () => {};
  @Input() set controlOptions(controlOptions:  FormControl) {
    this._controlOptions = controlOptions;
  }


  get controlOptions(): FormControl {
    return this._controlOptions;
  }

  get inputElement(): ElementRef {
    return this._inputElement;
  }

  constructor(private _renderer: Renderer2) {}
  ngOnInit() {

  }
  set writeValue(val: any) {
    // tslint:disable-next-line:no-unused-expression
    val && this.controlOptions.setValue(val, { emitEvent: true });
  }
  registerOnChange(handler: any): void {
    console.log('on change');
    this.controlOptions.valueChanges.subscribe(handler);
  }
  registerOnTouched(handler: any): void {
    console.log('on blur');
    this.onTouched = handler;
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
    this._renderer.setProperty(this._inputElement.nativeElement, 'disabled', isDisabled);
    // isDisabled ? this.controlOptions.disable() : this.controlOptions.enable();
  }
  /*
  validate(control: AbstractControl): ValidationErrors | null {
    console.log('Basic Info validation', control);
    return this.basicInfoForm.valid ? null : { invalidForm: {valid: false, message: 'basicInfoForm fields are invalid'}};
  }
  */

}

