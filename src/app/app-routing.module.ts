import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TintucComponent } from './Component/tintuc/tintuc.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { IndexHomeComponent } from './index-home/index-home.component';
import { TheoLoaiComponent } from './theo-loai/theo-loai.component';
import { CartComponent } from './cart/cart.component';
import { ChitietComponent } from './chitiet/chitiet.component';
const routes: Routes = [

  {
    path: 'chitiet', component: ChitietComponent
  },
  {
    path: 'tintuc', component: TintucComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'locSP', component: TheoLoaiComponent
  },
  {
    path: 'locSP1', component: TheoLoaiComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: "", component: IndexHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
