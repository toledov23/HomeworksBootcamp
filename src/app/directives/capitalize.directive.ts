import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true
})
export class CapitalizeDirective {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const nativeElement = this.el.nativeElement;
    if (nativeElement) {
      nativeElement.textContent = nativeElement.textContent.charAt(0).toUpperCase() + nativeElement.textContent.slice(1);
    }
  }

}
