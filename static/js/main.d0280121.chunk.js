(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports={header:"Header_header__RyKuI",move:"Header_move__2SgrR",header_text:"Header_header_text__2NJgF",hint_img:"Header_hint_img__ZMvBf",login_block:"Header_login_block__2lY1e",login_block__link:"Header_login_block__link__I3oP-"}},21:function(e,t,a){e.exports=a.p+"static/media/unload-avatar.482a2308.webp"},22:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__EObeM",dialogList:"Dialogs_dialogList__2odgt",messages:"Dialogs_messages__1emPh",textarea:"Dialogs_textarea__28bnv"}},25:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__OvvwB",addPost:"MyPosts_addPost__UxLtW",textarea:"MyPosts_textarea__3UQS5"}},27:function(e,t,a){e.exports={post:"Post_post__19zsQ",postImage:"Post_postImage__2gkUD"}},28:function(e,t,a){e.exports={message:"Message_message__2qn5h",likes:"Message_likes__bL8Gp"}},29:function(e,t,a){e.exports={dialog:"UserData_dialog__3U63Y",active:"UserData_active__1hx5L"}},3:function(e,t,a){e.exports={main:"Users_main__3cFxC",pageNumbers:"Users_pageNumbers__2jInc",switchingPageButton:"Users_switchingPageButton__1yWUv",pageNumberInput:"Users_pageNumberInput__16Hxo",userCard:"Users_userCard__cc6Rv",gradient:"Users_gradient__3pymr",userCard__inner:"Users_userCard__inner__Cwr91",fullName:"Users_fullName__LUSat",data:"Users_data__Mw4Z6",button:"Users_button__1BXV2",link:"Users_link__2pu6U"}},41:function(e,t,a){e.exports=a.p+"static/media/preloader.04505faa.svg"},42:function(e,t,a){e.exports=a.p+"static/media/lenin-way.85e5d1fb.png"},43:function(e,t,a){e.exports=a(89)},48:function(e,t,a){},50:function(e,t,a){},6:function(e,t,a){e.exports={nav:"Nav_nav__1nT-Y",nav__list:"Nav_nav__list__J2Izh",nav__list_item:"Nav_nav__list_item__KJrTW",active_a:"Nav_active_a__11VjD"}},78:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),o=a.n(s),l=(a(48),a(50),a(4)),i=a(1),c=a(13),u=a(14),m=a(17),g=a(15),_=a(18),p=a(16),f=a(10),d=a(11),E=a(2),h={postsData:[{id:1,message:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u043b \u043a \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e \u043f\u043e \u043a\u0443\u0440\u0441\u0443 IT-Kamasutra",likesCount:5},{id:2,message:"\u0412\u0442\u043e\u0440\u043e\u0439 \u0434\u0435\u043d\u044c (15.12.21) \u041a\u0443\u0440\u0441: \u041f\u0443\u0442\u044c \u0441\u0430\u043c\u0443\u0440\u0430\u044f",likesCount:7},{id:3,message:"\u0421\u0438\u0434\u0435\u043b \u0441 \u0440\u0435\u0431\u0435\u043d\u043a\u043e\u043c \u043f\u043e\u0447\u0442\u0438 \u043f\u043e\u043b\u043d\u044b\u0445 \u0434\u0432\u0430 \u0434\u043d\u044f",likesCount:1},{id:4,message:"\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u044b\u0439 \u0434\u0435\u043d\u044c (18.12.21) \u041a\u0443\u0440\u0441: \u041f\u0443\u0442\u044c \u0441\u0430\u043c\u0443\u0440\u0430\u044f",likesCount:5},{id:5,message:"\u0421\u0435\u0434\u044c\u043c\u043e\u0439 \u0434\u0435\u043d\u044c (22.12.21) \u043f\u043e\u043a\u043b\u044e\u0447\u0438\u043b Redux",likesCount:5}],newPostText:"",profile:null,isFetching:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-TEXT-AREA":return Object(E.a)({},e,{newPostText:t.newText});case"SET_PROFILE_USER":return Object(E.a)({},e,{profile:t.profile});case"ADD-POST":var a={id:6,message:e.newPostText,likesCount:0};return Object(E.a)({},e,{postsData:[].concat(Object(d.a)(e.postsData),[a]),newPostText:""});default:return e}},b=a(25),P=a.n(b),w=a(27),k=a.n(w),N=function(e){return r.a.createElement("div",{className:k.a.post},r.a.createElement("img",{className:k.a.postImage,src:"https://svgx.ru/svg/159301.svg"}),r.a.createElement("div",null,e.postsData.message,r.a.createElement("div",null,"Likes: ",e.postsData.likesCount)))},O=function(e){var t=r.a.createRef(),a=e.postsData.map(function(e){return r.a.createElement(N,{postsData:e})}).reverse();return r.a.createElement("main",{className:P.a.myPosts},r.a.createElement("div",{className:P.a.addPost},r.a.createElement("h3",null,"My Posts"),r.a.createElement("textarea",{className:P.a.textarea,ref:t,value:e.newPostText,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",onChange:function(){var a=t.current.value;e.changeText(a)}}),r.a.createElement("button",{onClick:function(){e.addPost()}},"Add Post")),a)},C=Object(f.b)(function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}},function(e){return{changeText:function(t){return e(function(e){return{type:"CHANGE-TEXT-AREA",newText:e}}(t))},addPost:function(){return e({type:"ADD-POST"})}}})(O),T=(a(78),a(9)),I=a.n(T),x=a(41),y=a.n(x),A=function(e){return r.a.createElement(r.a.Fragment,null,e.isFetching?r.a.createElement("img",{src:y.a}):null)},F=a(21),U=a.n(F),j=function(e){return e.profile?r.a.createElement("div",{className:I.a.profile_info_container},r.a.createElement("img",{className:I.a.profile_info__image,src:e.profile.photos.large?e.profile.photos.large:U.a}),r.a.createElement("div",{className:I.a.profile_info__content},r.a.createElement("div",{className:I.a.profile_info__title},e.profile.fullName),r.a.createElement("div",{className:I.a.profile_info__about},r.a.createElement("span",null,"\u041e\u0431\u043e \u043c\u043d\u0435:")," ",e.profile.aboutMe," ",r.a.createElement("br",null),r.a.createElement("span",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),e.profile.lookingForAJobDescription),r.a.createElement("div",{className:I.a.profile_info__contact},r.a.createElement("ul",null," \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",r.a.createElement("li",null,r.a.createElement("span",null,"Facebook:")," ",r.a.createElement("a",{href:e.profile.contacts.facebook,target:"_blank"},e.profile.contacts.facebook)),r.a.createElement("li",null,r.a.createElement("span",null,"Website:")," ",r.a.createElement("a",{href:e.profile.contacts.website,target:"_blank"},e.profile.contacts.website)),r.a.createElement("li",null,r.a.createElement("span",null,"VK:")," ",r.a.createElement("a",{href:e.profile.contacts.vk,target:"_blank"},e.profile.contacts.vk)),r.a.createElement("li",null,r.a.createElement("span",null,"Twitter:")," ",r.a.createElement("a",{href:e.profile.contacts.twitter,target:"_blank"},e.profile.contacts.twitter)),r.a.createElement("li",null,r.a.createElement("span",null,"Instagram:")," ",r.a.createElement("a",{href:e.profile.contacts.instagram,target:"_blank"},e.profile.contacts.instagram)),r.a.createElement("li",null,r.a.createElement("span",null,"Youtube:")," ",r.a.createElement("a",{href:e.profile.contacts.youtube,target:"_blank"},e.profile.contacts.youtube)),r.a.createElement("li",null,r.a.createElement("span",null,"Github:")," ",r.a.createElement("a",{href:e.profile.contacts.github,target:"_blank"},e.profile.contacts.github)),r.a.createElement("li",null,r.a.createElement("span",null,"MainLink:")," ",r.a.createElement("a",{href:e.profile.contacts.mainLink,target:"_blank"},e.profile.contacts.mainLink)))))):r.a.createElement("div",{className:I.a.profile_info_container},r.a.createElement("img",{className:I.a.profile_info__image,src:U.a}),r.a.createElement("div",{className:I.a.profile_info__content},r.a.createElement("div",{className:I.a.profile_info__title},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d"),r.a.createElement("div",{className:I.a.profile_info__about},r.a.createElement("span",null,"\u041e\u0431\u043e \u043c\u043d\u0435:")," \u0435\u0441\u043b\u0438 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u044d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u0437\u043d\u0430\u0447\u0438\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442, \u043b\u0438\u0431\u043e \u043a\u043e\u043d\u0447\u0438\u043b\u0430\u0441\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 API \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f GITHUB. \u0415\u0441\u043b\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043d\u0430 \u0441\u0432\u043e\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",r.a.createElement("br",null),r.a.createElement("span",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),"\u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b"),r.a.createElement("div",null,r.a.createElement(A,{isFetching:e.isFetching})),r.a.createElement("div",{className:I.a.profile_info__contact},r.a.createElement("ul",null," \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",r.a.createElement("li",null,r.a.createElement("span",null,"\u0421\u043e\u0446. \u0441\u0435\u0442\u044c:")," \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b")))))},D=function(e){return r.a.createElement("main",{className:"profile"},r.a.createElement(j,{profile:e.profile}),r.a.createElement(C,null))},S=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match?this.props.match.params.userId:21488;p.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(t),{withCredentials:!0,headers:{"API-KEY":"3ffc89b3-6eae-4f6c-8d58-93af5a15243e"}}).then(function(t){var a=t.data;e.props.setUserProfile(a)})}},{key:"render",value:function(){return r.a.createElement(D,Object.assign({},this.props,{profile:this.props.profile}))}}]),t}(r.a.Component),L=Object(f.b)(function(e){return{profile:e.profilePage.profile}},{setUserProfile:function(e){return{type:"SET_PROFILE_USER",profile:e}}})(function(e){var t=Object(i.f)("social-network/profile/:userId/");return r.a.createElement(S,Object.assign({},e,{match:t}))}),R=a(6),G=a.n(R),z=function(){return r.a.createElement("nav",{className:G.a.nav},r.a.createElement("ul",{className:G.a.nav__list},r.a.createElement("li",{className:G.a.nav__list_item},r.a.createElement(l.b,{to:"social-network/profile",className:function(e){return e.isActive?G.a.active_a:G.a.item}},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("li",{className:G.a.nav__list_item},r.a.createElement(l.b,{to:"social-network/dialogs",className:function(e){return e.isActive?G.a.active_a:G.a.item}},"\u0414\u0438\u0430\u043b\u043e\u0433\u0438")),r.a.createElement("li",{className:G.a.nav__list_item},r.a.createElement(l.b,{to:"social-network/content",className:function(e){return e.isActive?G.a.active_a:G.a.item}},"\u041a\u043e\u043d\u0442\u0435\u043d\u0442")),r.a.createElement("li",{className:G.a.nav__list_item},r.a.createElement(l.b,{to:"social-network/users",className:function(e){return e.isActive?G.a.active_a:G.a.item}},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"))))},M={usersPost:[{id:1,message:"Hello world!",likesCount:5},{id:2,message:"I am programming",likesCount:6},{id:3,message:"It`s cool!",likesCount:10},{id:4,message:"It`s very cool!",likesCount:11}],usersData:[{id:"1",name:"Airat"},{id:"2",name:"Lilya"},{id:"3",name:"Bulat"}],newPostText:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOG-CHANGE-TEXT-AREA":return Object(E.a)({},e,{newPostText:t.newText});case"DIALOG-ADD-POST":var a={id:5,message:e.newPostText,likesCount:0};return Object(E.a)({},e,{usersPost:[].concat(Object(d.a)(e.usersPost),[a]),newPostText:""});default:return e}},B=a(22),W=a.n(B),K=a(28),J=a.n(K),Y=function(e){return r.a.createElement("div",{className:J.a.message},e.message,r.a.createElement("div",{className:J.a.likes},"Likes: ",e.likesCount))},V=a(29),X=a.n(V),Q=function(e){return r.a.createElement("div",{className:X.a.dialog+" "+X.a.active},r.a.createElement(l.b,{to:"social-network/login"+e.id}," ",e.name," "))},q=function(e){var t="",a=e.usersData.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,name:e.name})}),n=e.usersPost.map(function(e){return r.a.createElement(Y,{message:e.message,likesCount:e.likesCount})});return r.a.createElement("div",{className:W.a.dialogs},r.a.createElement("div",{className:W.a.dialogList},a),r.a.createElement("div",{className:W.a.messages},r.a.createElement("div",null,n),r.a.createElement("div",null,r.a.createElement("textarea",{className:W.a.textarea,value:e.newPostText,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",onChange:function(a){t=a.target.value,e.onChangeAreaValue(t)}}),r.a.createElement("button",{onClick:function(){e.onAddPost()}},"Add Post"))))},Z=Object(f.b)(function(e){return{usersData:e.dialogPage.usersData,usersPost:e.dialogPage.usersPost,newPostText:e.dialogPage.newPostText}},function(e){return{onChangeAreaValue:function(t){e(function(e){return{type:"DIALOG-CHANGE-TEXT-AREA",newText:e}}(t))},onAddPost:function(){e({type:"DIALOG-ADD-POST"})}}})(q),$={users:[{id:1,followed:!1,name:"Lenin",photos:{small:"https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg"},status:"\u041b\u0435\u0436\u0443",location:{city:"Ulyanovsk",country:"Russia"}},{id:2,followed:!0,name:"Lilya",photos:{small:"https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg"},status:"I am the best",location:{city:"Ulyanovsk",country:"Russia"}},{id:3,followed:!1,name:"Bulat",photos:{small:"https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg"},status:"Hi all",location:{city:"Ulyanovsk",country:"Russia"}}],pageSize:12,totalUsersCount:0,currentPage:1300,isFetching:!1,followingInProgress:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FOLLOW":return Object(E.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(E.a)({},e,{followed:!e.followed}):e})});case"SET_USERS":return Object(E.a)({},e,{users:Object(d.a)(t.users)});case"SET_CURRENT_PAGE":return Object(E.a)({},e,{currentPage:t.page});case"SET_TOTAL_COUNT":return Object(E.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(E.a)({},e,{isFetching:t.isFetching});case"TOGGLE_FOLOWING_IN_PROGRESS":return Object(E.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(d.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter(function(e){return e!=t.id})});default:return e}},te=a(3),ae=a.n(te),ne=function(e){var t=Math.ceil(e.totalUsersCount/e.pageSize),a=r.a.createRef();return r.a.createElement("div",{className:ae.a.main},r.a.createElement("div",{className:ae.a.pageNumbers},r.a.createElement("button",{className:ae.a.switchingPageButton,onClick:function(){e.onPageChanged(e.currentPage-1)}},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f"),r.a.createElement("div",null," \u0441\u0442\u0440. ",e.currentPage," \u0438\u0437 ",t," "),r.a.createElement("button",{className:ae.a.switchingPageButton,onClick:function(){e.onPageChanged(e.currentPage+1)}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f"),r.a.createElement(A,{isFetching:e.isFetching})),r.a.createElement("div",{className:ae.a.pageNumbers},r.a.createElement("input",{className:ae.a.pageNumberInput,type:"number",min:"1",ref:a,placeholder:e.currentPage}),r.a.createElement("button",{className:ae.a.switchingPageButton,onClick:function(){e.onPageChanged(Math.round(a.current.value)),a.current.value=""}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438")),e.users.map(function(t){return r.a.createElement("div",{key:t.id,className:ae.a.userCard,style:{backgroundImage:null!=t.photos.large?"url("+t.photos.large+")":"url("+U.a+")"}},r.a.createElement("div",{className:ae.a.gradient}),r.a.createElement("div",{className:ae.a.userCard__inner},r.a.createElement("div",{className:ae.a.fullName},t.name),r.a.createElement("div",{className:ae.a.data},"ID:",t.id),r.a.createElement("div",{className:ae.a.data},t.status),r.a.createElement("button",{disabled:e.followingInProgress.some(function(e){return e==t.id}),className:ae.a.button,onClick:function(){return e.onClickFollow(t)}},t.followed?"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"),r.a.createElement(l.b,{to:"/social-network/profile/"+t.id,className:ae.a.link},r.a.createElement("button",{className:ae.a.button},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"))))}))},re=p.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3ffc89b3-6eae-4f6c-8d58-93af5a15243e"}}),se={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return re.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},deleteFollow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return re.delete("follow/".concat(e)).then(function(e){return e.data})},postFollow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return re.post("follow/".concat(e),{}).then(function(e){return e.data})}},oe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){a.props.setCurrentPages(e),a.props.toggleIsFetching(!0),se.getUsers(e,a.props.pageSize).then(function(e){a.props.toggleIsFetching(!1),a.props.setUsers(e.items)})},a.onClickFollow=function(e){a.props.toggleFollowingInProgress(!0,e.id),e.followed?se.deleteFollow(e.id).then(function(t){0==t.resultCode&&a.props.toggleFollow(e.id),a.props.toggleFollowingInProgress(!1,e.id)}):se.postFollow(e.id).then(function(t){0==t.resultCode&&a.props.toggleFollow(e.id),a.props.toggleFollowingInProgress(!1,e.id)})},a}return Object(_.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),se.getUsers(this.props.currentPage,this.props.pageSize).then(function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.items),e.props.setTotalCount(t.totalCount)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{isFetching:this.props.isFetching}),r.a.createElement(ne,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,onClickFollow:this.onClickFollow,followingInProgress:this.props.followingInProgress,toggleFollowingInProgress:this.props.toggleFollowingInProgress}))}}]),t}(r.a.Component),le=Object(f.b)(function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}},{toggleFollow:function(e){return{type:"TOGGLE_FOLLOW",userId:e}},setUsers:function(e){return{type:"SET_USERS",users:e}},setTotalCount:function(e){return{type:"SET_TOTAL_COUNT",count:e}},setCurrentPages:function(e){return{type:"SET_CURRENT_PAGE",page:e}},toggleIsFetching:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},toggleFollowingInProgress:function(e,t){return{type:"TOGGLE_FOLOWING_IN_PROGRESS",isFetching:e,id:t}}})(oe),ie={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(E.a)({},e,t.data,{isAuth:!0});default:return e}},ue=a(19),me=a.n(ue),ge=a(42),_e=a.n(ge),pe=function(e){return r.a.createElement("header",{className:me.a.header},r.a.createElement(l.b,{to:"social-network/",className:me.a.header_text},'\u0421\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u043e \u043a\u0443\u0440\u0441\u0443 "\u041f\u0443\u0442\u044c \u0441\u0430\u043c\u0443\u0440\u0430\u044f"'),r.a.createElement("img",{className:me.a.hint_img,src:_e.a}),r.a.createElement("h2",null,"SOCIAL NETWORK"),r.a.createElement("div",{className:me.a.login_block},e.isAuth?e.login:r.a.createElement(l.b,{to:"social-network/login",className:me.a.login_block__link},"\u0412\u043e\u0439\u0442\u0438 ",e.login)))},fe=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0,headers:{"API-KEY":"3ffc89b3-6eae-4f6c-8d58-93af5a15243e"}}).then(function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.login,s=a.email;e.props.setUserAuthData(n,s,r)}})}},{key:"render",value:function(){return r.a.createElement(pe,this.props)}}]),t}(r.a.Component),de=Object(f.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{setUserAuthData:function(e,t,a){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:a}}}})(fe);var Ee=function(e){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(de,null),r.a.createElement(z,null),r.a.createElement("main",{className:"main"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"social-network/*",element:r.a.createElement(L,null)}),r.a.createElement(i.a,{path:"social-network/dialogs/*",element:r.a.createElement(Z,null)}),r.a.createElement(i.a,{path:"social-network/profile/*",element:r.a.createElement(L,null)}),r.a.createElement(i.a,{path:"social-network/users",element:r.a.createElement(le,null)})))))},he=a(30),ve={},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve;arguments.length>1&&arguments[1];return e},Pe=Object(he.a)({profilePage:v,dialogPage:H,sidebar:be,usersPage:ee,auth:ce}),we=Object(he.b)(Pe);window.store=we;var ke=we;o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:ke},r.a.createElement(Ee,null))),document.getElementById("root"))},9:function(e,t,a){e.exports={profile_info_container:"Profileinfo_profile_info_container__1lVQq",profile_info__image:"Profileinfo_profile_info__image__oazdu",profile_info__content:"Profileinfo_profile_info__content__3lmJ1",profile_info__title:"Profileinfo_profile_info__title__15ddx",profile_info__about:"Profileinfo_profile_info__about__1Nh6O",profile_info__contact:"Profileinfo_profile_info__contact__3-Rna"}}},[[43,2,1]]]);
//# sourceMappingURL=main.d0280121.chunk.js.map