import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LibraryPage} from './library';
import {TooltipsModule} from "ionic-tooltips";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryPage),
    TooltipsModule,
    ComponentsModule
  ],
})
export class LibraryPageModule {
}
