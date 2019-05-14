// Módulos internos
import { MdlModule } from '@angular-mdl/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// external modules
import { AppRoutingModule } from './app.routing';

// home
import { HomeComponent } from './../components/home/home.component';
import { HeaderComponent } from './../components/home/header/header.component';
import { CarouselComponent } from './../components/home/carousel/carousel.component';

// shop
import { ShopComponent } from './../components/shop/shop.component';
import { ShopHeaderComponent } from './../components/shop/shop-header/shop-header.component';
import { ShopCarouselComponent } from './../components/shop/shop-carousel/shop-carousel.component';
import { RegisterModalComponent } from './../components/modals/register-modal/register-modal.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeaderComponent, CarouselComponent, ShopComponent, ShopHeaderComponent, ShopCarouselComponent,
    RegisterModalComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, MdlModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
