import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: ProductSearchComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
