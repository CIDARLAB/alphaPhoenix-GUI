import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PerformancePage} from './performance';
import {TooltipsModule} from "ionic-tooltips";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PerformancePage,
  ],
  imports: [
    IonicPageModule.forChild(PerformancePage),
    TooltipsModule,
    ComponentsModule
  ],
})
export class PerformancePageModule {
}
