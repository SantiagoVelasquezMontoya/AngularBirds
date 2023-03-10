import { Observable } from 'rxjs';
import { ICountryModel } from './../country.model';

export abstract class CountryGateway {
  abstract createCountry(country: ICountryModel): Observable<ICountryModel>;
  abstract getCountries(): Observable<ICountryModel[]>;
  abstract deleteCountry(id: number): Observable<boolean>;
  abstract updateCountry(zone: ICountryModel): Observable<ICountryModel>;
}
