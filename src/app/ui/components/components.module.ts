import { BirdService } from './../../infrastructure/driven-adapter/bird/bird.service';
import { BirdGateway } from 'src/app/domain/models/bird/gateway/bird.gateway';
import { CountryUseCase } from './../../domain/usecases/country.usecase';
import { ZoneUseCase } from './../../domain/usecases/zone.usecase';
import { CountryService } from './../../infrastructure/driven-adapter/country/country.service';
import { DomainModule } from './../../domain/domain.module';
import { ZoneComponent } from './../components/zone/zone.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneService } from 'src/app/infrastructure/driven-adapter/zone/zone.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from './country/country.component';

import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';
import { BirdComponent } from './bird/bird.component';
import { LoaderComponent } from './loader/loader.component';

// function zoneZoneCaseFactory(zoneGateway: ZoneGateway): ZoneUseCase {
//   return new ZoneUseCase(zoneGateway);
// }

// export const zoneZoneCaseProvider = {
//   provide: ZoneGateway,
//   useFactory: zoneZoneCaseFactory,
//   deps: [ZoneGateway],
// };
// //Country
// function countryCountryCaseFactory(
//   countryGateway: CountryGateway
// ): CountryUseCase {
//   return new CountryUseCase(countryGateway);
// }

// export const countryCountryCaseProvider = {
//   provide: CountryGateway,
//   useFactory: countryCountryCaseFactory,
//   deps: [CountryGateway],
// };

@NgModule({
  declarations: [
    ZoneComponent,
    CountryComponent,
    BirdComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, DomainModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: ZoneGateway,
      useClass: ZoneService,
    },
    {
      provide: CountryGateway,
      useClass: CountryService,
    },
    {
      provide: BirdGateway,
      useClass: BirdService,
    },
  ],

  exports: [ZoneComponent, CountryComponent, BirdComponent, LoaderComponent],
})
export class ComponentsModule {}
