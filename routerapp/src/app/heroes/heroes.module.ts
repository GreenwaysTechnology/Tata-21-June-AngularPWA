import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeroesDetailsComponent } from './heroes-details.component';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroesDetailsComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports: [
    HeroesComponent,
    HeroesDetailsComponent
  ]
})
export class HeroesModule { }
