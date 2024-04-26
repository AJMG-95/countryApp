import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';
import { CacheStore } from '../../interfaces/cache-store.interface';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.CacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.CacheStore.byRegion.region;
  }

  searchByRegion(term: Region): void {
    this.isLoading = true;
    this.selectedRegion = term;
    this.countriesService.searchRegion(term).subscribe({
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
