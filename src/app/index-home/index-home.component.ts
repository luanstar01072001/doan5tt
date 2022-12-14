import { CartService } from './../Service/cart.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Sanpham } from '../models/sanpham/sanpham.model';
import { Loaisanpham } from '../models/loaisanpham/loaisanpham.model';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';


import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.css']
})
export class IndexHomeComponent implements OnInit {


  constructor(private service: SharedService, private route: Router, private cartService: CartService) { }
  totalItem = 0

  dsLoaiSP: Loaisanpham[]
  listNewest: Sanpham[]

  listHotest: Sanpham[]
  listBigPrice: Sanpham[]
  listSmallPrice: Sanpham[]

  imagePath: string = this.service.PhotoUrl
  urlimage: any;
  sanphambanchay: any;
  taytrang: any;
  suaruamat: any;
  taytebaochet: any;
  xitkhoang: any;
  toner: any;
  serum:any;
  kemduonggiammun:any;
  kemduong:any;
  kemchongnang:any;
  banner: any;
  ngOnInit(): void {
    this.lamMoiDuLieu();
    this.getAllBanner();
    this.getSanPhamBySanPhamBanChay();
    this.getSanPhamByTayTrang();
    this.getSanPhamBySuaRuaMat();
    this.getSanPhamByTayTeBaoChet();
    this.getSanPhamByXitKhoang();
    this.getSanPhamByToner();
    this.getSanPhamBySerum();
    this.getSanPhamByKemDuongGiamMun();
    this.getSanPhamByKemDuong();
    this.getSanPhamByKemChongNang();
    this.totalItem = this.cartService.getProducts().length
    this.service.getAllCate().subscribe(data => {
      this.dsLoaiSP = data
    })
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`Đã thêm ${product.TENSP}`)
  }


  lamMoiDuLieu() {


    this.service.getNewest().subscribe(data => {
      this.listNewest = data
      this.urlimage = this.service.PhotoUrl;
    })


    this.service.GetByPriceSmall().subscribe(data => {
      this.listSmallPrice = data
      this.urlimage = this.service.PhotoUrl;
    })



  }
  // GetByPriceSmall
  locSP(id: number) {
    console.log(id);
    localStorage.removeItem("maloai")
    localStorage.setItem("maloai", JSON.stringify(id));
    this.route.navigate(['/locSP']);
  }
  chitiet(item: any) {
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

  getAllBanner() {
    this.service.getAllBanner().subscribe(res => {
      this.banner = res;
      console.log(this.banner)
    })
  }
  getSanPhamBySanPhamBanChay() {
    this.service.getSanPhamBySanPhamBanChay().subscribe(res => {
      this.sanphambanchay = res;
      console.log(this.sanphambanchay)
    })
  }
  getSanPhamByTayTrang() {
    this.service.getSanPhamByTayTrang().subscribe(res => {
      this.taytrang = res;
      console.log(this.taytrang)
    })
  }
  getSanPhamBySuaRuaMat() {
    this.service.getSanPhamBySuaRuaMat().subscribe(res => {
      this.suaruamat = res;
      console.log(this.suaruamat)
    })
  }
  getSanPhamByTayTeBaoChet() {
    this.service.getSanPhamByTayTeBaoChet().subscribe(res => {
      this.taytebaochet = res;
      console.log(this.taytebaochet)
    })
  }
  getSanPhamByXitKhoang() {
    this.service.getSanPhamByXitKhoang().subscribe(res => {
      this.xitkhoang = res;
      console.log(this.xitkhoang)
    })
  }
  getSanPhamByToner() {
    this.service.getSanPhamByToner().subscribe(res => {
      this.toner = res;
      console.log(this.toner)
    })
  }
  getSanPhamBySerum() {
    this.service.getSanPhamBySerum().subscribe(res => {
      this.serum = res;
      console.log(this.serum)
    })
  }
  getSanPhamByKemDuongGiamMun() {
    this.service.getSanPhamByKemDuongGiamMun().subscribe(res => {
      this.kemduonggiammun = res;
      console.log(this.kemduonggiammun)
    })
  }
  getSanPhamByKemDuong() {
    this.service.getSanPhamByKemDuong().subscribe(res => {
      this.kemduong = res;
      console.log(this.kemduong)
    })
  }
  getSanPhamByKemChongNang() {
    this.service.getSanPhamByKemChongNang().subscribe(res => {
      this.kemchongnang = res;
      console.log(this.kemchongnang)
    })
  }
}
