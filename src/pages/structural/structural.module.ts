import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {StructuralPage} from './structural';
import {TooltipsModule} from "ionic-tooltips";

@NgModule({
  declarations: [
    StructuralPage,
  ],
  imports: [
    IonicPageModule.forChild(StructuralPage),
    TooltipsModule
  ],
})
export class StructuralPageModule {
}
