(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{Zbx9:function(e,a,t){e.exports={table:"table___lxmyp"}},oQly:function(e,a,t){"use strict";t.r(a);t("14J3");var n,r,l,i,o,c,s,d,u,m,p,h=t("BMrR"),f=(t("jCWc"),t("kPKH")),g=(t("P2fV"),t("NJEC")),y=(t("+L6B"),t("2/Rp")),E=t("p0pE"),k=t.n(E),b=t("2Taf"),v=t.n(b),C=t("vZ4D"),w=t.n(C),T=t("l4Ni"),I=t.n(T),_=t("ujKo"),F=t.n(_),x=t("MhPg"),V=t.n(x),R=t("q1tI"),D=t.n(R),S=(t("17x9"),t("7Qib")),O=t("MuoO"),P=t("ZD0w"),M=t("Kvkj"),j=t("Qyje"),q=(t("g9YV"),t("wCAj")),Y=t("jehZ"),A=t.n(Y),z=(t("Telt"),t("Tckk")),L=t("Y/ft"),U=t.n(L),K=(t("2qtc"),t("kLXV")),N=t("wY1l"),Z=t.n(N),B=t("Zbx9"),Q=t.n(B),J=K["a"].confirm,X=(n=Object(P["withI18n"])(),n((l=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=I()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.handleMenuClick=function(e,a){var n=t.props,r=n.onDeleteItem,l=n.onEditItem,i=n.i18n;"1"===a.key?l(e):"2"===a.key&&J({title:i._("Are you sure delete this record?"),onOk:function(){r(e._id)}})},t}return V()(a,e),w()(a,[{key:"render",value:function(){var e=this,a=this.props,t=(a.onDeleteItem,a.onEditItem,a.i18n),n=U()(a,["onDeleteItem","onEditItem","i18n"]),r=[{title:D.a.createElement(P["Trans"],{id:"Logo"}),dataIndex:"logo",key:"logo",width:72,fixed:"left",render:function(e){return D.a.createElement(z["a"],{style:{marginLeft:8},src:e})}},{title:D.a.createElement(P["Trans"],{id:"T\xean c\xf4ng ty"}),dataIndex:"company",key:"company",render:function(e,a){return D.a.createElement(Z.a,{to:"info/".concat(a._id)},e)}},{title:D.a.createElement(P["Trans"],{id:"\u0110\u1ecba ch\u1ec9"}),dataIndex:"address",key:"address"},{title:D.a.createElement(P["Trans"],{id:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),dataIndex:"phone",key:"phone"},{title:D.a.createElement(P["Trans"],{id:"Facebook"}),dataIndex:"facebook",key:"facebook"},{title:D.a.createElement(P["Trans"],{id:"Messenger"}),dataIndex:"messenger",key:"messenger"},{title:D.a.createElement(P["Trans"],{id:"Zalo"}),dataIndex:"zalo",key:"zalo"},{title:D.a.createElement(P["Trans"],{id:"Viber"}),dataIndex:"viber",key:"viber"},{title:D.a.createElement(P["Trans"],{id:"Skype"}),dataIndex:"skype",key:"skype"},{title:D.a.createElement(P["Trans"],{id:"CreateAt"}),dataIndex:"created_at",key:"created_at"},{title:D.a.createElement(P["Trans"],{id:"Operation"}),key:"operation",fixed:"right",render:function(a,n){return D.a.createElement(M["a"],{onMenuClick:function(a){return e.handleMenuClick(n,a)},menuOptions:[{key:"1",name:t._("Update")},{key:"2",name:t._("Delete")}]})}}];return D.a.createElement(q["a"],A()({},n,{pagination:k()({},n.pagination,{showTotal:function(e){return t._("Total {total} Items",{total:e})}}),className:Q.a.table,bordered:!0,scroll:{x:1200},columns:r,simple:!0,rowKey:function(e){return e._id}}))}}]),a}(R["PureComponent"]),r=l))||r),G=X,H=(t("6UJt"),t("DFOY")),W=(t("y8nQ"),t("Vl3Y")),$=(t("iQDF"),t("+eQT")),ee=(t("5NDa"),t("5rEg")),ae=t("wd/R"),te=t.n(ae),ne=t("Lo71"),re=ee["a"].Search,le=$["a"].RangePicker,ie={xs:24,sm:12,style:{marginBottom:16}},oe=k()({},ie,{xl:96}),ce=(i=Object(P["withI18n"])(),o=W["a"].create(),i(c=o((s=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=I()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.handleFields=function(e){var a=e.createTime;return a.length&&(e.createTime=[te()(a[0]).format("YYYY-MM-DD"),te()(a[1]).format("YYYY-MM-DD")]),e},t.handleSubmit=function(){var e=t.props,a=e.onFilterChange,n=e.form,r=n.getFieldsValue,l=r();l=t.handleFields(l),a(l)},t.handleReset=function(){var e=t.props.form,a=e.getFieldsValue,n=e.setFieldsValue,r=a();for(var l in r)({}).hasOwnProperty.call(r,l)&&(r[l]instanceof Array?r[l]=[]:r[l]=void 0);n(r),t.handleSubmit()},t.handleChange=function(e,a){var n=t.props,r=n.form,l=n.onFilterChange,i=r.getFieldsValue,o=i();o[e]=a,o=t.handleFields(o),l(o)},t}return V()(a,e),w()(a,[{key:"render",value:function(){var e=this.props,a=e.onAdd,t=e.filter,n=e.form,r=e.i18n,l=n.getFieldDecorator,i=t.name,o=t.address,c=[];return t.createTime&&t.createTime[0]&&(c[0]=te()(t.createTime[0])),t.createTime&&t.createTime[1]&&(c[1]=te()(t.createTime[1])),D.a.createElement(h["a"],{gutter:24},D.a.createElement(f["a"],A()({},ie,{xl:{span:4},md:{span:8}}),l("name",{initialValue:i})(D.a.createElement(re,{placeholder:r._("Search Name"),onSearch:this.handleSubmit}))),D.a.createElement(f["a"],A()({},ie,{xl:{span:4},md:{span:8},id:"addressCascader"}),l("address",{initialValue:o})(D.a.createElement(H["a"],{style:{width:"100%"},options:ne["a"],placeholder:r._("Please pick an address"),onChange:this.handleChange.bind(this,"address"),getPopupContainer:function(){return document.getElementById("addressCascader")}}))),D.a.createElement(f["a"],A()({},ie,{xl:{span:6},md:{span:8},sm:{span:12},id:"createTimeRangePicker"}),D.a.createElement(M["c"],{label:r._("CreateTime")},l("createTime",{initialValue:c})(D.a.createElement(le,{style:{width:"100%"},onChange:this.handleChange.bind(this,"createTime"),getCalendarContainer:function(){return document.getElementById("createTimeRangePicker")}})))),D.a.createElement(f["a"],A()({},oe,{xl:{span:10},md:{span:24},sm:{span:24}}),D.a.createElement(h["a"],{type:"flex",align:"middle",justify:"space-between"},D.a.createElement("div",null,D.a.createElement(y["a"],{type:"primary",className:"margin-right",onClick:this.handleSubmit},D.a.createElement(P["Trans"],{id:"Search"})),D.a.createElement(y["a"],{onClick:this.handleReset},D.a.createElement(P["Trans"],{id:"Reset"}))),D.a.createElement(y["a"],{type:"ghost",onClick:a},D.a.createElement(P["Trans"],{id:"Create"})))))}}]),a}(R["Component"]),c=s))||c)||c),se=ce,de=(t("DZo9"),t("8z0m")),ue=(t("Pwec"),t("CtXQ")),me=(t("miYZ"),t("tsqr"));t("rzuo");function pe(e,a){var t=new FileReader;t.addEventListener("load",function(){return a(t.result)}),t.readAsDataURL(e)}function he(e){var a="image/jpeg"===e.type||"image/png"===e.type;a||me["a"].error("You can only upload JPG/PNG file!");var t=e.size/1024/1024<2;return t||me["a"].error("Image must smaller than 2MB!"),a&&t}var fe,ge,ye,Ee,ke=W["a"].Item,be={labelCol:{span:6},wrapperCol:{span:14}},ve=(d=Object(P["withI18n"])(),u=W["a"].create(),d(m=u((p=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=I()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.state={loading:!1},t.handleOk=function(){var e=t.props,a=e.item,n=void 0===a?{}:a,r=e.onOk,l=e.form,i=l.validateFields,o=l.getFieldsValue;i(function(e){if(!e){var a=k()({},o(),{key:n.key,logo:t.state.imageUrl});r(a)}})},t.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&pe(e.file.originFileObj,function(e){return t.setState({imageUrl:e,loading:!1})}):t.setState({loading:!0})},t}return V()(a,e),w()(a,[{key:"componentDidMount",value:function(){this.setState({imageUrl:this.props.item.logo||null})}},{key:"render",value:function(){var e=this.props,a=e.item,t=void 0===a?{}:a,n=(e.onOk,e.form),r=e.i18n,l=U()(e,["item","onOk","form","i18n"]),i=n.getFieldDecorator,o=D.a.createElement("div",null,D.a.createElement(ue["a"],{type:this.state.loading?"loading":"plus"}),D.a.createElement("div",{className:"ant-upload-text"},"Upload")),c=this.state.imageUrl;return D.a.createElement(K["a"],A()({},l,{onOk:this.handleOk}),D.a.createElement(W["a"],{layout:"horizontal"},D.a.createElement(ke,A()({label:r._("T\xean c\xf4ng ty"),hasFeedback:!0},be),i("company",{initialValue:t.company,rules:[{required:!0}]})(D.a.createElement(ee["a"],null))),D.a.createElement(ke,A()({label:r._("\u0110\u1ecba ch\u1ec9"),hasFeedback:!0},be),i("address",{initialValue:t.address,rules:[{required:!1}]})(D.a.createElement(ee["a"],null))),D.a.createElement(ke,A()({label:r._("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),hasFeedback:!0},be),i("phone",{initialValue:t.phone,rules:[{required:!1}]})(D.a.createElement(ee["a"],null))),D.a.createElement(ke,A()({label:r._("Facebook"),hasFeedback:!0},be),i("facebook",{initialValue:t.facebook,rules:[{required:!1}]})(D.a.createElement(ee["a"],null))),D.a.createElement(ke,A()({label:r._("Messenger"),hasFeedback:!0},be),i("messenger",{initialValue:t.messenger,rules:[{required:!1}]})(D.a.createElement(ee["a"],null))),D.a.createElement(ke,A()({label:r._("Zalo"),hasFeedback:!0},be),i("zalo",{initialValue:t.zalo,rules:[{required:!1}]})(D.a.createElement(ee["a"],null))),D.a.createElement(ke,A()({label:r._("Skype"),hasFeedback:!0},be),i("skype",{initialValue:t.skype,rules:[{required:!1}]})(D.a.createElement(ee["a"],null))),D.a.createElement(ke,A()({label:r._("Viber"),hasFeedback:!0},be),i("viber",{initialValue:t.viber,rules:[{required:!1}]})(D.a.createElement(ee["a"],null))),D.a.createElement(ke,A()({label:r._("Logo"),hasFeedback:!0},be),i("logo",{initialValue:t.logo,rules:[{required:!0}]})(D.a.createElement(de["a"],{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:he,onChange:this.handleChange},c?D.a.createElement("img",{src:c,alt:"avatar",style:{width:"100%"}}):t.logo?D.a.createElement("img",{src:t.logo,alt:"avatar",style:{width:"100%"}}):o)))))}}]),a}(R["Component"]),m=p))||m)||m),Ce=ve,we=(fe=Object(P["withI18n"])(),ge=Object(O["connect"])(function(e){var a=e.info,t=e.loading;return{info:a,loading:t}}),fe(ye=ge((Ee=function(e){function a(){var e,t;v()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=I()(this,(e=F()(a)).call.apply(e,[this].concat(r))),t.handleRefresh=function(e){var a=t.props.location,n=a.query,r=a.pathname;S["k"].push({pathname:r,search:Object(j["stringify"])(k()({},n,e),{arrayFormat:"repeat"})})},t.handleDeleteItems=function(){var e=t.props,a=e.dispatch,n=e.info,r=n.list,l=n.pagination,i=n.selectedRowKeys;a({type:"info/multiDelete",payload:{ids:i}}).then(function(){t.handleRefresh({page:r.length===i.length&&l.current>1?l.current-1:l.current})})},t}return V()(a,e),w()(a,[{key:"render",value:function(){var e=this.props.info,a=e.selectedRowKeys;return D.a.createElement(M["f"],{inner:!0},D.a.createElement(se,this.filterProps),a.length>0&&D.a.createElement(h["a"],{style:{marginBottom:24,textAlign:"right",fontSize:13}},D.a.createElement(f["a"],null,"Selected ".concat(a.length," items "),D.a.createElement(g["a"],{title:"Are you sure delete these items?",placement:"left",onConfirm:this.handleDeleteItems},D.a.createElement(y["a"],{type:"primary",style:{marginLeft:8}},"Remove")))),D.a.createElement(G,this.listProps),D.a.createElement(Ce,this.modalProps))}},{key:"modalProps",get:function(){var e=this,a=this.props,t=a.dispatch,n=a.info,r=a.loading,l=a.i18n,i=n.currentItem,o=n.modalVisible,c=n.modalType;return{item:"create"===c?{}:i,visible:o,destroyOnClose:!0,maskClosable:!1,confirmLoading:r.effects["info/".concat(c)],title:"".concat("create"===c?l._("Create Info"):l._("Update Info")),centered:!0,onOk:function(a){t({type:"info/".concat(c),payload:a}).then(function(){e.handleRefresh()})},onCancel:function(){t({type:"info/hideModal"})}}}},{key:"listProps",get:function(){var e=this,a=this.props,t=a.dispatch,n=a.info,r=a.loading,l=n.list,i=n.pagination,o=n.selectedRowKeys;return{dataSource:l,loading:r.effects["info/query"],pagination:i,onChange:function(a){e.handleRefresh({page:a.current,pageSize:a.pageSize})},onDeleteItem:function(a){t({type:"info/delete",payload:a}).then(function(){e.handleRefresh({page:1===l.length&&i.current>1?i.current-1:i.current})})},onEditItem:function(e){t({type:"info/showModal",payload:{modalType:"update",currentItem:e}})},rowSelection:{selectedRowKeys:o,onChange:function(e){t({type:"info/updateState",payload:{selectedRowKeys:e}})}}}}},{key:"filterProps",get:function(){var e=this,a=this.props,t=a.location,n=a.dispatch,r=t.query;return{filter:k()({},r),onFilterChange:function(a){e.handleRefresh(k()({},a))},onAdd:function(){n({type:"info/showModal",payload:{modalType:"create"}})}}}}]),a}(R["PureComponent"]),ye=Ee))||ye)||ye);a["default"]=we},rzuo:function(e,a,t){e.exports={"avatar-uploader":"avatar-uploader___2EdfP","ant-upload":"ant-upload___19sX7"}}}]);