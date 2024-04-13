import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from "rxjs";
import { Country } from "../interfaces/country";

@Injectable({ providedIn: 'root' })

export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { };


  search(query: string, searchType: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${searchType}/${query}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]);
        }) // Captura el error y devuelve un array vacío
      );
  }

  searchCountry(query: string): Observable<Country[]> {
    return this.search(query, 'name');
  }

  searchCapitals(query: string): Observable<Country[]> {
    return this.search(query, 'capital');
  }

  searchRegion(query: string): Observable<Country[]> {
    return this.search(query, 'region');
  }




  /*   searchCountry(query: string): Observable<Country[]> {
      const url = `${this.apiUrl}/name/${query}`;
      return this.http.get<Country[]>(url)
        .pipe(
          catchError(error => {
            console.log(error);
            return of([])
          }) //Captura el error y en lugar de devolver el error devuelve un array vacío
        );
    }

    searchCapitals(query: string): Observable<Country[]> {
      const url = `${this.apiUrl}/capital/${query}`;
      return this.http.get<Country[]>(url)
        .pipe(
          catchError(error => {
            console.log(error);
            return of([])
          }) //Captura el error y en lugar de devolver el error devuelve un array vacío
        );
    }

    searchRegion(query: string): Observable<Country[]> {
      const url = `${this.apiUrl}/region/${query}`;
      return this.http.get<Country[]>(url)
        .pipe(
          catchError(error => {
            console.log(error);
            return of([])
          }) //Captura el error y en lugar de devolver el error devuelve un array vacío
        );
    }

   */
}
