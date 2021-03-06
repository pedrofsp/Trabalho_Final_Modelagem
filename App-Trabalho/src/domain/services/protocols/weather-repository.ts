import { Coordinate } from 'src/domain/entities/coodinate';
import { Weather } from 'src/domain/entities/weather';

export abstract class WeatherRepository {
  abstract load(coord: Coordinate): Promise<Weather>;
}
