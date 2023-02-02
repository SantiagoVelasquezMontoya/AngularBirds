import { IBirdModel } from './../models/bird/bird.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BirdGateway } from '../models/bird/gateway/bird.gateway';

@Injectable()
export class BirdUseCase {
  constructor(private birdGateway: BirdGateway) {}

  createBird(bird: IBirdModel): Observable<IBirdModel | null> {
    return this.birdGateway.createBird(bird).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }
}
