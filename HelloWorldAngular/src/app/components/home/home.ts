import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { CommonModule } from '@angular/common';
import { ProductsResults } from '../../models/products-results';
import { ProductCard } from "../product-card/product-card";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  products : ProductsResults | undefined

  constructor(private productsService:ProductsService, 
              private cd:ChangeDetectorRef,
              private router:Router
            )
  {
    this.productsService.getAll().subscribe(
      r => {
        this.products = r
        cd.detectChanges()
      }
    )
  }

  goToProduct(id:number)
  {
    this.router.navigate(['products',id])
  }
}
