import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('http://cb465f0c.ngrok.io/api/test');
  }

  delete(id) {
    return this.http.delete(`http://cb465f0c.ngrok.io/api/test/${id}`);
  }

  post(post) {
    return this.http.post('http://cb465f0c.ngrok.io/api/test', post);
  }

}
