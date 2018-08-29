import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, Platform} from 'ionic-angular';
import {MenuProvider} from "../../providers/menu";
import {StructuralProvider} from "../../providers/structural";
import {OptionsProvider} from "../../providers/options";
import {HttpProvider} from "../../providers/http";

@IonicPage()
@Component({
  selector: 'page-structural',
  templateUrl: 'structural.html',
})
export class StructuralPage {

  public mode = 'eugene';
  @ViewChild('editor') editorEle: ElementRef;
  public ace = window['ace'];
  public editor;
  public menuItem;
  public height;

  constructor(public navCtrl: NavController, public menu: MenuProvider, public str: StructuralProvider,
              public ops: OptionsProvider, public platform: Platform, private menuCtrl: MenuController, public http: HttpProvider) {
    this.menuItem = this.menu.getMenuItem('StructuralPage');
    this.height = this.platform.height() - 275;
    if (this.str.eugeneText.length == 0) {
      this.menuItem.status = 'Warning';
      this.menuItem.message = 'Eugene Text is blank';
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  init() {
    let self = this;
    window['editor'].setValue(this.str.eugeneText, 1);
    window['editor'].getSession().on('change', function () {
      setTimeout(() => {
        self.str.eugeneText = window['editor'].getValue();
        if (self.str.eugeneText.length == 0) {
          self.menuItem.status = 'Warning';
          self.menuItem.message = 'Eugene Text is blank';
        } else if (window['editor'].getSession().getAnnotations().length == 0) {
          self.menuItem.status = 'Complete';
          self.menuItem.message = '';
        } else {
          self.menuItem.status = 'Error';
          self.menuItem.message = '';
        }
        window.dispatchEvent(new Event('resize'));
      }, 1000);
    });
  }

  setStatus(status) {
    this.menuItem.status = status;
  }

  sample() {
    window['editor'].setValue(this.ops.examples[this.ops.sample]['eugene'], 1);
    let performace = this.menu.getMenuItem('PerformancePage');
    performace.status = 'Complete';
  }
}
