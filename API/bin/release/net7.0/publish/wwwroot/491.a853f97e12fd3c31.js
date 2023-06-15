"use strict";(self.webpackChunkmatx_angular_latest_test=self.webpackChunkmatx_angular_latest_test||[]).push([[491],{21491:(V,c,i)=>{i.r(c),i.d(c,{SessionsModule:()=>$});var T=i(62769),p=i(36895),r=i(24006),l=i(19132),A=i(37262),_=i(69814),U=i(89383),m=i(4859),g=i(73162),x=i(77579),n=i(94650),S=i(97800),w=i(77009),f=i(56709),h=i(59549),Z=i(44144),u=i(73546),P=i(1576);function q(e,s){if(1&e&&(n.TgZ(0,"p",16)(1,"small",19),n._uU(2),n.qZA()()),2&e){const o=n.oxw();n.xp6(2),n.Oqu(o.errorMsg)}}function O(e,s){1&e&&(n.TgZ(0,"small",20),n._uU(1," Username is required "),n.qZA())}function F(e,s){1&e&&(n.TgZ(0,"small",20),n._uU(1," Password is required "),n.qZA())}let M=(()=>{class e{constructor(o,t,a,K){this.jwtAuth=o,this.matxLoader=t,this.router=a,this.route=K,this.errorMsg="",this._unsubscribeAll=new x.x}ngOnInit(){this.signinForm=new r.nJ({username:new r.p4("",r.kI.required),password:new r.p4("",r.kI.required),rememberMe:new r.p4(!0)})}ngAfterViewInit(){this.autoSignIn()}ngOnDestroy(){this._unsubscribeAll.next(1),this._unsubscribeAll.complete()}signin(){const o=this.signinForm.value;this.submitButton.disabled=!0,this.progressBar.mode="indeterminate",this.jwtAuth.signin(o).subscribe(t=>{this.router.navigate(["/dashboard/analytics"])},t=>{this.submitButton.disabled=!1,this.progressBar.mode="determinate",this.errorMsg=t.message})}autoSignIn(){"/"!==this.jwtAuth.return&&(this.matxLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0,20)}...`,{width:"320px"}),setTimeout(()=>{this.signin(),console.log("autoSignIn"),this.matxLoader.close()},2e3))}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(S.t),n.Y36(w.P),n.Y36(l.F0),n.Y36(l.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signin"]],viewQuery:function(o,t){if(1&o&&(n.Gf(g.pW,5),n.Gf(m.lW,5)),2&o){let a;n.iGM(a=n.CRH())&&(t.progressBar=a.first),n.iGM(a=n.CRH())&&(t.submitButton=a.first)}},decls:30,vars:10,consts:[[1,"page-wrap","h-full","slate"],[1,"session-form-hold"],["mode","determinate",1,"session-progress"],[1,"text-center","pt-8","pb-16"],["width","60px","src","assets/images/logo.png","alt",""],[1,"text-muted","m-0"],["class","text-center",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,""],[1,"full-width"],["matInput","","name","username","placeholder","Username","value","",3,"formControl"],["class","form-error-msg",4,"ngIf"],["type","password","name","password","matInput","","placeholder","Password","value","",3,"formControl"],[1,"pb-16"],["name","rememberMe",1,"pb-16",3,"formControl"],["mat-raised-button","",1,"mat-primary","full-width","mb-16",3,"disabled"],[1,"text-center"],[1,"mat-primary","text-center","full-width",3,"routerLink"],["fxFlex",""],[1,"text-red"],[1,"form-error-msg"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"mat-progress-bar",2),n.TgZ(3,"mat-card")(4,"mat-card-content")(5,"div",3),n._UZ(6,"img",4),n.TgZ(7,"p",5),n._uU(8,"Sign in to your account"),n.qZA()(),n.YNc(9,q,3,1,"p",6),n.TgZ(10,"form",7),n.NdJ("ngSubmit",function(){return t.signin()}),n.TgZ(11,"div",8)(12,"mat-form-field",9),n._UZ(13,"input",10),n.qZA(),n.YNc(14,O,2,0,"small",11),n.qZA(),n.TgZ(15,"div",8)(16,"mat-form-field",9),n._UZ(17,"input",12),n.qZA(),n.YNc(18,F,2,0,"small",11),n.qZA(),n.TgZ(19,"div",13)(20,"mat-checkbox",14),n._uU(21,"Remember this computer"),n.qZA()(),n.TgZ(22,"button",15),n._uU(23,"Sign in"),n.qZA(),n.TgZ(24,"div",16)(25,"a",17),n._uU(26,"Forgot password"),n.qZA(),n._UZ(27,"span",18),n.TgZ(28,"a",17),n._uU(29,"Create a new account"),n.qZA()()()()()()()),2&o&&(n.xp6(9),n.Q6J("ngIf",t.errorMsg),n.xp6(1),n.Q6J("formGroup",t.signinForm),n.xp6(3),n.Q6J("formControl",t.signinForm.controls.username),n.xp6(1),n.Q6J("ngIf",t.signinForm.controls.username.hasError("required")&&t.signinForm.controls.username.touched),n.xp6(3),n.Q6J("formControl",t.signinForm.controls.password),n.xp6(1),n.Q6J("ngIf",t.signinForm.controls.password.hasError("required")&&t.signinForm.controls.password.touched),n.xp6(2),n.Q6J("formControl",t.signinForm.controls.rememberMe),n.xp6(2),n.Q6J("disabled",t.signinForm.invalid),n.xp6(3),n.Q6J("routerLink","/sessions/forgot-password"),n.xp6(3),n.Q6J("routerLink","/sessions/signup"))},dependencies:[p.O5,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg,f.oG,m.lW,h.KE,Z.Nt,u.a8,u.dn,g.pW,P.yH,l.yS]}),e})();var d=i(80529),y=i(39646),v=i(18505),b=i(70262),I=i(92340);let J=(()=>{class e{constructor(o){this.http=o,this.baseUrl=I.N.apiUrl,this.httpHeader={headers:new d.WM({"Content-Type":"application/json"})}}addStudent(o){return this.http.post(this.baseUrl+"Auth/register",o,this.httpHeader).pipe((0,v.b)(t=>console.log("Student fetched!")),(0,b.K)(this.handleError("Get student",[])))}getStudent(o){return this.http.get("api-goes-here/"+o).pipe((0,v.b)(a=>console.log(`Student fetched: ${o}`)),(0,b.K)(this.handleError(`Get student id=${o}`)))}handleError(o="operation",t){return a=>(console.error(a),console.log(`${o} failed: ${a.message}`),(0,y.of)(t))}}return e.\u0275fac=function(o){return new(o||e)(n.LFG(d.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function N(e,s){1&e&&(n.TgZ(0,"small",19),n._uU(1," Name is required "),n.qZA())}function E(e,s){1&e&&(n.TgZ(0,"small",19),n._uU(1," MaxLength 50 "),n.qZA())}function Q(e,s){1&e&&(n.TgZ(0,"small",19),n._uU(1,"Mobile is required "),n.qZA())}function Y(e,s){1&e&&(n.TgZ(0,"small",19),n._uU(1," maxLength 11 digit"),n.qZA())}function L(e,s){1&e&&(n.TgZ(0,"small",19),n._uU(1," minLength 11 digit"),n.qZA())}function H(e,s){1&e&&(n.TgZ(0,"small",19),n._uU(1," Email is required "),n.qZA())}function z(e,s){1&e&&(n.TgZ(0,"small",19),n._uU(1," Invaild Email address "),n.qZA())}function G(e,s){1&e&&(n.TgZ(0,"small",19),n._uU(1," Password is required "),n.qZA())}function B(e,s){1&e&&(n.TgZ(0,"small",19),n._uU(1," You must agree to the terms and conditions "),n.qZA())}let j=(()=>{class e{constructor(o,t,a){this.http=o,this.student=t,this.route=a,this.Studentdata={name:"",Mobile:"",Email:"",password:""}}ngOnInit(){const o=new r.p4("",r.kI.required);this.signupForm=new r.nJ({username:new r.p4("",[r.kI.required,r.kI.maxLength(50)]),PhoneNumber:new r.p4("",[r.kI.required,r.kI.maxLength(11),r.kI.minLength(11)]),Email:new r.p4("",[r.kI.required,r.kI.email]),password:o,agreed:new r.p4("",t=>t.value?null:{agreed:!0})})}signup(){const o=this.signupForm.value;console.log(o),this.submitButton.disabled=!0,this.progressBar.mode="indeterminate";var t=this;this.student.addStudent(o).subscribe(function(a){console.log(a),null!=a?"400"==a.Status?alert("This Email or user name is already registered  "):(console.log(t.route),t.route.navigate(["/dashboard/analytics"])):alert("please try in another time")})}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(d.eN),n.Y36(J),n.Y36(l.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signup"]],viewQuery:function(o,t){if(1&o&&(n.Gf(g.pW,5),n.Gf(m.lW,5)),2&o){let a;n.iGM(a=n.CRH())&&(t.progressBar=a.first),n.iGM(a=n.CRH())&&(t.submitButton=a.first)}},decls:41,vars:17,consts:[[1,"page-wrap","h-full","slate"],[1,"session-form-hold"],["mode","determinate",1,"session-progress"],[1,"text-center","pt-8","pb-16"],["width","60px","src","assets/images/logo.png","alt","",1,"mb-8"],[1,"text-muted","m-0"],[3,"formGroup","ngSubmit"],[1,""],[1,"full-width"],["matInput","","type","name","name","username","placeholder","Name","value","",3,"formControl"],["class","form-error-msg",4,"ngIf"],["maxlength","11","minlength","11","matInput","","type","tel","name","PhoneNumber","placeholder","Mobile Number","value","",3,"formControl"],["matInput","","type","email","name","Email","placeholder","Your Email","value","",3,"formControl"],["type","password","name","password","matInput","","placeholder","Password","value","",3,"formControl"],[1,"pb-16"],["name","agreed",1,"pb-16",3,"formControl"],["mat-raised-button","",1,"mat-primary","full-width","mb-16",3,"disabled"],[1,"text-center"],[1,"text-center","full-width",3,"routerLink"],[1,"form-error-msg"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"mat-progress-bar",2),n.TgZ(3,"mat-card")(4,"mat-card-content")(5,"div",3),n._UZ(6,"img",4),n.TgZ(7,"h2"),n._uU(8,"Lets get started"),n.qZA(),n.TgZ(9,"p",5),n._uU(10,"Sign up to use our service"),n.qZA()(),n.TgZ(11,"form",6),n.NdJ("ngSubmit",function(){return t.signup()}),n.TgZ(12,"div",7)(13,"mat-form-field",8),n._UZ(14,"input",9),n.qZA(),n.YNc(15,N,2,0,"small",10),n.YNc(16,E,2,0,"small",10),n.qZA(),n.TgZ(17,"div",7)(18,"mat-form-field",8),n._UZ(19,"input",11),n.qZA(),n.YNc(20,Q,2,0,"small",10),n.YNc(21,Y,2,0,"small",10),n.YNc(22,L,2,0,"small",10),n.qZA(),n.TgZ(23,"div",7)(24,"mat-form-field",8),n._UZ(25,"input",12),n.qZA(),n.YNc(26,H,2,0,"small",10),n.YNc(27,z,2,0,"small",10),n.qZA(),n.TgZ(28,"div",7)(29,"mat-form-field",8),n._UZ(30,"input",13),n.qZA(),n.YNc(31,G,2,0,"small",10),n.qZA(),n.TgZ(32,"div",14)(33,"mat-checkbox",15),n._uU(34,"I have read and agree to the terms of service."),n.qZA(),n.YNc(35,B,2,0,"small",10),n.qZA(),n.TgZ(36,"button",16),n._uU(37,"Sign up"),n.qZA(),n.TgZ(38,"div",17)(39,"a",18),n._uU(40,"Sign in to existing account"),n.qZA()()()()()()()),2&o&&(n.xp6(11),n.Q6J("formGroup",t.signupForm),n.xp6(3),n.Q6J("formControl",t.signupForm.controls.username),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.username.hasError("required")&&t.signupForm.controls.username.touched),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.username.hasError("maxLength")&&t.signupForm.controls.username.touched),n.xp6(3),n.Q6J("formControl",t.signupForm.controls.PhoneNumber),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.PhoneNumber.hasError("required")&&t.signupForm.controls.PhoneNumber.touched),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.PhoneNumber.hasError("maxLength")&&t.signupForm.controls.PhoneNumber.touched),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.PhoneNumber.hasError("minlength")&&t.signupForm.controls.PhoneNumber.touched),n.xp6(3),n.Q6J("formControl",t.signupForm.controls.Email),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.Email.hasError("required")&&t.signupForm.controls.Email.touched),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.Email.hasError("email")&&t.signupForm.controls.Email.touched),n.xp6(3),n.Q6J("formControl",t.signupForm.controls.password),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.password.hasError("required")&&t.signupForm.controls.password.touched),n.xp6(2),n.Q6J("formControl",t.signupForm.controls.agreed),n.xp6(2),n.Q6J("ngIf",t.signupForm.controls.agreed.hasError("agreed")&&t.signupForm.controls.agreed.touched),n.xp6(1),n.Q6J("disabled",t.signupForm.invalid),n.xp6(3),n.Q6J("routerLink","/sessions/signin"))},dependencies:[p.O5,r._Y,r.Fj,r.JJ,r.JL,r.wO,r.nD,r.oH,r.sg,f.oG,m.lW,h.KE,Z.Nt,u.a8,u.dn,g.pW,l.yS]}),e})();var k=i(97392);const R=function(){return["/"]};let W=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-not-found"]],decls:15,vars:2,consts:[[1,"d-flex","align-items-center","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),n._uU(4,"error"),n.qZA(),n.TgZ(5,"div",4)(6,"h1",5),n._uU(7,"404"),n.qZA(),n.TgZ(8,"div",6),n._uU(9,"Page Not Found!"),n.qZA()()(),n.TgZ(10,"div",7)(11,"button",8),n._uU(12,"Back to Dashboard"),n.qZA(),n.TgZ(13,"button",9),n._uU(14,"Report this Problem"),n.qZA()()()()),2&o&&(n.xp6(11),n.Q6J("routerLink",n.DdM(1,R)))},dependencies:[m.lW,k.Hw,l.rH]}),e})();var C=i(15861),D=i(83683);const X=[{path:"",children:[{path:"home-Page",component:(()=>{class e{constructor(o){this.route=o}ngOnInit(){}Register(){var o=this;return(0,C.Z)(function*(){o.route.navigateByUrl("/sessions/signup")})()}signIn(){var o=this;return(0,C.Z)(function*(){o.route.navigateByUrl("/sessions/signin")})()}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(l.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-home-page"]],decls:74,vars:0,consts:[[1,"back"],["width","60px","src","assets/images/logo.png","alt","",1,"mb-8"],[2,"margin-left","8px","color","#faebd7","text-shadow","0 0 0 #faebd7"],[1,"nav"],[1,"span","loader"],[1,"m"],[1,"tt"],["mat-flat-button","",3,"click"]],template:function(o,t){1&o&&(n.TgZ(0,"mat-toolbar",0),n._UZ(1,"img",1),n.TgZ(2,"span",2),n._uU(3,"FGSSR Project"),n.qZA()(),n.TgZ(4,"section",3)(5,"mat-card",0)(6,"section",3)(7,"h1"),n._uU(8,"Graduation Project Recommendations Search Engine "),n.qZA(),n.TgZ(9,"h3",4)(10,"span",5),n._uU(11,"B"),n.qZA(),n.TgZ(12,"span",5),n._uU(13,"E"),n.qZA(),n.TgZ(14,"span",5),n._uU(15,"N"),n.qZA(),n.TgZ(16,"span",5),n._uU(17,"E"),n.qZA(),n.TgZ(18,"span",5),n._uU(19,"F"),n.qZA(),n.TgZ(20,"span",5),n._uU(21,"I"),n.qZA(),n.TgZ(22,"span",5),n._uU(23,"T"),n.qZA(),n.TgZ(24,"span",5),n._uU(25,"S"),n.qZA(),n.TgZ(26,"span",5),n._uU(27,"\xa0"),n.qZA(),n.TgZ(28,"span",5),n._uU(29,"o"),n.qZA(),n.TgZ(30,"span",5),n._uU(31,"f"),n.qZA(),n.TgZ(32,"span",5),n._uU(33,"\xa0"),n.qZA(),n.TgZ(34,"span",5),n._uU(35,"T"),n.qZA(),n.TgZ(36,"span",5),n._uU(37,"E"),n.qZA(),n.TgZ(38,"span",5),n._uU(39,"C"),n.qZA(),n.TgZ(40,"span",5),n._uU(41,"H"),n.qZA(),n.TgZ(42,"span",5),n._uU(43,"N"),n.qZA(),n.TgZ(44,"span",5),n._uU(45,"O"),n.qZA(),n.TgZ(46,"span",5),n._uU(47,"L"),n.qZA(),n.TgZ(48,"span",5),n._uU(49,"O"),n.qZA(),n.TgZ(50,"span",5),n._uU(51,"G"),n.qZA(),n.TgZ(52,"span",5),n._uU(53,"I"),n.qZA(),n.TgZ(54,"span",5),n._uU(55,"E"),n.qZA(),n.TgZ(56,"span",5),n._uU(57,"S"),n.qZA()(),n.TgZ(58,"mat-card",6),n._uU(59," finding the graduation project that perfectly suits their skills & knowledge, they waste enormous amount of time & effort searching the internet for such project. As a result, we attempt to build an artificial intelligence-based website that scans the internet for graduation projects that match the skills & knowledge inputted by the user. "),n.qZA(),n.TgZ(60,"mat-card",0)(61,"button",7),n.NdJ("click",function(){return t.Register()}),n._uU(62," Join us "),n.qZA(),n.TgZ(63,"button",7),n.NdJ("click",function(){return t.signIn()}),n._uU(64,"Login"),n.qZA()(),n._UZ(65,"br")(66,"br")(67,"br")(68,"br")(69,"br")(70,"br")(71,"br")(72,"br")(73,"br"),n.qZA()()())},dependencies:[m.lW,D.Ye,u.a8],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:ROBOTO,sans-serif}.tt[_ngcontent-%COMP%]{font-family:Josefin Sans,sans-serif;font-size:1vw;background-color:#304156;text-align:center;color:#faebd7;display:flex;flex-direction:column;justify-content:center;align-items:center;width:75%}.back[_ngcontent-%COMP%]{background-color:#304156}.back2[_ngcontent-%COMP%]{background-color:#304156;height:500%;width:500%}.nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;position:relative;background-color:#304156;text-align:center;padding:0 2em}.nav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Josefin Sans,sans-serif;font-size:2vw;margin:0;padding-bottom:.5rem;letter-spacing:.5rem;color:#7c4dff;transition:all .3s ease;z-index:3}h1[_ngcontent-%COMP%]:hover{transform:translate3d(0,-10px,22px);color:#ff0266}.slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2vw;letter-spacing:.3rem;font-family:ROBOTO,sans-serif;font-weight:300;color:#faebd7;z-index:4}h3.span[_ngcontent-%COMP%]{font-size:2vw;letter-spacing:.7em;font-family:ROBOTO,sans-serif;font-weight:300;color:#faebd7;z-index:4}span[_ngcontent-%COMP%]:hover{color:#ff0266;font-weight:500;font-size:2.2vw}a[_ngcontent-%COMP%]{text-decoration:none}.nav-container--top-first[_ngcontent-%COMP%]{position:fixed;top:75px;transition:all .3s cubic-bezier(.19,1,.22,1)}@media (min-width: 800px){.nav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5vw}.nav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .nav-tab[_ngcontent-%COMP%]{font-size:3vw}}@media (min-width: 360px){.nav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3vw}.nav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1vw;letter-spacing:.2vw}.nav-tab[_ngcontent-%COMP%]{font-size:1.2vw}}.background[_ngcontent-%COMP%]{position:absolute;height:100vh;inset:0;z-index:0}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#faebd7;text-shadow:0 0 0 #faebd7;animation:loading 1s ease-in-out infinite alternate}@keyframes loading{to{text-shadow:20px 0 70px #ff0266;color:#ff0266}}button[_ngcontent-%COMP%]{width:100px;margin-left:4px;margin-right:4px;font-size:large;font-family:ROBOTO,sans-serif;animation:loading 1s ease-in-out infinite alternate}"]}),e})(),data:{title:"Home"}},{path:"signup",component:j,data:{title:"Signup"}},{path:"signin",component:M,data:{title:"Signin"}},{path:"404",component:W,data:{title:"Not Found"}}]}];let $=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[p.ez,r.u5,U.aw,r.UX,A.m,_.o9,T.Xd,l.Bz.forChild(X)]}),e})()}}]);