import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart = [1];
  user = 'abilira34@gmail.com';
  userIsAuthenticated = false;

  constructor() { }

  ngOnInit() {
  }

}
