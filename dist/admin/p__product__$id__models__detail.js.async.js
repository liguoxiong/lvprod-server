(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{xrOd:function(e,a,t){"use strict";t.r(a);var s=t("p0pE"),r=t.n(s),n=t("d6i3"),c=t.n(n),u=t("Y/ft"),p=t.n(u),i=t("7Qib"),d=t("3eXy"),o=d["a"].queryProduct;a["default"]={namespace:"productDetail",state:{data:{}},subscriptions:{setup:function(e){var a=e.dispatch,t=e.history;t.listen(function(e){var t=e.pathname,s=Object(i["g"])("/product/:id",t);s&&a({type:"query",payload:{id:s[1]}})})}},effects:{query:c.a.mark(function e(a,t){var s,r,n,u,i,d;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=a.payload,r=t.call,n=t.put,e.next=4,r(o,s);case 4:if(u=e.sent,i=u.success,u.message,u.status,d=p()(u,["success","message","status"]),!i){e.next=11;break}return e.next=9,n({type:"querySuccess",payload:{data:d}});case 9:e.next=12;break;case 11:throw u;case 12:case"end":return e.stop()}},e)})},reducers:{querySuccess:function(e,a){var t=a.payload,s=t.data;return r()({},e,{data:s})}}}}}]);