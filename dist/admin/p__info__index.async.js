(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{Zbx9:function(e,a,t){e.exports={table:"table___lxmyp"}},oQly:function(e,a,t){"use strict";t.r(a);t("14J3");var n,r,l,i,o,c,s,d,m,u,p,h=t("BMrR"),f=(t("jCWc"),t("kPKH")),g=(t("P2fV"),t("NJEC")),y=(t("+L6B"),t("2/Rp")),E=t("p0pE"),k=t.n(E),v=t("2Taf"),b=t.n(v),w=t("vZ4D"),C=t.n(w),T=t("l4Ni"),I=t.n(T),_=t("ujKo"),F=t.n(_),x=t("MhPg"),R=t.n(x),V=t("q1tI"),P=t.n(V),S=(t("17x9"),t("7Qib")),D=t("MuoO"),O=t("ZD0w"),M=t("Kvkj"),j=t("Qyje"),q=(t("g9YV"),t("wCAj")),Y=t("jehZ"),A=t.n(Y),z=(t("Telt"),t("Tckk")),U=t("Y/ft"),L=t.n(U),K=(t("2qtc"),t("kLXV")),N=t("wY1l"),Z=t.n(N),B=t("Zbx9"),Q=t.n(B),J=K["a"].confirm,W=(n=Object(O["withI18n"])(),n((l=function(e){function a(){var e,t;b()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=I()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.handleMenuClick=function(e,a){var n=t.props,r=n.onDeleteItem,l=n.onEditItem,i=n.i18n;"1"===a.key?l(e):"2"===a.key&&J({title:i._("Are you sure delete this record?"),onOk:function(){r(e._id)}})},t}return R()(a,e),C()(a,[{key:"render",value:function(){var e=this,a=this.props,t=(a.onDeleteItem,a.onEditItem,a.i18n),n=L()(a,["onDeleteItem","onEditItem","i18n"]),r=[{title:P.a.createElement(O["Trans"],{id:"Logo"}),dataIndex:"logo",key:"logo",width:72,fixed:"left",render:function(e){return P.a.createElement(z["a"],{style:{marginLeft:8},src:e})}},{title:P.a.createElement(O["Trans"],{id:"T\xean c\xf4ng ty"}),dataIndex:"company",key:"company",render:function(e,a){return P.a.createElement(Z.a,{to:"info/".concat(a._id)},e)}},{title:P.a.createElement(O["Trans"],{id:"\u0110\u1ecba ch\u1ec9"}),dataIndex:"address",key:"address"},{title:P.a.createElement(O["Trans"],{id:"Email"}),dataIndex:"email",key:"email"},{title:P.a.createElement(O["Trans"],{id:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),dataIndex:"phone",key:"phone"},{title:P.a.createElement(O["Trans"],{id:"Facebook"}),dataIndex:"facebook",key:"facebook"},{title:P.a.createElement(O["Trans"],{id:"Messenger"}),dataIndex:"messenger",key:"messenger"},{title:P.a.createElement(O["Trans"],{id:"Zalo"}),dataIndex:"zalo",key:"zalo"},{title:P.a.createElement(O["Trans"],{id:"Viber"}),dataIndex:"viber",key:"viber"},{title:P.a.createElement(O["Trans"],{id:"Skype"}),dataIndex:"skype",key:"skype"},{title:P.a.createElement(O["Trans"],{id:"CreateAt"}),dataIndex:"created_at",key:"created_at"},{title:P.a.createElement(O["Trans"],{id:"Operation"}),key:"operation",fixed:"right",render:function(a,n){return P.a.createElement(M["a"],{onMenuClick:function(a){return e.handleMenuClick(n,a)},menuOptions:[{key:"1",name:t._("Update")},{key:"2",name:t._("Delete")}]})}}];return P.a.createElement(q["a"],A()({},n,{pagination:k()({},n.pagination,{showTotal:function(e){return t._("Total {total} Items",{total:e})}}),className:Q.a.table,bordered:!0,scroll:{x:1200},columns:r,simple:!0,rowKey:function(e){return e._id}}))}}]),a}(V["PureComponent"]),r=l))||r),X=W,G=(t("6UJt"),t("DFOY")),H=(t("y8nQ"),t("Vl3Y")),$=(t("iQDF"),t("+eQT")),ee=(t("5NDa"),t("5rEg")),ae=t("wd/R"),te=t.n(ae),ne=t("Lo71"),re=ee["a"].Search,le=$["a"].RangePicker,ie={xs:24,sm:12,style:{marginBottom:16}},oe=k()({},ie,{xl:96}),ce=(i=Object(O["withI18n"])(),o=H["a"].create(),i(c=o((s=function(e){function a(){var e,t;b()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=I()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.handleFields=function(e){var a=e.createTime;return a.length&&(e.createTime=[te()(a[0]).format("YYYY-MM-DD"),te()(a[1]).format("YYYY-MM-DD")]),e},t.handleSubmit=function(){var e=t.props,a=e.onFilterChange,n=e.form,r=n.getFieldsValue,l=r();l=t.handleFields(l),a(l)},t.handleReset=function(){var e=t.props.form,a=e.getFieldsValue,n=e.setFieldsValue,r=a();for(var l in r)({}).hasOwnProperty.call(r,l)&&(r[l]instanceof Array?r[l]=[]:r[l]=void 0);n(r),t.handleSubmit()},t.handleChange=function(e,a){var n=t.props,r=n.form,l=n.onFilterChange,i=r.getFieldsValue,o=i();o[e]=a,o=t.handleFields(o),l(o)},t}return R()(a,e),C()(a,[{key:"render",value:function(){var e=this.props,a=e.onAdd,t=e.filter,n=e.form,r=e.i18n,l=n.getFieldDecorator,i=t.name,o=t.address,c=[];return t.createTime&&t.createTime[0]&&(c[0]=te()(t.createTime[0])),t.createTime&&t.createTime[1]&&(c[1]=te()(t.createTime[1])),P.a.createElement(h["a"],{gutter:24},P.a.createElement(f["a"],A()({},ie,{xl:{span:4},md:{span:8}}),l("name",{initialValue:i})(P.a.createElement(re,{placeholder:r._("Search Name"),onSearch:this.handleSubmit}))),P.a.createElement(f["a"],A()({},ie,{xl:{span:4},md:{span:8},id:"addressCascader"}),l("address",{initialValue:o})(P.a.createElement(G["a"],{style:{width:"100%"},options:ne["a"],placeholder:r._("Please pick an address"),onChange:this.handleChange.bind(this,"address"),getPopupContainer:function(){return document.getElementById("addressCascader")}}))),P.a.createElement(f["a"],A()({},ie,{xl:{span:6},md:{span:8},sm:{span:12},id:"createTimeRangePicker"}),P.a.createElement(M["c"],{label:r._("CreateTime")},l("createTime",{initialValue:c})(P.a.createElement(le,{style:{width:"100%"},onChange:this.handleChange.bind(this,"createTime"),getCalendarContainer:function(){return document.getElementById("createTimeRangePicker")}})))),P.a.createElement(f["a"],A()({},oe,{xl:{span:10},md:{span:24},sm:{span:24}}),P.a.createElement(h["a"],{type:"flex",align:"middle",justify:"space-between"},P.a.createElement("div",null,P.a.createElement(y["a"],{type:"primary",className:"margin-right",onClick:this.handleSubmit},P.a.createElement(O["Trans"],{id:"Search"})),P.a.createElement(y["a"],{onClick:this.handleReset},P.a.createElement(O["Trans"],{id:"Reset"}))),P.a.createElement(y["a"],{type:"ghost",onClick:a},P.a.createElement(O["Trans"],{id:"Create"})))))}}]),a}(V["Component"]),c=s))||c)||c),se=ce,de=(t("DZo9"),t("8z0m")),me=(t("Pwec"),t("CtXQ")),ue=(t("miYZ"),t("tsqr"));t("rzuo");function pe(e,a){var t=new FileReader;t.addEventListener("load",function(){return a(t.result)}),t.readAsDataURL(e)}function he(e){var a="image/jpeg"===e.type||"image/png"===e.type;a||ue["a"].error("You can only upload JPG/PNG file!");var t=e.size/1024/1024<2;return t||ue["a"].error("Image must smaller than 2MB!"),a&&t}var fe,ge,ye,Ee,ke=H["a"].Item,ve={labelCol:{span:6},wrapperCol:{span:14}},be=(d=Object(O["withI18n"])(),m=H["a"].create(),d(u=m((p=function(e){function a(){var e,t;b()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=I()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.state={loading:!1},t.handleOk=function(){var e=t.props,a=e.item,n=void 0===a?{}:a,r=e.onOk,l=e.form,i=l.validateFields,o=l.getFieldsValue;i(function(e){if(!e){var a=k()({},o(),{key:n.key,logo:t.state.imageUrl});r(a)}})},t.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&pe(e.file.originFileObj,function(e){return t.setState({imageUrl:e,loading:!1})}):t.setState({loading:!0})},t}return R()(a,e),C()(a,[{key:"componentDidMount",value:function(){this.setState({imageUrl:this.props.item.logo||null})}},{key:"componentWillReceiveProps",value:function(e){console.log("componentWillReceiveProps",e),this.props!==e&&this.setState({imageUrl:e.item.logo})}},{key:"render",value:function(){var e=this.props,a=e.item,t=void 0===a?{}:a,n=(e.onOk,e.form),r=e.i18n,l=L()(e,["item","onOk","form","i18n"]),i=n.getFieldDecorator,o=P.a.createElement("div",null,P.a.createElement(me["a"],{type:this.state.loading?"loading":"plus"}),P.a.createElement("div",{className:"ant-upload-text"},"Upload")),c=this.state.imageUrl;return P.a.createElement(K["a"],A()({},l,{onOk:this.handleOk}),P.a.createElement(H["a"],{layout:"horizontal"},P.a.createElement(ke,A()({label:r._("T\xean c\xf4ng ty"),hasFeedback:!0},ve),i("company",{initialValue:t.company,rules:[{required:!0}]})(P.a.createElement(ee["a"],null))),P.a.createElement(ke,A()({label:r._("\u0110\u1ecba ch\u1ec9"),hasFeedback:!0},ve),i("address",{initialValue:t.address,rules:[{required:!1}]})(P.a.createElement(ee["a"],null))),P.a.createElement(ke,A()({label:r._("Email"),hasFeedback:!0},ve),i("email",{initialValue:t.email,rules:[{required:!1}]})(P.a.createElement(ee["a"],null))),P.a.createElement(ke,A()({label:r._("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),hasFeedback:!0},ve),i("phone",{initialValue:t.phone,rules:[{required:!1}]})(P.a.createElement(ee["a"],null))),P.a.createElement(ke,A()({label:r._("Facebook"),hasFeedback:!0},ve),i("facebook",{initialValue:t.facebook,rules:[{required:!1}]})(P.a.createElement(ee["a"],null))),P.a.createElement(ke,A()({label:r._("Messenger"),hasFeedback:!0},ve),i("messenger",{initialValue:t.messenger,rules:[{required:!1}]})(P.a.createElement(ee["a"],null))),P.a.createElement(ke,A()({label:r._("Zalo"),hasFeedback:!0},ve),i("zalo",{initialValue:t.zalo,rules:[{required:!1}]})(P.a.createElement(ee["a"],null))),P.a.createElement(ke,A()({label:r._("Skype"),hasFeedback:!0},ve),i("skype",{initialValue:t.skype,rules:[{required:!1}]})(P.a.createElement(ee["a"],null))),P.a.createElement(ke,A()({label:r._("Viber"),hasFeedback:!0},ve),i("viber",{initialValue:t.viber,rules:[{required:!1}]})(P.a.createElement(ee["a"],null))),P.a.createElement(ke,A()({label:r._("Logo"),hasFeedback:!0},ve),P.a.createElement(de["a"],{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:he,onChange:this.handleChange,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},c?P.a.createElement("img",{src:c,alt:"avatar",style:{width:"100%"}}):t.logo?P.a.createElement("img",{src:t.logo,alt:"avatar",style:{width:"100%"}}):o))))}}]),a}(V["Component"]),u=p))||u)||u),we=be,Ce=(fe=Object(O["withI18n"])(),ge=Object(D["connect"])(function(e){var a=e.info,t=e.loading;return{info:a,loading:t}}),fe(ye=ge((Ee=function(e){function a(){var e,t;b()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=I()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.handleRefresh=function(e){var a=t.props.location,n=a.query,r=a.pathname;S["k"].push({pathname:r,search:Object(j["stringify"])(k()({},n,e),{arrayFormat:"repeat"})})},t.handleDeleteItems=function(){var e=t.props,a=e.dispatch,n=e.info,r=n.list,l=n.pagination,i=n.selectedRowKeys;a({type:"info/multiDelete",payload:{ids:i}}).then(function(){t.handleRefresh({page:r.length===i.length&&l.current>1?l.current-1:l.current})})},t}return R()(a,e),C()(a,[{key:"render",value:function(){var e=this.props.info,a=e.selectedRowKeys;return P.a.createElement(M["f"],{inner:!0},P.a.createElement(se,this.filterProps),a.length>0&&P.a.createElement(h["a"],{style:{marginBottom:24,textAlign:"right",fontSize:13}},P.a.createElement(f["a"],null,"Selected ".concat(a.length," items "),P.a.createElement(g["a"],{title:"Are you sure delete these items?",placement:"left",onConfirm:this.handleDeleteItems},P.a.createElement(y["a"],{type:"primary",style:{marginLeft:8}},"Remove")))),P.a.createElement(X,this.listProps),P.a.createElement(we,this.modalProps))}},{key:"modalProps",get:function(){var e=this,a=this.props,t=a.dispatch,n=a.info,r=a.loading,l=a.i18n,i=n.currentItem,o=n.modalVisible,c=n.modalType;return{item:"create"===c?{}:i,visible:o,destroyOnClose:!0,maskClosable:!1,confirmLoading:r.effects["info/".concat(c)],title:"".concat("create"===c?l._("Create Info"):l._("Update Info")),centered:!0,onOk:function(a){t({type:"info/".concat(c),payload:a}).then(function(){e.handleRefresh()})},onCancel:function(){t({type:"info/hideModal"})}}}},{key:"listProps",get:function(){var e=this,a=this.props,t=a.dispatch,n=a.info,r=a.loading,l=n.list,i=n.pagination,o=n.selectedRowKeys;return{dataSource:l,loading:r.effects["info/query"],pagination:i,onChange:function(a){e.handleRefresh({page:a.current,pageSize:a.pageSize})},onDeleteItem:function(a){t({type:"info/delete",payload:a}).then(function(){e.handleRefresh({page:1===l.length&&i.current>1?i.current-1:i.current})})},onEditItem:function(e){t({type:"info/showModal",payload:{modalType:"update",currentItem:e}})},rowSelection:{selectedRowKeys:o,onChange:function(e){t({type:"info/updateState",payload:{selectedRowKeys:e}})}}}}},{key:"filterProps",get:function(){var e=this,a=this.props,t=a.location,n=a.dispatch,r=t.query;return{filter:k()({},r),onFilterChange:function(a){e.handleRefresh(k()({},a))},onAdd:function(){n({type:"info/showModal",payload:{modalType:"create"}})}}}}]),a}(V["PureComponent"]),ye=Ee))||ye)||ye);a["default"]=Ce},rzuo:function(e,a,t){e.exports={"avatar-uploader":"avatar-uploader___2EdfP","ant-upload":"ant-upload___19sX7"}}}]);