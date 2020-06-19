import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCambioTexto]'
})
export class CambioTextoDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText="Bienvenido a Clinica Online";
 }
}
