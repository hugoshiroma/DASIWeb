import { Component, OnInit, HostListener } from '@angular/core';
import { timer } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    delay = timer(25);

    changeHeader: boolean = false;
    fixSubheader: boolean = false;

    offsetTop: number;

    @HostListener('window:scroll', ['$event']) onScroll(event: any) {
        if (event.srcElement.scrollingElement.scrollTop > document.body.offsetHeight - document.body.offsetHeight * 0.23) {
            this.changeHeader = true;
        } else {
            this.changeHeader = false;
        }

        if (event.srcElement.scrollingElement.scrollTop > document.body.offsetHeight - document.body.offsetHeight * 0.23) {
            this.fixSubheader = true;
        } else {
            this.fixSubheader = false;
        }
    }

    constructor() { }

    ngOnInit() {
        this.delay.subscribe(x => {
            this.offsetTop = document.getElementById('banner').offsetTop;
        });
    }
}
