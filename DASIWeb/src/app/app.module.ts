import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Módulos externos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from './../components/carousel/carousel.module';

// Módulos internos
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, CarouselModule
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, CarouselModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
