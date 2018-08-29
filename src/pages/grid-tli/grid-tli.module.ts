import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GridTliPage} from './grid-tli';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    GridTliPage,
  ],
  imports: [
    IonicPageModule.forChild(GridTliPage),
    ComponentsModule
  ],
})
export class GridTliPageModule {
}
