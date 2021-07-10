import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../types/hero.type';
import { HeroService } from './heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  heroes!: Observable<Hero[]>

  constructor(private heroservice:HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroservice.findAll();
  }

}
