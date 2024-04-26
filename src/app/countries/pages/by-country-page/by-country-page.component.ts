import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.CacheStore.byCountries.countries;
    this.initialValue = this.countriesService.CacheStore.byCountries.term;
  }

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe({
      next: countries => {
        this.countries = countries
      },
      error: Error => {

      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

}
