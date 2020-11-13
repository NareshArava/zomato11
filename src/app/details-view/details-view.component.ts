import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  constructor(private rs: RestaurantService, private _router: ActivatedRoute) { }
  restaurant;

  ngOnInit(): void {
    console.log(window.location)
    this._router.params.subscribe(routeParams => {
      console.log(routeParams);
      this.rs.getDetails(routeParams.id).subscribe(data => {
        console.log(data);
        this.restaurant = data;
      })
    })
  }

}
