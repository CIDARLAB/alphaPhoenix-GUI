import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuProvider } from "../providers/menu";
import { HttpProvider } from "../providers/http";
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuProvider,
              public http:HttpProvider, private storage:Storage) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initializeStorage().then(()=> {
        this.http.getLoginInfo().then(() => {
          if(this.http.token) {
            this.rootPage = 'ProjectsPage';
          } else {
            this.rootPage = 'WelcomePage';
          }
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        });
      });
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

  initializeStorage() {
    let that = this;

    function recursive(resolve) {
      that.storage.set('dbOpen', true);
      that.storage.get('dbOpen').then((data) => {
        if (data) {
          // db ready to use
          console.log('Read dbOpen from db successful');
          resolve(true);
        } else {
          //not ready yet loop round and try to initialise again
          console.log('Read dbOpen from db failed');
          recursive(resolve);
        }
      });
    }

    return new Promise((resolve) => {
      recursive(resolve);
    });
  }
}
