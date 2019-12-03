import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickedoutside]'
})
export class ClickedoutsideDirective {

    constructor(private _elementRef: ElementRef) {
    }

    // tslint:disable-next-line:no-output-rename
    @Output('appClickedoutside') public clickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        // console.log('Target : ' + targetElement);
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        // console.log('in directive, clickedInside is ' + clickedInside);
        if (!clickedInside) {
            // console.log('entered if block in directive');
            this.clickOutside.emit(true);
        }
    }
}