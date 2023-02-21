import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

console.log('ProductsModule loaded')

const productRoutes : Routes = [
  {
    path: '', component : ProductsComponent
  }
]

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductsModule { }
