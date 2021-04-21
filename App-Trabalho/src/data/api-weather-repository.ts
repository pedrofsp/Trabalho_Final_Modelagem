import { WeatherRepository } from 'src/domain/services/protocols/weather-repository';
import { Coordinate } from 'src/domain/entities/coodinate';
import { Weather } from 'src/domain/entities/weather';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class ApiWeatherRepository extends WeatherRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  async load(coord: Coordinate): Promise<Weather> {
    alert(
      'chamou load,' +
        `${environment.api_config.api_icon_url} + ${environment.api_config.api_key} + ${environment.api_config.api_url}`
    );
    return this.http
      .get(
        `${environment.api_config.api_url}?lat=${coord.latitude}&lon=${coord.longitude}&exclude=minutely,hourly,alerts&lang=pt_br&units=metric&appid=${environment.api_config.api_key}`
      )
      .pipe(
        map(this.toEntity)
        /*catchError((error) => throwError(new UnavailableServiceError()))*/
      )
      .toPromise();
  }

  private toEntity(data: any): Weather {
    if (!data) {
      return null;
    }
    const numOfDailyWeather = 3;
    const weather: Weather = {
      currentTemp: data.current.temp,
      details: [],
    };

    for (let i = 0; i < numOfDailyWeather; i++) {
      weather.details.push({
        condition: data.daily[i].weather[0].description,
        conditionIconUrl: `${environment.api_config.api_icon_url}/${data.daily[i].weather[0].icon}@2x.png`,
        pop: data.daily[i].pop * 100,
        humidity: data.daily[i].humidity,
        minTemp: data.daily[i].temp.min,
        maxTemp: data.daily[i].temp.max,
      });
    }

    return weather;
  }
}
