"use strict";(self.webpackChunkproducts_frontend=self.webpackChunkproducts_frontend||[]).push([[435],{5435:(L,c,a)=>{a.r(c),a.d(c,{UserModule:()=>x});var d=a(4975),m=a(6895),p=a(529),s=a(433),g=a(2099),e=a(8256);const f="https://codingfactory.ddns.net/api/user";let l=(()=>{class r{constructor(t){this.http=t}findAll(){return this.http.get(`${f}/findall`).pipe((0,g.g)(1e3))}insertUser(t){return this.http.post(`${f}/create`,t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(p.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();var u=a(6523);function Z(r,n){1&r&&(e.TgZ(0,"div",2),e._uU(1," Loading Users... "),e.TgZ(2,"div",3),e._UZ(3,"span",4),e.qZA()())}function _(r,n){if(1&r&&(e.TgZ(0,"div")(1,"strong"),e._uU(2),e.qZA(),e._UZ(3,"br"),e._uU(4),e.qZA()),2&r){const t=n.$implicit;e.xp6(2),e.Oqu(t.type),e.xp6(2),e.hij(" ",t.number," ")}}function U(r,n){if(1&r&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e._UZ(11,"br"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e.YNc(14,_,5,2,"div",8),e.qZA()()),2&r){const t=n.$implicit;e.xp6(2),e.hij(" ",t.username," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.surname," "),e.xp6(2),e.hij(" ",t.email," "),e.xp6(2),e.hij(" ",t.address.area," "),e.xp6(2),e.hij(" ",t.address.road," "),e.xp6(2),e.Q6J("ngForOf",t.phone)}}function b(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"div")(1,"table",5)(2,"thead")(3,"th",6),e._uU(4," Username "),e.TgZ(5,"button",7),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleSort("username"))}),e._UZ(6,"i"),e._uU(7," Sort Asc/Desc "),e.qZA()(),e.TgZ(8,"th",6),e._uU(9," Firstname "),e.TgZ(10,"button",7),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleSort("name"))}),e._UZ(11,"i"),e._uU(12," Sort Asc/Desc "),e.qZA()(),e.TgZ(13,"th",6),e._uU(14," Lastname "),e.TgZ(15,"button",7),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleSort("surname"))}),e._UZ(16,"i"),e._uU(17," Sort Asc/Desc "),e.qZA()(),e.TgZ(18,"th",6),e._uU(19,"Email"),e.qZA(),e.TgZ(20,"th",6),e._uU(21,"Address"),e.qZA(),e.TgZ(22,"th",6),e._uU(23,"Phone"),e.qZA()(),e.TgZ(24,"tbody"),e.YNc(25,U,15,7,"tr",8),e.qZA()()()}if(2&r){const t=e.oxw();e.xp6(6),e.Gre("fas ","asc"===t.sortDirectionUser?"fa-arrow-up":"fa-arrow-down",""),e.xp6(5),e.Gre("fas ","asc"===t.sortDirectionFname?"fa-arrow-up":"fa-arrow-down",""),e.xp6(5),e.Gre("fas ","asc"===t.sortDirectionLastname?"fa-arrow-up":"fa-arrow-down",""),e.xp6(9),e.Q6J("ngForOf",t.userList)}}let T=(()=>{class r{constructor(t){this.userService=t,this.loading=!1,this.userList=[],this.usernameSortType="asc",this.firstnameSortType="asc",this.lastnameSortType="asc",this.sortDirectionUser="asc",this.sortDirectionFname="asc",this.sortDirectionLastname="asc"}ngOnInit(){console.log('Starting "findAll" API call'),this.loading=!0,this.userService.findAll().subscribe({next:t=>{const{status:o,data:i}=t;this.userList=i,console.log(o,i)},error:t=>{this.loading=!1,console.log(t)},complete:()=>{this.loading=!1,console.log("API call completed")}})}ngOnDestroy(){this.subsciption?.unsubscribe()}toggleSort(t){switch(t){case"username":this.usernameSortType="asc"===this.usernameSortType?"desc":"asc",this.sortDirectionUser="asc"===this.sortDirectionUser?"desc":"asc",this.userList=(0,u.Z)(this.userList,[t],[this.usernameSortType]);break;case"name":this.firstnameSortType="asc"===this.firstnameSortType?"desc":"asc",this.sortDirectionFname="asc"===this.sortDirectionFname?"desc":"asc",this.userList=(0,u.Z)(this.userList,[t],[this.firstnameSortType]);break;case"surname":this.lastnameSortType="asc"===this.lastnameSortType?"desc":"asc",this.sortDirectionLastname="asc"===this.sortDirectionLastname?"desc":"asc",this.userList=(0,u.Z)(this.userList,[t],[this.lastnameSortType])}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-users-list"]],decls:2,vars:2,consts:[["class","mt-2 row alert alert-info",4,"ngIf"],[4,"ngIf"],[1,"mt-2","row","alert","alert-info"],["role","status",1,"spinner-border","text-primary"],[1,"sr-only"],[1,"table","table-striped"],["scope","col"],[1,"btn","btn-sm",3,"click"],[4,"ngFor","ngForOf"]],template:function(t,o){1&t&&(e.YNc(0,Z,4,0,"div",0),e.YNc(1,b,26,10,"div",1)),2&t&&(e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",o.userList.length))},dependencies:[m.sg,m.O5]}),r})();function v(r,n){1&r&&(e.TgZ(0,"div",25),e._uU(1," User inserted\n"),e.qZA())}function A(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",27)(2,"div",28)(3,"div",6)(4,"label",29),e._uU(5,"Type"),e.qZA(),e._UZ(6,"input",30),e.qZA()(),e.TgZ(7,"div",28)(8,"div",6)(9,"label",31),e._uU(10,"Number (must be at least 10 digits)"),e.qZA(),e._UZ(11,"input",32),e.qZA()(),e.TgZ(12,"div",33)(13,"div",6)(14,"button",34),e.NdJ("click",function(){const S=e.CHM(t).index,I=e.oxw();return e.KtG(I.removePhone(S))}),e._uU(15," Remove "),e.qZA()()()()()}2&r&&e.Q6J("formGroupName",n.index)}function q(r,n){1&r&&(e.TgZ(0,"div",35),e._uU(1," Please correct the errors in the form and try again. "),e.qZA())}let y=(()=>{class r{constructor(t,o,i){this.fb=t,this.service=o,this.router=i,this.isSubmitted=!1,this.form=this.fb.group({username:["",[s.kI.required,s.kI.minLength(3)]],password:["",[s.kI.required,s.kI.minLength(8)]],name:["",s.kI.required],surname:["",s.kI.required],email:["",[s.kI.required,s.kI.email]],address:this.fb.group({area:["",s.kI.required],road:["",s.kI.required]}),phone:this.fb.array([this.initPhone()])})}initPhone(){return this.fb.group({type:["",s.kI.required],number:["",[s.kI.required,s.kI.minLength(10)]]})}get phoneControls(){return this.form.get("phone").controls}addPhone(){this.form.get("phone").push(this.initPhone())}removePhone(t){this.form.get("phone").removeAt(t)}onSubmit(){this.isSubmitted=!0,this.form.valid?(console.log(this.form.value),setTimeout(()=>{this.router.navigate(["user/list"])},1500),this.service.insertUser(this.form.value).subscribe(o=>{console.log(o)})):console.log("Form is not valid")}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(l),e.Y36(d.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-user-insert"]],decls:59,vars:4,consts:[["class","alert alert-success mt-3","role","alert",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-2"],["for","username",1,"form-label"],[1,"text-danger"],["type","text","id","username","formControlName","username",1,"form-control"],[1,"mb-3"],["for","password",1,"form-label"],["type","password","id","password","formControlName","password",1,"form-control"],["for","name",1,"form-label"],["type","text","id","name","formControlName","name",1,"form-control"],["for","surname",1,"form-label"],["type","text","id","surname","formControlName","surname",1,"form-control"],["for","email",1,"form-label"],["type","email","id","email","formControlName","email",1,"form-control"],["formGroupName","address"],["for","area",1,"form-label"],["type","text","id","area","formControlName","area",1,"form-control"],["for","road",1,"form-label"],["type","text","id","road","formControlName","road",1,"form-control"],["formArrayName","phone"],[3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"click"],["class","alert alert-danger mt-3","role","alert",4,"ngIf"],["type","submit",1,"btn","btn-success","mb-4"],["role","alert",1,"alert","alert-success","mt-3"],[3,"formGroupName"],[1,"row"],[1,"col-md-5"],["for","type",1,"form-label"],["type","text","id","type","formControlName","type",1,"form-control"],["for","number",1,"form-label"],["type","text","id","number","formControlName","number",1,"form-control"],[1,"col-md-2"],["type","button",1,"btn","btn-danger","mt-4",3,"click"],["role","alert",1,"alert","alert-danger","mt-3"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"User Form"),e.qZA(),e.YNc(2,v,2,0,"div",0),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"Username (must be at least 3 characters) "),e.TgZ(7,"span",4),e._uU(8,"Required"),e.qZA()(),e._UZ(9,"input",5),e.qZA(),e.TgZ(10,"div",6)(11,"label",7),e._uU(12,"Password Must be at least 8 characters "),e.TgZ(13,"span",4),e._uU(14,"Required"),e.qZA()(),e._UZ(15,"input",8),e.qZA(),e.TgZ(16,"div",6)(17,"label",9),e._uU(18,"Name "),e.TgZ(19,"span",4),e._uU(20,"Required"),e.qZA()(),e._UZ(21,"input",10),e.qZA(),e.TgZ(22,"div",6)(23,"label",11),e._uU(24,"Surname "),e.TgZ(25,"span",4),e._uU(26,"Required"),e.qZA()(),e._UZ(27,"input",12),e.qZA(),e.TgZ(28,"div",6)(29,"label",13),e._uU(30,"Email "),e.TgZ(31,"span",4),e._uU(32,"Required"),e.qZA()(),e._UZ(33,"input",14),e.qZA(),e.TgZ(34,"div",15)(35,"h4"),e._uU(36,"Address"),e.qZA(),e.TgZ(37,"div",6)(38,"label",16),e._uU(39,"Area "),e.TgZ(40,"span",4),e._uU(41,"Required"),e.qZA()(),e._UZ(42,"input",17),e.qZA(),e.TgZ(43,"div",6)(44,"label",18),e._uU(45,"Road "),e.TgZ(46,"span",4),e._uU(47,"Required"),e.qZA()(),e._UZ(48,"input",19),e.qZA()(),e.TgZ(49,"h4"),e._uU(50,"Phone"),e.qZA(),e.TgZ(51,"div",20),e.YNc(52,A,16,1,"div",21),e.TgZ(53,"div",6)(54,"button",22),e.NdJ("click",function(){return o.addPhone()}),e._uU(55," Add Phone "),e.qZA()(),e.YNc(56,q,2,0,"div",23),e.TgZ(57,"button",24),e._uU(58,"Submit"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("ngIf",o.form.valid&&o.isSubmitted),e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(49),e.Q6J("ngForOf",o.phoneControls),e.xp6(4),e.Q6J("ngIf",!o.form.valid&&o.isSubmitted))},dependencies:[m.sg,m.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,s.x0,s.CE]}),r})();var h=a(3537);const C=[{path:"list",component:T},{path:"insert",component:y},{path:"delete",component:h.o},{path:"update",component:h.o}];let x=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[l],imports:[m.ez,d.Bz.forChild(C),p.JF,s.UX]}),r})()}}]);