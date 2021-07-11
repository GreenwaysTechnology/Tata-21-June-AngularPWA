import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../types/hero.type';
import { HeroService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes$!: Observable<Hero[]>

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.heroService.findAll();
  }

}
