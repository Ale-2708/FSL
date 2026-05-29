import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Product } from './components/product/product';
import { NotFound } from './components/not-found/not-found';
import { Carrello } from './components/carrello/carrello';
import { Checkout } from './components/checkout/checkout';

export const routes: Routes = [
    { path:'', component:Home},
    { path:'products/:id', component:Product},
    { path:'carrello', component:Carrello},
    { path:'checkout', component:Checkout},
    { path:'**', component:NotFound}
];
