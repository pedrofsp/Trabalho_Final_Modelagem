import { WeatherRepository } from 'src/domain/services/protocols/weather-repository';
import { Weather } from 'src/domain/entities/weather';
import { Coordinate } from 'src/domain/entities/coodinate';

export class FakeWeatherRepository extends WeatherRepository {
  weather: Weather = {
    currentTemp: 25,
    details: [
      {
        condition: 'Céu limpo',
        conditionIconUrl:
          'https://image.flaticon.com/icons/png/512/169/169367.png',
        pop: 70,
        humidity: 30,
        minTemp: 18,
        maxTemp: 31,
      },
      {
        condition: 'Tempestade',
        conditionIconUrl:
          'https://image.flaticon.com/icons/png/512/169/169367.png',
        pop: 70,
        humidity: 30,
        minTemp: 18,
        maxTemp: 31,
      },
      {
        condition: 'Nublado',
        conditionIconUrl:
          'https://image.flaticon.com/icons/png/512/169/169367.png',
        pop: 70,
        humidity: 30,
        minTemp: 18,
        maxTemp: 31,
      },
    ],
  };

  async load(coord: Coordinate): Promise<Weather> {
    return this.weather;
  }
}
