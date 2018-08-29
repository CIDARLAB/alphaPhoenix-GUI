import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProjectsPage} from './projects';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsPage),
    NgxDatatableModule,
    ComponentsModule
  ],
})
export class ProjectsPageModule {
}
