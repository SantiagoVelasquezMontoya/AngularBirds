import { CountryUseCase } from './../../../domain/usecases/country.usecase';
import { IBirdModel } from './../../../domain/models/bird/bird.model';
import { BirdUseCase } from './../../../domain/usecases/bird.usecase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.scss'],
})
export class BirdComponent implements OnInit {
  birdData: any = {
    commonName: '',
    scientificName: '',
  };
  countries: any[] | null;
  country: any;
  birds: any[] | null;
  constructor(
    private birdUseCase: BirdUseCase,
    private countryUseCase: CountryUseCase
  ) {}

  ngOnInit(): void {
    this.countryUseCase.getZones().subscribe((res) => {
      console.log(res);
      this.countries = res;
    });
    this.birdUseCase.getBirds().subscribe((res) => {
      console.log(res);
      this.birds = res;
    });
  }

  onSubmit() {
    const data: IBirdModel = {
      commonName: this.birdData.commonName,
      scientificName: this.birdData.scientificName,
      countriesId: [1],
    };
    console.log(data);
    this.birdUseCase.createBird(data).subscribe((res) => {
      console.log(res);
    });
  }
}
