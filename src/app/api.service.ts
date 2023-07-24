import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootURL = 'http://localhost:1337/api';
  token ='97f42b89e99f8488c4578d54f1408616a2e13f2beb015b0af9aa06375d4009d4e3d0a2eaec5b6240d4e420d667b184e67cbdcdce809b277afc45232b61e3533cb9ff641655effc70ee56ed98162923f8e0942ada2e49b66260e29b743cc6e957ef72a8bdbdba49481d7c390b7bff07b5696412022ba265371bfb5b9dc0c18124'
  constructor(private http: HttpClient) { }

  getpageDetail(pagename: any) {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-pages/?filters[name][$eq]=' + pagename, { headers });
  }
  
  getFaq() { 
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-faqs/', { headers });
  }

  getCategory() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-groups/', { headers });
  }

  getNews(cat:any) {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-news/?filters[category][$eq]=' + cat, { headers });
  }
  getLastestNews() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-news/?pagination[start]=0&pagination[limit]=5', { headers });  
  }
  getDocs() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-docs/', { headers });
  }
  
  getServices() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-services/', { headers });
  }
  
  getActivity() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    var cat = 'activity'
    return this.http.get(this.rootURL + '/list-news/?filters[category][$eq]='+cat+'&pagination[start]=0&pagination[limit]=4', { headers });
  }

  getNewsdetail(id:any) {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-news/' + id, { headers });
  }

}
