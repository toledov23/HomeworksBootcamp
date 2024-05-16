import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
  standalone: true
})
export class CapitalizeDirective {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const nativeElement = this.el.nativeElement;
    if (nativeElement) {
      nativeElement.textContent = nativeElement.textContent.toUpperCase();
    }
  }

}
