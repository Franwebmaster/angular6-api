import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = "https://api.themoviedb.org/3";

  constructor(private http:Http) { }

  getUltimosFilmes() {
    return this.http.get(this.baseUrl + "/movie/popular?api_key=bb087c7f8538a11e3a56739e6609c1eb");
  }
}
