import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { Wine } from './wine.service';
import { CountryComponent } from './components/country.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country', component: CountryComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [Wine],
  bootstrap: [AppComponent]
})
export class AppModule { }
