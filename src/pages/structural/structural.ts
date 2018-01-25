import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {MenuProvider} from "../../providers/menu";
import {StructuralProvider} from "../../providers/structural";

@IonicPage()
@Component({
  selector: 'page-structural',
  templateUrl: 'structural.html',
})
export class StructuralPage {

  public options = [];
  public size = 1;
  public number = 1;
  public mode = 'eugene';
  @ViewChild('editor') editorEle: ElementRef;
  public ace = window['ace'];
  public editor;
  public menuItem;

  constructor(public navCtrl: NavController, public menu: MenuProvider, public str:StructuralProvider) {
    for(let i = 1; i <= 100; i ++) {
      this.options.push(i);
    }
    this.menuItem = this.menu.getMenuItem('StructuralPage');
  }

  ionViewDidLoad() {
    this.editor = this.ace.edit(this.editorEle.nativeElement);
    this.editor.setTheme("ace/theme/chrome");
    this.editor.setShowPrintMargin(false);
    let self = this;
    this.editor.getSession().on('change', function() {
      self.str.eugeneText = self.editor.getValue();
      if(self.str.eugeneText.length > 0) {
        self.menuItem.status= 'Complete';
      } else {
        self.menuItem.status= 'Error';
        self.menuItem.message= 'Eugene code is blank';
      }
    });
  }

  ionViewDidEnter() {
    this.editor.setValue(this.str.eugeneText);
  }

  sample() {
    this.editor.setValue("Other Code")
  }

}
