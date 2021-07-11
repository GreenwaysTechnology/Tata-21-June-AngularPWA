import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, from, Observable } from "rxjs";
import { delay, catchError, tap } from "rxjs/operators";
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

        const fallbackHero = [
            {
                id: 100,
                name: 'Subramanian'
            }
        ];

        const url = 'http://localhost:3000/heroes';
        // return this.http.get<Hero[]>(url).pipe(
        //     catchError(this.handleError<Hero[]>('findAll-Heros', [])))

        //fallback Hero
        return this.http.get<Hero[]>(url).pipe(
            tap(() => console.log('fetching heroes')),
            catchError(this.handleError<Hero[]>('findAll-Heros', fallbackHero)))
    }

    findById(id: number): Observable<Hero> {
        const url = `http://localhost:3000/heroes/${id}`;
        return this.http.get<Hero>(url).pipe(
            tap(() => console.log(`fetched Hero id = ${id}`)),
            catchError(this.handleError<Hero>(`findByid id=${id}`, { id: 400, name: 'Fallback' }))
        )
    }
    save(hero: Hero) {
        console.log(hero)
        const url = `http://localhost:3000/heroes`;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        //sending todo data to server
        return this.http.post<Hero>(url, hero, httpOptions)
            .pipe(tap(() => console.log(`added Hero`)),
                catchError(this.handleError<Hero>('Save Hero'))
            )
    }

    remove(id: number): Observable<Hero> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        const url = `http://localhost:3000/heroes/${id}`;
        return this.http.delete<Hero>(url, httpOptions)
            .pipe(tap(() => console.log(`deleted Hero ${id}`)),
                catchError(this.handleError<Hero>('delete Hero'))
            )
    }
    update(id: number, todo: Hero): Observable<Hero> {
        console.log('service update method')
        const url = `http://localhost:3000/heroes/${id}`;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.put<Hero>(url, todo, httpOptions)
            .pipe(tap(() => console.log(`updated Hero ${todo.id}`)),
                catchError(this.handleError<any>('update Hero'))
            )
    }

    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            console.log('got error')
            console.log(error.message);
            return of(result as T);
        }
    }

}