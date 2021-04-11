import { City } from '../entities/city';
import { CityRepository } from './protocols/city-repository';
import { CityNotFoundError } from '../errors/city-not-found.error';

export class SearchCityService {
  constructor(private readonly cityRepo: CityRepository) {}

  async search(query: string): Promise<City[]> {
    if (!query || query.trim().length < 3) {
      //caso o valor seja invalido
      return [];
    }

    const cities: City[] = await this.cityRepo.getAll();
    const filteredCities = cities.filter(
      (city) => city.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );

    if (filteredCities.length == 0) {
      throw new CityNotFoundError();
    }

    return filteredCities;
  }
}
