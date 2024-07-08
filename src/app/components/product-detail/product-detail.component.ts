import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Item } from '../../entities/item';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RoundedPipe } from '../../pipes/rounded.pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RoundedPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: Item | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.productService.getProductById(id);
    }
  }

  getPriceTags(prices: { [tag: string]: number }): string[] {
    return Object.keys(prices);
  }

}
