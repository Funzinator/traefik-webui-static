(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["019be8e4"],{"0a3b":function(t,a,s){},"2cdc":function(t,a,s){"use strict";var e=s("3162"),i=s.n(e);i.a},3162:function(t,a,s){},"3a1d":function(t,a,s){},"3a9e":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("page-default",[s("section",{staticClass:"app-section"},[s("div",{staticClass:"app-section-wrap app-boxed app-boxed-xl q-pl-md q-pr-md q-pt-xl q-pb-xl"},[t.loading?s("div",{staticClass:"row items-start"},[s("div",{staticClass:"col-12"},t._l(4,function(t){return s("p",{key:t,staticClass:"flex"},[s("SkeletonBox",{staticStyle:{"margin-right":"2%"},attrs:{"min-width":15,"max-width":15}}),s("SkeletonBox",{attrs:{"min-width":50,"max-width":83}})],1)}),0)]):s("div",{staticClass:"row items-start"},[t.entryPoints.length?s("div",{staticClass:"col-12 col-md-3 q-mb-lg path-block"},[s("div",{staticClass:"row no-wrap items-center q-mb-lg app-title"},[s("q-icon",{attrs:{name:"eva-log-in-outline"}}),s("div",{staticClass:"app-title-label"},[t._v("Entrypoints")])],1),s("div",{staticClass:"row items-start q-col-gutter-lg"},[s("div",{staticClass:"col-12 col-md-8"},[s("div",{staticClass:"row items-start q-col-gutter-md"},t._l(t.entryPoints,function(t,a){return s("div",{key:a,staticClass:"col-12"},[s("panel-entry",{attrs:{type:"detail",exSize:"true",name:t.name,address:t.address}})],1)}),0)]),s("div",{staticClass:"col-12 col-md-4 xs-hide sm-hide"},[s("q-icon",{staticClass:"arrow",attrs:{name:"eva-arrow-forward-outline"}})],1)])]):t._e(),t.routerByName.item.name?s("div",{staticClass:"col-12 col-md-3 q-mb-lg path-block"},[s("div",{staticClass:"row no-wrap items-center q-mb-lg app-title"},[s("q-icon",{attrs:{name:"eva-globe-outline"}}),s("div",{staticClass:"app-title-label"},[t._v(t._s(t.routerType))])],1),s("div",{staticClass:"row items-start q-col-gutter-lg"},[s("div",{staticClass:"col-12 col-md-8"},[s("div",{staticClass:"row items-start q-col-gutter-md"},[s("div",{staticClass:"col-12"},[s("panel-entry",{attrs:{focus:"true",type:"detail",name:"router",address:t.routerByName.item.name}})],1)])]),s("div",{staticClass:"col-12 col-md-4 xs-hide sm-hide"},[s("q-icon",{staticClass:"arrow",attrs:{name:"eva-arrow-forward-outline"}})],1)])]):t._e(),t.hasMiddlewares?s("div",{staticClass:"col-12 col-md-3 q-mb-lg path-block"},[s("div",{staticClass:"row no-wrap items-center q-mb-lg app-title"},[s("q-icon",{attrs:{name:"eva-layers"}}),s("div",{staticClass:"app-title-label"},[t._v("HTTP Middlewares")])],1),s("div",{staticClass:"row items-start q-col-gutter-lg"},[s("div",{staticClass:"col-12 col-md-8"},[s("div",{staticClass:"row items-start q-col-gutter-md"},t._l(t.middlewares,function(t,a){return s("div",{key:a,staticClass:"col-12"},[s("panel-entry",{attrs:{type:"detail",name:"Middleware",address:t.type}})],1)}),0)]),s("div",{staticClass:"col-12 col-md-4 xs-hide sm-hide"},[s("q-icon",{staticClass:"arrow",attrs:{name:"eva-arrow-forward-outline"}})],1)])]):t._e(),t.routerByName.item.service?s("div",{staticClass:"col-12 col-md-3 q-mb-lg path-block"},[s("div",{staticClass:"row no-wrap items-center q-mb-lg app-title"},[s("q-icon",{attrs:{name:"eva-flash"}}),s("div",{staticClass:"app-title-label"},[t._v("Service")])],1),s("div",{staticClass:"row items-start q-col-gutter-lg"},[s("div",{staticClass:"col-12 col-md-8"},[s("div",{staticClass:"row items-start q-col-gutter-md"},[s("div",{staticClass:"col-12"},[s("panel-entry",{attrs:{type:"detail",name:"Service",address:t.routerByName.item.service}})],1)])])])]):t._e()])])]),s("section",{staticClass:"app-section"},[s("div",{staticClass:"app-section-wrap app-boxed app-boxed-xl q-pl-md q-pr-md q-pt-xl q-pb-xl"},[t.loading?s("div",{staticClass:"row items-start"},[s("div",{staticClass:"col-12"},t._l(4,function(t){return s("p",{key:t,staticClass:"flex"},[s("SkeletonBox",{staticStyle:{"margin-right":"2%"},attrs:{"min-width":15,"max-width":15}}),s("SkeletonBox",{attrs:{"min-width":50,"max-width":83}})],1)}),0)]):s("div",{staticClass:"row items-start q-col-gutter-md"},[t.routerByName.item?s("div",{staticClass:"col-12 col-md-4 q-mb-lg path-block"},[s("div",{staticClass:"row no-wrap items-center q-mb-lg app-title"},[s("q-icon",{attrs:{name:"eva-info"}}),s("div",{staticClass:"app-title-label"},[t._v("Router Details")])],1),s("div",{staticClass:"row items-start q-col-gutter-lg"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row items-start q-col-gutter-md"},[s("div",{staticClass:"col-12"},[s("panel-router-details",{attrs:{data:t.routerByName.item,protocol:t.protocol}})],1)])])])]):t._e(),s("div",{staticClass:"col-12 col-md-4 q-mb-lg path-block"},[s("div",{staticClass:"row no-wrap items-center q-mb-lg app-title"},[s("q-icon",{attrs:{name:"eva-shield"}}),s("div",{staticClass:"app-title-label"},[t._v("TLS")])],1),s("div",{staticClass:"row items-start q-col-gutter-lg"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row items-start q-col-gutter-md"},[s("div",{staticClass:"col-12"},[s("panel-t-l-s",{attrs:{data:t.routerByName.item.tls,protocol:t.protocol}})],1)])])])]),"http"===t.protocol?s("div",{staticClass:"col-12 col-md-4 q-mb-lg path-block"},[s("div",{staticClass:"row no-wrap items-center q-mb-lg app-title"},[s("q-icon",{attrs:{name:"eva-layers"}}),s("div",{staticClass:"app-title-label"},[t._v("Middlewares")])],1),s("div",{staticClass:"row items-start q-col-gutter-lg"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row items-start q-col-gutter-md"},[s("div",{staticClass:"col-12"},[s("panel-middlewares",{attrs:{data:t.middlewares}})],1)])])])]):t._e()])])])])},i=[],r=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("7f7f"),s("c47a")),l=s.n(r),c=s("2f62"),o=s("5abb"),n=s("59a8"),d=s("96a8"),p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-card",{class:["panel-router-details"],attrs:{flat:"",bordered:""}},[s("q-scroll-area",{staticStyle:{height:"100%"},attrs:{"thumb-style":t.appThumbStyle}},[s("q-card-section",[s("div",{staticClass:"row items-start no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-subtitle2"},[t._v("STATUS")]),s("div",{staticClass:"block-right-text"},[s("avatar-state",{attrs:{state:t._f("status")(t.data.status)}}),s("div",{class:["block-right-text-label","block-right-text-label-"+t.data.status]},[t._v(t._s(t._f("statusLabel")(t.data.status)))])],1)]),s("div",{staticClass:"col"},[s("div",{staticClass:"text-subtitle2"},[t._v("PROVIDER")]),s("div",{staticClass:"block-right-text"},[s("q-avatar",{staticClass:"provider-logo"},[s("q-icon",{attrs:{name:"img:statics/providers/"+t.data.provider+".svg"}})],1),s("div",{staticClass:"block-right-text-label"},[t._v(t._s(t.data.provider))])],1)])])]),t.data.rule?s("q-card-section",[s("div",{staticClass:"row items-start no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-subtitle2"},[t._v("RULE")]),s("q-chip",{staticClass:"app-chip app-chip-wrap app-chip-rule",attrs:{dense:""}},[t._v("\n            "+t._s(t.data.rule)+"\n          ")])],1)])]):t._e(),t.data.name?s("q-card-section",[s("div",{staticClass:"row items-start no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-subtitle2"},[t._v("NAME")]),s("q-chip",{staticClass:"app-chip app-chip-wrap app-chip-name",attrs:{dense:""}},[t._v("\n            "+t._s(t.data.name)+"\n          ")])],1)])]):t._e(),t.data.using?s("q-card-section",[s("div",{staticClass:"row items-start no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-subtitle2"},[t._v("ENTRYPOINTS")]),t._l(t.data.using,function(a,e){return s("q-chip",{key:e,staticClass:"app-chip app-chip-entry-points",attrs:{dense:""}},[t._v("\n            "+t._s(a)+"\n          ")])})],2)])]):t._e(),t.data.service?s("q-card-section",[s("div",{staticClass:"row items-start no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-subtitle2"},[t._v("SERVICE")]),s("q-chip",{staticClass:"app-chip app-chip-wrap app-chip-service",attrs:{dense:"",clickable:""},nativeOn:{click:function(a){t.$router.push({path:"/"+t.protocol+"/services/"+t.getServiceId()})}}},[t._v("\n            "+t._s(t.data.service)+"\n          ")])],1)])]):t._e(),t.data.error?s("q-card-section",[s("div",{staticClass:"row items-start no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-subtitle2"},[t._v("ERRORS")]),t._l(t.data.error,function(a,e){return s("q-chip",{key:e,staticClass:"app-chip app-chip-error"},[t._v("\n            "+t._s(a)+"\n          ")])})],2)])]):t._e()],1)],1)},u=[],m=(s("28a5"),s("a10c")),v={name:"PanelRouterDetails",props:["data","protocol"],components:{AvatarState:m["a"]},methods:{getServiceId:function(){var t=this.data.service.split("@");return 2===t.length?this.data.service:"".concat(this.data.service,"@").concat(this.data.provider)}},filters:{status:function(t){return"enabled"===t?"positive":"disabled"===t?"negative":t},statusLabel:function(t){return"enabled"===t?"success":"disabled"===t?"error":t}}},h=v,C=(s("cab1"),s("2877")),b=Object(C["a"])(h,p,u,!1,null,"cae4bbb2",null),w=b.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-card",{class:["panel-tls"],attrs:{flat:"",bordered:""}},[t.data?e("q-scroll-area",{staticStyle:{height:"100%"},attrs:{"thumb-style":t.appThumbStyle}},[t.data?e("q-card-section",[e("div",{staticClass:"row items-start no-wrap"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-subtitle2"},[t._v("TLS")]),e("boolean-state",{attrs:{value:!!t.data}})],1)])]):t._e(),t.data.options?e("q-card-section",[e("div",{staticClass:"row items-start no-wrap"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-subtitle2"},[t._v("OPTIONS")]),e("q-chip",{staticClass:"app-chip app-chip-options",attrs:{dense:""}},[t._v("\n            "+t._s(t.data.options)+"\n          ")])],1)])]):t._e(),"tcp"==t.protocol?e("q-card-section",[e("div",{staticClass:"row items-start no-wrap"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-subtitle2"},[t._v("PASSTHROUGH")]),e("boolean-state",{attrs:{value:t.data.passthrough}})],1)])]):t._e(),t.data.certResolver?e("q-card-section",[e("div",{staticClass:"row items-start no-wrap"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-subtitle2"},[t._v("CERTIFICATE RESOLVER")]),e("q-chip",{staticClass:"app-chip app-chip-service",attrs:{dense:""}},[t._v("\n            "+t._s(t.data.certResolver)+"\n          ")])],1)])]):t._e(),t.data.domains?e("q-card-section",[e("div",{staticClass:"row items-start no-wrap"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-subtitle2"},[t._v("DOMAINS")]),t._l(t.data.domains,function(a,s){return e("div",{key:s,staticClass:"flex"},[e("q-chip",{staticClass:"app-chip app-chip-rule",attrs:{dense:""}},[t._v("\n              "+t._s(a.main)+"\n            ")]),t._l(a.sans,function(a,s){return e("q-chip",{key:s,staticClass:"app-chip app-chip-entry-points",attrs:{dense:""}},[t._v("\n              "+t._s(a)+"\n            ")])})],2)})],2)])]):t._e()],1):e("q-card-section",{staticStyle:{height:"100%"}},[e("div",{staticClass:"row items-center",staticStyle:{height:"100%"}},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"block-empty"}),e("div",{staticClass:"q-pb-lg block-empty-logo"},[e("img",{attrs:{alt:"empty",src:s("6129")}})]),e("div",{staticClass:"block-empty-label"},[t._v("There are no"),e("br"),t._v("TLS configured")])])])])],1)},f=[],y=s("8755"),_={name:"PanelTLS",components:{BooleanState:y["a"]},props:["data","protocol"]},q=_,x=(s("d3e1"),Object(C["a"])(q,g,f,!1,null,"05ec79a8",null)),S=x.exports,O=s("6069");function B(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,e)}return s}function N(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?B(s,!0).forEach(function(a){l()(t,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):B(s).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))})}return t}var k={name:"PageRouterDetail",props:["name","type"],components:{PageDefault:o["a"],SkeletonBox:n["a"],PanelEntry:d["a"],PanelRouterDetails:w,PanelTLS:S,PanelMiddlewares:O["a"]},data:function(){return{loading:!0,entryPoints:[],middlewares:[],timeOutGetAll:null}},computed:N({hasTLSConfiguration:function(){return this.routerByName.item.tls},routerType:function(){return this.$route.meta.protocol.toUpperCase()+" Router"}},Object(c["c"])("http",{http_routerByName:"routerByName"}),{},Object(c["c"])("tcp",{tcp_routerByName:"routerByName"}),{hasMiddlewares:function(){return"http"===this.$route.meta.protocol&&this.middlewares.length>0},protocol:function(){return this.$route.meta.protocol},routerByName:function(){return this["".concat(this.protocol,"_routerByName")]},getRouterByName:function(){return this["".concat(this.protocol,"_getRouterByName")]}}),methods:N({},Object(c["b"])("http",{http_getRouterByName:"getRouterByName",getMiddlewareByName:"getMiddlewareByName"}),{},Object(c["b"])("tcp",{tcp_getRouterByName:"getRouterByName"}),{},Object(c["b"])("entrypoints",{getEntrypointsByName:"getByName"}),{refreshAll:function(){this.routerByName.loading||this.onGetAll()},onGetAll:function(){var t=this;this.getRouterByName(this.name).then(function(a){if(a){if(a.using)for(var s in a.using)a.using.hasOwnProperty(s)&&t.getEntrypointsByName(a.using[s]).then(function(a){a&&t.entryPoints.push(a)}).catch(function(t){});if(a.middlewares)for(var e in a.middlewares)a.middlewares.hasOwnProperty(e)&&t.getMiddlewareByName(a.middlewares[e]).then(function(a){a&&t.middlewares.push(a)}).catch(function(t){});clearTimeout(t.timeOutGetAll),t.timeOutGetAll=setTimeout(function(){t.loading=!1},300)}else t.loading=!1}).catch(function(t){})}}),created:function(){this.refreshAll()},mounted:function(){},beforeDestroy:function(){clearInterval(this.timeOutGetAll),this.$store.commit("http/getRouterByNameClear"),this.$store.commit("tcp/getRouterByNameClear")}},P=k,R=(s("2cdc"),Object(C["a"])(P,e,i,!1,null,"1b462896",null));a["default"]=R.exports},"704f":function(t,a,s){"use strict";var e=s("0a3b"),i=s.n(e);i.a},"70d0":function(t,a,s){},"96a8":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-card",{class:["panel-entry",{"panel-entry-detail":"detail"===t.type},{"panel-entry-focus":t.focus},{"panel-entry-ex-size":t.exSize}],attrs:{flat:"",bordered:""}},[s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.name))])])])]),s("q-card-section",[s("div",{staticClass:"text-h3 text-center text-weight-bold ellipsis"},[s("span",[t._v(t._s(t.address))]),s("q-tooltip",[t._v(t._s(t.address))])],1)])],1)},i=[],r={name:"PanelEntry",props:["address","name","type","focus","exSize"]},l=r,c=(s("704f"),s("2877")),o=Object(c["a"])(l,e,i,!1,null,"3bb8ca44",null);a["a"]=o.exports},cab1:function(t,a,s){"use strict";var e=s("70d0"),i=s.n(e);i.a},d3e1:function(t,a,s){"use strict";var e=s("3a1d"),i=s.n(e);i.a}}]);