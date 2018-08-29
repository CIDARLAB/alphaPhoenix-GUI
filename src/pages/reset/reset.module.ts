import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ResetPage} from './reset';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ResetPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetPage),
    ComponentsModule
  ],
})
export class ResetPageModule {
}
