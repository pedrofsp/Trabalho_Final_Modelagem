import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { cities } from 'src/data/data-source/br-cities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-geolocation',
  templateUrl: './button-geolocation.component.html',
  styleUrls: ['./button-geolocation.component.scss'],
})
export class ButtonGeolocationComponent implements OnInit {
  constructor(
    private geolocation: Geolocation,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  currentLocation() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.findCity(resp.coords.latitude, resp.coords.longitude);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  findCity(lat1, lat2) {
    var smallestDist = 8.516; //extemçaõ do brasil
    var idCidade = '';
    var dist;
    for (var i = 0; i < cities.length; i++) {
      dist = this.haversineDistance(
        lat1,
        lat2,
        cities[i].latitude,
        cities[i].longitude,
        false
      );
      if (dist < smallestDist) {
        smallestDist = dist;
        idCidade = cities[i].id;
      }
    }

    this.router.navigateByUrl(`/weather/${idCidade}`);
  }

  haversineDistance(lat1, lon1, lat2, lon2, isMiles) {
    var R = 6371; // km

    var x1 = lat2 - lat1;
    var dLat = this.toRad(x1);
    var x2 = lon2 - lon1;
    var dLon = this.toRad(x2);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) *
        Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    if (isMiles) d /= 1.60934;

    return d;
  }

  toRad(x) {
    return (x * Math.PI) / 180;
  }
}
