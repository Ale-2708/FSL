import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsResults } from '../model/products-results';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http:HttpClient){}

  getAll(){
    return this.http.get<ProductsResults>('https://dummyjson.com/products/category/smartphones?select=title,price,thumbnail')
  }
}
