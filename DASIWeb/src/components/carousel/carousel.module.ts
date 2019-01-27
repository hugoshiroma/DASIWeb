import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiCarouselModule } from 'angular-ui-carousel';
import { CarouselComponent } from './carousel.component';

@NgModule({
    declarations: [ CarouselModule, CarouselComponent ],
    imports: [ CommonModule, UiCarouselModule ],
    exports: [ CarouselModule, CarouselComponent ],
    providers: [],
})
export class CarouselModule {}
