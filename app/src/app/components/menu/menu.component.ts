import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public auth: AngularFireAuth) {
  }

  logout() {
    this.auth.signOut();
    console.log("Logout");
  }

  ngOnInit(): void {
  }

}
