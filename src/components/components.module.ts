import {IonicModule} from 'ionic-angular';
import {NgModule} from '@angular/core';
import {PlotlyComponent} from './plotly/plotly';
import { NavbarComponent } from './navbar/navbar';

@NgModule({
  declarations: [PlotlyComponent,
    NavbarComponent],
  imports: [
    IonicModule
  ],
  exports: [PlotlyComponent,
    NavbarComponent]
})
export class ComponentsModule {
}
