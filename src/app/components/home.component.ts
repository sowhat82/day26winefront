import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wine } from '../wine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: any

  constructor(private wine: Wine, private router: Router) { }

  async ngOnInit(): Promise<void> {

    this.countries = await this.wine.getCountries()
    console.info(this.countries)
  }

  async getCountry(country){

    this.wine.country = country

    this.router.navigate(['/country'])

  }

}
