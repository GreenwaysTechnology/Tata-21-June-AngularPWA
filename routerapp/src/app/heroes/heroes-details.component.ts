import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styles: [
  ]
})
export class HeroesDetailsComponent implements OnInit {

  id!: string | null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
