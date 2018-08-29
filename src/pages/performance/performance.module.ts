import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PerformancePage} from './performance';
import {TooltipsModule} from "ionic-tooltips";

@NgModule({
  declarations: [
    PerformancePage,
  ],
  imports: [
    IonicPageModule.forChild(PerformancePage),
    TooltipsModule
  ],
})
export class PerformancePageModule {
}
