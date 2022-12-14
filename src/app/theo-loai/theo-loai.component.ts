import { Component, OnInit } from '@angular/core';
import { Sanpham } from '../models/sanpham/sanpham.model';
import { SharedService } from '../shared.service';
import { CartService } from '../Service/cart.service';
import { Loaisanpham } from '../models/loaisanpham/loaisanpham.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-theo-loai',
  templateUrl: './theo-loai.component.html',
  styleUrls: ['./theo-loai.component.css']
})
export class TheoLoaiComponent implements OnInit {
  totalItem=0

  dsLoaiSP: Loaisanpham[]
  items: Sanpham[]

  constructor(private service:SharedService,private route: Router, private cartService: CartService) { }

  urlHinhanh = this.service.PhotoUrl

  ngOnInit(): void {

    this.loadSanpham()
    this.totalItem = this.cartService.getProducts().length
    this.service.getAllCate().subscribe(data => {
      this.dsLoaiSP = data
    })
  }

  // loadSanpham(){
  //   let id = localStorage.getItem("maloai")
  //   if(id){
  //     this.service.getProductsByCate(parseInt(id)).subscribe(data =>{
  //       this.items = data
  //     })
  //   }
  loadSanpham(){
      let id = localStorage.getItem("maloai")
      if(id){
        this.service.getProductsByCate(parseInt(id)).subscribe(data =>{
          this.items = data
          // this.urlimage=this.service.PhotoUrl;
          })
      }
    }
  //   this.service.GetByPrice().subscribe(data => {
  //     this.listBigPrice = data
  //     this.urlimage=this.service.PhotoUrl;
  //   })
  // }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`Đã thêm ${product.TENSP}`)
  }


  locSP1(id:number){
    console.log(id);
    localStorage.removeItem("maloai")
    localStorage.setItem("maloai", JSON.stringify(id));
    this.route.navigate(['/locSP1']);
    this.loadSanpham();
  }

  chitiet(item: any){
    console.log(item);
    localStorage.removeItem("ProductDetail")
    localStorage.setItem("ProductDetail", JSON.stringify(item))
    this.route.navigate([`/chitiet`]);
  }

  formatCurrency(value: any) {
    let rs = value.toString().split("");
    for (let i = rs.length - 4; i >= 0; i -= 3) {
        rs[i] += ','
    }
    return rs.join('') + ' vnđ'
  }
}
