import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatDetailsComponent } from './category/components/cat-details/cat-details.component';
import { CategoryCardContainerComponent } from './category/components/category-card-container/category-card-container.component';
import { HelloComponent } from './category/hello/hello.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'',component:NavComponent, children:[
    {path:'category',component:CategoryCardContainerComponent},
    {path:'category/:name', component:CatDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
