import { City } from 'src/domain/entities/city';
import { CityRepository } from 'src/domain/services/protocols/city-repository';
import { cities } from './data-source/br-cities';

export class LocalCityRepository extends CityRepository {
  async getAll(): Promise<City[]> {
    return this.toCollection(cities);
  }

  async getById(id: number): Promise<City> {
    return this.toEntity(cities.find((item: any) => item.id === id));
  }

  private toEntity(data: any): City {
    if (data) {
      return {
        id: data.id,
        name: data.nome,
        state: data.estado,
        coord: {
          latitude: data.latitude,
          longitude: data.longitude,
        },
      };
    } else {
      return null;
    }
  }

  private toCollection(data: any): City[] {
    if (data) {
      return data.map((item: any) => this.toEntity(item));
    } else {
      return null;
    }
  }
}
