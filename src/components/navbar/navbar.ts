import { Component, Input } from '@angular/core';
import { HttpProvider } from "../../providers/http";
import { App } from "ionic-angular";

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  @Input()
  public page;
  private navCtrl;

  constructor(
    private app:App,
    public http:HttpProvider) {
  }

  ngAfterViewInit() {
    this.navCtrl = this.app.getRootNav();
  }

}
