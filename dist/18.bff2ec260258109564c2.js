(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"60iU":function(l,n,e){"use strict";var u=e("G5J1"),t=e("F/XL"),o=e("6blF");e.d(n,"a",(function(){return a}));var a=function(){function l(l,n,e){this.kind=l,this.value=n,this.error=e,this.hasValue="N"===l}return l.prototype.observe=function(l){switch(this.kind){case"N":return l.next&&l.next(this.value);case"E":return l.error&&l.error(this.error);case"C":return l.complete&&l.complete()}},l.prototype.do=function(l,n,e){switch(this.kind){case"N":return l&&l(this.value);case"E":return n&&n(this.error);case"C":return e&&e()}},l.prototype.accept=function(l,n,e){return l&&"function"==typeof l.next?this.observe(l):this.do(l,n,e)},l.prototype.toObservable=function(){var l;switch(this.kind){case"N":return Object(t.a)(this.value);case"E":return l=this.error,new o.a((function(n){return n.error(l)}));case"C":return Object(u.b)()}throw new Error("unexpected notification kind value")},l.createNext=function(n){return void 0!==n?new l("N",n):l.undefinedValueNotification},l.createError=function(n){return new l("E",void 0,n)},l.createComplete=function(){return l.completeNotification},l.completeNotification=new l("C"),l.undefinedValueNotification=new l("N",void 0),l}()},dirU:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){return function(){}}(),o=e("iutN"),a=e("pMnS"),s=e("gIcY"),i=(e("zavE"),e("TxLo")),r=e("vDqi"),c=e.n(r),d=e("NFKh"),b=function(){function l(l,n,e,u){var t=this;this._constant=l,this.activeModal=n,this.router=u,this.base=this._constant.baseAppUrl,this.uri=this._constant.uri_track,this.user_id=Number(sessionStorage.getItem("setSessionstorageValueUserID")),this.profileName=sessionStorage.getItem("setSessionstorageValueName"),this.username=sessionStorage.getItem("SetUsername"),this.profilePassword=sessionStorage.getItem("SetPassword"),this.profilePhone=sessionStorage.getItem("setSessionstorageValuePhone"),this.profileEmail=sessionStorage.getItem("setSessionstorageValueEmail"),this.profileImage=sessionStorage.getItem("setSessionstorageValueUserImage"),this.profileImageFill=sessionStorage.getItem("setSessionstorageValueUserImageFill"),this.profileAssets=sessionStorage.getItem("setSessionstorageValueUserAssets"),this.profileReseller=Number(sessionStorage.getItem("setSessionstorageValueUserResellerID")),this.profileCompany=Number(sessionStorage.getItem("setSessionstorageValueUserCompanyID")),this.profileRole=Number(sessionStorage.getItem("setSessionstorageValueRoleID")),this.profileNotification=sessionStorage.getItem("setSessionstorageValueUserNotifications"),this.api_reseller=this._constant.getResellers(),this.router.events.subscribe((function(l){""!=e.path()&&(t.route=e.path())}))}return l.prototype.ngOnInit=function(){var l=this.router,n=this._constant.getSessionstorageValueUserResellerID,e=this.profileCompany,u=this.profileRole,t=this._constant.getSessionstorageValueUserID,o=this._constant.userApi;function a(l){var n=new FileReader,e=l.files[0].size/1024/1024;e>1?(alert("File size exceeds 1 MB"),$("#profileLabelUpload").val("")):l.files&&l.files[0]&&(n.onload=function(l){$("#profileImageBox").attr("src",l.target.result).width(110).height(110)},n.readAsDataURL(l.files[0]),$("#profileLabelUpload").text("File "+l.files[0].name+" is "+Math.round(100*e)/100+" MB in size"))}c.a.get(this.api_reseller).then((function(l){for(var e=l.data,u=0;u<e.length;u++)e[u].ResellerID==n?$("#profileReseller").append($('<option selected="selected"></option>').val(e[u].ResellerID).html(e[u].Name)):$("#profileReseller").append($("<option></option>").val(e[u].ResellerID).html(e[u].Name));$(".selectpicker").selectpicker("refresh")})).catch((function(l){console.log(l),alert(l)})),$.getJSON("https://app.track-asia.com/tracksgwebapi/api/companyinfo?&ResellerID="+n,(function(l){$.each(l,(function(l,n){Number(n.CompanyID)==e?$("#profileCompany").append($('<option selected="selected"></option>').val(n.CompanyID).html(n.Name)):$("#profileCompany").append($("<option></option>").val(n.CompanyID).html(n.Name))})),$(".selectpicker").selectpicker("refresh")})),$("input[type='file']").on("click",(function(){$(this).val()?($(this).val(""),$("input[type='file']").unbind("change"),$("input[type='file']").change((function(){a(this)}))):$("input[type='file']").change((function(){a(this)}))})),$("#profileID").val(this.user_id),$("#profileImageBox").attr("src",this.profileImage).width(110).height(110),$("#profileFullName").val(this.profileName),$("#username").val(this.username),$("#profilePassword").val(this.profilePassword),$("#profileConfirmPassword").val(this.profilePassword),$("#profilePhone").val(this.profilePhone),$("#profileEmail").val(this.profileEmail),$("#profileReseller").val(n),$("#profileCompany").val(e),$("#profileRole").val(u),$("#deleteProfile").on("click",".deleteProfileBtn",{route:l},(function(l){var n=l.data.route,e={UserID:t};c.a.delete(o+e.UserID,e).then((function(l){console.log(l),$("#deleteProfile").modal("hide"),n.navigate(["/login"])})).catch((function(l){console.log(l)}))}))},l.prototype.onSubmit=function(){Number(sessionStorage.getItem("setSessionstorageValueRoleID"));var l=$("#profileID").val(),n="",e=$("#profilePassword").val();try{n=null==l||""==l||"undefined"==l?d.SHA3(e,{outputLength:256}).toString():null!=l&&256==e.length?e:64==e.length?e:d.SHA3(e,{outputLength:256}).toString(d.enc.Base64)}catch(t){console.log("You got this error: "+t)}var u={UserID:$("#profileID").val(),Name:$("#profileFullName").val(),User:$("#username").val(),Password:n,RoleID:this.profileRole,Phone:$("#profilePhone").val(),Email:$("#profileEmail").val(),CompanyID:$("#profileCompany").val(),Assets:sessionStorage.getItem("setSessionstorageValueUserAssets"),Notifications:this.profileNotification,LoginRetry:10,Reports:"",Language:"English",ApiKey:"",ResellerID:$("#profileReseller").val()};alert(JSON.stringify(u)),c.a.put("https://app.track-asia.com/tracksgwebapi/api/userinfo?id="+u.UserID,u).then((function(l){console.log(l);var n=new FormData,e=$("#uploadProfile").get(0).files;e.length>0&&n.append("UploadedImageUser",e[0],u.UserID+".png"),$.ajax({type:"POST",url:"https://app.track-asia.com/tracksgwebapi/api/fileupload/uploadfileuser",contentType:!1,processData:!1,data:n,success:function(l){console.log("success")}}).done((function(l,n){"success"==n?null!=l&&(l.Key?(alert(l.Value),$("#uploadProfile").val("")):alert(l.Value)):alert(l.Value)}))})).catch((function(l){console.log(l)}))},l}(),p=e("4GxJ"),f=e("Ip0R"),m=e("ZYCi"),h=u.ub({encapsulation:0,styles:[[""]],data:{}});function g(l){return u.Yb(0,[(l()(),u.wb(0,0,null,null,100,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(l()(),u.wb(1,0,null,null,99,"div",[["class","card module-dt"]],null,null,null,null,null)),(l()(),u.wb(2,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u.wb(3,0,null,null,1,"span",[["class","font-weight-bold"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Profile"])),(l()(),u.wb(5,0,null,null,95,"div",[["class","card-body module-dt"]],null,null,null,null,null)),(l()(),u.wb(6,0,null,null,62,"div",[["style","width: 100%;"]],null,null,null,null,null)),(l()(),u.wb(7,0,null,null,61,"form",[["id","profileModalForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0;return"submit"===n&&(t=!1!==u.Lb(l,9).onSubmit(e)&&t),"reset"===n&&(t=!1!==u.Lb(l,9).onReset()&&t),t}),null,null)),u.vb(8,16384,null,0,s.r,[],null,null),u.vb(9,4210688,null,0,s.k,[[8,null],[8,null]],null,null),u.Qb(2048,null,s.c,null,[s.k]),u.vb(11,16384,null,0,s.j,[[4,s.c]],null,null),(l()(),u.wb(12,0,null,null,45,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u.wb(13,0,null,null,3,"div",[["class","form-group d-none"]],null,null,null,null,null)),(l()(),u.wb(14,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Profile ID"])),(l()(),u.wb(16,0,null,null,0,"input",[["class","form-control"],["id","profileID"],["name","profileID"],["placeholder","Enter Profile ID"],["type","text"]],null,null,null,null,null)),(l()(),u.wb(17,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),u.wb(18,0,null,null,4,"div",[["class","form-group"],["id","profileImage"]],null,null,null,null,null)),(l()(),u.wb(19,0,null,null,0,"img",[["alt",""],["class","img-responsive"],["height","110"],["id","profileImageBox"],["src","http://placehold.it/180"],["width","110"]],null,null,null,null,null)),(l()(),u.wb(20,0,null,null,2,"span",[["class","btn btn-mint btn-file"],["data-l11n",""]],null,null,null,null,null)),(l()(),u.wb(21,0,null,null,0,"input",[["id","uploadProfile"],["name","UploadFile"],["type","file"]],null,null,null,null,null)),(l()(),u.wb(22,0,null,null,0,"span",[["id","profileLabelUpload"]],null,null,null,null,null)),(l()(),u.wb(23,0,null,null,3,"div",[["class","col-md-6 form-group float-left"]],null,null,null,null,null)),(l()(),u.wb(24,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Full Name"])),(l()(),u.wb(26,0,null,null,0,"input",[["class","form-control"],["data-by-field","profileFullName"],["data-l11n",""],["id","profileFullName"],["name","profileFullName"],["placeholder","Full Name"],["required",""],["type","text"]],null,null,null,null,null)),(l()(),u.wb(27,0,null,null,3,"div",[["class","col-md-6 form-group float-left"]],null,null,null,null,null)),(l()(),u.wb(28,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Username"])),(l()(),u.wb(30,0,null,null,0,"input",[["class","form-control"],["data-by-field","username"],["data-l11n",""],["disabled",""],["id","username"],["name","username"],["placeholder","Username"],["required",""],["type","text"]],null,null,null,null,null)),(l()(),u.wb(31,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),u.wb(32,0,null,null,3,"div",[["class","col-md-6 float-left form-group"]],null,null,null,null,null)),(l()(),u.wb(33,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Password"])),(l()(),u.wb(35,0,null,null,0,"input",[["class","form-control"],["data-by-field","profilePassword"],["data-l11n",""],["id","profilePassword"],["name","profilePassword"],["placeholder","Password"],["required",""],["type","password"]],null,null,null,null,null)),(l()(),u.wb(36,0,null,null,3,"div",[["class","col-md-6 float-left form-group"]],null,null,null,null,null)),(l()(),u.wb(37,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Confirm Password"])),(l()(),u.wb(39,0,null,null,0,"input",[["class","form-control"],["data-by-field","profileConfirmPassword"],["data-l11n",""],["id","profileConfirmPassword"],["name","profileConfirmPassword"],["placeholder","Confirm Password"],["required",""],["type","password"]],null,null,null,null,null)),(l()(),u.wb(40,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),u.wb(41,0,null,null,3,"div",[["class","col-md-6 float-left form-group"]],null,null,null,null,null)),(l()(),u.wb(42,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Phone"])),(l()(),u.wb(44,0,null,null,0,"input",[["class","form-control"],["data-by-field","profilePhone"],["data-l11n",""],["id","profilePhone"],["name","profilePhone"],["placeholder","Phone Number"],["required",""],["type","text"]],null,null,null,null,null)),(l()(),u.wb(45,0,null,null,3,"div",[["class","col-md-6 float-left form-group"]],null,null,null,null,null)),(l()(),u.wb(46,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Email"])),(l()(),u.wb(48,0,null,null,0,"input",[["class","form-control"],["data-by-field","profileEmail"],["data-l11n",""],["id","profileEmail"],["name","profileEmail"],["placeholder","Email"],["required",""],["type","text"]],null,null,null,null,null)),(l()(),u.wb(49,0,null,null,3,"div",[["class","col-md-6 float-left form-group d-none"]],null,null,null,null,null)),(l()(),u.wb(50,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Reseller"])),(l()(),u.wb(52,0,null,null,0,"select",[["class","selectpicker form-control show-tick"],["data-live-search","true"],["data-width","100%"],["id","profileReseller"]],null,null,null,null,null)),(l()(),u.wb(53,0,null,null,3,"div",[["class","col-md-6 float-left form-group"]],null,null,null,null,null)),(l()(),u.wb(54,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Company"])),(l()(),u.wb(56,0,null,null,0,"select",[["class","selectpicker form-control show-tick"],["data-live-search","true"],["data-width","100%"],["disabled",""],["id","profileCompany"]],null,null,null,null,null)),(l()(),u.wb(57,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.wb(58,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),u.wb(59,0,null,null,9,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),u.wb(60,0,null,null,2,"button",[["class","btn btn-danger float-left"],["data-toggle","modal"],["href","#deleteProfile"],["id","delete-user"],["type","button"]],null,null,null,null,null)),(l()(),u.wb(61,0,null,null,0,"i",[["class","fa fa-trash fa-fw"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,[" Delete Account"])),(l()(),u.wb(63,0,null,null,2,"button",[["class","btn btn-secondary"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),u.wb(64,0,null,null,0,"i",[["class","fa fa-times fa-fw"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,[" Close"])),(l()(),u.wb(66,0,null,null,2,"button",[["class","btn btn-primary"],["data-toggle","modal"],["href","#confirmProfile"],["id","submit-user"],["type","button"]],null,null,null,null,null)),(l()(),u.wb(67,0,null,null,0,"i",[["class","fa fa-check fa-fw"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,[" Save changes"])),(l()(),u.wb(69,0,null,null,15,"div",[["class","modal fade"],["id","confirmProfile"]],null,null,null,null,null)),(l()(),u.wb(70,0,null,null,14,"div",[["class","modal-dialog modal-dialog-centered modal-confirm"]],null,null,null,null,null)),(l()(),u.wb(71,0,null,null,13,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),u.wb(72,0,null,null,4,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),u.wb(73,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Please Confirm..."])),(l()(),u.wb(75,0,null,null,1,"button",[["aria-hidden","true"],["class","close"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,["\xd7"])),(l()(),u.wb(77,0,null,null,2,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),u.wb(78,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Do you wish to proceed with the updates?"])),(l()(),u.wb(80,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),u.wb(81,0,null,null,1,"button",[["class","btn btn-info"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Cancel"])),(l()(),u.wb(83,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onSubmit()&&u),u}),null,null)),(l()(),u.Vb(-1,null,["Save"])),(l()(),u.wb(85,0,null,null,15,"div",[["class","modal fade"],["id","deleteProfile"]],null,null,null,null,null)),(l()(),u.wb(86,0,null,null,14,"div",[["class","modal-dialog modal-dialog-centered modal-confirm"]],null,null,null,null,null)),(l()(),u.wb(87,0,null,null,13,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),u.wb(88,0,null,null,4,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),u.wb(89,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Are you sure?"])),(l()(),u.wb(91,0,null,null,1,"button",[["aria-hidden","true"],["class","close"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,["\xd7"])),(l()(),u.wb(93,0,null,null,2,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),u.wb(94,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Do you really want to delete your account? This process cannot be undone."])),(l()(),u.wb(96,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),u.wb(97,0,null,null,1,"button",[["class","btn btn-info"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Cancel"])),(l()(),u.wb(99,0,null,null,1,"button",[["class","btn btn-danger deleteProfileBtn"],["type","button"]],null,null,null,null,null)),(l()(),u.Vb(-1,null,["Delete"]))],null,(function(l,n){l(n,7,0,u.Lb(n,11).ngClassUntouched,u.Lb(n,11).ngClassTouched,u.Lb(n,11).ngClassPristine,u.Lb(n,11).ngClassDirty,u.Lb(n,11).ngClassValid,u.Lb(n,11).ngClassInvalid,u.Lb(n,11).ngClassPending)}))}function w(l){return u.Yb(0,[(l()(),u.wb(0,0,null,null,1,"app-profile",[],null,null,null,g,h)),u.vb(1,114688,null,0,b,[i.a,p.d,f.i,m.l],null,null)],(function(l,n){l(n,1,0)}),null)}var v=u.sb("app-profile",b,w,{},{},[]),y=e("z5nN"),I=e("9AJC"),P=e("NJnL"),V=e("lqqz"),J=e("DQlY"),N=e("Zseb"),S=e("xtZt"),D=e("9EwZ"),C={title:"Users"},U=function(){return function(){}}(),k=e("axVG");e.d(n,"ProfileModuleNgFactory",(function(){return R}));var R=u.tb(t,[],(function(l){return u.Ib([u.Jb(512,u.j,u.X,[[8,[o.a,a.a,v,y.a,y.b,I.a,I.b,I.f,I.g,I.c,I.d,I.e]],[3,u.j],u.x]),u.Jb(4608,f.o,f.n,[u.u]),u.Jb(4608,s.p,s.p,[]),u.Jb(4608,p.w,p.w,[u.j,u.r,p.kb,p.x]),u.Jb(4608,P.a,P.a,[u.z,u.E,u.B]),u.Jb(4608,V.a,V.a,[u.j,u.z,u.r,P.a,u.g]),u.Jb(4608,J.a,J.a,[u.E,V.a]),u.Jb(4608,p.d,p.d,[]),u.Jb(1073742336,f.c,f.c,[]),u.Jb(1073742336,s.o,s.o,[]),u.Jb(1073742336,s.e,s.e,[]),u.Jb(1073742336,N.b,N.b,[]),u.Jb(1073742336,S.e,S.e,[]),u.Jb(1073742336,D.a,D.a,[]),u.Jb(1073742336,m.p,m.p,[[2,m.u],[2,m.l]]),u.Jb(1073742336,U,U,[]),u.Jb(1073742336,k.a,k.a,[]),u.Jb(1073742336,J.e,J.e,[]),u.Jb(1073742336,p.c,p.c,[]),u.Jb(1073742336,p.g,p.g,[]),u.Jb(1073742336,p.h,p.h,[]),u.Jb(1073742336,p.l,p.l,[]),u.Jb(1073742336,p.m,p.m,[]),u.Jb(1073742336,p.s,p.s,[]),u.Jb(1073742336,p.u,p.u,[]),u.Jb(1073742336,p.y,p.y,[]),u.Jb(1073742336,p.A,p.A,[]),u.Jb(1073742336,p.E,p.E,[]),u.Jb(1073742336,p.H,p.H,[]),u.Jb(1073742336,p.K,p.K,[]),u.Jb(1073742336,p.N,p.N,[]),u.Jb(1073742336,p.V,p.V,[]),u.Jb(1073742336,p.Y,p.Y,[]),u.Jb(1073742336,p.Z,p.Z,[]),u.Jb(1073742336,p.ab,p.ab,[]),u.Jb(1073742336,p.Q,p.Q,[]),u.Jb(1073742336,p.z,p.z,[]),u.Jb(1073742336,t,t,[]),u.Jb(1024,m.j,(function(){return[[{path:"",component:b,data:C}]]}),[])])}))}}]);