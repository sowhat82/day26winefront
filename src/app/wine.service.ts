import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()


export class Wine {
    
    country = ""

    constructor(private http:HttpClient){}

    async getCountries(){
        const countries = await this.http.get<any>('/countries').toPromise()
        console.info(countries)
        return countries
    }

    async getCountry(){

        const result = await this.http.get<any>('/country/'+this.country).toPromise()
        return result
    }


}