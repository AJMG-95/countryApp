import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from "rxjs";
import { Country } from "../interfaces/country.interface";
import { CacheStore } from "../interfaces/cache-store.interface";

@Injectable({ providedIn: 'root' })

export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  public cacheStorage: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private http: HttpClient) {

  };


  searchCountryByAlphaCode(term: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  private search(term: string, searchType: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${searchType}/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])), // Captura el error y devuelve un array vacío
      );
  }


  searchCountry(term: string): Observable<Country[]> {
    return this.search(term, 'name')
      .pipe(
        tap(countries => this.cacheStorage.byCountries = { term, countries })
      );
  }

  searchCapitals(term: string): Observable<Country[]> {
    return this.search(term, 'capital')
      .pipe(
        tap(countries => this.cacheStorage.byCapital = { term, countries })
      );
  }

  searchRegion(term: string): Observable<Country[]> {
    return this.search(term, 'region');
  }

}
