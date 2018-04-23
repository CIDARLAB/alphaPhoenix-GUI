import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http";


@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  private email;
  private complete = false;
  private error;

  constructor(public navCtrl: NavController, public http: HttpProvider, private menuCtrl:MenuController) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  forgot() {
    this.error = null;
    if(this.email) {
      this.http.forgot(this.email).toPromise().then(res=> {
      }).catch(error => {
        if(error.status == 200) {
          this.complete = true;
        } else {
          this.error = error.error;
        }
      });
    } else {
      this.error = 'Fill out all required fields';
    }
  }

}
