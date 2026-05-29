import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product: Product | undefined
  @Output() buttonClicked = new EventEmitter()

  public _buttonClicked()
  {
    this.buttonClicked.emit(this.product?.id)
  }
}
