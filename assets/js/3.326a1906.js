(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,r){},146:function(e,t,r){},147:function(e,t,r){},148:function(e,t,r){},149:function(e,t,r){},178:function(e,t,r){"use strict";r(142);var n=r(143),a=r(37),s=r(177),i={props:["title","cssClass"]},c=(r(242),r(3)),l=Object(c.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:["workspace-element",this.cssClass]},[t("div",{staticClass:"we-header"},[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)},[],!1,null,null,null).exports,u={components:{HighlightedCode:r(180).a,"code-editor":function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,263))},WorkspaceElementDecorator:l},props:["title","value","cssClass","language","interactive"],methods:{delegateInputEvent:function(e){this.$emit("input",e)}}},o=(r(250),Object(c.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("workspace-element-decorator",{attrs:{"css-class":e.cssClass,title:e.title}},[e.interactive?r("code-editor",{attrs:{"css-class":"we-content",value:e.value,language:e.language,active:!0},on:{input:e.delegateInputEvent}}):r("highlighted-code",{attrs:{"css-class":"we-content",value:e.value,language:e.language}})],1)},[],!1,null,null,null).exports),p={components:{WorkspaceElementDecorator:l},props:["error"]},h=(r(251),Object(c.a)(p,function(){var e=this.$createElement,t=this._self._c||e;return t("workspace-element-decorator",{attrs:{title:"Error"}},[t("div",{staticClass:"workspace-error"},[this._v(this._s(this.error.message)),t("hr"),this._v(this._s(this.error.stack)+"\n    ")])])},[],!1,null,null,null).exports),d=r(181),m=(r(252),r(120),r(253),{}),v=Promise.resolve();function f(e){return g.apply(this,arguments)}function g(){return(g=Object(n.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return null==m[t]&&(m[t]=b(t)),e.abrupt("return",m[t]);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return(w=Object(n.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v=v.then(function(){return x(t)},function(){return x(t)}),e.abrupt("return",v);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e){return E.apply(this,arguments)}function E(){return(E=Object(n.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=k(t),e.abrupt("return",new Promise(function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.addEventListener("load",function(){try{var e=_();return t(e)}catch(e){n(e)}finally{r.remove()}}),r.addEventListener("error",function(e){r.remove(),n(new Error("The script ".concat(e.target.src," didn't load correctly.")))}),document.body.appendChild(r);case 3:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e){var t=document.createElement("script");return t.src=function(e){return"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/".concat(e,"/handlebars.min.js")}(e),t.type="application/javascript",t}function _(){var e=window.Handlebars;if(null==e)throw new Error("Handlebars version ".concat(version,' did not save global "Handlebars" variable, despite script loading successfully!'));return window.Handlebars.noConflict(),e}var j=r(254),y=r.n(j);function C(e){return $.apply(this,arguments)}function $(){return($=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,a,s,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return(c=Object(n.a)(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t.handlebarsVersion);case 2:return r=e.sent,e.abrupt("return",r.create());case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)},i=function(){return c.apply(this,arguments)},e.next=4,i();case 4:r=e.sent,t.partials.forEach(function(e){r.registerPartial(e.name,e.content)}),a=r.compile(t.template),s=y.a.parse(t.input),t.output=a(s);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O={components:{Layout:s.default,WorkspaceElement:o,WorkspaceError:h,HandlebarsVersionChooser:d.a},props:["parsedExample","interactive","showInputOutput"],data:function(){var e=this.$props.parsedExample;return{currentExample:{template:e.template,partials:Object(a.a)(e.partials),input:e.input,output:e.output,handlebarsVersion:this.$handlebarsVersions.latest},currentError:null}},methods:{partialTitle:function(e){return"{{>".concat(e,"}}")},executeExample:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(this.currentExample);case 3:this.currentError=null,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.currentError=e.t0;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()}},R=(r(255),Object(c.a)(O,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"workspace"},[e.interactive?r("div",{staticClass:"workspace-header"},[r("div",{staticClass:"version-chooser"},[e._v("\n      Handlebars:\n      "),r("handlebars-version-chooser",{on:{input:e.executeExample},model:{value:e.currentExample.handlebarsVersion,callback:function(t){e.$set(e.currentExample,"handlebarsVersion",t)},expression:"currentExample.handlebarsVersion"}})],1)]):e._e(),e._v(" "),r("div",{staticClass:"workspace-row"},[r("workspace-element",{attrs:{title:"Template",styleClass:"workspace-template",language:"handlebars",interactive:e.interactive},on:{input:e.executeExample},model:{value:e.currentExample.template,callback:function(t){e.$set(e.currentExample,"template",t)},expression:"currentExample.template"}}),e._v(" "),e._l(e.currentExample.partials,function(t){return r("workspace-element",{key:t.name,attrs:{title:e.partialTitle(t.name),styleClass:"workspace-partial",language:"handlebars",interactive:e.interactive},on:{input:e.executeExample},model:{value:t.content,callback:function(r){e.$set(t,"content",r)},expression:"partial.content"}})})],2),e._v(" "),e.showInputOutput?r("div",{staticClass:"workspace-row"},[r("workspace-element",{attrs:{title:"Input",styleClass:"workspace-input",language:"json",interactive:e.interactive},on:{input:e.executeExample},model:{value:e.currentExample.input,callback:function(t){e.$set(e.currentExample,"input",t)},expression:"currentExample.input"}}),e._v(" "),e.currentError?r("workspace-error",{attrs:{error:e.currentError}}):r("workspace-element",{attrs:{title:"Output",styleClass:"workspace-output",language:"html",value:e.currentExample.output,interactive:!1}})],1):e._e()])},[],!1,null,null,null));t.a=R.exports},180:function(e,t,r){"use strict";var n=r(243),a=r.n(n),s=r(244),i=r.n(s),c=r(245),l=r.n(c),u=r(246),o=r.n(u),p=r(247),h=r.n(p);r(248);a.a.registerLanguage("handlebars",i.a),a.a.registerLanguage("xml",o.a),a.a.registerLanguage("javascript",l.a),a.a.registerLanguage("plaintext",h.a);var d={json:"javascript",html:"xml",handlebars:"handlebars"},m={props:["value","cssClass","language","contenteditable"],computed:{hljsLanguage:function(){return d[this.$props.language]||"plaintext"},codeHtml:function(){return this.$emit("beforeUpdateHtml"),a.a.highlight(this.hljsLanguage,this.value).value}}},v=(r(249),r(3)),f=Object(v.a)(m,function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{ref:"container",class:this.cssClass},[t("code",this._g({ref:"codeElement",class:["ce-code-content","hljs",this.hljsLanguage],attrs:{contenteditable:this.contenteditable,spellcheck:"false"},domProps:{innerHTML:this._s(this.codeHtml)}},this.$listeners))])},[],!1,null,null,null);t.a=f.exports},181:function(e,t,r){"use strict";var n={props:["value"],data:function(){return{versions:this.$handlebarsVersions.allVersions,selected:this.$props.value}},watch:{selected:function(e){this.$emit("input",e)}}},a=r(3),s=Object(a.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=t.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),e._l(e.versions,function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})],2)},[],!1,null,null,null);t.a=s.exports},242:function(e,t,r){"use strict";var n=r(145);r.n(n).a},249:function(e,t,r){"use strict";var n=r(146);r.n(n).a},250:function(e,t,r){"use strict";var n=r(147);r.n(n).a},251:function(e,t,r){"use strict";var n=r(148);r.n(n).a},255:function(e,t,r){"use strict";var n=r(149);r.n(n).a}}]);