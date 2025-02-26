!/**
 * Highstock JS v12.1.2 (2025-01-09)
 * @module highcharts/indicators/ichimoku-kinko-hyo
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(o,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").dataGrouping.approximations,require("highcharts").Color,require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/ichimoku-kinko-hyo",[["highcharts/highcharts"],["highcharts/highcharts","dataGrouping","approximations"],["highcharts/highcharts","Color"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/indicators/ichimoku-kinko-hyo"]=t(require("highcharts"),require("highcharts").dataGrouping.approximations,require("highcharts").Color,require("highcharts").SeriesRegistry):o.Highcharts=t(o.Highcharts,o.Highcharts.dataGrouping.approximations,o.Highcharts.Color,o.Highcharts.SeriesRegistry)}(this,function(o,t,n,e){return function(){"use strict";var i,r={620:function(o){o.exports=n},512:function(o){o.exports=e},956:function(o){o.exports=t},944:function(t){t.exports=o}},p={};function a(o){var t=p[o];if(void 0!==t)return t.exports;var n=p[o]={exports:{}};return r[o](n,n.exports,a),n.exports}a.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(t,{a:t}),t},a.d=function(o,t){for(var n in t)a.o(t,n)&&!a.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},a.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)};var s={};a.d(s,{default:function(){return O}});var l=a(944),h=a.n(l),u=a(956),c=a.n(u),g=a(620),f=a.n(g),y=a(512),k=a.n(y),d=(i=function(o,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var n in t)t.hasOwnProperty(n)&&(o[n]=t[n])})(o,t)},function(o,t){function n(){this.constructor=o}i(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),S=f().parse,v=k().seriesTypes.sma,x=h().defined,m=h().extend,A=h().isArray,C=h().isNumber,P=h().getClosestDistance,Y=h().merge,b=h().objectEach;function B(o){return{high:o.reduce(function(o,t){return Math.max(o,t[1])},-1/0),low:o.reduce(function(o,t){return Math.min(o,t[2])},1/0)}}function G(o){var t=o.indicator;t.points=o.points,t.nextPoints=o.nextPoints,t.color=o.color,t.options=Y(o.options.senkouSpan.styles,o.gap),t.graph=o.graph,t.fillGraph=!0,k().seriesTypes.sma.prototype.drawGraph.call(t)}var N=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.data=[],t.options={},t.points=[],t.graphCollection=[],t}return d(t,o),t.prototype.init=function(){o.prototype.init.apply(this,arguments),this.options=Y({tenkanLine:{styles:{lineColor:this.color}},kijunLine:{styles:{lineColor:this.color}},chikouLine:{styles:{lineColor:this.color}},senkouSpanA:{styles:{lineColor:this.color,fill:S(this.color).setOpacity(.5).get()}},senkouSpanB:{styles:{lineColor:this.color,fill:S(this.color).setOpacity(.5).get()}},senkouSpan:{styles:{fill:S(this.color).setOpacity(.2).get()}}},this.options)},t.prototype.toYData=function(o){return[o.tenkanSen,o.kijunSen,o.chikouSpan,o.senkouSpanA,o.senkouSpanB]},t.prototype.translate=function(){k().seriesTypes.sma.prototype.translate.apply(this);for(var o=0,t=this.points;o<t.length;o++)for(var n=t[o],e=0,i=this.pointArrayMap;e<i.length;e++){var r=i[e],p=n[r];C(p)&&(n["plot"+r]=this.yAxis.toPixels(p,!0),n.plotY=n["plot"+r],n.tooltipPos=[n.plotX,n["plot"+r]],n.isNull=!1)}},t.prototype.drawGraph=function(){var o,t,n,e,i,r,p,a,s,l,h,u,c,g=this,f=g.points,y=g.options,d=g.graph,S=g.color,v={options:{gapSize:y.gapSize}},m=g.pointArrayMap.length,A=[[],[],[],[],[],[]],C={tenkanLine:A[0],kijunLine:A[1],chikouLine:A[2],senkouSpanA:A[3],senkouSpanB:A[4],senkouSpan:A[5]},P=[],B=g.options.senkouSpan,N=B.color||B.styles.fill,O=B.negativeColor,j=[[],[]],X=[[],[]],T=f.length,w=0;for(g.ikhMap=C;T--;){for(n=0,t=f[T];n<m;n++)x(t[o=g.pointArrayMap[n]])&&A[n].push({plotX:t.plotX,plotY:t["plot"+o],isNull:!1});if(O&&T!==f.length-1){var L=C.senkouSpanB.length-1,M=function(o,t,n,e){if(o&&t&&n&&e){var i=t.plotX-o.plotX,r=t.plotY-o.plotY,p=e.plotX-n.plotX,a=e.plotY-n.plotY,s=o.plotX-n.plotX,l=o.plotY-n.plotY,h=(-r*s+i*l)/(-p*r+i*a),u=(p*l-a*s)/(-p*r+i*a);if(h>=0&&h<=1&&u>=0&&u<=1)return{plotX:o.plotX+u*i,plotY:o.plotY+u*r}}}(C.senkouSpanA[L-1],C.senkouSpanA[L],C.senkouSpanB[L-1],C.senkouSpanB[L]);if(M){var _={plotX:M.plotX,plotY:M.plotY,isNull:!1,intersectPoint:!0};C.senkouSpanA.splice(L,0,_),C.senkouSpanB.splice(L,0,_),P.push(L)}}}if(b(C,function(o,t){y[t]&&"senkouSpan"!==t&&(g.points=A[w],g.options=Y(y[t].styles,v),g.graph=g["graph"+t],g.fillGraph=!1,g.color=S,k().seriesTypes.sma.prototype.drawGraph.call(g),g["graph"+t]=g.graph),w++}),g.graphCollection)for(var q=0,E=g.graphCollection;q<E.length;q++){var D=E[q];g[D].destroy(),delete g[D]}if(g.graphCollection=[],O&&C.senkouSpanA[0]&&C.senkouSpanB[0]){for(P.unshift(0),P.push(C.senkouSpanA.length-1),u=0;u<P.length-1;u++)if(e=P[u],i=P[u+1],r=C.senkouSpanB.slice(e,i+1),p=C.senkouSpanA.slice(e,i+1),Math.floor(r.length/2)>=1){var H=Math.floor(r.length/2);if(r[H].plotY===p[H].plotY){for(c=0,a=0,s=0;c<r.length;c++)a+=r[c].plotY,s+=p[c].plotY;j[h=a>s?0:1]=j[h].concat(r),X[h]=X[h].concat(p)}else j[h=r[H].plotY>p[H].plotY?0:1]=j[h].concat(r),X[h]=X[h].concat(p)}else j[h=r[0].plotY>p[0].plotY?0:1]=j[h].concat(r),X[h]=X[h].concat(p);["graphsenkouSpanColor","graphsenkouSpanNegativeColor"].forEach(function(o,t){j[t].length&&X[t].length&&(l=0===t?N:O,G({indicator:g,points:j[t],nextPoints:X[t],color:l,options:y,gap:v,graph:g[o]}),g[o]=g.graph,g.graphCollection.push(o))})}else G({indicator:g,points:C.senkouSpanB,nextPoints:C.senkouSpanA,color:N,options:y,gap:v,graph:g.graphsenkouSpan}),g.graphsenkouSpan=g.graph;delete g.nextPoints,delete g.fillGraph,g.points=f,g.options=y,g.graph=d,g.color=S},t.prototype.getGraphPath=function(o){var t,n=[],e=[];if(o=o||this.points,this.fillGraph&&this.nextPoints){if((t=k().seriesTypes.sma.prototype.getGraphPath.call(this,this.nextPoints))&&t.length){t[0][0]="L",n=k().seriesTypes.sma.prototype.getGraphPath.call(this,o),e=t.slice(0,n.length);for(var i=e.length-1;i>=0;i--)n.push(e[i])}}else n=k().seriesTypes.sma.prototype.getGraphPath.apply(this,arguments);return n},t.prototype.getValues=function(o,t){var n,e,i,r,p,a,s,l,h,u,c=t.period,g=t.periodTenkan,f=t.periodSenkouSpanB,y=o.xData,k=o.yData,d=o.xAxis,S=k&&k.length||0,v=P(d.series.map(function(o){return o.getColumn("x")})),x=[],m=[];if(!(y.length<=c)&&A(k[0])&&4===k[0].length){var C=y[0]-c*v;for(p=0;p<c;p++)m.push(C+p*v);for(p=0;p<S;p++)p>=g&&(a=((e=B(k.slice(p-g,p))).high+e.low)/2),p>=c&&(h=(a+(s=((i=B(k.slice(p-c,p))).high+i.low)/2))/2),p>=f&&(u=((r=B(k.slice(p-f,p))).high+r.low)/2),l=k[p][3],n=y[p],void 0===x[p]&&(x[p]=[]),void 0===x[p+c-1]&&(x[p+c-1]=[]),x[p+c-1][0]=a,x[p+c-1][1]=s,x[p+c-1][2]=void 0,void 0===x[p+1]&&(x[p+1]=[]),x[p+1][2]=l,p<=c&&(x[p+c-1][3]=void 0,x[p+c-1][4]=void 0),void 0===x[p+2*c-2]&&(x[p+2*c-2]=[]),x[p+2*c-2][3]=h,x[p+2*c-2][4]=u,m.push(n);for(p=1;p<=c;p++)m.push(n+p*v);return{values:x,xData:m,yData:x}}},t.defaultOptions=Y(v.defaultOptions,{params:{index:void 0,period:26,periodTenkan:9,periodSenkouSpanB:52},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>TENKAN SEN: {point.tenkanSen:.3f}<br/>KIJUN SEN: {point.kijunSen:.3f}<br/>CHIKOU SPAN: {point.chikouSpan:.3f}<br/>SENKOU SPAN A: {point.senkouSpanA:.3f}<br/>SENKOU SPAN B: {point.senkouSpanB:.3f}<br/>'},tenkanLine:{styles:{lineWidth:1,lineColor:void 0}},kijunLine:{styles:{lineWidth:1,lineColor:void 0}},chikouLine:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanA:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanB:{styles:{lineWidth:1,lineColor:void 0}},senkouSpan:{styles:{fill:"rgba(255, 0, 0, 0.5)"}},dataGrouping:{approximation:"ichimoku-averages"}}),t}(v);m(N.prototype,{pointArrayMap:["tenkanSen","kijunSen","chikouSpan","senkouSpanA","senkouSpanB"],pointValKey:"tenkanSen",nameComponents:["periodSenkouSpanB","period","periodTenkan"]}),c()["ichimoku-averages"]=function(){var o,t=[];return[].forEach.call(arguments,function(n,e){t.push(c().average(n)),o=!o&&void 0===t[e]}),o?void 0:t},k().registerSeriesType("ikh",N);var O=h();return s.default}()});