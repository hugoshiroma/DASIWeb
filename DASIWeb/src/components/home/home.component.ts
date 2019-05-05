import { Component, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    fixSubheader = false;
    progressPorc: number;

    @Output() componentControl: EventEmitter<{obj: string, value: string}> = new EventEmitter<{obj: string, value: string}>();

    @HostListener('window:scroll', ['$event']) onScroll(event: any) {
        if (event.srcElement.scrollingElement.scrollTop > document.body.offsetHeight - document.body.offsetHeight * 0.08 - 72) {
            this.fixSubheader = true;
        } else {
            this.fixSubheader = false;
        }

        this.progressPorc = (event.srcElement.scrollingElement.scrollTop * 100) /
            (event.srcElement.scrollingElement.scrollHeight - event.srcElement.scrollingElement.offsetHeight);

        document.getElementById('progress').style.width = this.progressPorc + '%';
    }

    constructor() {
    }

    vdomRouteEmit(input) {
        switch (input.obj) {
            case 'vdom':
            this.resetDefaultProperties();
            break;
        }
    }

    resetDefaultProperties() {
        this.progressPorc = 0;
        document.getElementById('progress').style.width = '0';
        this.fixSubheader = false;
    }
}
