import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Módulos externos
import { MdlModule } from '@angular-mdl/core';

// Módulos internos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './../components/header/header.module';
import { MainCarouselModule } from './../components/main-carousel/main-carousel.module';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, HeaderModule, MdlModule, MainCarouselModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
