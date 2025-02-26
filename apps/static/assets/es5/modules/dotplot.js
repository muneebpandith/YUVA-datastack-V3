!/**
 * Highcharts JS v12.1.2 (2025-01-09)
 * @module highcharts/modules/dotplot
 * @requires highcharts
 *
 * Dot plot series type for Highcharts
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/dotplot",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],e):"object"==typeof exports?exports["highcharts/modules/dotplot"]=e(require("highcharts"),require("highcharts").SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}(this,function(t,e){return function(){"use strict";var r,i={512:function(t){t.exports=e},944:function(e){e.exports=t}},o={};function n(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return i[t](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var s={};n.d(s,{default:function(){return b}});var a=n(944),h=n.n(a),c={itemPadding:.1,marker:{symbol:"circle",states:{hover:{},select:{}}},slotsPerBar:void 0},u=n(512),p=n.n(u),d=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),l=p().seriesTypes.column,f=h().extend,g=h().isNumber,v=h().merge,y=h().pick,m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return d(e,t),e.prototype.drawPoints=function(){var t,e,r,i=this.options,o=this.chart.renderer,n=i.marker,s=this.points.reduce(function(t,e){return t+Math.abs(e.y||0)},0),a=this.points.reduce(function(t,e){var r;return t+((null===(r=e.shapeArgs)||void 0===r?void 0:r.height)||0)},0),h=i.itemPadding||0,c=(null===(e=null===(t=this.points[0])||void 0===t?void 0:t.shapeArgs)||void 0===e?void 0:e.width)||0,u=i.slotsPerBar,p=c;if(!g(u))for(u=1;u<s&&!(s/u<a/p*1.2);)p=c/++u;for(var d=a*u/s,l=0,v=this.points;l<v.length;l++){var m=v[l],b=m.marker||{},x=b.symbol||n.symbol,A=y(b.radius,n.radius),_="rect"!==x?d:p,O=m.shapeArgs||{},P=(O.x||0)+((O.width||0)-u*_)/2,w=Math.abs(null!==(r=m.y)&&void 0!==r?r:0),j=O.y||0,k=O.height||0,S=void 0,q=P,M=m.negative?j:j+k-d,R=0;m.graphics=S=m.graphics||[];var H=m.pointAttr?m.pointAttr[m.selected?"selected":""]||this.pointAttr[""]:this.pointAttribs(m,m.selected&&"select");if(delete H.r,this.chart.styledMode&&(delete H.stroke,delete H["stroke-width"]),"number"==typeof m.y){m.graphic||(m.graphic=o.g("point").add(this.group));for(var B=0;B<w;B++){var T={x:q+_*h,y:M+d*h,width:_*(1-2*h),height:d*(1-2*h),r:A},N=S[B];N?N.animate(T):N=o.symbol(x).attr(f(T,H)).add(m.graphic),N.isActive=!0,S[B]=N,q+=_,++R>=u&&(R=0,q=P,M=m.negative?M+d:M-d)}}for(var z=-1,C=0,D=S;C<D.length;C++){var N=D[C];++z,N&&(N.isActive?N.isActive=!1:(N.destroy(),S.splice(z,1)))}}},e.defaultOptions=v(l.defaultOptions,c),e}(l);f(m.prototype,{markerAttribs:void 0}),p().registerSeriesType("dotplot",m);var b=h();return s.default}()});