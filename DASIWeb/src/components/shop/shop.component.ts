import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent {

    fixSubheader = false;
    progressPorc: number;

    register = false;

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

            case 'modal':
            if (input.value === 'register') {
                this.register = true;
            }
            break;
        }
    }

    resetDefaultProperties() {
        this.progressPorc = 0;
        document.getElementById('progress').style.width = '0';
        this.fixSubheader = false;
    }
}
