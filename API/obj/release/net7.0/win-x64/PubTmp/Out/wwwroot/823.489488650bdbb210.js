"use strict";(self.webpackChunkmatx_angular_latest_test=self.webpackChunkmatx_angular_latest_test||[]).push([[823],{84823:(Y,c,o)=>{o.r(c),o.d(c,{DashboardModule:()=>R});var u=o(37262),s=o(36895),g=o(19132),f=o(69814),x=o(33269),d=o(52054),h=o(71589),l=o(37340);const Z=(0,l.oQ)([(0,l.oB)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),(0,l.jt)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",(0,l.oB)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),y=[(0,l.X$)("animate",[(0,l.eR)("void => *",[(0,l._7)(Z)])]),(0,l.X$)("fadeInOut",[(0,l.SB)("0",(0,l.oB)({opacity:0,display:"none"})),(0,l.SB)("1",(0,l.oB)({opacity:1,display:"block"})),(0,l.eR)("0 => 1",(0,l.jt)("300ms")),(0,l.eR)("1 => 0",(0,l.jt)("300ms"))])];var t=o(94650),v=o(22552),T=o(56709),b=o(4859),p=o(73546),A=o(77331),U=o(97392),w=o(73162),r=o(30671),m=o(1576),_=o(55829);function C(a,i){1&a&&(t.TgZ(0,"th",50),t._uU(1,"Name"),t.qZA())}function S(a,i){if(1&a&&(t.TgZ(0,"td",51)(1,"div",15),t._UZ(2,"img",52),t.TgZ(3,"p",53),t._uU(4),t.qZA()()()),2&a){const e=i.$implicit;t.xp6(2),t.s9C("src",e.imgUrl,t.LSH),t.s9C("alt",e.name),t.xp6(2),t.hij(" ",e.name," ")}}function L(a,i){1&a&&(t.TgZ(0,"th",50),t._uU(1,"Revenue"),t.qZA())}function D(a,i){if(1&a&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij("$",e.price,"")}}function F(a,i){1&a&&(t.TgZ(0,"th",50),t._uU(1,"Stock Status"),t.qZA())}function j(a,i){if(1&a&&(t.TgZ(0,"td",54)(1,"mat-chip",55),t._uU(2),t.qZA()()),2&a){const e=i.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("color",n.getProductStatus(e.available).color),t.xp6(1),t.hij(" ",n.getProductStatus(e.available).status," ")}}function q(a,i){1&a&&(t.TgZ(0,"th",50),t._uU(1,"Action"),t.qZA())}function N(a,i){1&a&&(t.TgZ(0,"td",54)(1,"button",56)(2,"mat-icon",57),t._uU(3," edit "),t.qZA()()())}function O(a,i){1&a&&t._UZ(0,"tr",58)}function B(a,i){1&a&&t._UZ(0,"tr",59)}function z(a,i){if(1&a&&(t.TgZ(0,"table",40),t.ynx(1,41),t.YNc(2,C,2,0,"th",42),t.YNc(3,S,5,3,"td",43),t.BQk(),t.ynx(4,44),t.YNc(5,L,2,0,"th",42),t.YNc(6,D,2,1,"td",45),t.BQk(),t.ynx(7,46),t.YNc(8,F,2,0,"th",42),t.YNc(9,j,3,2,"td",45),t.BQk(),t.ynx(10,47),t.YNc(11,q,2,0,"th",42),t.YNc(12,N,4,0,"td",45),t.BQk(),t.YNc(13,O,1,0,"tr",48),t.YNc(14,B,1,0,"tr",49),t.qZA()),2&a){const e=t.oxw();t.Q6J("dataSource",e.productList),t.xp6(13),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}function P(a,i){if(1&a&&(t.TgZ(0,"div")(1,"mat-card",60)(2,"div",15),t._UZ(3,"mat-checkbox",61),t.TgZ(4,"button",62)(5,"mat-icon",11),t._uU(6),t.qZA()(),t.TgZ(7,"p",63),t._uU(8),t.qZA()(),t.TgZ(9,"div",64)(10,"p",38),t._uU(11," 03/02/2020 07:13PM "),t.qZA(),t.TgZ(12,"div",65),t._UZ(13,"img",66)(14,"img",67)(15,"img",68),t.TgZ(16,"p",69),t._uU(17," +3 "),t.qZA()()(),t.TgZ(18,"button",56)(19,"mat-icon",11),t._uU(20," more_vert "),t.qZA()()()()),2&a){const e=i.$implicit;t.xp6(4),t.Q6J("color",e.color),t.xp6(2),t.hij(" ",e.icon," "),t.xp6(2),t.hij(" ",e.title," ")}}const Q=[{path:"analytics",component:(()=>{class a{constructor(e){this.themeService=e,this.statCardList=[{icon:"people",title:"New Leads",amount:"3,050",color:"primary"},{icon:"attach_money",title:"This week Sales",amount:"$80,500",color:"primary"},{icon:"store",title:"Inventory Status",amount:"8.5% Stock Surplus",color:"accent"},{icon:"shopping_cart",title:"Orders to deliver",amount:"305 Orders",color:"accent"}],this.productList=[{imgUrl:"/assets/images/products/headphone-2.jpg",name:"earphone",price:100,available:15},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"earphone",price:1500,available:30},{imgUrl:"/assets/images/products/iphone-2.jpg",name:"iPhone x",price:1900,available:35},{imgUrl:"/assets/images/products/iphone-1.jpg",name:"iPhone x",price:100,available:0},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"Head phone",price:1190,available:5}],this.onGoingProjectList=[{icon:"start_border",color:"warn",title:"project 1"},{icon:"date_range",color:"primary",title:"project 2"},{icon:"start_border",color:"warn",title:"project 3"},{icon:"date_range",color:"accent",title:"project 4"}],this.displayedColumns=["name","price","available","action"]}ngAfterViewInit(){}ngOnInit(){this.themeService.onThemeChange.subscribe(e=>{this.initDoughNutPieOptions(e),this.initDailyTrafficChartBar(e)}),this.initDailyTrafficChartBar(this.themeService.activatedTheme),this.initDoughNutPieOptions(this.themeService.activatedTheme)}initDoughNutPieOptions(e){this.doughNutPieOptions={backgroundColor:"transparent",color:["#f44336","#ff9e43","rgba(116, 103, 239, 1)"],legend:{show:!0,itemGap:20,icon:"circle",bottom:0,textStyle:{fontSize:13,fontFamily:"roboto"}},tooltip:{show:!0,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Traffic Rate",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:0,emphasis:{disabled:!0},stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{fontSize:"13",fontWeight:"normal"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"15",fontWeight:"normal",color:"rgba(116, 103, 239, 1)"},formatter:"{b} \n{c} ({d}%)"}},labelLine:{normal:{show:!1}},data:[{value:65,name:"Google"},{value:20,name:"Facebook"},{value:15,name:"Others"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}initDailyTrafficChartBar(e){this.dailyTrafficChartBar={grid:{top:16,left:36,right:16,bottom:32},legend:{},tooltip:{show:!0,trigger:"axis",axisPointer:{type:"cross",lineStyle:{opacity:0}},crossStyle:{color:"#000"}},series:[{data:[34,45,31,45,31,43,26,43,31,45,33,40],type:"line",areaStyle:{},smooth:!0,lineStyle:{width:2,color:"#fff"}}],xAxis:{show:!0,type:"category",showGrid:!1,boundaryGap:!1,data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisLabel:{color:"#ccc",margin:20},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"value",min:10,max:60,axisLabel:{color:"#ccc",margin:20,fontSize:13,fontFamily:"roboto"},splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, .1)"}},axisLine:{show:!1},axisTick:{show:!1}},color:[{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255,255,255,0.3)"},{offset:1,color:"rgba(255,255,255,0)"}],global:!1}]}}getProductStatus(e){return e?e<20?{color:"accent",status:`${e} available`}:{color:"primary",status:"in stock"}:{color:"warn",status:"out of stcok"}}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(v.f))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-analytics"]],decls:112,vars:4,consts:[[1,"mat-bg-primary","m-12","px-24","py-24","rounded"],[1,"text-white","text-16","mb-16","font-weight-bold"],["height","180","echarts","",1,"chart","m-0",3,"options"],[1,"mt--72"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.sm","70","fxFlex.gt-sm","70"],["fxLayout","row wrap",1,"p-0","overflow-x-auto"],["mat-table","","fxFlex","","class","mat-elevation-z1 min-w-600",3,"dataSource",4,"ngIf"],["fxFlex","100%","fxFlex.gt-xs","calc(50% - 16px)"],["fxLayout","row","fxLayoutAlign","start center"],["mat-mini-fab","","color","primary",1,"mat-elevation-z0"],[1,"mat-18"],[1,"mat-card-title","mat-color-primary","m-0","ml-12"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mt-16"],[1,"m-0","text-muted","text-28","font-weight-bold"],["fxLayout","row wrap","fxLayoutAlign","start center"],[1,"text-14","text-primary"],[1,"m-0","ml-4","mat-color-primary","text-12"],["fxFlex","50","fxFlex.gt-xs","calc(50% - 16px)"],["mat-mini-fab","","color","warn",1,"mat-elevation-z0"],[1,"mat-card-title","mat-color-warn","m-0","ml-12"],[1,"text-14","text-warn"],[1,"m-0","ml-4","mat-color-warn","text-12"],["fxLayout","column wrap",1,"py-16"],[1,"mx-8"],[4,"ngFor","ngForOf"],["fxFlex","100","fxFlex.sm","30","fxFlex.gt-sm","30"],["fxFlex","100"],[1,"mb-0"],[1,"text-muted"],["echarts","",2,"height","280px",3,"options"],[1,"text-center","mat-bg-gray","p-24","mat-elevation-z0"],["src","/assets/images/illustrations/upgrade.svg","alt","upgrade"],[1,"text-muted","m-0","py-24"],["mat-raised-button","","color","primary",1,"px-24"],[1,"text-muted","m-0","text-small","mt-16"],["fxLayout","row","fxLayoutAlign","space-between center",1,"py-4"],["fxFlex","60","mode","determinate","value","75","color","primary"],[1,"m-0","text-muted"],["fxFlex","60","mode","determinate","value","50","color","accent"],["mat-table","","fxFlex","",1,"mat-elevation-z1","min-w-600",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["class","py-12","mat-cell","",4,"matCellDef"],["matColumnDef","price"],["mat-cell","",4,"matCellDef"],["matColumnDef","available"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",1,"py-12"],[1,"avatar-sm","rounded-circle",3,"src","alt"],[1,"m-0","ml-12","text-capitalize"],["mat-cell",""],["selected","",1,"align-middle","py-4","px-8",3,"color"],["mat-icon-button",""],[1,"mat-18","mat-color-primary"],["mat-header-row",""],["mat-row",""],["fxLayout","row wrap","fxLayoutAlign","space-between center"],["color","accent"],["mat-mini-fab","",1,"mx-24","mat-elevation-z0",3,"color"],[1,"font-weight-medium","m-0","text-capitalize"],["fxHide.lt-sm","","fxLayout","row wrap","fxLayoutAlign","start center"],[1,"d-flex","flex-row","ml-16"],["src","/assets/images/face-4.jpg",1,"avatar-sm","rounded-circle"],["src","/assets/images/face-2.jpg",1,"avatar-sm","rounded-circle"],["src","/assets/images/face-3.jpg",1,"avatar-sm","rounded-circle"],[1,"rounded-circle","d-flex","avatar-sm","m-0","mat-bg-warn","text-14","align-items-center","justify-content-center"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2,"Last 12 Months Sales"),t.qZA(),t._UZ(3,"div",2),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"mat-card",6),t.YNc(8,z,15,3,"table",7),t.qZA(),t.TgZ(9,"div",4)(10,"div",8)(11,"mat-card")(12,"div",9)(13,"button",10)(14,"mat-icon",11),t._uU(15," trending_up "),t.qZA()(),t.TgZ(16,"div",12),t._uU(17," Active Users "),t.qZA()(),t.TgZ(18,"div",13)(19,"h2",14),t._uU(20," 10.8k "),t.qZA(),t.TgZ(21,"div",15)(22,"mat-icon",16),t._uU(23," expand_less "),t.qZA(),t.TgZ(24,"small",17),t._uU(25," (+21%) "),t.qZA()()()()(),t.TgZ(26,"div",8)(27,"mat-card",18)(28,"div",9)(29,"button",19)(30,"mat-icon",11),t._uU(31," star_border "),t.qZA()(),t.TgZ(32,"div",20),t._uU(33," Transactions "),t.qZA()(),t.TgZ(34,"div",13)(35,"h2",14),t._uU(36," $2.8M "),t.qZA(),t.TgZ(37,"div",15)(38,"mat-icon",21),t._uU(39," expand_less "),t.qZA(),t.TgZ(40,"small",22),t._uU(41," (+21%) "),t.qZA()()()()()(),t.TgZ(42,"div",23)(43,"mat-card-title",24),t._uU(44,"Ongoing Projects"),t.qZA(),t.YNc(45,P,21,3,"div",25),t.qZA()(),t.TgZ(46,"div",26)(47,"div",4)(48,"mat-card",27)(49,"mat-card-title",28),t._uU(50,"Traffic Sources"),t.qZA(),t.TgZ(51,"small",29),t._uU(52,"Last 30 days"),t.qZA(),t._UZ(53,"div",30),t.qZA(),t.TgZ(54,"div",27)(55,"mat-card",31),t._UZ(56,"img",32),t.TgZ(57,"p",33),t._uU(58," Upgrade to "),t.TgZ(59,"b"),t._uU(60,"MatX PRO"),t.qZA(),t._uU(61," for "),t._UZ(62,"br"),t._uU(63," more resources "),t.qZA(),t.TgZ(64,"button",34),t._uU(65," UPGRADE "),t.qZA()()()(),t.TgZ(66,"div",4)(67,"mat-card",27)(68,"mat-card-title"),t._uU(69,"Campaigns"),t.qZA(),t.TgZ(70,"p",35),t._uU(71,"Today"),t.qZA(),t.TgZ(72,"div",36),t._UZ(73,"mat-progress-bar",37),t.TgZ(74,"small",38),t._uU(75,"Google (102k)"),t.qZA()(),t.TgZ(76,"div",36),t._UZ(77,"mat-progress-bar",39),t.TgZ(78,"small",38),t._uU(79,"Facebook (120k)"),t.qZA()(),t.TgZ(80,"div",36),t._UZ(81,"mat-progress-bar",37),t.TgZ(82,"small",38),t._uU(83,"Tensor (80k)"),t.qZA()(),t.TgZ(84,"p",35),t._uU(85,"Yesterday"),t.qZA(),t.TgZ(86,"div",36),t._UZ(87,"mat-progress-bar",37),t.TgZ(88,"small",38),t._uU(89,"Google (102k)"),t.qZA()(),t.TgZ(90,"div",36),t._UZ(91,"mat-progress-bar",39),t.TgZ(92,"small",38),t._uU(93,"Facebook (120k)"),t.qZA()(),t.TgZ(94,"div",36),t._UZ(95,"mat-progress-bar",37),t.TgZ(96,"small",38),t._uU(97,"Tensor (80k)"),t.qZA()(),t.TgZ(98,"p",35),t._uU(99,"Last Month"),t.qZA(),t.TgZ(100,"div",36),t._UZ(101,"mat-progress-bar",37),t.TgZ(102,"small",38),t._uU(103,"Google (102k)"),t.qZA()(),t.TgZ(104,"div",36),t._UZ(105,"mat-progress-bar",39),t.TgZ(106,"small",38),t._uU(107,"Facebook (120k)"),t.qZA()(),t.TgZ(108,"div",36),t._UZ(109,"mat-progress-bar",37),t.TgZ(110,"small",38),t._uU(111,"Tensor (80k)"),t.qZA()()()()()()()),2&e&&(t.xp6(3),t.Q6J("options",n.dailyTrafficChartBar),t.xp6(5),t.Q6J("ngIf",n.productList),t.xp6(37),t.Q6J("ngForOf",n.onGoingProjectList),t.xp6(8),t.Q6J("options",n.doughNutPieOptions))},dependencies:[s.sg,s.O5,T.oG,b.lW,p.a8,p.n5,A.HS,U.Hw,w.pW,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,m.xw,m.Wh,m.yH,_.b8,d._w],data:{animation:y}}),a})(),data:{title:"Analytics",breadcrumb:"Analytics"}}];let R=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.ez,u.m,f.o9,x.vQ,d.Ns.forRoot({echarts:()=>o.e(701).then(o.bind(o,81701))}),h.D,g.Bz.forChild(Q)]}),a})()}}]);