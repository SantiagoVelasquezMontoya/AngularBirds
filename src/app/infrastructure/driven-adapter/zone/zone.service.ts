import { Observable } from 'rxjs';
import { IZoneModel } from './../../../domain/models/zone/zone.model';
import { Injectable } from '@angular/core';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ZoneService extends ZoneGateway {
  constructor(private http: HttpClient) {
    super();
  }

  createZone(zone: IZoneModel): Observable<IZoneModel> {
    console.log('LLegue Service');
    return this.http.post<IZoneModel>('http://localhost:10000/zone', zone);
  }

  getZones(): Observable<IZoneModel[]> {
    return this.http.get<IZoneModel[]>('http://localhost:10000/zone');
  }

  deleteZone(): Observable<boolean> {
    return this.http.delete<boolean>('http://localhost:10000/zone');
  }
}
