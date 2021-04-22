import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { Weather } from 'src/domain/entities/weather';
import { ActivatedRoute } from '@angular/router';
import { LoadWeatherService } from 'src/domain/services/load-weather.service';
import { threadId } from 'worker_threads';
import { error } from 'protractor';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
  weather: Weather;
  today = new Date();

  hasError: boolean = false;
  errorMessage: string;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly activatedRoute: ActivatedRoute,
    private readonly weatherService: LoadWeatherService,
    private readonly loadingCrtl: LoadingController
  ) {}

  ionViewDidEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadWeather(Number.parseInt(id));
  }

  get currentDate() {
    const today = new Date();
    const weekDays = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');

    return `${weekDays[today.getDay()]}, ${day}/${month}`;
  }

  private async presentLoading() {
    (
      await this.loadingCrtl.create({
        message: 'Aguarde...',
      })
    ).present();
  }

  async loadWeather(cityId: number) {
    try {
      await this.presentLoading();
      this.hasError = false;
      this.weather = await this.weatherService.loadByCity(cityId);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    } finally {
      await this.loadingCrtl.dismiss();
    }
  }

  async onSeeDetails() {
    const modal = await this.modalCtrl.create({
      component: WeatherDetailsComponent,
      componentProps: {
        weatherDetails: this.weather.details,
      },
    });
    modal.present();
  }
}

/*import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  constructor(private readonly modalCtrl: ModalController) {}

  ngOnInit() {}

  async onSeeDetails() {
    const modal = await this.modalCtrl.create({
      component: WeatherDetailsComponent,
    });
    modal.present();
  }
}*/
