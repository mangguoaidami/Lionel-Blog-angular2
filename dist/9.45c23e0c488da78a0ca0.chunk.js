webpackJsonp([9],{418:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(8),r=e(37),a=e(467),o=e(440);e.d(n,"AngularSigleModule",(function(){return c}));var c=(function(){function t(){}return t=__decorate([e.i(i.x)({imports:[r.c,a.a],declarations:[o.a]})],t)})()},440:function(t,n,e){"use strict";var i=e(8),r=e(24),a=e(185);e.d(n,"a",(function(){return o}));var o=(function(){function t(t,n){this.route=t,this.service=n}return t.prototype.ngOnInit=function(){var t=this,n=this.route.snapshot.params.id;this.service.getAngularSigle(n).subscribe((function(n){t.article=n}))},t=__decorate([e.i(i._10)({template:e(489),styles:[e(478)]}),__metadata("design:paramtypes",[r.c,a.a])],t)})()},467:function(t,n,e){"use strict";var i=e(24),r=e(440);e.d(n,"a",(function(){return o}));var a=[{path:"",component:r.a}],o=i.a.forChild(a)},478:function(t,n){t.exports=""},489:function(t,n){t.exports='<div *ngIf="article">\n    <div [innerHtml]="article.text"></div>\n</div>\n'}});