import { Component, OnInit } from '@angular/core';
import { Loaisanpham } from 'src/app/models/loaisanpham/loaisanpham.model';
import { Sanpham } from 'src/app/models/sanpham/sanpham.model';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem = 0
  products: any[] = [];
  totalMoney!: number;
  photoPath: string

  keyword: string

  kh_id:number
  kh_taikhoan:string
  kh_matkhau:string
  kh_matkhau2: string
  kh_diachi:string
  kh_sdt:string
  kh_email:string
  kh_tenkh:string



  dsLoaiSP: Loaisanpham[]

  // loaij san pham headeaf


  listNewest: Sanpham[]

  listHotest: Sanpham[]
  listBigPrice: Sanpham[]
  listSmallPrice: Sanpham[]

  imagePath: string = this.service.PhotoUrl
  urlimage:any;
  constructor(private service: SharedService, private route: Router, private cartSerice: CartService) { }

  ngOnInit() {
    this.totalItem = this.cartSerice.getProducts().length
    this.service.getAllCate().subscribe(data => {
      this.dsLoaiSP = data
    })
    this.loadData()
    this.loadCart();
    let user=localStorage.getItem('user');

    if(user){
      this.kh_tenkh = JSON.parse(user).TENKH;
      this.kh_id = parseInt(JSON.parse(user).id);
    }
  }

  locSP(id:number){
    console.log(id);
    localStorage.removeItem("maloai")
    localStorage.setItem("maloai", JSON.stringify(id));
    this.route.navigate(['/locSP']);
  }
  loadData() {
    this.kh_id = 0
    this.kh_taikhoan = ''
    this.kh_matkhau = ''
    this.kh_matkhau2 = ''
    this.kh_diachi = ''
    this.kh_sdt = ''
    this.kh_email = ''
    this.kh_tenkh = ''
  }







  loadCart() {
    this.cartSerice.products$.subscribe((res) => {
      this.products = res;
      this.totalMoney = 0;
      for (let p of this.products) {
        this.totalMoney += p.Quantity * p.giaban;
      }
    });
    this.photoPath = this.service.PhotoUrl
  }

  go(keyword: string) {
    localStorage.removeItem("keyword")
    localStorage.setItem("keyword", JSON.stringify(keyword))
    this.route.navigateByUrl(`/search`);
  }

  keyPress(event: any) {
    // let vl =(<HTMLInputElement>document.getElementById("keyword")).value;
    let vl = this.keyword;
    if(vl){
      if(event.keyCode == 13){
        this.go(vl)
      }
    }
  }

}
