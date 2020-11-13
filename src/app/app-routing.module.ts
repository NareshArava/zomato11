import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchViewComponent } from './search-view/search-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';

const routes: Routes = [
  {
    path: "search",
    component: SearchViewComponent
  },
  {
    path: "details/:id",
    component: DetailsViewComponent
  },
  {
    path:"",
    redirectTo:"/search",
    pathMatch: "full"
  },

  {
    path:"**",
    component: SearchViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
