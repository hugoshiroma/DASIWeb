import { Component, HostListener, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    changeHeaderView = false;
    changeHeader = false;

    @Output() componentControl: EventEmitter<{obj: string, value: string}> = new EventEmitter<{obj: string, value: string}>();

    // horizontal progress bar
    @HostListener('window:scroll', ['$event']) onScroll(event: any) {
        if (event.srcElement.scrollingElement.scrollTop > document.body.offsetHeight - document.body.offsetHeight * 0.08 - 80) {
            this.changeHeaderView = true;
        } else {
            this.changeHeaderView = false;
        }
    }

    constructor() { }

    click(event: MouseEvent) {
        this.componentControl.emit({obj: 'vdom', value: 'shop'});
        this.changeHeader = !this.changeHeader;
    }
}
