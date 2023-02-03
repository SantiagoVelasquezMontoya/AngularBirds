import { BirdComponent } from './ui/components/bird/bird.component';
import { CountryComponent } from './ui/components/country/country.component';
import { ComponentsModule } from './ui/components/components.module';
import { ZonePageComponent } from './ui/pages/zone-page/zone-page.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { HttpInterceptorService } from './infrastructure/interceptor/http-interceptor.service';
import { PagesModule } from './ui/pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'zone', component: ZonePageComponent },
  { path: 'country', component: CountryComponent },
  { path: 'bird', component: BirdComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ComponentsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
