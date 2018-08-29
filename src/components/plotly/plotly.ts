import {Component, Input, OnInit, ViewChild} from "@angular/core";
import * as Plotly from "plotly.js/dist/plotly-basic.js";
import {Config, Data, Layout} from "plotly.js/dist/plotly-basic.js";


@Component({
  selector: 'plotly',
  templateUrl: 'plotly.html'
})
export class PlotlyComponent {

  @Input() data: any;
  @Input() layout: any;
  @Input() options: any;
  @ViewChild("plotly") plotly;

  constructor() {
  }

  ngOnInit() {
    Plotly.newPlot(
      this.plotly.nativeElement,
      this.data,
      this.layout,
      this.options
    );
  }

}
