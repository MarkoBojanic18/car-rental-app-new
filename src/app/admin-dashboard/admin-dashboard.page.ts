import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  tasks;

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }

  goToSubject(){

  }

  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

}
