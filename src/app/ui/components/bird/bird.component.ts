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
  birds: any[] | any = [];
  constructor(
    private birdUseCase: BirdUseCase,
    private countryUseCase: CountryUseCase
  ) {}

  ngOnInit(): void {
    this.countryUseCase.getCountries().subscribe((res) => {
      this.countries = res;
    });
    this.birdUseCase.getBirds().subscribe((res) => {
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

  onDelete(id: number) {
    console.log('Deleting Bird', id);
    this.birdUseCase.deleteBird(id).subscribe((res) => {
      console.log(res);
    });
  }

  TESTBirdUpdate() {
    const testData: IBirdModel = {
      id: 1,
      commonName: 'Gaviota',
      scientificName: 'Gaviotus',
      countriesId: [1],
    };
    this.birdUseCase.updateBird(testData).subscribe((res) => {
      console.log(res);
    });
  }
}
