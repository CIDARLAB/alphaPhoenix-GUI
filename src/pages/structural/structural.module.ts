import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {StructuralPage} from './structural';
import {TooltipsModule} from "ionic-tooltips";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    StructuralPage,
  ],
  imports: [
    IonicPageModule.forChild(StructuralPage),
    TooltipsModule,
    ComponentsModule
  ],
})
export class StructuralPageModule {
}
