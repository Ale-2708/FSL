import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { ProductsResults } from '../../model/products-results';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products:ProductsResults | undefined

  constructor(private productsService: ProductsService, private cd:ChangeDetectorRef){
    this.productsService.getAll().subscribe(
      r => {
        this.products = r
        cd.detectChanges()
      }
    )
  }
}
