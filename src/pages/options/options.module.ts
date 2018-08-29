import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OptionsPage} from './options';
import {TooltipsModule} from "ionic-tooltips";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    OptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionsPage),
    TooltipsModule,
    ComponentsModule
  ],
})
export class OptionsPageModule {
}
