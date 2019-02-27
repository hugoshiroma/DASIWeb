import { timer } from 'rxjs';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tempScrollTop: number;

  changeHeader: boolean = false;
  fixSubheader: boolean = false;

  delay = timer(5000);

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
      if (event.srcElement.scrollingElement.scrollTop > document.body.offsetHeight - 100) {
          this.changeHeader = true;
      } else {
          this.changeHeader = false;
      }

      if (event.srcElement.scrollingElement.scrollTop > document.body.offsetHeight - 100) {
          this.fixSubheader = true;
      } else {
          this.fixSubheader = false;
      }

      var progressPorc = (event.srcElement.scrollingElement.scrollTop * 100) / (event.srcElement.scrollingElement.scrollHeight - event.srcElement.scrollingElement.offsetHeight);
      document.getElementById('progress').style.width = progressPorc + '%';

  }

  constructor() { }

  ngOnInit() {}
}