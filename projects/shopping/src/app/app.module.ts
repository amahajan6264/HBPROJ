import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/Home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NetflixindexComponent } from './netflixwebsite/netflixindex/netflixindex.component';
import { NetflixmainComponent } from './netflixwebsite/netflixmain/netflixmain.component';
import { NetflixheaderComponent } from './netflixwebsite/netflixheader/netflixheader.component';
import { NetflixregisterComponent } from './netflixwebsite/netflixregister/netflixregister.component';
import { BindingdataComponent } from './component/bindingdata/bindingdata.component';
import { Bindingdata1Component } from './component/bindingdata1/bindingdata1.component';
import { IfdemoComponent } from './component/ifdemo/ifdemo.component';
import { FordemoComponent } from './component/ForDemo/fordemo/fordemo.component';
import { ShoppingcartComponent } from './component/shoppingcart/shoppingcart.component';
import { ForpropertiesComponent } from './component/forproperties/forproperties.component';
import { EventdemoComponent } from './component/eventdemo/eventdemo.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { ProductComponent } from './component/product/product.component';
import { FilterComponent } from './component/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicedemoComponent } from './component/servicedemo/servicedemo.component';
import { ReactivedemoComponent } from './component/reactivedemo/reactivedemo.component';
import { StudentService } from 'projects/crud_using_angular/src/app/student.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NetflixindexComponent,
    NetflixmainComponent,
    NetflixheaderComponent,
    NetflixregisterComponent,
    BindingdataComponent,
    Bindingdata1Component,
    IfdemoComponent,
    FordemoComponent,
    ShoppingcartComponent,
    ForpropertiesComponent,
    EventdemoComponent,
    ParentComponent,
    ChildComponent,
    ProductComponent,
    FilterComponent,
    ServicedemoComponent,
    RegisterComponent,
    ReactivedemoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ServicedemoComponent]
})
export class AppModule { }
