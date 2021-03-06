import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() state: string;
  @Output() selectCity: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.selectCity.emit(this.id);
  }
}
