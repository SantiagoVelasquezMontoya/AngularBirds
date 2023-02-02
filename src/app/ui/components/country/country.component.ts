import { IZoneModel } from './../../../domain/models/zone/zone.model';
import { ZoneUseCase } from 'src/app/domain/usecases/zone.usecase';
import { ICountryModel } from './../../../domain/models/country/country.model';
import { CountryUseCase } from './../../../domain/usecases/country.usecase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countryName: string;
  zone: any;
  zones: IZoneModel[] | null = [];

  constructor(
    private countryUseCase: CountryUseCase,
    private zoneUseCase: ZoneUseCase
  ) {}

  ngOnInit(): void {
    this.zoneUseCase.getZones().subscribe((res) => {
      console.log(res);
      this.zones = res;
    });
  }

  onSubmit() {
    const data: ICountryModel = {
      countryName: this.countryName,
      countryZone: this.zone.id,
    };
    console.log('Sending', data);

    this.countryUseCase.createCountry(data).subscribe((res) => {
      console.log(res);
    });
  }
}
