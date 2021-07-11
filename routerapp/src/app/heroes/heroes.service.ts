import { Injectable } from "@angular/core";
import { of, from, Observable } from "rxjs";
import { delay, catchError, tap } from "rxjs/operators";
import { HEROES } from "../mock-data/heroes.mock";
import { Hero } from "../types/hero.type";

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    constructor() { }
    //mock data api
    public findAll(): Observable<Hero[]> {
        return of<Hero[]>(HEROES); //.pipe(delay(6000))
    }
   
     

}