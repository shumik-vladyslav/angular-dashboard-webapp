import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private csrf;
  private url = 'http://dev.lineapps.org/';

  private httpHeaders = new HttpHeaders ({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.setCsrf();
  }

  setCsrf() {
    this.http.get(this.url + 'getcsrf').subscribe((data: any) => {
      this.csrf = data.csrf;
      console.log(this.csrf);
    });
  }

  getCsrf() {
    return this.csrf;
  }

  login() {
    const body = {username: 'vlad_s@mail.ru', password: '123456789', _csrf: this.getCsrf()};
    console.log(body);
    return this.http.post(this.url + 'users/login', body, { headers: this.httpHeaders });
  }

  getNavbar() {
    console.log('navBar');
    return this.http.get(this.url + 'actions/getnavbar');
  }
}
