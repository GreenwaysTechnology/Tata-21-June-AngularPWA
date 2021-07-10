import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    HeroComponent
  ]
})
export class HeroesModule { }
