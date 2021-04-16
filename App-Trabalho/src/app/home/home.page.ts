import { Component } from '@angular/core';
import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  hasError: boolean = false;
  errorMessage: string;

  constructor(
    private readonly searchCity: SearchCityService,
    private readonly router: Router
  ) {}

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchCity.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  onSelectCity(cityId: number) {
    this.router.navigateByUrl(`/weather/${cityId}`);
  }
}
