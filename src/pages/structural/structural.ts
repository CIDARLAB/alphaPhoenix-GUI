import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, Platform} from 'ionic-angular';
import {MenuProvider} from "../../providers/menu";
import {StructuralProvider} from "../../providers/structural";
import {OptionsProvider} from "../../providers/options";

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
              public ops:OptionsProvider, public platform:Platform, private menuCtrl:MenuController) {
    this.menuItem = this.menu.getMenuItem('StructuralPage');
    this.height = this.platform.height()- 275;
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    this.editor = this.ace.edit(this.editorEle.nativeElement);
    this.editor.setTheme("ace/theme/chrome");
    this.editor.setShowPrintMargin(false);
    let self = this;
    this.editor.getSession().on('change', function () {
      self.str.eugeneText = self.editor.getValue();
      if (self.str.eugeneText.length > 0) {
        self.menuItem.status = 'Complete';
      } else {
        self.menuItem.status = 'Error';
        self.menuItem.message = 'Eugene code is blank';
      }
    });
  }

  ionViewDidEnter() {
    this.editor.setValue(this.str.eugeneText,1);
  }

  sample() {
    this.editor.setValue(this.ops.examples[this.ops.sample]['eugene'],1);
    let performace = this.menu.getMenuItem('PerformancePage');
    performace.status = 'Complete';
  }
}
