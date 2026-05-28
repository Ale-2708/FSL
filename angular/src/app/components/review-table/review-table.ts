import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Review } from '../../model/product-details';
@Component({
  selector: 'app-review-table',
  imports: [CommonModule,],
  templateUrl: './review-table.html',
  styleUrl: './review-table.css',
})
export class ReviewTable {
  @Input() review:Review | undefined
}
