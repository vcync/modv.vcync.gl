(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{151:function(t,a,e){},152:function(t,a,e){},171:function(t,a,e){"use strict";e(151)},172:function(t,a,e){"use strict";e(152)},195:function(t,a,e){"use strict";var s={name:"Home",components:{NavLink:e(150).a},data:()=>({captures:[],currentCapture:0,footer:`MIT Licensed | Copyright © 2014-${(new Date).getFullYear()} Sam Wray`}),computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}},capture(){return this.captures[this.currentCapture]}},created(){this.captures=["8.jpg","7.jpg","2.jpg","4.jpg","5.jpg","6.jpg","1.jpg","3.jpg"],this.currentCapture=0},mounted(){setInterval(this.rotateImage,7e3)},methods:{rotateImage(){this.currentCapture<this.captures.length-1?this.currentCapture+=1:this.currentCapture=0}}},i=(e(171),e(172),e(6)),r=Object(i.a)(s,(function(){var t=this,a=t._self._c;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[a("div",{staticClass:"hero-image-container"},[a("transition",{attrs:{name:"fade",mode:"in-out"}},[a("img",{key:t.capture,staticClass:"capture-image",attrs:{src:"/captures/"+t.capture}})]),t._v(" "),t.data.heroImage?a("img",{staticClass:"hero-image",attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e()],1),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n        "+t._s(t.data.heroText||t.$title||"Hello")+"\n      ")]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,s){return a("div",{key:s,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.footer?a("div",{staticClass:"footer"},[t._v("\n      "+t._s(t.footer)+"\n    ")]):t._e()],1)}),[],!1,null,null,null);a.a=r.exports}}]);