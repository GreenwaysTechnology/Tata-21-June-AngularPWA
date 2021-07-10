import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HaiService {

  message: string = "Hai,Async"

  constructor() { }

  //callback style
  // public sayHai(action:any): void {
  //   setTimeout(action, 5000, this.message)
  // }
  //Promise style
  // public sayHai(): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(resolve, 5000, this.message)
  //   });
  // }

  //Rxjs-Observable
  public sayHai(): Observable<string> {
    return new Observable<string>(observer => {
      setTimeout(() => { observer.next(this.message) }, 5000)
    }).pipe(map(res => res.toUpperCase()))
  }

}
