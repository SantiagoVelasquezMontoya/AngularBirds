import { ICountryModel } from './../../../domain/models/country/country.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends CountryGateway {
  constructor(private http: HttpClient) {
    super();
  }

  createCountry(country: ICountryModel): Observable<ICountryModel> {
    return this.http.post<ICountryModel>(
      'http://localhost:10000/country',
      country
    );
  }

  getCountries(): Observable<ICountryModel[]> {
    return this.http.get<ICountryModel[]>('http://localhost:10000/country');
  }

  deleteCountry(): Observable<boolean> {
    return this.http.delete<boolean>('/country');
  }
}
