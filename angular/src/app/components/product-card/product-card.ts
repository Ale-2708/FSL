import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product:Product | undefined
  @Output() buttonClicked = new EventEmitter()

  _buttonClicked(){
    this.buttonClicked.emit(this.product?.id)
  }
}
