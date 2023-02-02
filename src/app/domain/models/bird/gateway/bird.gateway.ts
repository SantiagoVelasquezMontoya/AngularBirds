import { IBirdModel } from './../bird.model';
import { Observable } from 'rxjs';

export abstract class BirdGateway {
  abstract createBird(bird: IBirdModel): Observable<IBirdModel>;
  abstract getBirds(): Observable<IBirdModel[]>;
  abstract deleteBird(id: number): Observable<boolean>;
  abstract updateBird(bird: IBirdModel): Observable<IBirdModel>;
}
