import { City } from '../entities/city';
import { Weather } from '../entities/weather';
import { CityNotFoundError } from '../errors/city-not-found.error';
import { CityRepository } from './protocols/city-repository';
import { WeatherRepository } from './protocols/weather-repository';

export class LoadWeatherService {
  constructor(
    private readonly cityRepo: CityRepository,
    private readonly weatherRepo: WeatherRepository
  ) {}

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async loadByCity(cityId: number): Promise<Weather> {
    await this.delay(500);

    const city: City = await this.cityRepo.getById(cityId);

    if (!city) {
      throw new CityNotFoundError();
    }

    const weather = await this.weatherRepo.load(city.coord);
    weather.city = city;

    return weather;
  }
}
