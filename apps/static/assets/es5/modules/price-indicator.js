!/**
 * Highstock JS v12.1.2 (2025-01-09)
 * @module highcharts/modules/price-indicator
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Advanced Highcharts Stock tools
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(s,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("highcharts")):"function"==typeof define&&define.amd?define("highcharts/modules/price-indicator",[["highcharts/highcharts"]],r):"object"==typeof exports?exports["highcharts/modules/price-indicator"]=r(require("highcharts")):s.Highcharts=r(s.Highcharts)}(this,function(s){return function(){"use strict";var r={944:function(r){r.exports=s}},i={};function e(s){var t=i[s];if(void 0!==t)return t.exports;var o=i[s]={exports:{}};return r[s](o,o.exports,e),o.exports}e.n=function(s){var r=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(r,{a:r}),r},e.d=function(s,r){for(var i in r)e.o(r,i)&&!e.o(s,i)&&Object.defineProperty(s,i,{enumerable:!0,get:r[i]})},e.o=function(s,r){return Object.prototype.hasOwnProperty.call(s,r)};var t={};e.d(t,{default:function(){return d}});var o=e(944),c=e.n(o),a=c().composed,l=c().addEvent,n=c().merge,h=c().pushUnique;function u(){var s,r=this.options,i=r.lastVisiblePrice,e=r.lastPrice;if((i||e)&&"highcharts-navigator-series"!==r.id){var t=this.xAxis,o=this.yAxis,c=o.crosshair,a=o.cross,l=o.crossLabel,h=this.points,u=h.length,d=this.dataTable.rowCount,p=this.getColumn("x")[d-1],f=null!==(s=this.getColumn("y")[d-1])&&void 0!==s?s:this.getColumn("close")[d-1],b=void 0;if(e&&e.enabled&&(o.crosshair=o.options.crosshair=r.lastPrice,!this.chart.styledMode&&o.crosshair&&o.options.crosshair&&r.lastPrice&&(o.crosshair.color=o.options.crosshair.color=r.lastPrice.color||this.color),o.cross=this.lastPrice,b=f,this.lastPriceLabel&&this.lastPriceLabel.destroy(),delete o.crossLabel,o.drawCrosshair(null,{x:p,y:b,plotX:t.toPixels(p,!0),plotY:o.toPixels(b,!0)}),this.yAxis.cross&&(this.lastPrice=this.yAxis.cross,this.lastPrice.addClass("highcharts-color-"+this.colorIndex),this.lastPrice.y=b),this.lastPriceLabel=o.crossLabel),i&&i.enabled&&u>0){o.crosshair=o.options.crosshair=n({color:"transparent"},r.lastVisiblePrice),o.cross=this.lastVisiblePrice;var P=h[u-1].isInside?h[u-1]:h[u-2];this.lastVisiblePriceLabel&&this.lastVisiblePriceLabel.destroy(),delete o.crossLabel,o.drawCrosshair(null,P),o.cross&&(this.lastVisiblePrice=o.cross,P&&"number"==typeof P.y&&(this.lastVisiblePrice.y=P.y)),this.lastVisiblePriceLabel=o.crossLabel}o.crosshair=o.options.crosshair=c,o.cross=a,o.crossLabel=l}}({compose:function(s){h(a,"PriceIndication")&&l(s,"afterRender",u)}}).compose(c().Series);var d=c();return t.default}()});