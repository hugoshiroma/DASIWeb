import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
    selector: 'app-shop-header',
    templateUrl: './shop-header.component.html',
    styleUrls: ['./shop-header.component.css']
})

export class ShopHeaderComponent {

    changeHeaderView = false;

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

    emitHome() {
        this.componentControl.emit({obj: 'vdom', value: 'home'});
    }

    emitRegisterModal() {
        this.componentControl.emit({obj: 'modal', value: 'register'});
    }
}
