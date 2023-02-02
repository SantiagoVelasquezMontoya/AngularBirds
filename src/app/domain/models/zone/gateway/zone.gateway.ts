import { IZoneModel } from '../zone.model';
import { Observable } from 'rxjs';

export abstract class ZoneGateway {
  abstract createZone(zone: IZoneModel): Observable<IZoneModel>;
  abstract getZones(): Observable<IZoneModel[]>;
  abstract deleteZone(id: number): Observable<boolean>;
  abstract updateZone(zone: IZoneModel): Observable<IZoneModel>;
}
