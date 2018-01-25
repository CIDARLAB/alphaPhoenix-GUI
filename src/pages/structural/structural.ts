import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {MenuProvider} from "../../providers/menu";

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

  constructor(public navCtrl: NavController, public menu: MenuProvider) {
    for(let i = 1; i <= 100; i ++) {
      this.options.push(i);
    }
    this.menu.getMenuItem('StructuralPage').status= 'Warning';
  }

  ionViewDidLoad() {
    this.editor = this.ace.edit(this.editorEle.nativeElement);
    this.editor.setTheme("ace/theme/chrome");
    this.editor.setShowPrintMargin(false);
  }

  sample() {
    this.editor.setValue("Other Code")
  }

}
