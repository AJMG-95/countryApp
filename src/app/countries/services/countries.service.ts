import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from "rxjs";
import { Country } from "../interfaces/country";

@Injectable({ providedIn: 'root' })

export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { };


  searchCountryByAlphaCode(query: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${query}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  private search(query: string, searchType: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${searchType}/${query}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])), // Captura el error y devuelve un array vacío
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

}
