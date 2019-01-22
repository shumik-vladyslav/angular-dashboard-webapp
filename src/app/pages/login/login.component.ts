import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const httpPostOptions =
{   
    headers:
        new HttpHeaders (
        {   
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
        }),
    withCredentials: true,
};

    this.http.post('http://dev.lineapps.org/dashboard/login', {
      "username":"vlad_s@mail.ru",
      "password":"123456789"
    }, httpPostOptions).subscribe((data) => {
      console.log(data)
    })
   }

  ngOnInit() {
  }

}
