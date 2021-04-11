export class CityNotFoundError extends Error {
  constructor() {
    super('Cidade não encontrada!');
    super.name = 'CityNotFoundError';
    //alert('Cidade não encontrada!');
  }
}
