import { FormsModule } from '@angular/forms';
import { CartService } from './cart.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HeroesComponent } from './heroes/heroes.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTitlePipe } from './employee-title.pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HeroesComponent,
    EmployeeComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent},
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent},
      { path: 'heroes', component: HeroesComponent},
      { path: 'employee', component: EmployeeComponent}
    ])
  ],

  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
