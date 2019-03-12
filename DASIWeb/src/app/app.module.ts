// Módulos internos
import { MdlModule } from '@angular-mdl/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Módulos externos
import { AppRoutingModule } from './app.routing';
import { HeaderModule } from './../components/header/header.module';
import { MainCarouselModule } from './../components/main-carousel/main-carousel.module';
import { ShopCarouselModule } from './../components/store/shop-carousel/shop-carousel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, HeaderModule, MdlModule, MainCarouselModule,
    ShopCarouselModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
