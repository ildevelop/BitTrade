import {Component, OnInit, OnChanges, ElementRef, Inject, ViewChild} from '@angular/core';
// import {BitcoinApiService} from "../bitcoin.api.service";

import {Response} from "@angular/http";
import {nvD3} from "ng2-nvd3";
declare let d3: any;

@Component({
  selector: 'trade',
  inputs: ['options', 'data'],
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.sass'],
})


export class TradeComponent implements OnInit {
  constructor( ) { }
  public options: any;
  public data: any;
  public btce_array: number[];
  el: any;
  chart: any;
  svg: any;
  ngOnInit(){
    // this.backendApi.get_market_data().subscribe(res => {
    //   this.set_data(res)
    // });
    this.options = {
      chart: {
        type: 'stackedAreaChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'Time (s)'
        },
        yAxis: {
          axisLabel: 'BTC (v)',
          tickFormat: function(d){
            return d3.format('0.4f')(d);
          },
          axisLabelDistance: -10
        }
      }
    };

    this.data = this.sinAndCos();
  }


  sinAndCos() {
    var sin = [],sin2 = [],
      cos = [];
    for (var i = 0; i < 100; i++) {
      sin.push({x: i, y: Math.sin(i/10)});
      sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
      cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
    }
    //Data is represented as an array of {x,y} pairs.
    //Line chart data should be sent as an array of series objects.
    return [
      {
        values: sin,      //values - represents the array of {x,y} data points
        key: 'BTC', //key  - the name of the series.
        color: '#ff3c2e'  //color - optional: choose your own line color.
      },
      {
        values: cos,
        key: 'LTC',
        color: '#2ca02c'
      },
      {
        values: sin2,
        key: 'ETH',
        color: '#7777ff',
              //area - set to true if you want this line to turn into a filled area chart.
      }
    ];
  }
  private set_data(res: Response) {
    console.log("res="+res.json());
    let data_array = res.json()
    for (let i =0; i<20; i++){
      this.btce_array.push(data_array[i][5])
    }
  }


}
