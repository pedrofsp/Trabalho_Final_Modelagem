import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WeatherDetails } from 'src/domain/entities/weather-details';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
  @Input() WeatherDetails: WeatherDetails[];

  daysAfterToday(days: number) {
    const today = new Date();
    return new Date(today.getTime() + days + 1000 * 60 * 60 * 24);
  }

  constructor(private readonly modalCrtl: ModalController) {}

  ngOnInit() {}

  onClose() {
    this.modalCrtl.dismiss();
  }
}
