import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MenuProvider} from "../providers/menu";
import {HttpProvider} from "../providers/http";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuProvider,
              public http:HttpProvider) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.http.token) {
        this.rootPage = 'ProjectsPage';
      } else {
        this.rootPage = 'WelcomePage';
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  getActivePage() {
    if(this.nav.getActive()) {
      return this.nav.getActive().name
    } else {
      return ''
    }
  }
}
