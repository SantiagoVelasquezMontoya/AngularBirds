import { Observable } from 'rxjs';
import { IZoneModel } from './../../../domain/models/zone/zone.model';
import { Injectable } from '@angular/core';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ZoneService extends ZoneGateway {
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  });

  constructor(private http: HttpClient) {
    super();
  }

  createZone(zone: IZoneModel): Observable<IZoneModel> {
    return this.http.post<IZoneModel>('/zone', zone);
  }

  getZones(): Observable<IZoneModel[]> {
    return this.http.get<IZoneModel[]>('/zone');
  }

  deleteZone(): Observable<boolean> {
    return this.http.delete<boolean>('/zone', {
      headers: this.httpHeaders,
    });
  }

  updateZone(zone: IZoneModel): Observable<IZoneModel> {
    return this.http.put<IZoneModel>('/zone', zone);
  }
}
