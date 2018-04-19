import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionsPage } from './options';
import { TooltipsModule } from "ionic-tooltips";

@NgModule({
  declarations: [
    OptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionsPage),
    TooltipsModule
  ],
})
export class OptionsPageModule {}
