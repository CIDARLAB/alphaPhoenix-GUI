import { Component, ElementRef, ViewChild } from '@angular/core';
import {IonicPage, MenuController, NavController, Platform} from 'ionic-angular';
import { MenuProvider } from "../../providers/menu";
import { PerformanceProvider } from "../../providers/performance";
import {OptionsProvider} from "../../providers/options";

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

  constructor(public navCtrl: NavController, private menu: MenuProvider, private per:PerformanceProvider,
              public ops:OptionsProvider, public platform:Platform, private menuCtrl:MenuController) {
    this.menuItem = this.menu.getMenuItem('PerformancePage');
    this.height = this.platform.height()- 275;
    this.menuCtrl.enable(true);
  }

  init() {
    window['editor'].setValue(this.per.stlText,1);
    let self = this;
    window['editor'].getSession().on('change', function() {
      self.per.stlText = window['editor'].getValue();
    });
  }

  sample() {
    window['editor'].setValue(this.ops.examples[this.ops.sample]['stl'],1);
    let structural = this.menu.getMenuItem('StructuralPage');
    structural.status = 'Complete';
  }

}
