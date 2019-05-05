import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

// external componets
import { HomeComponent } from './../components/home/home.component';
import { ShopComponent } from './../components/shop/shop.component';

const routes: Route[] = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
