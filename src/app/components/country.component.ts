import { Component, OnInit } from '@angular/core';
import { Wine } from '../wine.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryDetails: any

  constructor(private wine: Wine) { }

  async ngOnInit(): Promise<void> {

    this.countryDetails = await this.wine.getCountry()

    console.info(this.countryDetails)

  }

}
