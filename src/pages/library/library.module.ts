import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryPage } from './library';
import { TooltipsModule } from "ionic-tooltips";

@NgModule({
  declarations: [
    LibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryPage),
    TooltipsModule
  ],
})
export class LibraryPageModule {}
