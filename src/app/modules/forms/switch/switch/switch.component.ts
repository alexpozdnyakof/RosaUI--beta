
import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef, Renderer2, Directive, Renderer } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  AbstractControl, } from '@angular/forms';

  export const SWITCH_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitchComponent),
    multi: true
};

@Component({
  selector: 'rosa-switch',
  templateUrl: './switch.component.pug',
  styleUrls: ['./switch.component.scss'],
  providers: [SWITCH_CONTROL_VALUE_ACCESSOR]
})
export class SwitchComponent implements OnInit, ControlValueAccessor {
  public value = false;
  public disabled: boolean;
  private onChange: Function;
  private onTouched: Function;
  public index = `switch_${this.randomInteger(10, 1000)}`;


  private _controlOptions: FormControl;
  @ViewChild('switchControl') private _switchControl: ElementRef;


  public toggle(e): void {
    this.value = !this.value;
    this.writeValue(this.value);
    this.onChange(this.value);
    this.onTouched();
  }

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef ) {
    this.onChange = (_: any) => {  };
    this.onTouched = () => {};
    this.disabled = false;
  }


  ngOnInit() {

  }

  writeValue(obj: boolean): void {
    this.value = obj;
    this.setStateToggle(this.value, 'registerOnChange');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setStateToggle(value: boolean, runner?) {
    const toggleClass = value ?
      this._renderer.addClass(this._switchControl.nativeElement, 'rosa-switch-checked') :
      this._renderer.removeClass(this._switchControl.nativeElement, 'rosa-switch-checked');
  }
  public randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }


}
