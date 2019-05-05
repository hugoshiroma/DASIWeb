import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// external modules
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [ HomeComponent, CarouselComponent, HeaderComponent ],
    imports: [ CommonModule, CarouselComponent, HeaderComponent, RouterModule ],
    exports: [ HomeComponent, CarouselComponent, HeaderComponent ],
    providers: [],
})

export class HomeModule {}
