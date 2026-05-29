import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { ProductDetail } from '../../models/ProductDetail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  product : ProductDetail | undefined

  constructor(private route:ActivatedRoute, private productService: ProductsService, private cd:ChangeDetectorRef)
  {
    let id = parseInt(this.route.snapshot.params['id'])
    this.productService.getOne(id).subscribe(r => {
      this.product = r
      cd.detectChanges()
    })
  }

  public addToCart()
  {
    if(this.product)
      this.productService.addToCart(this.product)
  }
}
