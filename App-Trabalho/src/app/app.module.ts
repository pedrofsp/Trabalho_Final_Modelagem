// import { FakeCityRepository } from 'src/data/fake/fake-city-repository';
// import { FakeWeatherRepository } from 'src/data/fake/fake-weather-repository';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchCityService } from 'src/domain/services/search-city-service';
import { LoadWeatherService } from 'src/domain/services/load-weather.service';
import { LocalCityRepository } from 'src/data/local-city-repository';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiWeatherRepository } from 'src/data/api-weather-repository';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const createSearchCityService = () => {
  return new SearchCityService(new LocalCityRepository());
};

const createLoadWeatherService = (http: HttpClient) => {
  return new LoadWeatherService(
    new LocalCityRepository(),
    new ApiWeatherRepository(http)
  );
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: SearchCityService, useFactory: createSearchCityService },
    {
      provide: LoadWeatherService,
      useFactory: createLoadWeatherService,
      deps: [HttpClient],
    },
    Geolocation,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
