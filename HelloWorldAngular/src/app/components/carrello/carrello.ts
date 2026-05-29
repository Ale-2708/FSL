import { Component } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { ProductDetail } from '../../models/ProductDetail';
import { CommonModule} from "@angular/common";
import { ProductInCart } from '../../models/ProductInCart';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carrello',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css',
})
export class Carrello {

  carrello:ProductInCart[]

  constructor(private productService:ProductsService)
  {
    this.carrello = this.productService.getAllCart()
  }

  get prezzoTotale()
  {
    return this.carrello.reduce( (somma,prodotto) => somma + prodotto.price * prodotto.qta, 0).toFixed(2)
  }

  RemoveProduct(product:ProductInCart)
  {
    let index = this.carrello.indexOf(product)
    this.productService.removeFromCart(index)
  }


}
