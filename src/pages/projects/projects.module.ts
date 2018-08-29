import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProjectsPage} from './projects';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    ProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsPage),
    NgxDatatableModule
  ],
})
export class ProjectsPageModule {
}
