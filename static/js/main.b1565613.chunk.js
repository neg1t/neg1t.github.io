(this.webpackJsonpinsta=this.webpackJsonpinsta||[]).push([[0],{61:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(14),a=c.n(n),o=c(13),i=c(9),r=c(19),l=c(12),d=new(c.n(l).a)({accessKey:"I-02d4OKSPU7jpZiA_CaNAEU8fGILvLUwrbNueVcBSA",secret:"wt2N9yRsY9i2zYqNScyd7z-Qmq5oTFqm3l--bKfMWqc",callbackUrl:"https://neg1t.github.io/"}),u=d.auth.getAuthenticationUrl(["public","write_likes"]),j={images:[],modal:!1,chosenPhotoId:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIKE":d.photos.likePhoto(t.id);var c=Object(r.a)(e.images),s=c.findIndex((function(e){return e.id===t.id}));return c[s].likes++,c[s].liked_by_user=!0,Object(i.a)(Object(i.a)({},e),{},{images:c});case"UNLIKE":d.photos.unlikePhoto(t.id);var n=Object(r.a)(e.images),a=n.findIndex((function(e){return e.id===t.id}));return n[a].likes--,n[a].liked_by_user=!1,Object(i.a)(Object(i.a)({},e),{},{images:n});case"LOAD_PHOTO":return Object(i.a)(Object(i.a)({},e),{},{images:[].concat(Object(r.a)(e.images),Object(r.a)(t.photo))});case"TOGGLE_MODAL":return Object(i.a)(Object(i.a)({},e),{},{modal:!e.modal});case"CHOSE_PHOTO":return Object(i.a)(Object(i.a)({},e),{},{chosenPhotoId:t.id});default:return e}},b=Object(o.b)({reducer:h}),O=Object(o.c)(b),m=c(8),p=c(0),f=c(15),_=c(3),x=(c(61),c(11)),g=c(18),k=c.n(g),v=function(e){return new Date(e).toLocaleDateString("en-GB",{year:"numeric",month:"numeric",day:"numeric"})},N=function(e){var t=e.fill,c=e.class;return Object(s.jsxs)("svg",{className:c,viewBox:"0 -28 512.00002 512",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"title",children:[Object(s.jsx)("title",{id:"title",children:"Like"}),Object(s.jsx)("path",{fill:t,d:"m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687\r 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438\r 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063\r 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375\r 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875\r 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344\r 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187\r 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"})]})},w=function(e){var t=e.onClick;return Object(s.jsxs)("svg",{onClick:t,className:"cross-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1280.000000 1226.000000",children:[Object(s.jsx)("title",{children:"Close window"}),Object(s.jsx)("g",{transform:"translate(0.000000,1226.000000) scale(0.100000,-0.100000)",stroke:"none",children:Object(s.jsx)("path",{d:"M1374 11287 c-748 -535 -1361 -976 -1363 -980 -3 -8 953 -876 3616\r -3285 606 -548 1100 -1002 1098 -1009 -3 -9 -4304 -5395 -4513 -5650 l-34 -43\r 143 51 c144 51 254 77 2209 519 195 44 522 118 726 164 l371 84 1612 1473\r c887 811 1616 1474 1620 1474 7 0 803 -719 3936 -3557 l580 -526 3 65 c3 56 5\r 63 18 52 8 -6 16 -10 17 -8 2 2 88 303 191 669 103 366 223 788 266 937 l77\r 273 -362 422 c-2246 2625 -2875 3362 -2875 3367 0 3 920 847 2045 1875 l2045\r 1869 -93 64 c-50 34 -778 530 -1617 1102 -1109 755 -1528 1036 -1538 1028 -9\r -7 -33 8 -88 53 -63 53 -78 60 -89 49 -7 -8 -643 -803 -1414 -1766 -770 -964\r -1404 -1753 -1409 -1752 -4 0 -34 33 -68 72 -54 64 -943 1103 -2582 3020 -305\r 356 -557 647 -562 647 -4 0 -62 -43 -130 -96 -68 -53 -126 -91 -129 -86 -7 10\r -343 402 -345 402 0 0 -613 -438 -1362 -973z"})})]})},y=(c(71),function(e){var t=e.props,c=e.closeWindow,n=e.dispatch,a=Object(p.useState)(!t.liked_by_user),o=Object(x.a)(a,2),i=o[0],r=o[1],l=Object(p.useState)(!1),j=Object(x.a)(l,2),h=j[0],b=j[1],O=function(){b(!h)},m=i?"LIKE":"UNLIKE";return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"cross-container",children:Object(s.jsx)(w,{onClick:c})}),Object(s.jsxs)("div",{className:"photo__info-top",children:[Object(s.jsxs)("div",{className:"info__user_detail",children:[Object(s.jsx)("img",{className:"user__profile-image",src:t.user.profile_image.small,alt:t.user.username}),Object(s.jsx)("a",{href:t.user.links.html,target:"_blank",rel:"noreferrer",className:"user__name",children:t.user.username})]}),Object(s.jsxs)("div",{className:"info__likes",children:[Object(s.jsxs)("div",{className:"likes__button_detail",onClick:function(){localStorage.getItem("token")?(r(!i),d.auth.setBearerToken(localStorage.getItem("token")),n({type:m,id:t.id})):O()},children:[Object(s.jsx)(k.a,{isOpen:h,onRequestClose:O,ariaHideApp:!1,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:Object(s.jsxs)("h2",{children:["To do it you should",Object(s.jsx)("button",{className:"auth-button",onClick:function(e){e.preventDefault(),window.location.assign(u)},children:"authorize"})]})}),Object(s.jsx)(N,{class:"like-icon_detail",fill:i?"white":"red"})]}),Object(s.jsx)("span",{className:"likes__count",children:t.likes})]})]}),Object(s.jsx)("img",{className:"detail__photo",src:t.urls.regular,alt:t.alt_description}),Object(s.jsx)("div",{className:"photo__info-bottom",children:Object(s.jsx)("div",{className:"info__date_detail",children:v(t.created_at)})})]})});y=Object(m.b)((function(e){return{dispatch:e}}))(y);var I=function(e){var t=e.dispatch,c=e.modal,n=e.photos,a=e.chosenPhotoId,o=function(){t({type:"TOGGLE_MODAL"}),window.history.back()};return Object(s.jsx)(k.a,{isOpen:c,onRequestClose:o,ariaHideApp:!1,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:n.map((function(e){return e.id===a?Object(s.jsx)(y,{props:e,closeWindow:o}):null}))})},L=I=Object(m.b)((function(e){return{photos:e.reducer.images,modal:e.reducer.modal,chosenPhotoId:e.reducer.chosenPhotoId}}),(function(e){return{dispatch:e}}))(I),S=c(36),C=c(37),E=c.n(C),A=function(e){var t=e.dispatch,c=e.props,n=Object(p.useState)(!1),a=Object(x.a)(n,2),o=a[0],i=a[1],r=Object(p.useState)(!c.liked_by_user),l=Object(x.a)(r,2),j=l[0],h=l[1],b=Object(p.useState)(!1),O=Object(x.a)(b,2),m=O[0],_=O[1],g=function(){_(!m)},w=function(){i(!o)},y=o?"":"visually-hidden",I=j?"LIKE":"UNLIKE";return Object(s.jsx)("li",{onMouseEnter:w,onMouseLeave:w,className:"item__photo",children:Object(s.jsxs)("div",{className:"photo",children:[Object(s.jsxs)("div",{className:"photo__info "+y,children:[Object(s.jsxs)("div",{className:"photo__info-top",children:[Object(s.jsxs)("div",{className:"info__user",children:[Object(s.jsx)("img",{className:"user__profile-image",src:c.user.profile_image.small,alt:c.user.username}),Object(s.jsx)("a",{href:c.user.links.html,target:"_blank",className:"user__name",rel:"noreferrer",children:c.user.username})]}),Object(s.jsxs)("div",{className:"info__likes",children:[Object(s.jsxs)("div",{className:"likes__button",onClick:function(){localStorage.getItem("token")?(h(!j),d.auth.setBearerToken(localStorage.getItem("token")),t({type:I,id:c.id})):(g(),i(!1))},children:[Object(s.jsx)(k.a,{isOpen:m,onRequestClose:g,ariaHideApp:!1,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:Object(s.jsxs)("h2",{children:["To do it you should",Object(s.jsx)("button",{className:"auth-button",onClick:function(e){e.preventDefault(),window.location.assign(u)},children:"authorize"})]})}),Object(s.jsx)(N,{fill:j?"white":"red",class:"like-icon"})]}),Object(s.jsx)("span",{className:"likes__count",children:c.likes})]})]}),Object(s.jsx)("div",{className:"photo__info-bottom",children:Object(s.jsx)("div",{className:"info__date",children:v(c.created_at)})})]}),Object(s.jsx)(f.b,{className:"photo__link",alt:"open full pic: ".concat(c.alt_description),to:"/photo/".concat(c.id),onClick:function(){t({type:"TOGGLE_MODAL"}),t({type:"CHOSE_PHOTO",id:c.id})}}),Object(s.jsx)("img",{className:"photo__img",src:c.urls.small,alt:c.alt_description})]})},c.id)},P=A=Object(m.b)((function(e){return{}}),(function(e){return{dispatch:e}}))(A),T=function(e){var t=e.photos,c=e.dispatch,n=function(){d.photos.getRandomPhoto({count:20}).then(l.toJson).then((function(e){c({type:"LOAD_PHOTO",photo:e})}))};return Object(p.useEffect)((function(){0===t.length&&n()}),[]),Object(s.jsx)("main",{children:Object(s.jsx)("article",{children:Object(s.jsx)(S.a,{dataLength:t,next:function(){n()},hasMore:!0,className:"container",children:Object(s.jsx)(E.a,{className:"photo-list",columnClassName:"photo-list__item",breakpointCols:{default:4,1100:3,700:2,500:1},children:t.map((function(e){return Object(s.jsx)(P,{props:e})}))})})})})},B=T=Object(m.b)((function(e){return{photos:e.reducer.images}}),(function(e){return{dispatch:e}}))(T),D=function(){return Object(s.jsx)("header",{class:"header rgb",children:Object(s.jsx)("div",{class:"logo",children:"Unsplash API"})})},H=Object(_.e)((function(){if(localStorage.getItem("token"))d.auth.setBearerToken(localStorage.getItem("token"));else{var e=window.location.search.split("code=")[1];e&&d.auth.userAuthentication(e).then(l.toJson).then((function(e){localStorage.setItem("token",e.access_token),d.auth.setBearerToken(e.access_token)}))}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(D,{}),Object(s.jsx)(B,{})]})})),K=function(e){var t=e.modal;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(f.a,{children:Object(s.jsx)(_.a,{exact:!0,path:"/",component:H})}),!0===t?Object(s.jsx)(L,{}):null]})},U=K=Object(m.b)((function(e){return{modal:e.reducer.modal}}))(K);a.a.render(Object(s.jsx)(m.a,{store:O,children:Object(s.jsx)(U,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.b1565613.chunk.js.map