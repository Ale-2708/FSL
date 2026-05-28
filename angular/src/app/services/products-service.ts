import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsResults } from '../model/products-results';
import { ProductDetails } from '../model/product-details';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http:HttpClient){}

  getAll(){
    return this.http.get<ProductsResults>('https://dummyjson.com/products/category/smartphones?select=title,price,thumbnail')
  }

  getOne(id:string)
  {
    return this.http.get<ProductDetails>(`https://dummyjson.com/products/${id}?select=id,title,price,images,reviews`)
  }
}
