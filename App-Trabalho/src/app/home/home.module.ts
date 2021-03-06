import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { ButtonGeolocationComponent } from './components/button-geolocation/button-geolocation.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, CityDetailsComponent, ButtonGeolocationComponent],
})
export class HomePageModule {}
