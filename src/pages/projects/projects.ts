import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {OptionsProvider} from "../../providers/options";
import {HttpProvider} from "../../providers/http";

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  public data = [];

  public columns: any = [{
    prop: 'projectName'
  }, {
    name: 'Specification'
  }, {
    name: 'Design'
  }, {
    name: 'Results'
  }, {
    name: 'Created On'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
              public ops: OptionsProvider, private http: HttpProvider) {
    let self = this;
    this.http.getLoginInfo().then((info) => {
      this.http.token = info[0];
      this.http.id = info[1];
      this.http.user = info[2];
      this.http.session = info[3];
      this.http.projects().toPromise().then(projects => {
        self.data = <any>projects;
        for (let project of this.data) {
          this.formatProject(project);
          project['createdOn'] = new Date(project['createdOn']).toLocaleDateString();
        }
      }).catch(error => {
        this.http.clearAuth();
        this.navCtrl.setRoot('WelcomePage');
      });
    });
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  formatProject(project) {
    switch (project.step) {
      case "SPECIFY":
        project['specification'] = project.state;
        project['design'] = "not complete";
        project['results'] = "not complete";
        break;
      case "DESIGN":
        project['specification'] = 'COMPLETED';
        project['design'] = project.state;
        project['results'] = "not complete";
        break;
      case "RESULTS":
        project['specification'] = 'COMPLETED';
        project['design'] = 'COMPLETED';
        project['results'] = project.state;
        break;
    }
  }

  deleteProject(projectId) {
    this.http.deleteProject(projectId).then(() => {
      for(let i = 0; i < this.data.length; i++) {
        if(this.data[i].id == projectId) {
          this.data.splice(i, 1);
          return;
        }
      }
    }).catch(err => {
      console.error(err);
    });
  }

}
