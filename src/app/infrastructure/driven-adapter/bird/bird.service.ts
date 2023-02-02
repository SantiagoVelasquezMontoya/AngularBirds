import { IBirdModel } from './../../../domain/models/bird/bird.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BirdGateway } from 'src/app/domain/models/bird/gateway/bird.gateway';

@Injectable({
  providedIn: 'root',
})
export class BirdService extends BirdGateway {
  constructor(private http: HttpClient) {
    super();
  }

  createBird(country: IBirdModel): Observable<IBirdModel> {
    return this.http.post<IBirdModel>('http://localhost:10000/bird', country);
  }

  getBirds(): Observable<IBirdModel[]> {
    return this.http.get<IBirdModel[]>('http://localhost:10000/bird');
  }
}
