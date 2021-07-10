import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, from, Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { HEROES } from "../mock-data/heroes.mock";
import { Hero } from "../types/hero.type";



@Injectable({
    providedIn: 'root'
})
export class HeroService {
    constructor(private http: HttpClient) { }

    //mock data api
    // public findAll(): Observable<Hero[]> {
    //     return of<Hero[]>(HEROES).pipe(delay(6000))
    // }
    public findAll(): Observable<Hero[]> {
        const url = 'http://localhost:3000/heroes';
        return this.http.get<Hero[]>(url)
    }

}