import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TradeComponent } from './trade/trade.component';

import { D3Service } from 'd3-ng2-service';
import {nvD3} from "ng2-nvd3";

@NgModule({
  declarations: [
    AppComponent,
    TradeComponent,
    nvD3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
