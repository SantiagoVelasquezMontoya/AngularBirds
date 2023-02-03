import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  private showLoader: boolean = true;
  private countRequest = 0;
  private loadingSubject = new BehaviorSubject<any>(true);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestClone = req.clone();

    requestClone.headers
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
      );

    if (this.countRequest === 0) {
      this.setLoaderSubject(true);
    }
    this.countRequest++;
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }),
      finalize(() => {
        this.countRequest--;
        if (this.countRequest === 0) {
          this.setLoaderSubject(false);
        }
      })
    );
  }

  setLoaderSubject(state: any) {
    this.showLoader = state;
    this.loadingSubject.next(this.showLoader);
  }

  getLoaderSubject(): Observable<any> {
    return this.loadingSubject.asObservable();
  }
}
