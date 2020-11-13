import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  getdetails(id: any) {
    throw new Error('Method not implemented.');
  }

  userKey : string = "55f5d5150747c7d82f2a8174340f3332";

  constructor(private _http: HttpClient) {}

    getSearch(name: string, lat: string, long: string){

      const headers = new HttpHeaders({
        "accept" : "application/json",
        "user-key" : this.userKey
      })

      return this._http.get(`https://developers.zomato.com/api/v2.1/search?q=${name}&lat=${lat}&lon=${long}&radius=1000`, {headers});
    }

    getCities(name: string){

      const headers = new HttpHeaders({
        "accept" : "application/json",
        "user-key" : this.userKey
      })

      return this._http.get(`https://developers.zomato.com/api/v2.1/cities?q=${name}`, {headers});
    }
    getLocation(name: string){

      const headers = new HttpHeaders({
        "accept" : "application/json",
        "user-key" : this.userKey
      })

      return this._http.get(`https://developers.zomato.com/api/v2.1/locations?query=${name}`, {headers});
    }
 
    getDetails(res_id: string){
       const headers = new HttpHeaders({
                  "accept" : "application/json",
                  "user-key" : this.userKey
                })
          
                return this._http.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${res_id}`, {headers});

  }
  
}



