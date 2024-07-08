import { Component, OnInit } from '@angular/core';
import { Item } from '../../entities/item';
import { items } from '../../entities/items';
import { ProductsService } from '../../services/products.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { PaginationPipe } from '../../pipes/pagination.pipe';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    RouterModule,
    PaginationComponent,
    PaginationPipe,
    MatCheckboxModule,
    MatDialogModule,
    ProductFormComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  /* products$: Observable<Item[]>; */
  products: Item[] = [];
  currentPage: number = 1;
  productsPerPage: number = 5;
  showOffers: boolean = false;


  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
  ) {
    /* this.products$ = this.productService.getProducts(); */
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(items => {
      this.products = items;
    });
    this.loadProducts()
  }

  loadProducts(): void {
    this.products = items
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  toggleOffers(): void {
    this.showOffers = !this.showOffers;
  }

  getFilteredProducts(): Item[] {
    return this.products.filter(item => !this.showOffers || item.offerDiscount !== undefined);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.products= this.productService.getProducts();
    });
  }

}
