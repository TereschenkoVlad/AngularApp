import {Directive, ElementRef} from '@angular/core';

@Directive(
    {
        selector: '[appBackground]'
    }
)

export class BackgroundDirective {
    constructor (private el: ElementRef) {
        console.log(el);
        el.nativeElement.style.color = 'blue';
    }
}
