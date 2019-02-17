import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    changeHeader: boolean = false;

    @HostListener('window:scroll', ['$event']) onScroll(event: any) {
        if(event.srcElement.scrollingElement.scrollTop > 612) {
            this.changeHeader = true;
        } else {
            this.changeHeader = false;
        }
    }

    constructor() { }

    ngOnInit(): void { }
}
