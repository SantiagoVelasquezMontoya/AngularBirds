import { HttpInterceptorService } from './../../../infrastructure/interceptor/http-interceptor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(private interceptor: HttpInterceptorService) {}
  isLoading: boolean = true;

  ngOnInit(): void {
    console.log(this.interceptor.isLoading);

    this.interceptor.isLoading = this.isLoading;
  }
}
