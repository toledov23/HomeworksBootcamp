import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Input() productsPerPage: number = 5;
  @Output() pageChanged = new EventEmitter<number>();

  pages: number[] = [];
  currentPage: number = 1;

  ngOnInit(): void {
    this.pages = Array(Math.ceil(this.totalItems / this.productsPerPage)).fill(0).map((_, i) => i + 1);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }
}
