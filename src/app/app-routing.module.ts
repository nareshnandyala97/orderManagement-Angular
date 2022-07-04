import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './components/counter/counter.component';
import { UserorderComponent } from './Components/order/order.component';
import { OrderslistComponent } from './Components/orderslist/orderslist.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [{path:'home', component: HomeComponent},{path:'about', component: AboutComponent}, {path:'register', component:UserorderComponent},
{path:'counter', component:CounterComponent},{path:'orderslist', component:OrderslistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
