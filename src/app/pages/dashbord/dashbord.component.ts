import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getCsrf();

    setTimeout(() => {
      this.auth.login().subscribe((data) => {
        console.log(data);
      });
    }, 1000);
    setTimeout(() => {
      this.auth.getNavbar().subscribe((data) => {
        console.log(data);
      });
    }, 1200);
  }

}
