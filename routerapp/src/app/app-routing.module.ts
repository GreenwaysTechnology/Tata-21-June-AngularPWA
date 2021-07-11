import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeroesDetailsComponent } from './heroes/heroes-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { BlogsComponent } from './products/blogs.component';
import { BooksComponent } from './products/books.component';
import { ProductsComponent } from './products/products.component';

//master menu configuration

const routes: Routes = [
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroesDetailsComponent },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: '', redirectTo: '/products/ebooks', pathMatch: 'full' },
      { path: 'ebooks', component: BooksComponent },
      { path: 'blogs', component: BlogsComponent }
    ]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
