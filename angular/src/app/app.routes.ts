import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Product } from './components/product/product';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    { path:'', component:Home},
    { path:'products/:id', component:Product},
    { path:'**', component:Notfound}

];
