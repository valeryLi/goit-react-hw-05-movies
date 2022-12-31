"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[276],{276:function(n,r,t){t.r(r),t.d(r,{default:function(){return R}});var e,a,c,i,o,p,s,u=t(861),f=t(885),l=t(757),d=t.n(l),x=t(168),h=t(444),m=h.ZP.img(e||(e=(0,x.Z)(["\n  width: 200px;\n"]))),v=h.ZP.div(a||(a=(0,x.Z)(["\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  border-bottom: 1px solid aqua;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  text-align: center;\n  gap: 5px;\n  padding-bottom: 10px;\n"]))),b=h.ZP.p(c||(c=(0,x.Z)(["\n  font-family: Road;\n  font-size: 20px;\n  color: #2d144c;\n"]))),g=h.ZP.p(i||(i=(0,x.Z)(["\n  font-family: Sendang;\n  color: #1c2186;\n"]))),w=t(184),y=function(n){var r=n.name,t=n.character,e=n.profile;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg",alt:r,width:280,height:430}),(0,w.jsxs)(v,{children:[(0,w.jsx)(b,{children:r}),(0,w.jsx)(g,{children:t})]})]})},Z=h.ZP.ul(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n"]))),j=h.ZP.li(p||(p=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  width: 200px;\n"]))),k=function(n){var r=n.actors;return(0,w.jsx)(Z,{children:r.map((function(n){return(0,w.jsx)(j,{children:(0,w.jsx)(y,{name:n.name,character:n.character,profile:n.profile_path})},n.id)}))})},_=t(791),P=t(689),S=t(565),q=function(n){return n.map((function(n){return{id:n.id,name:n.name,profile_path:n.profile_path,character:n.character}}))},C=h.ZP.div(s||(s=(0,x.Z)(["\n  width: 60%;\n  margin: 20px auto;\n  padding: 20px;\n  border-radius: 20px;\n  box-shadow: 0px 3px 3px 0px rgba(65, 105, 225, 0.12),\n    0px 3px 6px 0px rgba(65, 105, 225, 0.22),\n    0px 5px 10px 0px rgba(65, 105, 225, 0.2),\n    0px 8px 12px 1px rgba(65, 105, 225, 0.19);\n  background-color: rgba(65, 105, 225, 0.5);\n  border: 1px solid rgba(65, 105, 225, 0.03);\n"]))),Q=t(793),R=function(){var n=(0,_.useState)([]),r=(0,f.Z)(n,2),t=r[0],e=r[1],a=(0,P.UO)().movieId,c=(0,_.useState)(!1),i=(0,f.Z)(c,2),o=i[0],p=i[1];return(0,_.useEffect)((function(){function n(){return(n=(0,u.Z)(d().mark((function n(){var r,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.next=3,(0,S.PQ)(a);case 3:r=n.sent,t=q(r),e(t),p(!1);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),(0,w.jsxs)(C,{children:[o&&(0,w.jsx)(Q.a,{}),0!==t.length||o?(0,w.jsx)(k,{actors:t}):(0,w.jsx)("p",{children:"Sorry, there are no info about actors"})]})}},565:function(n,r,t){t.d(r,{Hx:function(){return m},Mc:function(){return u},PQ:function(){return x},mv:function(){return l},vw:function(){return p}});var e=t(861),a=t(757),c=t.n(a),i=t(388),o="68d4d93a5383af68a17fffcfb4da1936";function p(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("/trending/movie/day",{params:{api_key:o}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function u(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("movie/".concat(r),{params:{api_key:o,id:r}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("search/movie",{params:{api_key:o,query:r}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("movie/".concat(r,"/credits"),{params:{api_key:o}});case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)("movie/".concat(r,"/reviews"),{params:{api_key:o}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=276.c9d43202.chunk.js.map