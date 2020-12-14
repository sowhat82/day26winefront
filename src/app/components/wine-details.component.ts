import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wine } from '../wine.service';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit {

  wineDetails: any

  constructor(private wine: Wine, private router: Router) { }

  async ngOnInit(): Promise<void> {

    this.wineDetails = await this.wine.getWineDetails()

  }

}
