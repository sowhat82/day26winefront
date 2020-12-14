import { Component, OnInit } from '@angular/core';
import { Wine } from '../wine.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryDetails: any
  OFFSET = 0
  LIMIT = 10
  notstartofpage = false 
  notendofpage =  true

  constructor(private wine: Wine) { }

  async ngOnInit(): Promise<void> {

    this.countryDetails = await this.wine.getCountry(this.OFFSET, this.LIMIT)

    this.notstartofpage = !(this.OFFSET==0)
    this.notendofpage = !(this.OFFSET+this.LIMIT>=this.wine.countryItemsCount)
  
    console.info(this.countryDetails)

  }

  async nextPage(){
    this.OFFSET += this.LIMIT
    this.countryDetails = await this.wine.getCountry(this.OFFSET, this.LIMIT)

    this.notstartofpage = !(this.OFFSET==0)
    this.notendofpage = !(this.OFFSET+this.LIMIT>=this.wine.countryItemsCount)
  }

  async prevPage(){
    this.OFFSET -= this.LIMIT

    this.countryDetails = await this.wine.getCountry(this.OFFSET, this.LIMIT)

    this.notstartofpage = !(this.OFFSET==0)
    this.notendofpage = !(this.OFFSET+this.LIMIT>=this.wine.countryItemsCount)  }

  getWineDetails(wineID){
    
  }
}
