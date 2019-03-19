import { Component, EventEmitter, ElementRef, HostListener, OnInit, Output, Input, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rosa-textarea',
  templateUrl: './textarea.component.pug',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent), // DI forwardRef link for not yet elements
    multi: true // many time usable
  }]
})
export class TextareaComponent implements OnInit, ControlValueAccessor {
  // ----- Default ------- //
  @Input() public value: string;
  @Input() public placeholder = '';
  @Input() public tabindex = -1;
  // ----- Form Binding ------- //
  @Input() public controlOptions: FormControl;
  @Input() public controlName: string;
  @Input() public required = false;
  // ----- States ------- //
  @Input() public size = `size-default`;
  @Input() public state = `state_default`;
  @Input() public mask: string;
  // ----- Modificators ------- //
  public _value: any;
  public allowedMask: any = false;
  public maskPhone = ['(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskDigits = [/[1-9]/];
  // ----- Outputs ------- //
  @Output() blurEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusEvent: EventEmitter<any> = new EventEmitter<any>();
  @HostListener('click', ['$event'])
  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() === 'input') {
     this.focusEvent.emit(true);
    }
  }
  constructor( private _elRef: ElementRef ) { }

  ngOnInit() {
  }
  public blurLost(e): void {
    this.blurEvent.emit(true);
  }
  public propagateChange: any = () => {};

  public writeValue(val: any) {
    if (val) {
      this._value = val;
    }
  }
  public registerOnChange(val: any) {
    this.propagateChange = val;
    if (val) {
      this._value = val;
    }
  }
  public onChange(event) {
    return this.propagateChange(event.target.value);
  }
  public registerOnTouched(fn: () => void): void { }

}
