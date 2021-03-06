import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { Wine } from './wine.service';
import { CountryComponent } from './components/country.component';
import { Routes, RouterModule } from '@angular/router';
import { WineDetailsComponent } from './components/wine-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country', component: CountryComponent },
  { path: 'wineDetails', component: WineDetailsComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    WineDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [Wine],
  bootstrap: [AppComponent]
})
export class AppModule { }
