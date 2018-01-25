import { Component, ElementRef, ViewChild } from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
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
              public ops:OptionsProvider, public platform:Platform) {
    this.menuItem = this.menu.getMenuItem('PerformancePage');
    this.height = this.platform.height()- 275;
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
    this.editor.setValue("((G[0,100] in0 <= 4) && (G[0,100] in0 >= 0)) &&\n(((G[0,50] out0 >= 0)&&(G[0,50] out0 <= 25)) && ((G[50,100] out0 >= 25)&&(G[50,100] out0 <= 36)))")
  }

}
