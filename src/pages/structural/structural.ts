import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {MenuProvider} from "../../providers/menu";
import {StructuralProvider} from "../../providers/structural";
import {OptionsProvider} from "../../providers/options";

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

  constructor(public navCtrl: NavController, public menu: MenuProvider, public str: StructuralProvider, public ops:OptionsProvider) {
    for (let i = 1; i <= 100; i++) {
      this.options.push(i);
    }
    this.menuItem = this.menu.getMenuItem('StructuralPage');
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
    this.editor.setValue(this.str.eugeneText);
  }

  sample() {
    this.size = 8;
    this.number = 24;
    this.editor.setValue("\
// Size = 8\n\
// 24 Solutions\n\
\n\
// COUNTING\n\
ip1 exactly 1\n\
rp1 exactly 1\n\
g1 exactly 1\n\
unk2 exactly 1\n\
r1 exactly 1\n\
r2 exactly 1\n\
t1 exactly 1\n\
t2 exactly 1\n\
\n\
// INTERACTIONS\n\
g1 represses rp1\n\
ip1 drives g1\n\
not ip1 drives unk2\n\
rp1 drives unk2\n\
not rp1 drives g1\n\
\n\
//POSITIONING\n\
r1 nextto g1\n\
r1 SAME_ORIENTATION g1\n\
r1 before g1 or r1 after g1\n\
r1 before g1 or reverse r1\n\
forward r1 or r1 after g1\n\
forward r1 or reverse r1\n\
  \n\
r2 nextto unk2\n\
r2 SAME_ORIENTATION unk2\n\
r2 before unk2 or r2 after unk2\n\
r2 before unk2 or reverse r2\n\
forward r2 or r2 after unk2\n\
forward r2 or reverse r2\n\
  \n\
t2 after unk2 or t2 before unk2\n\
t2 after unk2 or reverse unk2\n\
forward unk2 or t2 before unk2\n\
forward unk2 or reverse unk2\n\
  \n\
t1 after g1 or t1 before g1\n\
t1 after g1 or reverse g1\n\
forward g1 or t1 before g1\n\
forward g1 or reverse g1\n\
  \n\
//ORIENTATION\n\
ip1 SAME_ORIENTATION r1\n\
ip1 SAME_ORIENTATION t1\n\
rp1 SAME_ORIENTATION r2\n\
rp1 SAME_ORIENTATION t2");
  }
}
