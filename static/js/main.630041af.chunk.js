(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/preloader.9547f847.svg"},109:function(e,t,a){e.exports={main:"Users_main__2PV6k",temp:"Users_temp__13QR4"}},110:function(e,t,a){e.exports=a.p+"static/media/lenin-way.85e5d1fb.png"},112:function(e,t,a){e.exports=a(263)},117:function(e,t,a){},125:function(e,t,a){},16:function(e,t,a){e.exports={title_message:"Login_title_message__2Jxha",form_box:"Login_form_box__hIacJ",form_box__inner:"Login_form_box__inner__3DeB1",form_box__title:"Login_form_box__title__1gHqO",form_box__input:"Login_form_box__input__235W_",form_box__inputField:"Login_form_box__inputField__38j3M",form_box__inputField_alert:"Login_form_box__inputField_alert__K028k",form_box__clue:"Login_form_box__clue__-vdSk",form_box__checkbox:"Login_form_box__checkbox__2Zvcm",messageAlert:"Login_messageAlert__2e95I",messageAlert_active:"Login_messageAlert_active__Ck-Kp"}},17:function(e,t,a){e.exports={profile_info_container:"Profileinfo_profile_info_container__3_c-l",profile_info__image_box:"Profileinfo_profile_info__image_box__hCm3G",profile_info__image:"Profileinfo_profile_info__image__cMuOl",profile_info__image_button:"Profileinfo_profile_info__image_button__m4diI",profile_info__content:"Profileinfo_profile_info__content__1lCyB",profile_info__title:"Profileinfo_profile_info__title__3xN_O",profile_info__about:"Profileinfo_profile_info__about__2Brl8",profile_info__contact:"Profileinfo_profile_info__contact__35m9W"}},18:function(e,t,a){e.exports={nav:"Nav_nav__3cSrS",nav__list:"Nav_nav__list__1mcde",nav__list_item:"Nav_nav__list_item__3e7K7",active_a:"Nav_active_a__3sm3L"}},22:function(e,t,a){e.exports={pageNumbersWrap:"PageSwitcher_pageNumbersWrap__3rZg9",pageNumbers:"PageSwitcher_pageNumbers__29l-q",switchingPageButton:"PageSwitcher_switchingPageButton__tbLiq",leftNarrow:"PageSwitcher_leftNarrow__3Sx4q",rightNarrow:"PageSwitcher_rightNarrow__tx0T6",pageNumber_text:"PageSwitcher_pageNumber_text__3y57Z",pageNumberInput:"PageSwitcher_pageNumberInput__3Gk5P",submit:"PageSwitcher_submit__3UbAZ"}},247:function(e,t,a){},26:function(e,t,a){e.exports={userCard:"UserCard_userCard__aeYu-",temp:"UserCard_temp__3ltln",userCard__inner:"UserCard_userCard__inner__1_4Wr",fullName:"UserCard_fullName__3gfIz",data:"UserCard_data__2dPco",button:"UserCard_button__OavAv",link:"UserCard_link__18j1u"}},263:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(52),s=a.n(o),i=(a(117),a(3)),l=a(4),c=a(7),u=a(2),m=a(6),_=a(11),f=a(12),p=a(1),d=(a(125),a(5)),g=a.n(d),b=a(14),h=a(8),E=a(9),v=a(102).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b076c552-0822-4bb0-890f-3a6e6d452108"}}),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return v.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return v.delete("follow/".concat(e)).then(function(e){return e.data})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return v.post("follow/".concat(e),{}).then(function(e){return e.data})},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return console.warn("\u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f"),O.getProfile(e)},O={getProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return v.get("profile/".concat(e))},getStatus:function(e){return v.get("profile/status/".concat(e))},updateStatus:function(e){return v.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),v.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},k=function(){return v.get("auth/me").then(function(e){return e.data})},y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return v.post("auth/login",{email:e,password:t,rememberMe:a}).then(function(e){return e.data})},C=function(){return v.delete("auth/login").then(function(e){return e.data})},S={postsData:[{id:1,message:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u043b \u043a \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e \u043f\u043e \u043a\u0443\u0440\u0441\u0443 IT-Kamasutra",likesCount:5},{id:2,message:"\u0412\u0442\u043e\u0440\u043e\u0439 \u0434\u0435\u043d\u044c (15.12.21) \u041a\u0443\u0440\u0441: \u041f\u0443\u0442\u044c \u0441\u0430\u043c\u0443\u0440\u0430\u044f",likesCount:7},{id:3,message:"\u0421\u0438\u0434\u0435\u043b \u0441 \u0440\u0435\u0431\u0435\u043d\u043a\u043e\u043c \u043f\u043e\u0447\u0442\u0438 \u043f\u043e\u043b\u043d\u044b\u0445 \u0434\u0432\u0430 \u0434\u043d\u044f",likesCount:1},{id:4,message:"\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u044b\u0439 \u0434\u0435\u043d\u044c (18.12.21) \u041a\u0443\u0440\u0441: \u041f\u0443\u0442\u044c \u0441\u0430\u043c\u0443\u0440\u0430\u044f",likesCount:5},{id:5,message:"\u0421\u0435\u0434\u044c\u043c\u043e\u0439 \u0434\u0435\u043d\u044c (22.12.21) \u043f\u043e\u043a\u043b\u044e\u0447\u0438\u043b Redux",likesCount:5}],profile:null,status:"",isFetching:!1},j=function(e){return{type:"SET_STATUS",status:e}},I=function(e){return{type:"SET_PHOTO",photo:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE_USER":return Object(E.a)({},e,{profile:t.profile});case"ADD-POST":var a={id:6,message:t.newPostText,likesCount:0};return Object(E.a)({},e,{postsData:[].concat(Object(h.a)(e.postsData),[a]),newPostText:""});case"SET_STATUS":return Object(E.a)({},e,{status:t.status});case"SET_PHOTO":return Object(E.a)({},e,{profile:Object(E.a)({},e.profile,{photos:Object(E.a)({},t.photo)})});default:return e}},A=a(30),F=a.n(A),U=a(64),L=a.n(U),D=function(e){return r.a.createElement("div",{className:L.a.post},r.a.createElement("img",{className:L.a.postImage,src:"https://svgx.ru/svg/159301.svg",alt:"avatar"}),r.a.createElement("div",null,e.postsData.message,r.a.createElement("div",null,"Likes: ",e.postsData.likesCount)))},R=a(19),G=a(29),M=function(e){return r.a.createElement(R.c,{initialValues:{textarea:""},validationSchema:G.b({textarea:G.c().max(70,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435").min(1).required("\u041d\u0435\u0447\u0435\u0433\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c")}),onSubmit:function(){var t=Object(b.a)(g.a.mark(function t(a){return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.addPost(a.textarea),a.textarea="";case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},function(e){return r.a.createElement(R.b,{className:F.a.addPost},r.a.createElement("h3",{className:F.a.addPost__title},"\u041c\u043e\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),r.a.createElement(R.a,{as:"textarea",className:F.a.textarea+" "+(e.touched.textarea&&e.errors.textarea?F.a.textarea_alert:null),id:"textarea",name:"textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),e.touched.textarea&&e.errors.textarea&&r.a.createElement("span",null,e.errors.textarea),r.a.createElement("button",{className:F.a.addPost__button,type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"))})},z=function(e){var t=e.postsData.map(function(e,t){return r.a.createElement(D,{key:t,postsData:e})}).reverse();return r.a.createElement("main",{className:F.a.myPosts},r.a.createElement(M,e),r.a.createElement("div",{className:F.a.postsContainer},t))},H=Object(_.b)(function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}},{addPost:function(e){return{type:"ADD-POST",newPostText:e}}})(z),B=(a(247),a(17)),q=a.n(B),W=a(108),J=a.n(W),K=a(66),V=a.n(K),Y=function(e){return r.a.createElement("div",{className:V.a.container},e.isFetching?r.a.createElement("img",{className:V.a.img,src:J.a,alt:"download"}):null)},Z=a(43),X=a.n(Z),Q=a(13),$=a(33),ee=a.n($),te=function(e){var t=Object(n.useState)(!1),a=Object(Q.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)(e.status),l=Object(Q.a)(i,2),c=l[0],u=l[1],m=function(){o?(s(!1),e.updateUserStatus(c)):s(!0)};return r.a.createElement("div",{className:ee.a.profile_status},o?r.a.createElement("div",{className:ee.a.profile_status__inner},r.a.createElement("div",{className:ee.a.profile_status__text},"\u0421\u0442\u0430\u0442\u0443\u0441:"),r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},value:c,onBlur:m,autoFocus:!0})):r.a.createElement("div",{className:ee.a.profile_status__inner},r.a.createElement("div",{className:ee.a.profile_status__text},"\u0421\u0442\u0430\u0442\u0443\u0441:"),r.a.createElement("span",null,e.status||"*****"),r.a.createElement("button",{className:ee.a.profile_status__button,onClick:m},"\u0438\u0437\u043c.")))},ae=function(e){return e.profile?r.a.createElement("div",{className:q.a.profile_info_container},r.a.createElement("div",{className:q.a.profile_info__image_box},r.a.createElement("img",{className:q.a.profile_info__image,src:e.profile.photos.large?e.profile.photos.large:X.a,alt:"avatar"}),e.userId&&!e.match&&r.a.createElement("input",{className:q.a.profile_info__image_button,type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})),r.a.createElement("div",{className:q.a.profile_info__content},r.a.createElement("div",{className:q.a.profile_info__title},e.profile.fullName),r.a.createElement(te,{status:e.status,updateUserStatus:e.updateUserStatus}),r.a.createElement("div",{className:q.a.profile_info__about},r.a.createElement("span",null,"\u041e\u0431\u043e \u043c\u043d\u0435:")," ",e.profile.aboutMe," ",r.a.createElement("br",null),r.a.createElement("span",null,"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b:")," ",e.profile.lookingForAJob?" \u0414\u0430":" \u041d\u0435\u0442"," ",r.a.createElement("br",null),r.a.createElement("span",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b:"),e.profile.lookingForAJobDescription),r.a.createElement("div",{className:q.a.profile_info__contact},r.a.createElement("ul",null," \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",r.a.createElement("li",null,r.a.createElement("span",null,"Facebook:")," ",r.a.createElement("a",{href:e.profile.contacts.facebook,target:"_blank",rel:"noopener noreferrer"},e.profile.contacts.facebook)),r.a.createElement("li",null,r.a.createElement("span",null,"Website:")," ",r.a.createElement("a",{href:e.profile.contacts.website,target:"_blank",rel:"noopener noreferrer"},e.profile.contacts.website)),r.a.createElement("li",null,r.a.createElement("span",null,"VK:")," ",r.a.createElement("a",{href:e.profile.contacts.vk,target:"_blank",rel:"noopener noreferrer"},e.profile.contacts.vk)),r.a.createElement("li",null,r.a.createElement("span",null,"Twitter:")," ",r.a.createElement("a",{href:e.profile.contacts.twitter,target:"_blank",rel:"noopener noreferrer"},e.profile.contacts.twitter)),r.a.createElement("li",null,r.a.createElement("span",null,"Instagram:")," ",r.a.createElement("a",{href:e.profile.contacts.instagram,target:"_blank",rel:"noopener noreferrer"},e.profile.contacts.instagram)),r.a.createElement("li",null,r.a.createElement("span",null,"Youtube:")," ",r.a.createElement("a",{href:e.profile.contacts.youtube,target:"_blank",rel:"noopener noreferrer"},e.profile.contacts.youtube)),r.a.createElement("li",null,r.a.createElement("span",null,"Github:")," ",r.a.createElement("a",{href:e.profile.contacts.github,target:"_blank",rel:"noopener noreferrer"},e.profile.contacts.github)),r.a.createElement("li",null,r.a.createElement("span",null,"MainLink:")," ",r.a.createElement("a",{href:e.profile.contacts.mainLink,target:"_blank",rel:"noopener noreferrer"},e.profile.contacts.mainLink)))))):r.a.createElement("div",{className:q.a.profile_info_container},r.a.createElement("img",{className:q.a.profile_info__image,src:X.a,alt:"avatar"}),r.a.createElement("div",{className:q.a.profile_info__content},r.a.createElement("div",{className:q.a.profile_info__title},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d"),r.a.createElement("div",{className:q.a.profile_info__about},r.a.createElement("span",null,"\u041e\u0431\u043e \u043c\u043d\u0435:")," \u0435\u0441\u043b\u0438 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u044d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u0437\u043d\u0430\u0447\u0438\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442, \u043b\u0438\u0431\u043e \u043a\u043e\u043d\u0447\u0438\u043b\u0430\u0441\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 API \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f GITHUB. \u0415\u0441\u043b\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043d\u0430 \u0441\u0432\u043e\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",r.a.createElement("br",null),r.a.createElement("span",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),"\u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b"),r.a.createElement("div",null,r.a.createElement(Y,{isFetching:e.isFetching})),r.a.createElement("div",{className:q.a.profile_info__contact},r.a.createElement("ul",null," \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",r.a.createElement("li",null,r.a.createElement("span",null,"\u0421\u043e\u0446. \u0441\u0435\u0442\u044c:")," \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b")))))},ne=function(e){return r.a.createElement("main",{className:"profile"},r.a.createElement(ae,e),r.a.createElement(H,null))},re=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"refreshProfile",value:function(){var e=21488;this.props.match?e=this.props.match.params.userId:null!=this.props.userId&&(e=this.props.userId),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match&&this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(ne,this.props)}}]),t}(r.a.Component),oe=Object(_.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId}},{getUserProfile:function(e){return function(){var t=Object(b.a)(g.a.mark(function t(a){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:n=t.sent,a({type:"SET_PROFILE_USER",profile:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(b.a)(g.a.mark(function t(a){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getStatus(e);case 2:n=t.sent,a(j(n.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(b.a)(g.a.mark(function t(a){return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:0===O.updateStatus(e).data.resultCode&&a(j(e));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(b.a)(g.a.mark(function t(a){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:0===(n=O.savePhoto(e)).data.resultCode&&a(I(n.data.data.photos));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=Object(p.g)("/profile/:userId/");return r.a.createElement(re,Object.assign({},e,{match:t}))}),se=a(18),ie=a.n(se),le=function(){return r.a.createElement("nav",{className:ie.a.nav},r.a.createElement("ul",{className:ie.a.nav__list},r.a.createElement("li",{className:ie.a.nav__list_item},r.a.createElement(f.b,{to:"/profile",className:function(e){return e.isActive?ie.a.active_a:ie.a.item}},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("li",{className:ie.a.nav__list_item},r.a.createElement(f.b,{to:"/dialogs",className:function(e){return e.isActive?ie.a.active_a:ie.a.item}},"\u0414\u0438\u0430\u043b\u043e\u0433\u0438")),r.a.createElement("li",{className:ie.a.nav__list_item},r.a.createElement(f.b,{to:"/content",className:function(e){return e.isActive?ie.a.active_a:ie.a.item}},"\u041a\u043e\u043d\u0442\u0435\u043d\u0442")),r.a.createElement("li",{className:ie.a.nav__list_item},r.a.createElement(f.b,{to:"/users",className:function(e){return e.isActive?ie.a.active_a:ie.a.item}},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"))))},ce=a(37),ue={usersPost:[{id:1,message:"Hello world!",likesCount:5},{id:2,message:"I am programming",likesCount:6},{id:3,message:"It`s cool!",likesCount:10},{id:4,message:"It`s very cool!",likesCount:11}],usersData:[{id:"1",name:"Airat"},{id:"2",name:"Lilya"},{id:"3",name:"Bulat"}],newPostText:""},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOG-ADD-POST":var a={id:e.usersPost.length,message:t.text,likesCount:0};return Object(E.a)({},e,{usersPost:[].concat(Object(h.a)(e.usersPost),[a]),newPostText:""});default:return e}},_e=a(34),fe=a.n(_e),pe=a(67),de=a.n(pe),ge=function(e){return r.a.createElement("div",{className:de.a.message},e.message,r.a.createElement("div",{className:de.a.likes},"Likes: ",e.likesCount))},be=a(68),he=a.n(be),Ee=function(e){return r.a.createElement("div",{className:he.a.dialog+" "+he.a.active},r.a.createElement(f.b,{to:"/login"+e.id}," ",e.name," "))},ve=function(e){return r.a.createElement(R.c,{initialValues:{textarea:""},onSubmit:function(){var t=Object(b.a)(g.a.mark(function t(a){return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.onAddPost(a.textarea),a.textarea="";case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(R.b,{className:fe.a.form_box},r.a.createElement("label",{className:fe.a.form_box__input},r.a.createElement(R.a,{className:fe.a.textarea,as:"textarea",id:"textarea",name:"textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})),r.a.createElement("button",{type:"submit",disabled:!1},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")))},Pe=function(e){var t=e.usersData.map(function(e){return r.a.createElement(Ee,{key:e.id,id:e.id,name:e.name})}),a=e.usersPost.map(function(e){return r.a.createElement(ge,{key:e.id,message:e.message,likesCount:e.likesCount})});return r.a.createElement("div",{className:fe.a.dialogs},r.a.createElement("div",{className:fe.a.dialogList},t),r.a.createElement("div",{className:fe.a.messages},r.a.createElement("div",null,a),r.a.createElement(ve,e)))},we=Object(ce.c)(Object(_.b)(function(e){return{usersData:e.dialogPage.usersData,usersPost:e.dialogPage.usersPost,newPostText:e.dialogPage.newPostText}},function(e){return{onAddPost:function(t){e(function(e){return{type:"DIALOG-ADD-POST",text:e}}(t))}}}),function(e){return Object(_.b)(function(e){return{isAuth:e.auth.isAuth}})(function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(p.a,{to:"/login"})})})(Pe),xe={users:[{id:1,followed:!1,name:"Lenin",photos:{small:"https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg",large:"https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg"},status:"\u041b\u0435\u0436\u0443",location:{city:"Ulyanovsk",country:"Russia"}},{id:2,followed:!0,name:"Lilya",photos:{small:"https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg"},status:"I am the best",location:{city:"Ulyanovsk",country:"Russia"}},{id:3,followed:!1,name:"Bulat",photos:{small:"https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg"},status:"Hi all",location:{city:"Ulyanovsk",country:"Russia"}}],pageSize:12,totalUsersCount:0,currentPage:500,isFetching:!1,followingInProgress:[]},Ne=function(e){return{type:"TOGGLE_FOLLOW",userId:e}},Oe=function(e){return{type:"SET_USERS",users:e}},ke=function(e){return{type:"SET_TOTAL_COUNT",count:e}},ye=function(e){return{type:"SET_CURRENT_PAGE",page:e}},Ce=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Se=function(e,t){return{type:"TOGGLE_FOLOWING_IN_PROGRESS",isFetching:e,id:t}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FOLLOW":return Object(E.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(E.a)({},e,{followed:!e.followed}):e})});case"SET_USERS":return Object(E.a)({},e,{users:Object(h.a)(t.users)});case"SET_CURRENT_PAGE":return Object(E.a)({},e,{currentPage:t.page});case"SET_TOTAL_COUNT":return Object(E.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(E.a)({},e,{isFetching:t.isFetching});case"TOGGLE_FOLOWING_IN_PROGRESS":return Object(E.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(h.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter(function(e){return e!==t.id})});default:return e}},Ie=a(109),Te=a.n(Ie),Ae=a(22),Fe=a.n(Ae),Ue=function(e){var t=Math.ceil(e.totalUsersCount/e.pageSize),a=r.a.createRef();return r.a.createElement("div",{className:Fe.a.pageNumbersWrap},r.a.createElement("div",{className:Fe.a.pageNumbers},r.a.createElement("button",{className:Fe.a.switchingPageButton+" "+Fe.a.leftNarrow,onClick:function(){e.onPageChanged(e.currentPage-1)}},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f"),r.a.createElement("div",{className:Fe.a.pageNumber_text},"\u0441\u0442\u0440. ",r.a.createElement("span",null,e.currentPage)," \u0438\u0437 ",t),r.a.createElement("button",{className:Fe.a.switchingPageButton+" "+Fe.a.rightNarrow,onClick:function(){e.onPageChanged(e.currentPage+1)}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f")),r.a.createElement("div",{className:Fe.a.pageNumbers},r.a.createElement("input",{className:Fe.a.pageNumberInput,type:"number",ref:a,placeholder:e.currentPage}),r.a.createElement("button",{className:Fe.a.switchingPageButton+" "+Fe.a.submit,onClick:function(){var n;e.onPageChanged(Math.round((n=a.current.value,Number(n)<0?1:Number(n)>t?t:n))),a.current.value=""}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438")))},Le=a(26),De=a.n(Le),Re=function(e){var t=e.user,a=e.followingInProgress,n=e.onClickFollow;return r.a.createElement("div",{className:De.a.userCard,style:{backgroundImage:null!=t.photos.large?"url("+t.photos.large+")":"url("+X.a+")"}},r.a.createElement("div",{className:De.a.userCard__inner},r.a.createElement("div",{className:De.a.fullName},t.name),r.a.createElement("div",{className:De.a.data},"ID:",t.id),r.a.createElement("div",{className:De.a.data},t.status),r.a.createElement("button",{disabled:a.some(function(e){return e===t.id}),className:De.a.button,onClick:function(){return n(t)}},t.followed?"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"),r.a.createElement(f.b,{to:"/profile/"+t.id,className:De.a.link},r.a.createElement("button",{className:De.a.button,onClick:function(){return window.scrollTo(0,0)}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"))))},Ge=function(e){return r.a.createElement("div",{className:Te.a.main},r.a.createElement(Ue,e),e.isFetching?r.a.createElement(Y,{isFetching:e.isFetching}):e.users.map(function(t){return r.a.createElement(Re,{key:t.id,user:t,followingInProgress:e.followingInProgress,onClickFollow:e.onClickFollow})}),r.a.createElement(Ue,e))},Me=function(e){return e.usersPage.users},ze=function(e){return e.usersPage.pageSize},He=function(e){return e.usersPage.totalUsersCount},Be=function(e){return e.usersPage.currentPage},qe=function(e){return e.usersPage.isFetching},We=function(e){return e.usersPage.followingInProgress},Je=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){a.props.requestUsers(e,a.props.pageSize),window.scrollTo(0,0)},a.onClickFollow=function(e){a.props.toggleFollow(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,followingInProgress:this.props.followingInProgress,onPageChanged:this.onPageChanged,onClickFollow:this.onClickFollow,isFetching:this.props.isFetching}))}}]),t}(r.a.Component),Ke=Object(_.b)(function(e){return{users:Me(e),pageSize:ze(e),totalUsersCount:He(e),currentPage:Be(e),isFetching:qe(e),followingInProgress:We(e)}},{toggleStateFollow:Ne,setUsers:Oe,setTotalCount:ke,setCurrentPages:ye,toggleIsFetching:Ce,toggleFollowingInProgress:Se,requestUsers:function(e,t){return function(){var a=Object(b.a)(g.a.mark(function a(n){var r;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(ye(e)),n(Ce(!0)),a.next=4,P(e,t);case 4:r=a.sent,n(Ce(!1)),n(Oe(r.items)),n(ke(r.totalCount));case 8:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},toggleFollow:function(e){return function(){var t=Object(b.a)(g.a.mark(function t(a){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a(Se(!0,e.id)),!e.followed){t.next=7;break}return t.next=4,w(e.id);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,x(e.id);case 9:n=t.sent;case 10:0===n.resultCode&&a(Ne(e.id)),a(Se(!1,e.id));case 13:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(Je),Ve={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},Ye=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},Ze=function(){return function(){var e=Object(b.a)(g.a.mark(function e(t){var a,n,r,o,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:0===(a=e.sent).resultCode&&(n=a.data,r=n.id,o=n.login,s=n.email,t(Ye(r,s,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(E.a)({},e,t.payload);default:return e}},Qe=a(38),$e=a.n(Qe),et=a(110),tt=a.n(et),at=function(e){return r.a.createElement("header",{className:$e.a.header},r.a.createElement(f.b,{to:"/",className:$e.a.header_text},'\u0421\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u043e \u043a\u0443\u0440\u0441\u0443 "\u041f\u0443\u0442\u044c \u0441\u0430\u043c\u0443\u0440\u0430\u044f"'),r.a.createElement("img",{className:$e.a.hint_img,src:tt.a,alt:"Lenin"}),r.a.createElement("h2",null,"SOCIAL NETWORK"),r.a.createElement("button",{className:$e.a.login_button},e.isAuth?r.a.createElement("span",{onClick:e.logOut},e.login):r.a.createElement(f.b,{to:"/login",className:$e.a.login_button__link},"\u0412\u043e\u0439\u0442\u0438")))},nt=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(at,this.props)}}]),t}(r.a.Component),rt=Object(_.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logOut:function(){return function(){var e=Object(b.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:0===e.sent.resultCode&&t(Ye(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(nt),ot=a(16),st=a.n(ot),it=function(e){var t=e.isAuth,a=e.login;return t?r.a.createElement(p.a,{to:"/profile/"}):r.a.createElement(R.c,{initialValues:{email:"",password:"",rememberMe:!1},validationSchema:G.b({email:G.c().max(40,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430").min(1).required("\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435 Email"),password:G.c().max(20,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c").min(1).required("\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435 Password"),rememberMe:G.a()}),onSubmit:function(e,t){var n=t.setSubmitting,r=t.setStatus;a(e.email,e.password,e.rememberMe,r),n(!1)}},function(e){return r.a.createElement(R.b,{className:st.a.form_box},r.a.createElement("div",{className:st.a.form_box__inner},r.a.createElement("h2",{className:st.a.form_box__title},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("label",{className:st.a.form_box__input},"Email",r.a.createElement(R.a,{type:"email",id:"email",name:"email",className:st.a.form_box__inputField+" "+(e.touched.email&&e.errors.email?st.a.form_box__inputField_alert:null)})),r.a.createElement("div",{className:st.a.form_box__clue},"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 Email: ",r.a.createElement("br",null),r.a.createElement("span",null,"free@samuraijs.com")),r.a.createElement("label",{className:st.a.form_box__input},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement(R.a,{type:"password",id:"password",name:"password",className:st.a.form_box__inputField+" "+(e.touched.password&&e.errors.password?st.a.form_box__inputField_alert:null)})),r.a.createElement("div",{className:st.a.form_box__clue},"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 Password: ",r.a.createElement("br",null),r.a.createElement("span",null,"free")),r.a.createElement("label",{className:st.a.form_box__checkbox},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f",r.a.createElement(R.a,{type:"checkbox",id:"rememberMe",name:"rememberMe"})),r.a.createElement("button",{type:"submit",disabled:!1},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("div",{className:st.a.messageAlert+" "+(e.touched.email&&e.errors.email||e.touched.password&&e.errors.password||e.status?st.a.messageAlert_active:null)},e.touched.email&&e.errors.email&&r.a.createElement("div",null,e.errors.email),e.touched.password&&e.errors.password&&r.a.createElement("div",null,e.errors.password),r.a.createElement("div",null,e.status)))})},lt=Object(_.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,a,n){return function(){var r=Object(b.a)(g.a.mark(function r(o){var s;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y(e,t,a);case 2:0===(s=r.sent).resultCode?o(Ze()):n(s.messages);case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:st.a.title_message},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u043e\u0439\u0442\u0438 \u0432 \u0441\u0435\u0442\u044c"),r.a.createElement(it,e))}),ct={initialized:!1},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(E.a)({},e,{initialized:!0});default:return e}},mt=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(rt,null),r.a.createElement(le,null),r.a.createElement("main",{className:"main"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/*",element:r.a.createElement(oe,null)}),r.a.createElement(p.b,{path:"/dialogs/*",element:r.a.createElement(we,null)}),r.a.createElement(p.b,{path:"/profile/*",element:r.a.createElement(oe,null)}),r.a.createElement(p.b,{path:"/users",element:r.a.createElement(Ke,null)}),r.a.createElement(p.b,{path:"/content",element:r.a.createElement("div",null)}),r.a.createElement(p.b,{path:"/login",element:r.a.createElement(lt,null)}))))):r.a.createElement(Y,null)}}]),t}(r.a.Component),_t=Object(_.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(Ze());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}})(mt),ft={},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft;arguments.length>1&&arguments[1];return e},dt=a(111),gt=Object(ce.b)({profilePage:T,dialogPage:me,sidebar:pt,usersPage:je,auth:Xe,app:ut}),bt=Object(ce.d)(gt,Object(ce.a)(dt.a));window.store=bt;var ht=bt;s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_.a,{store:ht},r.a.createElement(_t,null))),document.getElementById("root"))},30:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__zRyiP",postsContainer:"MyPosts_postsContainer__2qCHZ",addPost:"MyPosts_addPost__MfNgJ",addPost__title:"MyPosts_addPost__title__rkYeY",textarea:"MyPosts_textarea__1VhC4",textarea_alert:"MyPosts_textarea_alert__oyAal",addPost__button:"MyPosts_addPost__button__2IPlY"}},33:function(e,t,a){e.exports={profile_status:"Profilestatus_profile_status__1F0t1",profile_status__inner:"Profilestatus_profile_status__inner__2xuiR",profile_status__text:"Profilestatus_profile_status__text__RHZ6E",profile_status__button:"Profilestatus_profile_status__button__3Vwi9"}},34:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1mJc6",dialogList:"Dialogs_dialogList__2q45D",messages:"Dialogs_messages__OPB_H",textarea:"Dialogs_textarea__2yX7u"}},38:function(e,t,a){e.exports={header:"Header_header__2yUd1",move:"Header_move__3edRc",header_text:"Header_header_text__3pKNf",hint_img:"Header_hint_img__aypzw",login_button:"Header_login_button__1mbaH",login_button__link:"Header_login_button__link__159sk"}},43:function(e,t,a){e.exports=a.p+"static/media/unload-avatar.482a2308.webp"},64:function(e,t,a){e.exports={post:"Post_post__Rqpya",postImage:"Post_postImage__3V08e"}},66:function(e,t,a){e.exports={container:"Preloader_container__2_E44",img:"Preloader_img__2DXxR"}},67:function(e,t,a){e.exports={message:"Message_message__2aAye",likes:"Message_likes__2EIYX"}},68:function(e,t,a){e.exports={dialog:"UserData_dialog__3MjDG",active:"UserData_active__1mnxY"}}},[[112,2,1]]]);
//# sourceMappingURL=main.630041af.chunk.js.map