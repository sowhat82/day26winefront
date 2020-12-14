import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()


export class Wine {
    
    country = ""
    countryItemsCount = 0
    wineID = ""

    constructor(private http:HttpClient){}

    async getCountries(){
        const countries = await this.http.get<any>('/countries').toPromise()
        return countries
    }

    async getCountry(OFFSET, LIMIT){

        const params = new HttpParams()
        .set('country', this.country)
        .set('offset', String(OFFSET))
        .set('limit', String(LIMIT))

        this.countryItemsCount = await this.http.get<any>('/countryItemsCount', {params: params}).toPromise()

        const result = await this.http.get<any>('/country', {params: params}).toPromise()
        return result
    }

    async getWineDetails(){
        console.info('winedetails: ')

        const wineDetails = await this.http.get<any>('/wineDetails/'+this.wineID).toPromise()
        console.info('winedetails: ' ,wineDetails)

        return wineDetails

    }

}