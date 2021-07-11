import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-products',
  template: `
  <div>
      <h1>Product Details</h1>
      <ul style="list-style-type:none">
        <li><a routerLink="/products/ebooks">EBooks</a></li>
        <li><a routerLink="/products/blogs">Blogs</a></li>
      </ul>
      <router-outlet></router-outlet>
  </div>
    
  <div>
     <button class="btn btn-success" (click)="goToAboutUs()">GoToAboutUs</button>
  </div>
  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      url.forEach(info => {
        console.log(info.path, info.parameters)
      })
    })
  }
  public goToAboutUs() {
    this.router.navigate(['aboutus']);
  }

}
