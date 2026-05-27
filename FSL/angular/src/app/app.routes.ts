import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Product } from './components/product/product';

export const routes: Routes = [
    { path:'', component:Home},
    { path:'product', component:Product}
];
