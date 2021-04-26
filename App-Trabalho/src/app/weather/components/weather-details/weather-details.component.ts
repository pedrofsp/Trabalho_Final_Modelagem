import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WeatherDetails } from 'src/domain/entities/weather-details';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
  @Input() weatherDetails: WeatherDetails[];

  daysAfterToday(days: number) {
    const today = new Date();
    const milisecondsInADay = days * 1000 * 60 * 60 * 24;
    return new Date(today.getTime() + milisecondsInADay);
  }

  constructor(private readonly modalCrtl: ModalController) {}

  ngOnInit() {}

  onClose() {
    this.modalCrtl.dismiss();
  }

  public getImageUrl(condition) {
    if (condition == 'algumas nuvens') {
      return 'assets/AlgumasNuvens.png';
    }
    if (condition == 'tempestade') {
      return 'assets/Tempestade.png';
    }
    if (condition == 'chuva moderada') {
      return 'assets/ChuvaModerada.png';
    }
    if (condition == 'nuvens dispersas') {
      return 'assets/NuvensDispersas.png';
    }
    if (condition == 'chuva leve') {
      return 'assets/ChuvaModerada.png';
    }
    if (condition == 'nublado') {
      return 'assets/Nublado.png';
    }
    if (condition == 'céu limpo') {
      return 'assets/CeuLimpo.png';
    }
    console.log(condition);

    return 'assets/AlgumasNuvens.png';
  }
}
