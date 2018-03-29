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

  ionViewDidLoad() {
    this.editor = this.ace.edit(this.editorEle.nativeElement);
    this.editor.setTheme("ace/theme/chrome");
    this.editor.setShowPrintMargin(false);
    let self = this;
    this.editor.getSession().on('change', function() {
      self.per.stlText = self.editor.getValue();
      if(self.per.stlText.length > 0) {
        self.menuItem.status= 'Complete';
      } else {
        self.menuItem.status= 'Error';
        self.menuItem.message= 'STL code is blank';
      }
    });
  }

  ionViewDidEnter() {
    this.editor.setValue(this.per.stlText);
  }

  sample() {
    this.editor.setValue(this.ops.examples[this.ops.sample]['stl']);
  }

}
