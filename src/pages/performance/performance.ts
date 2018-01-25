import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuProvider } from "../../providers/menu";
import { PerformanceProvider } from "../../providers/performance";

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

  constructor(public navCtrl: NavController, private menu: MenuProvider, private per:PerformanceProvider) {
    this.menuItem = this.menu.getMenuItem('PerformancePage');
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
