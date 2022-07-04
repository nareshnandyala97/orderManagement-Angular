import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserorderComponent } from './Components/order/order.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './components/counter/counter.component';
import { EllipsisPipe } from './ellipsis.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderslistComponent } from './Components/orderslist/orderslist.component';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UserorderComponent,
    NavbarComponent,
    AboutComponent,
    CounterComponent,
    EllipsisPipe,
    OrderslistComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
