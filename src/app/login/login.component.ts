import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  mdp: string;
  logged = false;
  spin_show = false;
  constructor() { }

  ngOnInit() {
  }

  connexion() {
    this.spin_show = true;
    console.log("connexion...");
    console.log("login", this.login);
    console.log("mdp", this.mdp);

    setTimeout(() => {
      if (this.login == "admin" && this.mdp == "password") {
        this.logged = true;
      }
      if (this.logged == true) {
        console.log("tu es connecté !")
        duration : 3000;
      } 
      else{
         console.log("truand !")
         duration : 3000;
      }

      this.spin_show = false;
    }, 3000);
  }
}
