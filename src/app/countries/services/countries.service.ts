import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country } from "../interfaces/country";

@Injectable({ providedIn: 'root' })

export class Service {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { };

  searchCapitals(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url);
  }


}
