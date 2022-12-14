import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  readonly APIUrl = 'http://localhost:53008/api'
  readonly PhotoUrl = 'http://localhost:53008/Photos/'

  // SAN PHAM
  getNewest(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/Sanphams/Newest-Products')
  }

  // mở api ra trong controler saả phẩm ý, tìm 2 cai naà um đợi
  GetByPrice(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/Sanphams/GetByPrice')
  }

  GetByPriceSmall(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/Sanphams/price')
  }





  GetSPByName(TENSP: string): Observable<any> {
    let rmv = /"/gi; // tìm kiếm những chuỗi có giá trị = " trong url
    let url = this.APIUrl + `/Sanphams/Search/${TENSP}`
    console.log(url);

    return this.http.get<any>(url.replace(rmv, '')) // thay thế " = rỗng
  }

  // KHACH HANG
  getUsers(id: number) {
    return this.http.get(this.APIUrl + '/KhachHangs/' + id)
  }

  getAllUser(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/KhachHangs');
  }
  addUser(val: any) {
    return this.http.post(this.APIUrl + '/KhachHangs/', val)
  }

  getAllCate(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/loaisanphams/')
  }

  // chi tiết đơn hang
  addOrderDetail(val: any) {
    return this.http.post(this.APIUrl + '/ChiTietDonHangs/', val)
  }

  getProductsByCate(id: number): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/SanPhams/LocTheoLoai/?maloai=' + id)
  }

  // DON HANG
  addOrder(val: any) {
    return this.http.post(this.APIUrl + '/DonHangs/', val);
  }

  getNewestOd(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/DonHangs/GetNewestOrderID/');
  }


  //TIN TUC
  getAllTypeNew(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/LoaiTins')
  }

  getAllNews(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/TinTucs')
  }

  getNewsByCate(typeID: number): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Tintucs/GetNewBytypeName?typeID=' + typeID)
  }
  logTheoLoaiTin(typeID: number): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Tintucs/LocTheoLoai?typeID=' + typeID)
  }
  /////////////////Banner
  getAllBanner(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/DanhGias')
  }

  //Get Sản Phẩm Bán Chạy
  getSanPhamBySanPhamBanChay() {
    return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=17');
  }

  //Get Tay Trang
  getSanPhamByTayTrang() {
    return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=1');
  }
 //Get Sua Rua Mat
 getSanPhamBySuaRuaMat() {
  return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=5');
}

//Get Tay Te Bao Chet
getSanPhamByTayTeBaoChet() {
  return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=6');
}

//Get Xit Khoang
getSanPhamByXitKhoang() {
  return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=7');
}
//Get Toner
getSanPhamByToner() {
  return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=8');
}
//Get Serum
getSanPhamBySerum() {
  return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=9');
}
//Get Kem duong giam mun
getSanPhamByKemDuongGiamMun() {
  return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=10');
}
//Get Kem duong
getSanPhamByKemDuong() {
  return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=11');
}
//Get Kem chong nang
getSanPhamByKemChongNang() {
  return this.http.get('http://localhost:53008/api/SanPhams/LocTheoLoai?MALOAI=12');
}
}
