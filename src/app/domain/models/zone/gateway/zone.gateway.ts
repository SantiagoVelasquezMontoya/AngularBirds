import { IZoneModel } from '../zone.model';
import { Observable } from 'rxjs';

export abstract class ZoneGateway {
  abstract createZone(zone: IZoneModel): Observable<IZoneModel>;
  abstract getZones(): Observable<IZoneModel[]>;
}
