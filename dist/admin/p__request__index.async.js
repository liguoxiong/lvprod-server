(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{MOo2:function(e,t,a){e.exports={"text-overflow":"text-overflow___RR7B3","text-gradient":"text-gradient___2_PNb","background-hover":"background-hover___8j7ug",result:"result___3JpRX",requestList:"requestList___37aLe",listItem:"listItem___1N3XM",lstItemActive:"lstItemActive___3a5vT",paramsBlock:"paramsBlock___38_H4",hideParams:"hideParams___2iQDY"}},iELo:function(e,t,a){"use strict";a.r(t);a("Pwec");var n,l,r,i=a("CtXQ"),s=(a("sRBo"),a("kaz8")),c=(a("14J3"),a("BMrR")),o=(a("+L6B"),a("2/Rp")),m=(a("jCWc"),a("kPKH")),u=(a("Mwp2"),a("VXEj")),d=(a("+BJd"),a("mr32")),h=a("eHn4"),p=a.n(h),E=a("2Taf"),f=a.n(E),y=a("vZ4D"),v=a.n(y),g=a("l4Ni"),k=a.n(g),_=a("ujKo"),T=a.n(_),C=a("MhPg"),b=a.n(C),w=(a("y8nQ"),a("Vl3Y")),P=(a("5NDa"),a("5rEg")),S=(a("OaEy"),a("2fM7")),I=a("q1tI"),x=a.n(I),R=a("7Qib"),j=a("Aeqt"),L=a("TSYQ"),N=a.n(L),O=a("ZD0w"),A=a("dCQc"),B=a("Kvkj"),q=a("MOo2"),D=a.n(q),M=S["a"].Option,F=P["a"].Group,J=["POST","GET","PUT","PATCH","DELETE"],Q={GET:"green",POST:"orange",DELETE:"red",PUT:"geekblue"},V=Object.values(A["a"]).map(function(e){var t=j["apiPrefix"]+e,a="GET",n=e.split(" ");return 2===n.length&&(a=n[0],t=j["apiPrefix"]+n[1]),{method:a,url:t}}),z=2,G=(n=w["a"].create(),n((r=function(e){function t(e){var a;return f()(this,t),a=k()(this,T()(t).call(this,e)),a.handleRequest=function(){var e=a.state,t=e.method,n=e.url;a.props.form.validateFields(function(e,l){if(!e){var r={};l.key&&l.key.forEach(function(e,t){e&&l.check[t]&&(r[e]=l.value[t])}),Object(R["j"])({method:t,url:n,data:r}).then(function(e){a.setState({result:JSON.stringify(e)})})}})},a.handleClickListItem=function(e){var t=e.method,n=e.url;a.setState({method:t,url:n,keys:[z++],result:null})},a.handleInputChange=function(e){a.setState({url:e.target.value})},a.handleSelectChange=function(e){a.setState({method:e})},a.handleAddField=function(){var e=a.state.keys,t=e.concat(z);z++,a.setState({keys:t})},a.handleRemoveField=function(e){var t=a.state.keys;a.setState({keys:t.filter(function(t){return t!==e})})},a.handleVisible=function(){a.setState({visible:!a.state.visible})},a.state={method:"GET",url:"/api/v1/routes",keys:[1],result:null,visible:!0},a}return b()(t,e),v()(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.result,n=t.url,l=t.method,r=t.keys,h=t.visible,E=this.props.form.getFieldDecorator;return x.a.createElement(B["f"],{inner:!0},x.a.createElement(c["a"],null,x.a.createElement(m["a"],{lg:8,md:24},x.a.createElement(u["a"],{className:D.a.requestList,dataSource:V,renderItem:function(t){return x.a.createElement(u["a"].Item,{className:N()(D.a.listItem,p()({},D.a.lstItemActive,t.method===l&&t.url===n)),onClick:e.handleClickListItem.bind(e,t)},x.a.createElement("span",{style:{width:72}},x.a.createElement(d["a"],{style:{marginRight:8},color:Q[t.method]},t.method)),t.url)}})),x.a.createElement(m["a"],{lg:16,md:24},x.a.createElement(c["a"],{type:"flex",justify:"space-between"},x.a.createElement(F,{compact:!0,size:"large",style:{flex:1}},x.a.createElement(S["a"],{size:"large",value:l,style:{width:100},onChange:this.handleSelectChange},J.map(function(e){return x.a.createElement(M,{value:e,key:e},e)})),x.a.createElement(P["a"],{value:n,onChange:this.handleInputChange,style:{width:"calc(100% - 200px)"}}),x.a.createElement(o["a"],{ghost:h,type:h?"primary":"",onClick:this.handleVisible,size:"large"},x.a.createElement(O["Trans"],{id:"Params"}))),x.a.createElement(o["a"],{size:"large",type:"primary",style:{width:100},onClick:this.handleRequest},x.a.createElement(O["Trans"],{id:"Send"}))),x.a.createElement("div",{className:N()(D.a.paramsBlock,p()({},D.a.hideParams,!h))},r.map(function(t,a){return x.a.createElement(c["a"],{gutter:8,type:"flex",justify:"start",align:"middle",key:t},x.a.createElement(m["a"],{style:{marginTop:8}},E("check[".concat(t,"]"),{initialValue:!0})(x.a.createElement(s["a"],{defaultChecked:!0}))),x.a.createElement(m["a"],{style:{marginTop:8}},E("key[".concat(t,"]"))(x.a.createElement(P["a"],{placeholder:"Key"}))),x.a.createElement(m["a"],{style:{marginTop:8}},E("value[".concat(t,"]"))(x.a.createElement(P["a"],{placeholder:"Value"}))),x.a.createElement(m["a"],{style:{marginTop:8}},x.a.createElement(i["a"],{onClick:e.handleRemoveField.bind(e,t),style:{cursor:"pointer"},type:"close",theme:"outlined"})))}),x.a.createElement(c["a"],{style:{marginTop:8}},x.a.createElement(o["a"],{onClick:this.handleAddField},x.a.createElement(O["Trans"],{id:"Add Param"})))),x.a.createElement("div",{className:D.a.result},a))))}}]),t}(x.a.Component),l=r))||l);t["default"]=G}}]);