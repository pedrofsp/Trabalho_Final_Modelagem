import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-button-geolocation',
  templateUrl: './button-geolocation.component.html',
  styleUrls: ['./button-geolocation.component.scss'],
})
export class ButtonGeolocationComponent implements OnInit {
  constructor(private geolocation: Geolocation) {}

  ngOnInit() {}

  CurrentLocation() {
    console.log('clicou');
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }
}
