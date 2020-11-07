import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true}]
})
export class PasswordMatchDirective implements Validator, OnChanges {

  @Input('appPasswordMatch') valeurModele: string;
  @Input() champ: AbstractControl;

  private element: ElementRef;
  private renderer: Renderer2;

  constructor(element: ElementRef, renderer: Renderer2) {
      this.element = element;
      this.renderer = renderer;
  }
  validate(control: AbstractControl): { [key: string]: boolean } | null {
      return this.valeurModele === control.value ? null : { different: true };
  }

  ngOnChanges(changements: SimpleChanges): void {
      this.champ.updateValueAndValidity();
  }

}
