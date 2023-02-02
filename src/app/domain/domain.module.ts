import { BirdUseCase } from './usecases/bird.usecase';
import { ZoneUseCase } from './usecases/zone.usecase';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryUseCase } from './usecases/country.usecase';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ZoneUseCase, CountryUseCase, BirdUseCase],
})
export class DomainModule {}
