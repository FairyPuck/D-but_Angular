import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nomUser: string;
  mdpUser: string;
  mdpUserConfirm: string;
  logged = false;
  spinShow = false;

  ngOnInit() {
  }

  register() {
    this.spinShow = true;
    console.log('connexion...');
    console.log('nom_user', this.nomUser);
    console.log('mdp_user', this.mdpUser);
    console.log('mdp_user_confirm', this.mdpUserConfirm);

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
