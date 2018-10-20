import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class HttpProvider {

  private assetUrl = 'assets/';
  private baseUrl = '/';
  //private baseUrl = 'http://localhost:9090/';
  public token;
  public id;
  public user;
  public session;

  constructor(public http: HttpClient, private storage: Storage) {
    this.getLoginInfo().then(info => {
      this.token = info[0];
      this.id = info[1];
      this.user = info[2];
      this.session = info[3];
    });
  }

  loadLogin() {
    return new Promise((resolve, reject) => {
      this.getLoginInfo().then(info => {
        this.token = info[0];
        this.id = info[1];
        this.user = info[2];
        this.session = info[3];
        resolve();
      });
    });
  }

  setUserInfo(token, id, user, session) {
    this.token = token;
    this.id = id;
    this.user = user;
    this.session = session;
    this.storage.set('token', token);
    this.storage.set('id', id);
    this.storage.set('user', user);
    this.storage.set('session', session);
  }

  updateUser() {
    this.storage.set('user', this.user);
  }

  login(body: any) {
    return this.http.post(this.baseUrl + 'login', JSON.stringify(body));
  }

  signup(body: any) {
    return this.http.post(this.baseUrl + 'signup', JSON.stringify(body));
  }

  forgot(email) {
    let body = {
      email,
    };
    return this.http.post(this.baseUrl + 'forgot', JSON.stringify(body));
  }

  reset(body) {
    return this.http.post(this.baseUrl + 'reset', JSON.stringify(body));
  }

  logout() {
    this.setUserInfo(null, null, null, null);
  }

  updateUsers(body: any) {
    body.token = this.token;
    body.id = this.id;
    return this.http.post(this.baseUrl + 'user', JSON.stringify(body));
  }

  projects() {
    let body = {
      id: this.id,
      token: this.token
    };
    return this.http.post(this.baseUrl + 'projects', JSON.stringify(body));
  }

  specification(body: any) {
    return this.http.post(this.baseUrl + 'specification', JSON.stringify(body));
  }

  getDesign(projectId: any) {
    /*
    return new Promise((resolve, reject) => {
      this.http.get(this.assetUrl + 'json/design.json').subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
    */
    let body = {
      project: projectId,
      token: this.token,
      id: this.id
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'design', JSON.stringify(body)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getUrl(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getExample() {
    return new Promise((resolve, reject) => {
      this.http.get(this.assetUrl + 'json/examples.json').subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getLoginInfo() {
    let promises = [
      this.storage.get('token'),
      this.storage.get('id'),
      this.storage.get('user'),
      this.storage.get('session')
    ];
    return Promise.all(promises);
  }

  clearAuth() {
    this.id = null;
    this.token = null;
    this.user = null;
    this.session = null;
    this.storage.set('token', null);
    this.storage.set('id', null);
    this.storage.set('user', null);
    this.storage.set('session', null);
  }

  getResults(project) {
    let body = {
      token: this.token,
      id: this.id,
      project: project
    };
    /*
    return new Promise((resolve => {
      resolve(
        [{"score":1,"name":"Module 0 Assignment 0","moduleid":0,"assignmentid":0},{"score":1,"name":"Module 0 Assignment 1","moduleid":0,"assignmentid":1},{"score":1,"name":"Module 0 Assignment 2","moduleid":0,"assignmentid":2}]
      )
    }))*/
    return this.http.post(this.baseUrl + 'results', JSON.stringify(body)).toPromise();
  }

  deleteProject(project) {
    let body = {
      token: this.token,
      id: this.id,
      project: project
    };
    return this.http.post(this.baseUrl + 'removeProject', JSON.stringify(body)).toPromise();
  }

  getResultData(project, moduleId, assignmentId) {
    let body = {
      token: this.token,
      id: this.id,
      project,
      moduleId,
      assignmentId
    };
    return this.http.post(this.baseUrl + 'assignment', JSON.stringify(body)).toPromise();
  }

  getProject(project) {
    let body = {
      token: this.token,
      id: this.id,
      project,
    };
    return this.http.post(this.baseUrl + 'viewSpecification', JSON.stringify(body)).toPromise();
  }

  download(project, moduleId, assignmentId) {
    return new Promise((resolve) => {
      let body = {
        token: this.token,
        id: this.id,
        project,
        moduleId,
        assignmentId
      };
      let options = {
        responseType: 'blob'
      };
      return this.http.post(this.baseUrl + 'downloadAssignment', JSON.stringify(body), <any>options).toPromise().then(results => {
        var a = document.createElement('a');
        var blob = new Blob([results], {'type':"application/octet-stream"});
        a.href = URL.createObjectURL(blob);
        a.download = `results-${project}-${moduleId}-${assignmentId}.zip`;
        a.click();
        resolve();
      });
    });
  }

}
