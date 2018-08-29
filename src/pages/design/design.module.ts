import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DesignPage} from './design';
import {KatexModule} from 'ng-katex';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    DesignPage,
  ],
  imports: [
    IonicPageModule.forChild(DesignPage),
    KatexModule,
    ComponentsModule
  ],
})
export class DesignPageModule {
}
