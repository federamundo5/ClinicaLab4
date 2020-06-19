import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCambiarColor]'
})
export class CambiarColorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'cyan';
 }
}

