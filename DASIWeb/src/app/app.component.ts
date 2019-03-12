import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    fixSubheader = false;
    progressPorc: number;

    // view-change variables
    carousel = true;
    sections = true;

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

    constructor() { }

    componentControl(event: CmdComponent) {
        switch (event.obj) {
            case 'vdom':
                this.vdomCmdControl(event.value);
                break;
        }
    }

    vdomCmdControl(value: string) {
        switch (value) {
            case 'shop':

            // changeCarousel
            this.carousel = !this.carousel;

            // remove info-sections
            this.sections = !this.sections;

            this.resetDefaultProperties();

            break;
        }
    }

    // reset default properties
    resetDefaultProperties() {
        this.progressPorc = 0;
        document.getElementById('progress').style.width = '0';
        this.fixSubheader = false;
    }
}

class CmdComponent {
    obj: string;
    value: string;
    class: string;
}
