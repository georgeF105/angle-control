import { Component } from '@angular/core';
import * as Firebase from 'firebase';

import { firebase } from '../firebaseConfig'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Home Control';
  loggedIn = false;
  userName: string;

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        this.loggedIn = true;
        this.userName = user.displayName || user.email;
      } else {
        this.loggedIn = false;
        this.userName = ""
      }
    })
  }

  logIn() {
    console.log('trying to login');
    const provider = new Firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logOut(): void {
    firebase.auth().signOut();
  }
}