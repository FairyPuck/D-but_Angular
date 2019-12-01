import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nom_user: string;
  mdp_user: string;
  mdp_user_confirm: string;
  logged = false;
  spin_show = false;
  constructor(private _snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(value=>{
      console.log(value);
    });
  }

  register() {
    this.spin_show = true;
    console.log("connexion...");
    console.log("nom_user", this.nom_user);
    console.log("mdp_user", this.mdp_user);
    console.log("mdp_user_confirm", this.mdp_user_confirm);

    // setTimeout(() => {
    //   if (this.login == "admin") {
    //     this.logged = true;
    //   }
    //   if (this.logged == true) {
    //     this._snackBar.open("tu es connecté !" , null, {
    //       duration: 2000,
    //     });
    //     duration : 3000;
    //   } 
    //   else{
    //     this._snackBar.open("truand !" , null,{
    //       duration: 2000,
    //     });
    //      console.log("truand !")
    //      duration : 3000;
    //   }

    //   this.spin_show = false;
    // }, 3000);
  }
}
