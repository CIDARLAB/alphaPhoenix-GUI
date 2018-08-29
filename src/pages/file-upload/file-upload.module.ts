import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FileUploadPage} from './file-upload';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    FileUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(FileUploadPage),
    ComponentsModule
  ],
})
export class FileUploadPageModule {
}
