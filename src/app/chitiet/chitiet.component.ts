import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {


  SanPhamID:number
  TENSP:string
  GIABAN:string
  IMAGE:string
  MALOAI:string
  MOTA:string
  XUATXU:string
  GIANHAP:string
  SOLUONGTON:number

prd: any
totalItem = 0
PrdImgPath: string
constructor(private service:SharedService,private route: Router, private cartService: CartService) { }

ngOnInit(): void {
  this.loadProductDetails();
  this.PrdImgPath = this.service.PhotoUrl
  this.totalItem = this.cartService.getProducts().length
}

loadProductDetails() {
  this.prd = localStorage.getItem('ProductDetail')
  if (this.prd) {
    this.SanPhamID = JSON.parse(this.prd).SanPhamID;
    this.TENSP = JSON.parse(this.prd).TENSP;
    this.GIABAN = this.formatCurrency(JSON.parse(this.prd).GIABAN)
    this.GIANHAP = this.formatCurrency(JSON.parse(this.prd).GIANHAP)
    this.IMAGE = JSON.parse(this.prd).IMAGE;
    this.MOTA = JSON.parse(this.prd).MOTA;
  }
  let x = document.getElementById("description")
  if (x) {
    x.innerHTML += `<h4 style="margin-top: 50px; color: black">Mô tả sản phẩm</h4>`
    x.innerHTML += this.MOTA
  }
}

addToCart(): void {
  if (this.prd) {
    this.cartService.addToCart(JSON.parse(this.prd));
    alert(`Đã thêm ${JSON.parse(this.prd).TENSP} vào giỏ hàng của bạn`)
  }
}

formatCurrency(value: any) {
  let rs = value.toString().split("");
  for (let i = rs.length - 4; i >= 0; i -= 3) {
      rs[i] += ','
  }
  return rs.join('') + ' ₫ '
}

}
