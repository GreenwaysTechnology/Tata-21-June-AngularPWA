import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule, HttpClientModule,FormsModule
  ],
  exports: [
    HeroComponent
  ]
})
export class HeroesModule { }
