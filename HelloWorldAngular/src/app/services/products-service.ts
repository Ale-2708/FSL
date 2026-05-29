import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsResults } from '../models/products-results';
import { ProductDetail } from '../models/ProductDetail';
import { Observable } from 'rxjs/internal/Observable';
import { ProductInCart } from '../models/ProductInCart';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private cart:ProductInCart[] = []

  constructor(private http:HttpClient){}

  getAll()
  {
    return this.http.get<ProductsResults>('https://dummyjson.com/products/category/smartphones?select=title,price,thumbnail')
  }

  getOne(id:number): Observable<ProductDetail>
  {
    return this.http.get<ProductDetail>(`https://dummyjson.com/products/${id}?select=title,price,thumbnail,images,reviews`)
  }

  addToCart(p:ProductDetail)
  {
    let candidate = this.cart.find(e => e.id == p.id)
    if(candidate)
      candidate.qta++
    else
      this.cart.push(new ProductInCart(p))
    
  }

  getCartCount()
  {
    return this.cart.reduce((somma,prodotto) => somma+prodotto.qta, 0)
  }

  getAllCart()
  {
    return this.cart
  }

  removeFromCart(i:number){
    this.cart.splice(i, 1 )
  }

  
}
