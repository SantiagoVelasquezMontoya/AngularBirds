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

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  private countRequest = 0;
  private idMessage: string;
  public isLoading: boolean = true;

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

    if (!this.countRequest) {
      //alert('Loading');
      this.isLoading = true;
    }
    this.countRequest++;

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }),
      finalize(() => {
        this.countRequest--;
        if (!this.countRequest) {
          this.isLoading = false;
        }
      })
    );
  }
}
