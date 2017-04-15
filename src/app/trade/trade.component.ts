
import {Component, ElementRef, OnInit} from '@angular/core';

import {
  D3Service,
  D3,
} from 'd3-ng2-service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.sass']
})
export class TradeComponent implements OnInit {
  private d3: D3;
  private parentNativeElement: any;
  constructor(element: ElementRef, private d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    let w: number;
    w = 200;
    let h: number;
    h = 100;
    const padding = 2;
    const dataChart = ['5', '10' , '15', '20'];
    const svg = this.d3.select('body').append('svg')
      .attr('width', w)
      .attr('height', h);
    svg.selectAll('rect')
      .data(dataChart)
      .enter()
      .append('rect')
      .attr('x', function (d, i) {
        return(i * ( w / dataChart.length));
      })
      .attr('y', 0)
      .attr('width', w / dataChart.length - padding)
      .attr('height', function (d) {
        return d;
      });
    }
}

