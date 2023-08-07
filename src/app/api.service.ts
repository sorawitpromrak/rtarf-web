import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  #rootURL = 'http://10.104.6.88:1337/api';
  #token ='ec2e011679d08c3c7b573add21122e79af5c000d3b46ed9e2e37bc44d036fcb80b2d502aa37b754c2d300aff9c2ee38232f68a563f645c8b1c8fcfbe6f61273e2760a62933cb19cd3a237daf8776b263609f825d5a6e4b34645d6052cabdf8752924559995fdde5dd5188ba9c552ca226c3bc440daf2c7f51df6034b8568164d'

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
  getIntro() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-intros/?filters[display][$eq]=true', { headers });
  }
  
  getHomeServices() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-services/?filters[forhome][$eq]=true', { headers });
  }
  
  getWhoweareServices() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-services/?filters[forwhoweare][$eq]=true', { headers });
  }
  getPeopleServices() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-services/?filters[forpeople][$eq]=true', { headers });
  }
  getSoldiersServices() {
    var headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get(this.rootURL + '/list-services/?filters[forsoldiers][$eq]=true', { headers });
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
