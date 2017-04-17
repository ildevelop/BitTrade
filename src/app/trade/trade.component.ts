
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
  private bookU= './assets/bit.json';
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
    h = 1000;
    const padding = 2;
    const dataChart = ['401', '72', '100' , '158', '207', '563', '444', '3', '650'];
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
      .attr('y', function(d){
        // console.log(Number(d) * 2);
        return h - Number(d) ; })
      .attr('width', w / dataChart.length - padding)
      .attr('height', function (d) {
        return d;
      })
      .attr('fill', function(d){
        // return '#ff3c2e';
        const fillColor = (Number(d) - Number(d) % 10) / 10 + Number(d) % 10;
        console.log(fillColor);
        return 'rgb(0 ,' + fillColor + ',0)';
      });
    }
}

