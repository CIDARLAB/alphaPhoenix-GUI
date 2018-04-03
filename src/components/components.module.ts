import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PlotlyComponent } from './plotly/plotly';

@NgModule({
	declarations: [PlotlyComponent],
  imports: [
    IonicModule
  ],
	exports: [PlotlyComponent]
})
export class ComponentsModule {}
