(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{167:function(e,t,a){e.exports=a(347)},172:function(e,t,a){},268:function(e,t,a){},345:function(e,t,a){},347:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=(a(172),a(163)),i=a(51),s=a(19),m=a(20),u=a(22),p=a(21),h=a(23),d=a(122),g=a(28),E=a.n(g),f=(a(349),a(91)),y=a(8),v=f.a.Item,b=f.a.SubMenu,O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).phoneClick=function(){var e=!a.state.phoneOpen;a.setState({phoneOpen:e})},a.state={phoneOpen:void 0,logo:a.props.dataSource.logo,subItem:a.props.dataSource.category},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.dataSource!==e.dataSource&&this.setState({logo:this.props.dataSource.logo,subItem:this.props.dataSource.category})}},{key:"render",value:function(){var e=this;console.log(this.state.subItem);var t={logo:this.state.logo,Menu:[{children:"S\u1ea3n ph\u1ea9m",subItem:this.state.subItem},{children:"D\u1ecbch v\u1ee5"},{children:"Gi\u1edbi thi\u1ec7u"},{children:"Li\xean h\u1ec7"}]},a=this.props.isMobile,n=this.state.phoneOpen,r=t.Menu.map(function(e,t){var a=e.children,n=e.subItem;return n?l.a.createElement(b,{key:t.toString(),className:"header0-item",title:l.a.createElement("div",{href:"#",className:"header0-item-block"},l.a.createElement("div",{name:"text"},a)),popupClassName:"header0-item-child"},n.map(function(e,t){return l.a.createElement(v,{key:t.toString(),className:"item-sub"},l.a.createElement("div",{className:"item-sub-item"},l.a.createElement("div",{className:"item-image"},l.a.createElement("img",{src:e.image,alt:e.title})),l.a.createElement("h1",{name:"title",className:"item-title"},e.title),l.a.createElement("div",{name:"content",className:"item-content"},e.description)))})):l.a.createElement(v,{key:t.toString(),className:"header0-item"},l.a.createElement("a",{href:"#",className:"header0-item-block"},l.a.createElement("div",{name:"text"},a)))}),c=void 0===n?300:null;return l.a.createElement(y.c,{component:"header",animation:{opacity:0,type:"from"},className:"header0 home-page-wrapper"},l.a.createElement("div",{className:"home-page".concat(n?" open":"")},l.a.createElement(y.c,{animation:{x:-30,type:"from",ease:"easeOutQuad"},className:"header0-logo"},l.a.createElement("img",{height:"34px",src:t.logo,alt:"img"})),a&&l.a.createElement("div",{className:"header0-mobile-menu",onClick:function(){e.phoneClick()}},l.a.createElement("em",null),l.a.createElement("em",null),l.a.createElement("em",null)),l.a.createElement(y.c,{className:"header0-menu",animation:a?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:c,reverse:!!n},l.a.createElement(f.a,{mode:a?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark"},r))))}}]),t}(l.a.Component),j=(a(109),a(14)),k=(a(69),a(34)),w=a(30),S=a(44),N=a(93),F=a(63);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(F.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var M=/[\/.](gif|jpg|jpeg|tiff|png)$/i,P=function(e,t){var a=e.name&&0===e.name.indexOf("title")?"h1":"div",n="string"===typeof e.children&&e.children.match(M)?l.a.createElement("img",{src:e.children,alt:"img"}):e.children;return e.name&&0===e.name.indexOf("button")&&"object"===typeof e.children&&(n=l.a.createElement(k.a,x({},e.children))),l.a.createElement(a,x({key:t.toString()},e),n)},D=(a(260),N.a.BgElement),z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=Object(w.a)({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=t.map(function(e,t){var a=e.title,n=e.description,r=e.image;return l.a.createElement(N.a,{key:t.toString(),className:"banner-user-elem",prefixCls:"banner-user-elem"},l.a.createElement(D,{key:"bg",style:{backgroundImage:"url(".concat(r,")"),backgroundPosition:"center"},className:"bg"}),l.a.createElement(S.a,{type:["bottom","top"],delay:200,key:"text",className:"banner1-text-wrapper"},l.a.createElement("div",{key:"logo",className:"banner1-title"},"string"===typeof a&&a.match(M)?l.a.createElement("img",{src:a,width:"100%",alt:"img"}):a),l.a.createElement("div",{key:"content",className:"banner1-content"},n),l.a.createElement(k.a,{ghost:!0,key:"button",className:"banner1-button"},"Li\xean H\u1ec7 \u0110\u1eb7t H\xe0ng")))});return l.a.createElement("div",{id:"Banner1_0",key:"Banner1_0",className:"banner1"},l.a.createElement(y.b,{key:"bannerGroup",enter:{opacity:0,type:"from"},leave:{opacity:0},component:""},l.a.createElement("div",{className:"banner1-wrapper",key:"wrapper"},l.a.createElement(N.b,{key:"BannerAnim",autoPlay:!0},a))),l.a.createElement(y.c,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner1-icon",style:{bottom:40},key:"icon"},l.a.createElement(j.a,{type:"down"})))}}]),t}(l.a.PureComponent),I=(a(57),a(16)),R=(a(58),a(24)),B=a(31),_=a.n(B),A=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.dataSource;return l.a.createElement("div",{className:"home-page-wrapper content0-wrapper"},l.a.createElement("div",{className:"home-page content0"},l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h1",null,"D\u1ecaCH V\u1ee4 C\u1ee6A CH\xdaNG T\xd4I")),l.a.createElement(_.a,{playScale:.3,className:""},l.a.createElement(S.a,{type:"bottom",key:"block",leaveReverse:!0,component:I.a,className:"content0-block-wrapper"},e.map(function(e,t){return l.a.createElement(R.a,{key:t.toString(),className:"content0-block",md:8,xs:24},l.a.createElement("div",{className:"content0-block-item"},l.a.createElement("div",{className:"content0-block-icon"},l.a.createElement("img",{src:e.image,alt:e.title,height:"100%"})),l.a.createElement("h1",{className:"content0-block-title"},l.a.createElement("span",null,e.title)),l.a.createElement("div",null,l.a.createElement("span",null,e.description))))})))))}}]),t}(l.a.PureComponent),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={Products:[]},a.getChildrenToRender=function(e){return e.map(function(e,t){return l.a.createElement(R.a,{key:t.toString(),className:"block",md:6,xs:24},l.a.createElement("div",{className:"content5-block-content"},l.a.createElement("span",null,l.a.createElement("img",{src:e.image[0].thumbUrl||e.image[0].url,height:"100%",alt:"img"})),l.a.createElement("p",null,e.name)))})},a.handleSelectCategory=function(e){var t="limit=8";""!==e&&(t="category=".concat(e,"&limit=8")),E.a.get("/api/products?".concat(t)).then(function(t){return a.setState({catActive:e,Products:t.data.data})})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.all([E.a.get("/api/products?limit=8")]).then(E.a.spread(function(t){e.setState({catActive:"",Products:t.data.data})}))}},{key:"render",value:function(){var e=this,t=Object(w.a)({},this.props),a=t.dataSource;delete t.dataSource,delete t.isMobile;var n=this.getChildrenToRender(this.state.Products);return l.a.createElement("div",{id:"Content5_0",key:"Content5_0",className:"home-page-wrapper content5-wrapper"},l.a.createElement("div",{className:"home-page content5"},l.a.createElement("div",{key:"title",className:"title-wrapper"},l.a.createElement("h1",{className:"title-h1"},"S\u1ea2N PH\u1ea8M"),l.a.createElement("div",{className:"title-content"},"Ch\xfang t\xf4i t\u1ef1 h\xe0o cung c\u1ea5p c\xe1c s\u1ea3n ph\u1ea9m th\u1ebf m\u1ea1nh")),l.a.createElement("div",{key:"categoryList",className:"category-wrapper"},l.a.createElement(k.a,{type:""===this.state.catActive?"primary":null,onClick:function(){return e.handleSelectCategory("")}},"T\u1ea5t c\u1ea3"),!!a&&a.map(function(t){return l.a.createElement(k.a,{key:t._id,type:e.state.catActive===t._id?"primary":null,onClick:function(){return e.handleSelectCategory(t._id)}},t.title)})),l.a.createElement(_.a,{className:"content-template",playScale:.3},l.a.createElement(y.b,{component:I.a,key:"ul",enter:{y:"+=30",opacity:0,type:"from",ease:"easeInOutQuad"},leave:{y:"+=30",opacity:0,ease:"easeInOutQuad"},className:"content5-img-wrapper",gutter:16},n))))}}]),t}(l.a.Component);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach(function(t){Object(F.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}l.a.PureComponent,a(264);var T=a(72),W=(a(266),a(92)),Q=(a(268),W.a.Item),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(a.setState({loading:!0}),E.a.post("/api/sendmail",t).then(function(e){a.setState({loading:!1}),alert("G\u1eedi y\xeau c\u1ea7u th\xe0nh c\xf4ng")}).catch(function(e){a.setState({loading:!1}),alert("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i")}))})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return l.a.createElement(W.a,{onSubmit:this.handleSubmit,className:"feedback-form"},l.a.createElement(I.a,null,l.a.createElement(R.a,null,l.a.createElement(Q,{className:"form-input"},e("name",{rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp H\u1ecd & T\xean"}]})(l.a.createElement(T.a,{prefix:l.a.createElement(j.a,{type:"user",style:{fontSize:13}}),placeholder:"H\u1ecd v\xe0 T\xean"}))))),l.a.createElement(I.a,null,l.a.createElement(R.a,null,l.a.createElement(Q,{className:"form-input"},e("phone",{rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i!"}]})(l.a.createElement(T.a,{prefix:l.a.createElement(j.a,{type:"phone",style:{fontSize:13}}),placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}))))),l.a.createElement(I.a,null,l.a.createElement(R.a,null,l.a.createElement(Q,{className:"form-input"},e("email",{rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp email"}]})(l.a.createElement(T.a,{prefix:l.a.createElement(j.a,{type:"mail",style:{fontSize:13}}),placeholder:"Email"}))))),l.a.createElement(I.a,null,l.a.createElement(R.a,null,l.a.createElement(Q,{className:"form-input"},e("message",{rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp y\xeau c\u1ea7u"}]})(l.a.createElement(T.a.TextArea,{rows:4,placeholder:"Y\xeau c\u1ea7u"}))))),l.a.createElement(Q,{className:"form-input"},l.a.createElement(k.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:this.state.loading},"G\u1eedi y\xeau c\u1ea7u")))}}]),t}(l.a.Component),U=W.a.create()(q);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var Z=l.a.createElement("g",null),$=l.a.createElement("g",null),K=l.a.createElement("g",null),Y=l.a.createElement("g",null),X=l.a.createElement("g",null),ee=l.a.createElement("g",null),te=l.a.createElement("g",null),ae=l.a.createElement("g",null),ne=l.a.createElement("g",null),le=l.a.createElement("g",null),re=l.a.createElement("g",null),ce=l.a.createElement("g",null),oe=l.a.createElement("g",null),ie=l.a.createElement("g",null),se=l.a.createElement("g",null),me=function(e){var t=e.svgRef,a=e.title,n=J(e,["svgRef","title"]);return l.a.createElement("svg",G({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512.002 512.002",style:{enableBackground:"new 0 0 512.002 512.002"},xmlSpace:"preserve",ref:t},n),l.a.createElement("title",null,a),l.a.createElement("circle",{style:{fill:"#4E598F"},cx:256.001,cy:256,r:256}),l.a.createElement("path",{style:{fill:"#364270"},d:"M511.596,241.7L391.019,121.085c-1.998,0.605-6.982-1.714-9.173-1.274 c-51.717,8.62-101.71,0-151.704,13.791c-24.135,6.896-25.859,36.202-34.478,55.165c-12.067,34.478-10.343,72.404-25.859,105.158 c-10.343,22.411-34.478,36.202-43.098,62.061c-2.875,10.785-2.705,24.379-5.956,34.69l120.98,120.922 c4.725,0.26,9.48,0.403,14.269,0.403c141.384,0,256-114.616,256-256C512.001,251.201,511.858,246.434,511.596,241.7z"}),l.a.createElement("g",null,l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M363.043,109.466H148.958c-21.809,0-39.49,17.68-39.49,39.49v214.085 c0,21.811,17.68,39.49,39.49,39.49h105.584l0.183-104.722h-27.21c-3.536,0-6.406-2.86-6.418-6.396l-0.133-33.759 c-0.014-3.553,2.867-6.444,6.42-6.444h27.162v-32.618c0-37.852,23.118-58.463,56.884-58.463h27.71c3.543,0,6.42,2.874,6.42,6.42 v28.463c0,3.546-2.874,6.42-6.416,6.42l-17.006,0.01c-18.363,0-21.921,8.725-21.921,21.533v28.239h40.351 c3.848,0,6.83,3.358,6.375,7.173l-4.001,33.759c-0.381,3.232-3.122,5.665-6.375,5.665h-36.168l-0.183,104.726h62.826 c21.809,0,39.49-17.682,39.49-39.491v-214.09C402.533,127.147,384.852,109.466,363.043,109.466L363.043,109.466z"}),l.a.createElement("polygon",{style:{fill:"#FFFFFF"},points:"254.542,402.53 254.725,297.808 254.277,297.808 254.277,402.53  "})),l.a.createElement("path",{style:{fill:"#D1D1D1"},d:"M363.043,109.466H254.277v141.741h0.269V218.59c0-37.852,23.118-58.463,56.884-58.463h27.71 c3.543,0,6.42,2.874,6.42,6.42v28.463c0,3.546-2.874,6.42-6.416,6.42l-17.006,0.01c-18.363,0-21.921,8.725-21.921,21.533v28.238 h40.351c3.848,0,6.83,3.358,6.375,7.173l-4.001,33.759c-0.381,3.232-3.122,5.665-6.375,5.665h-36.168l-0.183,104.726h62.826 c21.809,0,39.49-17.682,39.49-39.491V148.956C402.533,127.147,384.852,109.466,363.043,109.466z"}),Z,$,K,Y,X,ee,te,ae,ne,le,re,ce,oe,ie,se)},ue=l.a.forwardRef(function(e,t){return l.a.createElement(me,G({svgRef:t},e))});a.p;function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var de=l.a.createElement("g",null),ge=l.a.createElement("g",null),Ee=l.a.createElement("g",null),fe=l.a.createElement("g",null),ye=l.a.createElement("g",null),ve=l.a.createElement("g",null),be=l.a.createElement("g",null),Oe=l.a.createElement("g",null),je=l.a.createElement("g",null),ke=l.a.createElement("g",null),we=l.a.createElement("g",null),Se=l.a.createElement("g",null),Ne=l.a.createElement("g",null),Fe=l.a.createElement("g",null),Ce=l.a.createElement("g",null),xe=function(e){var t=e.svgRef,a=e.title,n=he(e,["svgRef","title"]);return l.a.createElement("svg",pe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},n),l.a.createElement("title",null,a),l.a.createElement("circle",{style:{fill:"#B0E1FF"},cx:256,cy:255.999,r:255.999}),l.a.createElement("path",{style:{fill:"#85C5ED"},d:"M123.027,164.574c-33.373,60.946-20.675,135.636,28.348,182.339l1.122,79.036l85.406,85.406 c5.98,0.417,12.012,0.645,18.098,0.645c133.85,0,243.689-102.73,255.017-233.643L362.875,130.213 c-9.935-9.924-21.42-18.627-34.356-25.711C255.147,64.325,163.18,91.247,123.027,164.574z"}),l.a.createElement("path",{style:{fill:"#41A0D7"},d:"M388.589,309.994c-33.58,61.323-103.586,90.369-168.897,74.329l-67.196,41.627l-1.122-79.036 c-49.023-46.703-61.721-121.393-28.348-182.339c40.153-73.325,132.121-100.248,205.491-60.071 C401.83,144.646,428.776,236.605,388.589,309.994z"}),l.a.createElement("polygon",{style:{fill:"#FFFFFF"},points:"152.578,285.877 240.112,191.684 282.452,234.499 360.945,191.684 274.839,285.877  235.355,245.916 "}),de,ge,Ee,fe,ye,ve,be,Oe,je,ke,we,Se,Ne,Fe,Ce)},Me=l.a.forwardRef(function(e,t){return l.a.createElement(xe,pe({svgRef:t},e))});a.p;function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var ze=l.a.createElement("g",null),Ie=l.a.createElement("g",null),Re=l.a.createElement("g",null),Be=l.a.createElement("g",null),_e=l.a.createElement("g",null),Ae=l.a.createElement("g",null),Le=l.a.createElement("g",null),Ve=l.a.createElement("g",null),He=l.a.createElement("g",null),Te=l.a.createElement("g",null),We=l.a.createElement("g",null),Qe=l.a.createElement("g",null),qe=l.a.createElement("g",null),Ue=l.a.createElement("g",null),Ge=l.a.createElement("g",null),Je=function(e){var t=e.svgRef,a=e.title,n=De(e,["svgRef","title"]);return l.a.createElement("svg",Pe({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},n),l.a.createElement("title",null,a),l.a.createElement("circle",{style:{fill:"#65A2D9"},cx:256,cy:256,r:256}),l.a.createElement("path",{style:{fill:"#3A7CA5"},d:"M346.281,165.443c-53.317-5.544-107.382-33.278-155.789,2.638 C147.394,199.111,176.7,256,178.424,300.822c1.21,18.156-2.912,33.428-9.513,48.871l153.483,153.593 c88.004-23.569,157.296-92.853,180.881-180.85L346.281,165.443z"}),l.a.createElement("g",null,l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M390.711,278.349c-4.651-6.428-6.803-14.276-6.796-22.206c0-0.047,0-0.093,0-0.14 c0-70.647-57.27-127.917-127.914-127.917c-15.458,0-30.267,2.751-43.979,7.777c-7.416,2.72-15.544,3.241-23.149,1.1 c-6.716-1.891-13.895-2.691-21.33-2.177c-31.229,2.15-56.37,27.743-57.99,59.006c-0.771,14.922,3.701,28.763,11.736,39.864 c4.646,6.428,6.803,14.276,6.796,22.211v0.14c0,70.644,57.266,127.914,127.914,127.914c15.458,0,30.267-2.748,43.979-7.777 c7.416-2.72,15.544-3.241,23.149-1.1c6.716,1.895,13.895,2.691,21.33,2.181c31.229-2.148,56.37-27.743,57.99-59.004 C403.218,303.294,398.746,289.452,390.711,278.349L390.711,278.349z M260.684,233.067c25.791,6.135,64.765,15.405,64.765,58.337 c0,21.147-10.416,37.283-29.327,45.428c-13.495,5.811-28.77,6.596-41.934,6.596c-40.45,0-65.993-31.451-67.065-32.79 c-6.625-8.307-5.261-20.414,3.048-27.039c8.309-6.625,20.416-5.261,27.039,3.048c0.057,0.069,15.336,17.618,36.976,18.303 c26.057,0.824,32.011-6.928,32.782-13.545c0.941-8.083-6.249-14.015-35.192-20.901c-24.535-5.832-61.611-14.651-61.611-54.189 c0-12.314,5.008-52.488,69.448-52.488c40.691,0,64.712,32.035,65.715,33.399c6.292,8.563,4.455,20.604-4.108,26.898 c-8.523,6.266-20.49,4.475-26.808-3.984c-0.453-0.581-14.202-15.879-34.799-17.834c-15.582-1.481-30.968,4.141-30.968,12.441 C228.649,223.541,233.067,226.499,260.684,233.067L260.684,233.067z"}),l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M286.972,291.404c0.86-7.377-5.063-12.962-28.098-19.115v32.716 C280.974,304.802,286.249,297.605,286.972,291.404z"})),l.a.createElement("path",{style:{fill:"#D1D1D1"},d:"M390.711,278.349c-4.651-6.428-6.804-14.276-6.796-22.207c0-0.047,0-0.093,0-0.14 c0-69.684-55.73-126.312-125.042-127.845v35.683c0.253-0.002,0.488-0.014,0.743-0.014c40.691,0,64.712,32.035,65.715,33.399 c6.292,8.563,4.455,20.604-4.108,26.898c-8.523,6.266-20.49,4.475-26.808-3.984c-0.453-0.581-14.202-15.879-34.799-17.834 c-0.248-0.024-0.495-0.029-0.743-0.05v30.377c0.596,0.143,1.191,0.288,1.81,0.434c25.791,6.135,64.765,15.403,64.765,58.337 c0,21.147-10.416,37.283-29.327,45.428c-11.921,5.134-25.231,6.344-37.248,6.556v40.464c14.417-0.319,28.246-2.998,41.103-7.713 c7.416-2.72,15.544-3.241,23.149-1.1c6.716,1.895,13.895,2.691,21.33,2.181c31.229-2.148,56.37-27.743,57.99-59.004 C403.218,303.294,398.746,289.452,390.711,278.349z"}),l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M228.649,214.747c0,8.597,4.236,11.619,30.225,17.886v-30.377 C243.55,201.019,228.649,206.577,228.649,214.747z"}),ze,Ie,Re,Be,_e,Ae,Le,Ve,He,Te,We,Qe,qe,Ue,Ge)},Ze=l.a.forwardRef(function(e,t){return l.a.createElement(Je,Pe({svgRef:t},e))});a.p;function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ke(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var Ye=l.a.createElement("g",null),Xe=l.a.createElement("g",null),et=l.a.createElement("g",null),tt=l.a.createElement("g",null),at=l.a.createElement("g",null),nt=l.a.createElement("g",null),lt=l.a.createElement("g",null),rt=l.a.createElement("g",null),ct=l.a.createElement("g",null),ot=l.a.createElement("g",null),it=l.a.createElement("g",null),st=l.a.createElement("g",null),mt=l.a.createElement("g",null),ut=l.a.createElement("g",null),pt=l.a.createElement("g",null),ht=function(e){var t=e.svgRef,a=e.title,n=Ke(e,["svgRef","title"]);return l.a.createElement("svg",$e({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512.007 512.007",style:{enableBackground:"new 0 0 512.007 512.007"},xmlSpace:"preserve",ref:t},n),l.a.createElement("title",null,a),l.a.createElement("circle",{style:{fill:"#41B4E6"},cx:256.003,cy:256.003,r:256.003}),l.a.createElement("path",{style:{fill:"#0091C8"},d:"M396.054,115.946c-12.916-12.916-30.759-20.905-50.468-20.905H166.415 c-39.418,0-71.373,31.954-71.373,71.373v179.171c0,19.709,7.989,37.552,20.905,50.468l114.698,114.698 c8.342,0.82,16.798,1.249,25.356,1.249c141.385,0,255.999-114.615,256-256c0-8.557-0.429-17.014-1.249-25.356L396.054,115.946z"}),l.a.createElement("path",{style:{fill:"#6E64C3"},d:"M345.585,416.958H166.415c-39.418,0-71.373-31.954-71.373-71.373V166.415 c0-39.418,31.954-71.373,71.373-71.373h179.171c39.418,0,71.373,31.954,71.373,71.373v179.171 C416.958,385.004,385.004,416.958,345.585,416.958z"}),l.a.createElement("g",null,l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M233.688,227.433c2.467-1.812,4.108-4.533,4.562-7.561c0.454-3.027-0.32-6.11-2.148-8.564 l-12.124-16.289c-1.423-1.912-3.557-3.166-5.919-3.48c-2.362-0.314-4.753,0.337-6.625,1.81c-2.235,1.759-4.738,3.723-7.106,5.567 c-5.829,4.54-8.029,12.326-5.449,19.249c14.23,38.186,44.146,68.469,82.084,83.187c7.803,3.027,16.659-0.104,20.803-7.375 l4.658-8.176c2.289-4.017,1.09-9.12-2.747-11.698l-14.836-9.968c-2.593-1.742-5.783-2.352-8.836-1.694 c-3.053,0.659-5.713,2.53-7.356,5.188c-0.485,0.784-0.954,1.546-1.392,2.255c-0.611,0.991-1.597,1.693-2.733,1.946 c-1.136,0.253-2.327,0.036-3.301-0.602c-14.224-9.315-26.376-21.487-35.665-35.73c-1.26-1.932-0.777-4.515,1.098-5.859 C231.59,228.968,232.626,228.213,233.688,227.433z"}),l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M311.42,248.46c-2.45,0-4.436-1.987-4.436-4.436c0-29.2-23.756-52.956-52.956-52.956 c-2.45,0-4.436-1.987-4.436-4.436c0-2.45,1.987-4.436,4.436-4.436c34.092,0,61.828,27.737,61.828,61.828 C315.856,246.474,313.871,248.46,311.42,248.46z"}),l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M297.519,248.46c-2.45,0-4.436-1.987-4.436-4.436c0-21.535-17.52-39.054-39.054-39.054 c-2.45,0-4.436-1.987-4.436-4.436c0-2.45,1.987-4.436,4.436-4.436c26.427,0,47.927,21.5,47.927,47.927 C301.955,246.474,299.969,248.46,297.519,248.46z"}),l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M283.864,248.46c-2.45,0-4.436-1.987-4.436-4.436c0-14.005-11.395-25.4-25.4-25.4 c-2.45,0-4.436-1.987-4.436-4.436c0-2.45,1.987-4.436,4.436-4.436c18.898,0,34.273,15.375,34.273,34.273 C288.301,246.474,286.314,248.46,283.864,248.46z"}),l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M366.185,222.096c0-44.436-36.022-80.458-80.458-80.458h-56.964 c-45.797,0-82.922,37.125-82.922,82.922v35.768c0,35.333,22.108,65.485,53.238,77.428v28.095c0,3.329,2.096,6.348,5.215,7.512 c0.906,0.339,1.85,0.502,2.785,0.502c2.286,0,4.529-0.975,6.077-2.759l24.164-27.855h48.408c44.436,0,80.458-36.022,80.458-80.458 V222.096z M347.454,262.793c0,34.036-27.69,61.726-61.726,61.726h-42.911l-33.065,38.45c-0.432,0.502-1.131,0.682-1.752,0.453 c-0.621-0.23-1.034-0.822-1.034-1.485c0-8.191,0-26.592,0-41.234c-24.696-8.944-42.393-32.629-42.393-60.374v-35.768 c0-35.395,28.796-64.191,64.191-64.191h56.965c34.036,0,61.726,27.69,61.726,61.726V262.793z"})),Ye,Xe,et,tt,at,nt,lt,rt,ct,ot,it,st,mt,ut,pt)},dt=l.a.forwardRef(function(e,t){return l.a.createElement(ht,$e({svgRef:t},e))});a.p;function gt(){return(gt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Et(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var ft=l.a.createElement("g",null),yt=l.a.createElement("g",null),vt=l.a.createElement("g",null),bt=l.a.createElement("g",null),Ot=l.a.createElement("g",null),jt=l.a.createElement("g",null),kt=l.a.createElement("g",null),wt=l.a.createElement("g",null),St=l.a.createElement("g",null),Nt=l.a.createElement("g",null),Ft=l.a.createElement("g",null),Ct=l.a.createElement("g",null),xt=l.a.createElement("g",null),Mt=l.a.createElement("g",null),Pt=l.a.createElement("g",null),Dt=function(e){var t=e.svgRef,a=e.title,n=Et(e,["svgRef","title"]);return l.a.createElement("svg",gt({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512.007 512.007",style:{enableBackground:"new 0 0 512.007 512.007"},xmlSpace:"preserve",ref:t},n),l.a.createElement("title",null,a),l.a.createElement("circle",{style:{fill:"#E6EFF4"},cx:256.003,cy:256.003,r:256.003}),l.a.createElement("path",{style:{fill:"#B6D1DD"},d:"M385.581,107.256L385.581,107.256c-5.101-5.102-12.148-8.258-19.932-8.258H146.354 c-15.567,0-28.187,12.619-28.187,28.187v219.295c0,7.785,3.156,14.832,8.258,19.933l0,0l145.105,145.105 C405.682,503.489,512.001,392.169,512.001,256c0-8.086-0.393-16.081-1.126-23.976L385.581,107.256z"}),l.a.createElement("path",{style:{fill:"#41A0D7"},d:"M365.647,98.999H146.353c-15.567,0-28.187,12.619-28.187,28.187v219.294 c0,15.567,12.619,28.187,28.187,28.187h43.971v38.334l53.377-38.334h121.946c15.567,0,28.187-12.619,28.187-28.187V127.185 C393.834,111.618,381.215,98.999,365.647,98.999z"}),l.a.createElement("path",{style:{fill:"#FFFFFF"},d:"M393.834,340.942v-44.17c-5.73-5.85-13.714-9.484-22.55-9.484h-64.188l86.738-118.175V131.24 c-4.466-3.988-10.304-6.31-16.5-6.31h-131.2c-17.435,0-31.57,14.135-31.57,31.57s14.135,31.57,31.57,31.57h55.168L212,311.089 c-5.474,7.539-6.255,17.512-2.024,25.812c4.231,8.3,12.76,13.526,22.077,13.526h139.232 C380.121,350.426,388.104,346.792,393.834,340.942z"}),ft,yt,vt,bt,Ot,jt,kt,wt,St,Nt,Ft,Ct,xt,Mt,Pt)},zt=l.a.forwardRef(function(e,t){return l.a.createElement(Dt,gt({svgRef:t},e))}),It=(a.p,function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=Object(w.a)({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,l.a.createElement("div",{id:"Contact",key:"Contact",className:"home-page-wrapper contact-wrapper"},l.a.createElement("div",{className:"home-page contact"},l.a.createElement(I.a,null,l.a.createElement("div",{key:"title",className:"title-wrapper"},l.a.createElement("h1",null,"LI\xcaN H\u1ec6"))),l.a.createElement(I.a,null,l.a.createElement(R.a,{className:"block",md:8,xs:24},l.a.createElement("div",{className:"home-page contact"},l.a.createElement(U,null))),l.a.createElement(R.a,{className:"block",md:16,xs:24},l.a.createElement("div",{className:"home-page contact"},l.a.createElement("div",{key:"company",className:"title-wrapper"},l.a.createElement("h2",null,!!t&&t.company)),l.a.createElement(_.a,{className:"content-template",playScale:.3},l.a.createElement(y.b,{component:I.a,key:"ul",enter:{y:"+=30",opacity:0,type:"from",ease:"easeInOutQuad"},leave:{y:"+=30",opacity:0,ease:"easeInOutQuad"},className:"contact-img-wrapper",gutter:16},l.a.createElement(I.a,{className:"contact-content"},l.a.createElement("p",null,l.a.createElement(j.a,{type:"environment"}),l.a.createElement("span",null," "),t.address)),l.a.createElement(I.a,{className:"contact-content"},l.a.createElement("p",null,l.a.createElement(j.a,{type:"mail"})," ",l.a.createElement("span",null," "),t.email)),l.a.createElement(I.a,{className:"contact-content"},l.a.createElement("p",null,l.a.createElement(j.a,{type:"phone"})," ",l.a.createElement("span",null," "),t.phone)),l.a.createElement(I.a,{className:"icon-wrapper"},l.a.createElement("a",{className:"icons",href:t.facebook},l.a.createElement(ue,null)),l.a.createElement("a",{className:"icons",href:t.messenger?t.messenger.replace("www.facebook.com","m.me"):""},l.a.createElement(Me,null)),l.a.createElement("div",{className:"icons"},l.a.createElement(Ze,null)),l.a.createElement("div",{className:"icons",href:t.phone?"tel:".concat(t.phone.replace(/\s/g,"")):""},l.a.createElement(dt,null)),l.a.createElement("a",{className:"icons",href:t.zalo?"http://zalo.me/".concat(t.zalo):""},l.a.createElement(zt,null))))))))))}}]),t}(l.a.Component)),Rt=a(164),Bt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={info:a.props.dataSource.info,category:a.props.dataSource.category},a.categoryMap=function(e){return e.map(function(e,t){return{link:"link".concat(t),href:"#",children:e.title}})},a.getLiChildren=function(e){return e.map(function(e,t){var a=e.title,n=e.childWrapper;Object(Rt.a)(e,["title","childWrapper"]);return l.a.createElement(R.a,{key:t.toString(),name:"category",xs:24,md:6,className:"block",title:null,content:null},l.a.createElement("h2",null,"string"===typeof a.children&&a.children.match(M)?l.a.createElement("img",{src:a.children,width:"100%",alt:"img"}):a.children),l.a.createElement("div",n,n.children.map(P)))})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.dataSource!==e.dataSource&&this.setState({info:this.props.dataSource.info,category:this.props.dataSource.category})}},{key:"render",value:function(){var e=this.state,t=e.info,a=e.category;console.log(t),console.log(a),console.log(this.categoryMap(a));var n={children:[{title:{className:"logo",children:t.logo},childWrapper:{className:"slogan",children:[{name:"content0",children:"D\u1ecbch v\u1ee5 h\xe0ng \u0111\u1ea7u t\u1ea1i Vi\u1ec7t Nam"}]}},{title:{children:"S\u1ea3n ph\u1ea9m"},childWrapper:{children:this.categoryMap(a)}},{title:{children:"Tin t\u1ee9c"},childWrapper:{children:[{href:"#",name:"link0",children:"FAQ"},{href:"#",name:"link1",children:"RSS"}]}},{title:{children:"Li\xean k\u1ebft"},childWrapper:{children:[{href:t.facebook,name:"link0",children:"Fanpage"},{href:"#",name:"link1",children:"\u0110\u1ed1i t\xe1c"}]}}]},r=Object(w.a)({},this.props);delete r.dataSource,delete r.isMobile;var c=this.getLiChildren(n.children);return l.a.createElement("div",{id:"footer",className:"home-page-wrapper footer1-wrapper"},l.a.createElement(_.a,{className:"footer1",playScale:.2},l.a.createElement(S.a,{type:"bottom",key:"ul",leaveReverse:!0,component:I.a,className:"home-page",gutter:0},c),l.a.createElement(y.c,{animation:{y:"+=30",opacity:0,type:"from"},key:"copyright",className:"copyright-wrapper"},l.a.createElement("div",{className:"home-page"},l.a.createElement("div",{className:"copyright"},l.a.createElement("span",null,"\xa92019 by ",l.a.createElement("a",{href:"https://vulocgroup.com"},"Vulocgroup")," All Rights Reserved"))))))}}]),t}(l.a.Component);Bt.defaultProps={className:"footer1"};var _t=Bt,At=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=Object(w.a)({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,l.a.createElement("div",Object.assign({},e,{className:"home-page-wrapper teams1-wrapper"}),l.a.createElement("div",{className:"home-page teams1"},l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h1",null,"D\u1ef0 \xc1N TI\xcaU BI\u1ec2U"),l.a.createElement("div",{className:"title-content"},"C\xe1c c\xf4ng tr\xecnh \u0111\xe3 thi c\xf4ng")),l.a.createElement(_.a,{playScale:.3,className:""},l.a.createElement(S.a,{type:"bottom",key:"block",leaveReverse:!0,className:"block-wrapper",component:I.a},t.map(function(e,t){return l.a.createElement(R.a,{key:t.toString(),className:"block",md:8,xs:24},l.a.createElement("div",{className:"block"},l.a.createElement("div",{className:"teams1-image"},l.a.createElement("img",{src:e.image[0].url,alt:e.title})),l.a.createElement("h1",{className:"'teams1-title'"},l.a.createElement("span",null,e.title)),l.a.createElement("div",{className:"teams1-content"},l.a.createElement("span",null,e.description))))})))))}}]),t}(l.a.PureComponent),Lt=a(161),Vt=a.n(Lt);function Ht(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Tt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ht(a,!0).forEach(function(t){Object(F.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ht(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Wt,Qt=function(e){var t=Object(w.a)({},e),a=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var r=a.video.children.video,c=r.split("."),o=c[c.length-1];return l.a.createElement("div",Object.assign({},t,a.wrapper),l.a.createElement("div",a.page,l.a.createElement("div",Object.assign({key:"title"},a.titleWrapper),a.titleWrapper.children.map(P)),l.a.createElement(_.a,a.OverPack,l.a.createElement(y.c,Object.assign({key:"video",animation:Tt({},{y:"+=30",opacity:0,type:"from",ease:"easeOutQuad"},{delay:300})},a.video),n?l.a.createElement("video",{width:"100%",loop:!0,poster:a.video.children.image},l.a.createElement("source",{src:r,type:"video/".concat(o)}),l.a.createElement("track",{kind:"captions"})):l.a.createElement(Vt.a,{loop:!0,width:"100%",poster:a.video.children.image},l.a.createElement("source",{src:r,type:"video/".concat(o)}))))))};a(345);Object(d.enquireScreen)(function(e){Wt=e});var qt=window.location,Ut={wrapper:{className:"home-page-wrapper content4-wrapper"},page:{className:"home-page content4"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Title Video")),className:"title-h1"},{name:"content",className:"title-content content4-title-content",children:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Description"))}]},video:{className:"content4-video",children:{video:"https://www.youtube.com/watch?v=c3WiRVkQ6IM&feature=share",image:"https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg"}}},Gt=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={isMobile:Wt,show:!qt.port,Banner10DataSource:[],Content00DataSource:[],AllCategory:[],Info:{},constructions:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(d.enquireScreen)(function(t){e.setState({isMobile:!!t})}),qt.port&&setTimeout(function(){e.setState({show:!0})},500),E.a.all([E.a.get("/api/banners?limit=3"),E.a.get("/api/services?limit=3"),E.a.get("/api/categories"),E.a.get("/api/constructions?limit=3"),E.a.get("/api/info")]).then(E.a.spread(function(t,a,n,l,r){console.log("banner: ",t.data.data),e.setState({Banner10DataSource:t.data.data}),console.log("services: ",a.data.data),e.setState({Content00DataSource:a.data.data}),console.log("categories: ",n.data.data),e.setState({AllCategory:n.data.data}),console.log("constructions: ",l.data.data),e.setState({constructions:l.data.data}),e.setState({Info:r.data.data[0]})}))}},{key:"render",value:function(){var e=this,t=[l.a.createElement(O,{id:"Nav0_0",key:"Nav0_0",dataSource:{category:this.state.AllCategory,logo:this.state.Info.logo},isMobile:this.state.isMobile}),l.a.createElement(z,{id:"Banner1_0",key:"Banner1_0",dataSource:this.state.Banner10DataSource,isMobile:this.state.isMobile}),l.a.createElement(A,{id:"Content0_0",key:"Content0_0",dataSource:this.state.Content00DataSource,isMobile:this.state.isMobile}),l.a.createElement(Qt,{id:"Content4_0",key:"Content4_0",dataSource:Ut,isMobile:this.state.isMobile}),l.a.createElement(L,{id:"Content5_0",key:"Content5_0",dataSource:this.state.AllCategory,isMobile:this.state.isMobile}),l.a.createElement(At,{id:"Team1_0",key:"Team1_0",dataSource:this.state.constructions,isMobile:this.state.isMobile}),l.a.createElement(It,{id:"Contact",key:"Contact",dataSource:this.state.Info,isMobile:this.state.isMobile}),l.a.createElement(_t,{id:"Footer1_0",key:"Footer1_0",dataSource:{info:this.state.Info,category:this.state.AllCategory},isMobile:this.state.isMobile})];return l.a.createElement("div",{className:"templates-wrapper",ref:function(t){e.dom=t}},this.state.show&&t)}}]),t}(l.a.Component);var Jt=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:Gt}))};var Zt=function(){return l.a.createElement(Jt,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Zt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.db58500c.chunk.js.map