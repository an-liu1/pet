(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09dbe424"],{"0fa5":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop"},[i("el-image",{attrs:{src:"https://picsum.photos/1920/?image=15",fit:"cover"}}),i("div",{staticClass:"contentContainer row"},[i("div",{staticClass:"sideNav col-md-2"},[i("h3",[t._v("Filter By")]),t._l(t.shopFilterData,(function(e,s){return i("div",{key:s,staticClass:"filterContainer"},[i("p",{staticClass:"filterTitle"},[t._v(t._s(e.title))]),t._l(e.selection,(function(e,s){return i("div",{key:s,staticClass:"filterSelection"},[i("el-checkbox-group",{on:{change:t.filterChange},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[i("el-checkbox",{attrs:{label:e}})],1)],1)}))],2)}))],2),i("div",{staticClass:"shopList col-md-10 row m-0"},t._l(t.productList,(function(e,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.display,expression:"i.display"}],key:s,staticClass:"col-md-6 col-lg-4"},[i("el-image",{attrs:{src:e.productImg}}),i("p",[t._v(t._s(e.name+" - "+e.size))]),i("p",[t._v(t._s(e.category))])],1)})),0)])],1)},c=[],n={data:function(){return{checkList:[]}},computed:{shopFilterData:function(){return[{title:"HEALTH",selection:["Cognitive","Puppy","Skin"]},{title:"CORE DIETS",selection:["CANS"]},{title:"FLAVOUR",selection:["Lamb","Beef","Chicken"]},{title:"SIZE",selection:["170g / 6oz","370g / 13oz"]}]},productList:function(){return this.$store.state.productList}},methods:{filterChange:function(){this.$store.commit("setProductList",this.checkList)}}},o=n,a=(i("1182"),i("2877")),l=Object(a["a"])(o,s,c,!1,null,"b0d0db78",null);e["default"]=l.exports},1182:function(t,e,i){"use strict";i("836d")},"836d":function(t,e,i){}}]);
//# sourceMappingURL=chunk-09dbe424.b23b8e3c.js.map