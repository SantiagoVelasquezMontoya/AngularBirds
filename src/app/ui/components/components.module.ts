import { DomainModule } from './../../domain/domain.module';
import { ZoneComponent } from './../components/zone/zone.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneService } from 'src/app/infrastructure/driven-adapter/zone/zone.service';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ZoneComponent],
  imports: [CommonModule, DomainModule, HttpClientModule],
  providers: [
    {
      provide: ZoneGateway,
      useClass: ZoneService,
    },
  ],
  exports: [ZoneComponent],
})
export class ComponentsModule {}
