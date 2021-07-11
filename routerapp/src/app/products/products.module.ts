import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AppRoutingModule } from '../app-routing.module';
import { BooksComponent } from './books.component';
import { BlogsComponent } from './blogs.component';



@NgModule({
  declarations: [
    ProductsComponent,
    BooksComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports: [
    ProductsComponent,
    BooksComponent,
    BlogsComponent
  ]
})
export class ProductsModule { }
