import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, Platform} from 'ionic-angular';
import { OptionsProvider } from "../../providers/options";
import { DesignProvider } from "../../providers/design";

@IonicPage()
@Component({
  selector: 'page-design',
  templateUrl: 'design.html',
})
export class DesignPage {

  public height;
  public tabs = 'SBOL';
  public equation: string = 'x = \\frac{-b \\pm\\sqrt{b^2 - 4ac}}{2a}';
  public equation2: string = '\\frac{dy}{dx} = \\lim\\limits_{x\\to0} \\frac{f(x + h) - f(x)}{h}';
  public equation3: string = '\\int a {dx} = ax + C';


  constructor(public navCtrl: NavController, public ops: OptionsProvider,public design:DesignProvider, public platform:Platform, private menuCtrl: MenuController) {
    this.height = this.platform.height() - 245;
    this.menuCtrl.enable(true);
  }

}
