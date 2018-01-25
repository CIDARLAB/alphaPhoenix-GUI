import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuProvider } from "../../providers/menu";

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

  constructor(public navCtrl: NavController, private menu: MenuProvider) {
    this.menuItem = this.menu.getMenuItem('PerformancePage');
    this.menuItem.status = 'Complete'
  }

  ionViewDidLoad() {
    this.editor = this.ace.edit(this.editorEle.nativeElement);
    this.editor.setTheme("ace/theme/chrome");
    this.editor.setShowPrintMargin(false);
  }

  sample() {
    this.editor.setValue("((G[0,100] in0 <= 4) && (G[0,100] in0 >= 0)) &&\n(((G[0,50] out0 >= 0)&&(G[0,50] out0 <= 25)) && ((G[50,100] out0 >= 25)&&(G[50,100] out0 <= 36)))")
  }

}
