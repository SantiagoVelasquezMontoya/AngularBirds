import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICountryModel } from '../models/country/country.model';
import { Injectable } from '@angular/core';
import { CountryGateway } from '../models/country/gateway/country.gateway';

@Injectable()
export class CountryUseCase {
  constructor(private countryGateway: CountryGateway) {}

  createCountry(country: ICountryModel): Observable<ICountryModel | null> {
    return this.countryGateway.createCountry(country).pipe(
      catchError((e) => {
        console.log(e.error.message);
        return of(null);
      })
    );
  }

  getZones(): Observable<ICountryModel[] | null> {
    return this.countryGateway.getCountries().pipe(
      catchError(() => {
        return of(null);
      })
    );
  }
}
