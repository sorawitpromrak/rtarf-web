import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootURL = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  getpageDetail(pagename: any) {
    return this.http.get(this.rootURL + '/page/' + pagename);
  }
  
  getFaq() {
    return this.http.get(this.rootURL + '/faq/');
  }

  getCategory() {
    return this.http.get(this.rootURL + '/category/');
  }

  getNews(cat:any) {
    return this.http.get(this.rootURL + '/news/' + cat);
  }
  
  getDocs() {
    return this.http.get(this.rootURL + '/doc/');
  }
  
  getServices() {
    return this.http.get(this.rootURL + '/service/');
  }
  
  getActivity() {
    return this.http.get(this.rootURL + '/news/');
  }
  getNewsdetail(id:any) {
    return this.http.get(this.rootURL + '/news-detail/' + id);
  }

}
