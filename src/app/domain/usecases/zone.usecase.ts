import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IZoneModel } from './../models/zone/zone.model';
import { Injectable } from '@angular/core';
import { ZoneGateway } from '../models/zone/gateway/zone.gateway';

@Injectable()
export class ZoneUseCase {
  constructor(private zoneGateway: ZoneGateway) {}

  createZone(zone: IZoneModel): Observable<IZoneModel | null> {
    return this.zoneGateway.createZone(zone).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }
}
