import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef, Renderer2, Directive, Renderer } from '@angular/core';
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
  selector: 'rosa-radio',
  templateUrl: './radio.component.pug',
  styleUrls: ['./radio.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }]
})

export class RadioComponent implements OnInit, ControlValueAccessor {
  private _controlOptions: FormControl;
  @ViewChild('radioControl') private _radioControl: ElementRef;
  @Input() public name: string;
  @Input() public value: any;
  public index = `radio_${this.randomInteger(10, 1000)}`;
  public onChange = (_) => {};
  public onTouched: () => void = () => {};
  @Input() set controlOptions(controlOptions:  FormControl) {
    this._controlOptions = controlOptions;
  }


  get controlOptions(): FormControl {
    return this._controlOptions;
  }

  get inputElement(): ElementRef {
    return this._radioControl;
  }

  constructor(private _renderer: Renderer, private _elementRef: ElementRef ) {}

  ngOnInit() {

  }
  writeValue(value: any): void {
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value === this._elementRef.nativeElement.value);
  }
  registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
  public randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }
}
