import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from "rxjs";
import { Country } from "../interfaces/country.interface";
import { CacheStore } from "../interfaces/cache-store.interface";
import { Region } from "../interfaces/region.type";

@Injectable({ providedIn: 'root' })

export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  public CacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private http: HttpClient) {
    this.LoadFromLocalStorage();
  };


  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.CacheStore))

  }
  private LoadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;

    this.CacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }


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
        tap(countries => this.CacheStore.byCountries = { term, countries }),
        tap(() => this.saveToLocalStorage())
      );
  }

  searchCapitals(term: string): Observable<Country[]> {
    return this.search(term, 'capital')
      .pipe(
        tap(countries => this.CacheStore.byCapital = { term, countries }),
        tap(() => this.saveToLocalStorage())
      );
  }

  searchRegion(region: Region): Observable<Country[]> {
    return this.search(region, 'region')
      .pipe(
        tap(countries => this.CacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocalStorage())
      );
  }

}
