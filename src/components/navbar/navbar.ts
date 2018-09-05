import { Component, Input } from '@angular/core';
import { HttpProvider } from "../../providers/http";
import { App } from "ionic-angular";
import {OptionsProvider} from "../../providers/options";

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
    public ops: OptionsProvider,
    public http:HttpProvider) {
  }

  ngAfterViewInit() {
    this.navCtrl = this.app.getRootNav();
  }

}
