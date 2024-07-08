import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../entities/item';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(products: Item[], currentPage: number, productsPerPage: number): Item[] {
    if (!products || products.length === 0) {
      return [];
    }
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  }

}
