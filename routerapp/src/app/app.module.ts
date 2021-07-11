import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusModule } from './aboutus/aboutus.module';
import { ProductsModule } from './products/products.module';
import { PagenotfoundComponent } from './pagenotfound.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutusModule,
    ProductsModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PagenotfoundComponent
  ]
})
export class AppModule { }
