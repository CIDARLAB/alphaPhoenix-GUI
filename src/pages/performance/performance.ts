import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, Platform} from 'ionic-angular';
import {MenuProvider} from "../../providers/menu";
import {PerformanceProvider} from "../../providers/performance";
import {OptionsProvider} from "../../providers/options";
import {HttpProvider} from "../../providers/http";

@IonicPage()
@Component({
  selector: 'page-performance',
  templateUrl: 'performance.html',
})
export class PerformancePage {

  public mode = 'STL';
  public menuItem;
  @ViewChild('editor') editorEle: ElementRef;
  public ace = window['ace'];
  public editor;
  public height;

  constructor(public navCtrl: NavController, private menu: MenuProvider, private per: PerformanceProvider,
              public ops: OptionsProvider, public platform: Platform, private menuCtrl: MenuController, public http: HttpProvider) {
    this.menuItem = this.menu.getMenuItem('PerformancePage');
    this.height = this.platform.height() - 275;
    if (this.per.stlText.length == 0) {
      this.menuItem.status = 'Warning';
      this.menuItem.message = 'STL Text is blank';
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  init() {
    window['editor'].setValue(this.per.stlText, 1);
    let self = this;
    window['editor'].getSession().on('change', function () {
      setTimeout(() => {
        self.per.stlText = window['editor'].getValue();
        if (self.per.stlText.length == 0) {
          self.menuItem.status = 'Warning';
          self.menuItem.message = 'STL Text is blank';
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

  sample() {
    window['editor'].setValue(this.ops.examples[this.ops.sample]['stl'], 1);
    let structural = this.menu.getMenuItem('StructuralPage');
    structural.status = 'Complete';
    this.menuItem.status = 'Complete';
    this.menuItem.message = '';
  }

}
