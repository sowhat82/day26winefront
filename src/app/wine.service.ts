import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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

        const wineDetails = await this.http.get<any>('/wineDetails/'+this.wineID).toPromise()

        // add to SQL with data received
        const params = new HttpParams()
        .set('wineName', wineDetails[0].title)
        .set('wineID', wineDetails[0]._id)
    
        // add clicked wine into an sql database as "cookies"
        // const httpHeaders = new HttpHeaders()
        // .set('Content-Type', 'application/x-www-form-urlencoded')
    
        // await this.http.post('/addWineDetails', params, {headers: httpHeaders}).toPromise()

        // return data to be rendered
        return wineDetails

    }

}