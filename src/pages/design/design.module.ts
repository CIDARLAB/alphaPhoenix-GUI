import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DesignPage} from './design';
import {KatexModule} from 'ng-katex';

@NgModule({
  declarations: [
    DesignPage,
  ],
  imports: [
    IonicPageModule.forChild(DesignPage),
    KatexModule
  ],
})
export class DesignPageModule {
}
