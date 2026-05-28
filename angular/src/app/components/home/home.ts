import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { ProductsResults } from '../../model/products-results';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products:ProductsResults | undefined

  constructor(private productsService: ProductsService, private cd:ChangeDetectorRef, private router: Router){
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
