(function(t){function e(e){for(var i,a,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"0718":function(t,e,n){"use strict";var i=n("cd12"),r=n.n(i);r.a},"4c6d":function(t,e,n){"use strict";var i=n("b624"),r=n.n(i);r.a},"51f1":function(t,e,n){"use strict";var i=n("5669"),r=n.n(i);r.a},5669:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"page-wrapper"},[n("SiteHeader"),n("OrderListHeader"),n("OrderList")],1)])},o=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("span",[t._v("B")]),n("span",[t._v("u")]),n("span",[t._v("b")]),n("span",[t._v("b")]),n("span",[t._v("l")]),n("span",[t._v("e")]),n("span",[t._v("-")]),n("span",[t._v("i")]),n("span",[t._v("t")]),n("span",[t._v("!")])])}],l={name:"SiteHeader"},c=l,u=(n("ee4c"),n("2877")),p=Object(u["a"])(c,a,s,!1,null,"7fbd5d56",null),d=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Your order:")])},f=[],g={},m=Object(u["a"])(g,h,f,!1,null,null,null),v=m.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{staticClass:"order-list",attrs:{tag:"ul",name:"fade-grey",mode:"out-in"}},[t._l(t.order,(function(e,i){return n("OrderListItem",{key:e.id,attrs:{options:e.options,price:e.price,index:i,alone:t.alone},on:{remove:function(e){return t.removeDrink(i)},duplicate:function(e){return t.duplicateDrink(i)},change:function(t){return e.cycleOption(t)}}})})),n("OrderListAddItem",{key:"newItem",on:{"add-drink":t.addDrink}}),n("OrderListSubtotal",{key:"subtotal",attrs:{subtotal:t.subtotal}})],2)},b=[],k=(n("4de4"),n("d81d"),n("13d5"),n("a9e3"),n("b680"),n("5530")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"order-item",style:t.cssVars},[n("SketchedBox",{attrs:{fillColour:t.fillColour}}),n("div",{staticClass:"drink-thumbnail-container"},[n("DrinkThumbnail",{attrs:{options:t.options,strawDirection:this.index%2==0?"left":"right"}})],1),n("header",[n("h3",{staticClass:"drink-title"},[t._v("Drink")]),n("span",{staticClass:"price"},[t._v("£"+t._s(t.price))])]),n("div",{staticClass:"drink-details-container"},[n("small",{staticClass:"prompt"},[t._v("(Click any option to change)")]),n("ul",{staticClass:"drink-details"},[n("li",{on:{click:function(e){return t.$emit("change","size")}}},[t._v(t._s(t.getOptionText("size")))]),n("li",{on:{click:function(e){return t.$emit("change","tea")}}},[t._v(t._s(t.getOptionText("tea")))]),n("li",{on:{click:function(e){return t.$emit("change","milk")}}},[t._v(t._s(t.getOptionText("milk")))]),n("li",{on:{click:function(e){return t.$emit("change","topping")}}},[t._v(t._s(t.getOptionText("topping")))]),n("li",{on:{click:function(e){return t.$emit("change","ice")}}},[t._v(t._s(t.getOptionText("ice")))]),n("li",{on:{click:function(e){return t.$emit("change","sugar")}}},[t._v(t._s(t.getOptionText("sugar")))])]),n("div",{staticClass:"drink-buttons-container"},[0==t.alone?n("button",{staticClass:"drink-button-remove",on:{click:function(e){return t.$emit("remove")}}},[t._v("Remove")]):t._e(),n("button",{staticClass:"drink-button-duplicate",on:{click:function(e){return t.$emit("duplicate")}}},[t._v("Duplicate")])])])],1)},w=[],x=(n("cb29"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"sketched-box"})}),O=[],y=n("fba3"),C=n.n(y);function M(t,e){var n,i=this;return function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var s=i;clearTimeout(n),n=setTimeout((function(){return t.apply(s,o)}),e)}}var j={name:"SketchedBox",props:{fillColour:{default:"none"}},methods:{drawBox:function(){var t=this.$el;t.innerHTML="";var e=t.getBoundingClientRect(),n=C.a.svg(t);t.appendChild(n.rectangle(0,0,e.width,e.height,{fill:this.fillColour,fillStyle:"cross-hatch",fillWeight:"1",stroke:"rgb(60,60,60)",roughness:4}))}},watch:{fillColour:function(){this.drawBox()}},mounted:function(){this.drawBox(),window.addEventListener("resize",M(this.drawBox,100))}},$=j,D=(n("87e9"),Object(u["a"])($,x,O,!1,null,"5d339c47",null)),Z=D.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"drink-thumbnail"})},N=[],T=(n("99af"),n("4160"),n("159b"),n("2909")),H=n("90ad"),E={name:"DrinkThumbnail",data:function(){return{roughDraw:""}},props:["options","strawDirection"],watch:{options:{deep:!0,handler:function(){this.drawDrinkImage()}},strawDirection:function(){var t=this;setTimeout((function(){t.drawDrinkImage()}),500)}},methods:{drawDrinkImage:function(){this.$el.innerHTML="",this.drawStraw(),this.drawTea(),this.drawMilk(),this.drawIce(),this.drawTopping(),this.drawCup()},drawStraw:function(){var t=H.straw[this.strawDirection][this.options.size],e={strokeWidth:"1",stroke:"rgb(60,60,60)"},n=this.roughDraw.path(t,e);n.classList.add("straw"),this.$el.appendChild(n)},drawTea:function(){var t=H.tea[this.options.size],e={fill:H.teaColor[this.options.tea],fillStyle:"solid",strokeWidth:0,roughness:0},n=this.roughDraw.path(t,e);n.classList.add("tea"),this.$el.appendChild(n)},drawMilk:function(){if(0==this.options.milk){var t=H.milk[this.options.size],e={fill:"rgba(255,250,250,0.9)",fillStyle:"solid",strokeWidth:0,roughness:0},n=this.roughDraw.path(t,e);n.classList.add("milk"),this.$el.appendChild(n)}},drawIce:function(){var t=this,e={fill:"rgba(245,245,255,0.95)",fillStyle:"solid",stroke:"rgba(60,60,60,0.3)",strokeWidth:.5,roughness:.5};H.ice[this.options.size][this.options.ice].forEach((function(n){var i=t.roughDraw.path(n,e);i.classList.add("iceCube"),t.$el.appendChild(i)}))},drawTopping:function(){switch(this.options.topping){case 0:this.drawPearls();break;case 1:this.drawJelly();break}},drawPearls:function(){var t=this,e={fill:"rgba(37,23,26,0.9)",strokeWidth:0,roughness:.3,fillStyle:"solid"};H.topping.pearls[this.options.size].forEach((function(n){var i,r=[].concat(Object(T["a"])(n),[7]),o=(i=t.roughDraw).circle.apply(i,Object(T["a"])(r).concat([e]));o.classList.add("topping"),o.classList.add("pearl"),t.$el.appendChild(o)}))},drawJelly:function(){var t=this,e={fill:"rgba(245,255,245,0.95)",strokeWidth:.5,stroke:"rgba(60,60,60,0.3)",roughness:.4,fillStyle:"solid"};H.topping.jelly[this.options.size].forEach((function(n){var i,r=[].concat(Object(T["a"])(n),[12,6]),o=(i=t.roughDraw).rectangle.apply(i,Object(T["a"])(r).concat([e]));o.classList.add("topping"),o.classList.add("jelly"),t.$el.appendChild(o)})),H.topping.jellySlanted[this.options.size].forEach((function(n){var i=t.roughDraw.path(n,e);i.classList.add("jelly-slanted"),t.$el.appendChild(i)}))},drawCup:function(){var t=this.roughDraw.path(H.cup[this.options.size],{stroke:"rgb(60,60,60)"});t.classList.add("cup"),this.$el.appendChild(t)}},mounted:function(){this.roughDraw=C.a.svg(this.$el),this.drawDrinkImage()}},I=E,z=(n("c899"),n("0718"),Object(u["a"])(I,S,N,!1,null,"39249eed",null)),B=z.exports,P=n("b71d"),J=n("ab5c"),W={name:"OrderListItem",data:function(){return{colourIndex:this.index%3}},props:["index","price","options","alone"],watch:{index:function(){var t=this;setTimeout((function(){t.colourIndex=t.index%3}),500)}},computed:{fillColour:function(){return P[this.colourIndex].fill},highlightColour:function(){return P[this.colourIndex].highlight},cssVars:function(){return{"--highlight-colour":this.highlightColour}}},methods:{getOptionText:function(t){return J[t][this.options[t]].text}},components:{SketchedBox:Z,DrinkThumbnail:B}},A=W,F=(n("f760"),Object(u["a"])(A,_,w,!1,null,"2d297d07",null)),R=F.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"order-item add-item",on:{click:function(e){return t.$emit("add-drink")}}},[t._m(0)])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticClass:"plus"},[t._v("+")]),t._v("Add a drink!")])}],Y={},q=Y,K=(n("51f1"),Object(u["a"])(q,V,G,!1,null,"3df5ca87",null)),Q=K.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",[t._v(" Subtotal: "),n("span",[t._v("£"+t._s(t.subtotal))])]),n("a",{attrs:{href:"#"}},[t._v("Complete order")])])},X=[],tt={name:"OrderListSubtotal",props:["subtotal"]},et=tt,nt=(n("4c6d"),Object(u["a"])(et,U,X,!1,null,"a25e345e",null)),it=nt.exports,rt=n("d4ec"),ot=n("bee2"),at=n("ec26");function st(t,e){return t==e.length-1?0:+t+1}var lt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{size:0,tea:0,milk:0,topping:0,ice:0,sugar:0};Object(rt["a"])(this,t),this.id=Object(at["a"])(),this.options=e}return Object(ot["a"])(t,[{key:"cycleOption",value:function(t){var e=J[t];this.options[t]=st(this.options[t],e)}},{key:"price",get:function(){var t=0;for(var e in this.options)t+=J[e][this.options[e]].price;return Number(t).toFixed(2)}}]),t}(),ct={name:"OrderList",data:function(){return{order:[new lt]}},computed:{subtotal:function(){var t=this.order.map((function(t){return+t.price})),e=t.reduce((function(t,e){return t+e}));return Number(e).toFixed(2)},alone:function(){return 1==this.order.length}},methods:{addDrink:function(t){this.order.push(new lt(t))},removeDrink:function(t){this.order=this.order.filter((function(e,n){return n!=t}))},duplicateDrink:function(t){var e=this.order[t],n=Object(k["a"])({},e.options);this.addDrink(n)}},components:{OrderListItem:R,OrderListAddItem:Q,OrderListSubtotal:it}},ut=ct,pt=(n("cfc7"),Object(u["a"])(ut,L,b,!1,null,null,null)),dt=pt.exports,ht={name:"App",components:{SiteHeader:d,OrderList:dt,OrderListHeader:v}},ft=ht,gt=(n("034f"),Object(u["a"])(ft,r,o,!1,null,null,null)),mt=gt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(mt)}}).$mount("#app")},"6c08":function(t,e,n){},7841:function(t,e,n){},"85ec":function(t,e,n){},"87e9":function(t,e,n){"use strict";var i=n("6c08"),r=n.n(i);r.a},"90ad":function(t){t.exports=JSON.parse('{"cup":["M 10 65 H 90 L 75 190 H 25 Z","M 10 45 H 90 L 75 190 H 25 Z"],"straw":{"left":["M 2 25 L 60 190 L 65 187 L 7 22 Z","M 6 25 L 60 190 L 65 188 L 13 23 Z"],"right":["M 98 25 L 40 190 L 35 187 L 93 22 Z","M 94 25 L 40 190 L 35 188 L 87 23 Z"]},"milk":["M 15 95 H 85 L 83 115 H 17 Z","M 13 75 H 87 L 84 100 H 16 Z"],"tea":["M 15 95 H 85 L 75 190 H 25 Z","M 15 80 H 85 L 75 190 H 25 Z"],"teaColor":["rgba(196,180,154,0.9)","rgba(154,146,88,0.9)"],"ice":[[["M 18 96 L 33 93 L 36 109 L 22 112 Z","M 42 93 L 57 97 L 52 112 L 38 108 Z","M 62 97 L 77 95 L 78 109 L 64 111 Z","M 28 112 L 44 111 L 45 127 L 29 128 Z","M 54 110 L 70 113 L 66 128 L 50 125 Z"],["M 18 96 L 33 93 L 36 109 L 22 112 Z","M 42 93 L 57 97 L 52 112 L 38 108 Z","M 62 97 L 77 95 L 78 109 L 64 111 Z"],[]],[["M 38 76 L 53 73 L 56 89 L 42 92 Z","M 22 73 L 37 77 L 32 92 L 18 88 Z","M 62 75 L 77 77 L 75 91 L 60 89 Z","M 52 91 L 68 91 L 67 108 L 51 107 Z","M 26 100 L 37 88 L 48 98 L 38 109 Z"],["M 38 76 L 53 73 L 56 89 L 42 92 Z","M 22 73 L 37 77 L 32 92 L 18 88 Z","M 62 75 L 77 77 L 75 91 L 60 89 Z"],[]]],"topping":{"pearls":[[[30,185],[37,184],[33,178],[44,185],[48,179],[51,186],[55,180],[40,178],[59,186],[63,178],[65,184],[70,187],[71,180],[27,174],[35,172],[45,172],[53,173],[60,171],[68,173],[74,169],[26,167],[33,165],[40,166],[49,167],[56,165],[65,167]],[[30,185],[37,184],[33,178],[44,185],[48,179],[51,186],[55,180],[40,178],[59,186],[63,178],[65,184],[70,187],[71,180],[27,174],[35,172],[45,172],[53,173],[60,171],[68,173],[74,169],[26,167],[33,165],[40,166],[49,167],[56,165],[65,167],[27,160],[38,159],[45,161],[52,159],[62,160],[71,161]]],"jelly":[[[25,162],[27,183],[33,176],[35,169],[40,183],[45,163],[47,177],[50,170],[59,162],[61,183],[63,176],[64,169]],[[25,162],[27,183],[33,176],[35,169],[40,183],[45,163],[47,177],[50,170],[59,162],[61,183],[63,176],[64,169],[23,155],[38,156],[51,154]]],"jellySlanted":[["M 24 170 L 31 169 L 33 180 L 26 181 Z"],["M 24 170 L 31 169 L 33 180 L 26 181 Z","M 64 154 L 69 151 L 77 162 L 72 165 Z"]]}}')},a767:function(t,e,n){},ab5c:function(t){t.exports=JSON.parse('{"size":[{"optionName":"regular","text":"Regular","price":2},{"optionName":"large","text":"Large","price":2.5}],"tea":[{"optionName":"black","text":"Black tea","price":0},{"optionName":"green","text":"Green tea","price":0}],"milk":[{"optionName":"fresh","text":"Fresh milk","price":0.5},{"optionName":"none","text":"No milk","price":0}],"topping":[{"optionName":"pearls","text":"Pearls","price":0.5},{"optionName":"jelly","text":"Coconut jelly","price":0.5},{"optionName":"none","text":"No topping","price":0}],"ice":[{"optionName":"full","text":"Full ice","price":0},{"optionName":"half","text":"Half ice","price":0},{"optionName":"none","text":"No ice","price":0}],"sugar":[{"optionName":"full","text":"Full sugar","price":0},{"optionName":"half","text":"Half sugar","price":0},{"optionName":"none","text":"No sugar","price":0}]}')},ae59:function(t,e,n){},b624:function(t,e,n){},b71d:function(t){t.exports=JSON.parse('[{"fill":"#f4dada","highlight":"#cb5252"},{"fill":"#beebe9","highlight":"#44c5bf"},{"fill":"#f6eec7","highlight":"#e0c53e"}]')},c899:function(t,e,n){"use strict";var i=n("ae59"),r=n.n(i);r.a},cd12:function(t,e,n){},cfc7:function(t,e,n){"use strict";var i=n("a767"),r=n.n(i);r.a},e672:function(t,e,n){},ee4c:function(t,e,n){"use strict";var i=n("e672"),r=n.n(i);r.a},f760:function(t,e,n){"use strict";var i=n("7841"),r=n.n(i);r.a}});
//# sourceMappingURL=app.77aa50b4.js.map