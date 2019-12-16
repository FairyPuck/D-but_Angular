import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login: string;
  mdp: string;
  logged = false;
  spinShow = false;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
  }

  connexion() {
    this.spinShow = true;
    console.log('connexion...');
    console.log('login', this.login);
    console.log('mdp', this.mdp);

    // setTimeout(() => {
    //   if (this.login == "admin") {qs
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

    this.http.get('https://jsonplaceholder.typicode.com/users?username=' + this.login)
      .subscribe((value: any[]) => {
        if (value.length === 1) {
          this.logged = true;
          this.snackBar.open('Tu es connecté !', null, {
            duration: 2000,
          });
        } else {
          this.snackBar.open('Vas t inscrire !', null, {
            duration: 2000,
          });
        }
      }, erreurGet => {
        console.error('erreur ! ', erreurGet.error);
      });
  }
}

