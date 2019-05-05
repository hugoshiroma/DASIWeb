import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// external modules
import { ShopComponent } from './shop.component';
import { ShopCarouselComponent } from './shop-carousel/shop-carousel.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';

@NgModule({
    declarations: [ ShopCarouselComponent, ShopHeaderComponent, ShopComponent ],
    imports: [ CommonModule, ShopCarouselComponent, ShopHeaderComponent, RouterModule ],
    exports: [ ShopCarouselComponent, ShopHeaderComponent, ShopComponent ],
    providers: [],
})

export class ShopModule {}
