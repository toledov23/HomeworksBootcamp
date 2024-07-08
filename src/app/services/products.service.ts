import { Injectable } from '@angular/core';
import { Item } from '../entities/item';
import { items } from '../entities/items';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  private products: Item[] = [];

  constructor() {
    /* this.productSubject.next(this.products); */
   }

  loadProducts(): void {
    this.products = items
  }

  getProducts(): Observable<Item[]> {
    /* if (this.products.length === 0) {
      this.loadProducts();
    } */
    return this.productSubject.asObservable();
  }

  /* getProducts(): Item[] {
    if (this.products.length === 0) {
      this.loadProducts();
    }
    return this.products;
  } */

  getProductById(id: string): Item | undefined {
    if (this.products.length === 0) {
      this.loadProducts();
    }
    return this.products.find(product => product.id === id);
  }

  addProduct(item: Item): void {
    this.products.push(item);
    this.productSubject.next(this.products);
    console.log(this.products);
  }
}
