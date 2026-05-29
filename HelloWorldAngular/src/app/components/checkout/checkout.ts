import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../product/product';
import { ProductDetail } from '../../models/ProductDetail';
import { ProductsService } from '../../services/products-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  checkoutForm = new FormGroup({
      cognome : new FormControl('',Validators.required),
      nome : new FormControl(),
      email : new FormControl('', [Validators.required, Validators.email]),
      products : new FormControl<ProductDetail[]>([]) 
  })
  
  carrello : ProductDetail[] = []

  constructor(private productService: ProductsService, private http: HttpClient)
  {
    this.carrello = productService.getAllCart()
  }

  Conferma()
  {
    let confirm = this.checkoutForm.value
    confirm.products = this.carrello
    this.http.post('https://webhook.site/7ff18360-b9e6-4809-9227-c13f161bb5d3', confirm).subscribe(r => console.log(r))
  }
  
}
