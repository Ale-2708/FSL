import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../../model/product-details';
import { ProductsService } from '../../services/products-service';
import { CommonModule } from '@angular/common';
import { ReviewTable } from "../review-table/review-table";

@Component({
  selector: 'app-product',
  imports: [CommonModule, ReviewTable],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product:ProductDetails | undefined

  constructor(private route:ActivatedRoute, private productsService: ProductsService, private cd:ChangeDetectorRef)
  {
    let id = this.route.snapshot.params['id']
    this.productsService.getOne(id).subscribe(
      r => {
        this.product = r
        cd.detectChanges()
      }
    )
  }
  
  AddToCart()
  {
    console.log("elemento aggiunto al carrello")
  }
    
}
