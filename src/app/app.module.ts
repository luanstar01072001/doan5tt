import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { TintucComponent } from './Component/tintuc/tintuc.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { TheoLoaiComponent } from './theo-loai/theo-loai.component';
import { IndexHomeComponent } from './index-home/index-home.component';
import { CartComponent } from './cart/cart.component';
import { ChitietComponent } from './chitiet/chitiet.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TintucComponent,
    CheckoutComponent,
    TheoLoaiComponent,
    IndexHomeComponent,
    CartComponent,
    ChitietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
