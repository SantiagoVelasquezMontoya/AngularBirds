import { HeaderComponent } from './../components/header/header.component';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ZonePageComponent } from './zone-page/zone-page.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { BirdPageComponent } from './bird-page/bird-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    ZonePageComponent,
    CountryPageComponent,
    BirdPageComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [
    HomeComponent,
    ZonePageComponent,
    CountryPageComponent,
    BirdPageComponent,
  ],
})
export class PagesModule {}
