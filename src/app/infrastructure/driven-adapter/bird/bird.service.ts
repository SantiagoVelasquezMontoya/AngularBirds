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
    return this.http.post<IBirdModel>('/bird', country);
  }

  getBirds(): Observable<IBirdModel[]> {
    return this.http.get<IBirdModel[]>('/bird');
  }

  deleteBird(): Observable<boolean> {
    return this.http.delete<boolean>('/bird');
  }

  updateBird(bird: IBirdModel): Observable<IBirdModel> {
    return this.http.put<IBirdModel>('/bird', bird);
  }
}
