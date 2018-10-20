import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import {MenuProvider} from "../../providers/menu";
import {StructuralProvider} from "../../providers/structural";
import {OptionsProvider} from "../../providers/options";
import {HttpProvider} from "../../providers/http";
import {PerformanceProvider} from "../../providers/performance";

@IonicPage({
  segment: 'specify/:id',
})
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

  constructor(public navCtrl: NavController, public menu: MenuProvider, public str: StructuralProvider, public navParams: NavParams,
              public per: PerformanceProvider, public ops: OptionsProvider, public platform: Platform, private menuCtrl: MenuController, public http: HttpProvider) {
    const projectId = this.navParams.get('id');
    this.menuItem = this.menu.getMenuItem('StructuralPage');
    this.height = this.platform.height() - 275;
    if (this.str.eugeneText.length == 0) {
      this.menuItem.status = 'Warning';
      this.menuItem.message = 'Eugene Text is blank';
    }
    if(projectId) {
      this.http.getProject(projectId).then(results => {
        this.str.eugeneText = results['eugene'];
        this.per.stlText = results['stl'];
        this.ops.registry = results['registry'];
        this.ops.collection = results['collection'];
        this.menuItem.status = 'Complete';
        let performace = this.menu.getMenuItem('PerformancePage');
        performace.status = 'Complete';
        let lib = this.menu.getMenuItem('LibraryPage');
        lib.status = 'Complete';

      });
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  init() {
    let self = this;
    window['editor'].setValue(this.str.eugeneText, 1);
    window['editor'].getSession().on('change', function () {
      setTimeout(() => {
        self.str.eugeneText = window['editor'].getValue();
        if (self.str.eugeneText.length == 0) {
          self.menuItem.status = 'Warning';
          self.menuItem.message = 'Eugene Text is blank';
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

  setStatus(status) {
    this.menuItem.status = status;
  }

  sample() {
    window['editor'].setValue(this.ops.examples[this.ops.sample]['eugene'], 1);
    let performace = this.menu.getMenuItem('PerformancePage');
    performace.status = 'Complete';
  }
}
