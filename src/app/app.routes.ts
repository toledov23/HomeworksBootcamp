import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent,
        pathMatch: 'full'
      },
      {
        component: ProductDetailComponent,
        path: ':id',
      },
    ],
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
