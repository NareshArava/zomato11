import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "../restaurant.service";

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  [x: string]: any;
  title = 'zomato';
  error =null;
  results:any[]= [];
  name="";
  data:Array<any>
  totalRecords:number
  page:number =1
  selectedLocationLat ="28.625789";
  selectedLocationLong ="77.210276";

  constructor(private res: RestaurantService)
  {
    this.data = new Array<any>()
  }
    
  ngOnInit() {
    this.getUsers();
   }
 getUsers(){
   this.random.getData().subscribe((data)=>{
   console.log(data)
   this.data = data.results
   this.totalRecords = data.results.length
   console.log(this.page)
   })

 }
 onSearch()
   {
     console.log(this.name)
     this.res.getSearch(this.name, this.selectedLocationLat, this.selectedLocationLong).subscribe((data : any) =>{
     this.results=data.restaurants;
      console.log(data);
  },
  error =>{
    this.error="result Not Found"
  })
 }

 

    getLatLong(cityName:string){
    console.log(cityName)
    this.res.getLocation(cityName).subscribe((locationDetails: any) => {
     this.selectedLocationLat = locationDetails.location_suggestions[0].latitude;
     this.selectedLocationLong = locationDetails.location_suggestions[0].longitude;
   })
 }
}
