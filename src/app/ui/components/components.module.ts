import { RouterModule } from '@angular/router';
import { BirdService } from './../../infrastructure/driven-adapter/bird/bird.service';
import { BirdGateway } from 'src/app/domain/models/bird/gateway/bird.gateway';
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
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ZoneComponent,
    CountryComponent,
    BirdComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    DomainModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
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

  exports: [ZoneComponent, CountryComponent, BirdComponent, HeaderComponent],
})
export class ComponentsModule {}
