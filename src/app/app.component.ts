import { Component, ViewChild, OnInit } from '@angular/core';
import { MatToolbar, MatIcon } from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('navbar') navbar;
  @ViewChild('dashboard') dashboard;

  buttonIcon = 'menu';


  constructor() {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


toggleNav() {

  if(this.navbar.nativeElement.className == 'navbarClose') {
  console.log("1");

    this.navbar.nativeElement.className = "navbarOpen";
    this.dashboard.nativeElement.className = 'dashboardOpen';
    this.buttonIcon = "chevron_left";
  }else if(this.navbar.nativeElement.className == 'navbarOpen') {
    console.log("2");
    this.navbar.nativeElement.className = "navbarClose";
    this.dashboard.nativeElement.className = 'dashboardClose';
    this.dashboard.nativeElement.className = 'dashboardOpen';
    this.buttonIcon = "menu";

  }

}

}
