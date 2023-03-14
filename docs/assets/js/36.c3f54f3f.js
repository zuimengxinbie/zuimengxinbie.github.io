(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{604:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("img",{attrs:{width:"500",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8b755ab7763440eade0ea696c462428~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp"}})]),t._v(" "),a("blockquote",[a("p",[t._v("seo高手已经掌握的秒收教程")])]),t._v(" "),a("h2",{attrs:{id:"一、vue-服务器渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、vue-服务器渲染"}},[t._v("#")]),t._v(" 一、Vue 服务器渲染")]),t._v(" "),a("h3",{attrs:{id:"_1、ssr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、ssr"}},[t._v("#")]),t._v(" 1、SSR")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("概念")]),t._v(" "),a("p",[t._v("将组件或页面通过服务器生成html字符串，再发送到浏览器，最后将静态标记“混合”为客户端上完全交互的应用程序")])]),t._v(" "),a("li",[a("p",[t._v("案例")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第 1 步：创建一个 Vue 实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>Hello World</div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第 2 步：创建一个 renderer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-server-renderer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRenderer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第 3 步：将 Vue 实例渲染为 HTML")]),t._v("\nrenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => <div data-server-rendered="true">Hello World</div>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("blockquote",[a("p",[t._v("将vue渲染成html，将这段html发送给客户端，就可以实现服务端渲染")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 生成 html")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("官方渲染步骤")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/3/5/161f3e369a32ba11~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("将源码通过webpack生成两个bundle\n"),a("ul",[a("li",[t._v("serverBundle是给服务端使用，服务端通过渲染器bundleRenderer将bundle生成html给浏览器使用；")]),t._v(" "),a("li",[t._v("Client Bundle是给浏览器用，后期交互和数据处理需要支持浏览器脚本的Client Bundle来完成")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_2、seo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、seo"}},[t._v("#")]),t._v(" 2、seo")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("搜索引擎原理")]),t._v(" "),a("ul",[a("li",[t._v("meta标签中读取keywords、description的内容")]),t._v(" "),a("li",[t._v("从html标签爬取和分析内容（h1-h6、strong、em等标签）")]),t._v(" "),a("li",[t._v("读取a链接")])])]),t._v(" "),a("li",[a("p",[t._v("需要做什么？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("多页面")])]),t._v(" "),a("li",[a("p",[t._v("动态改变网页title、描述、关键字")])]),t._v(" "),a("li",[a("p",[t._v("网站内容")]),t._v(" "),a("blockquote",[a("p",[t._v("注意： 网站内容从哪里来是一个关键点，如果数据是通过请求来的，在页面加载的时候是先有DOM结构，然后才有的数据，此时的网站内容，是无法被蜘蛛抓取的，所以导致无法被收录")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_3、seo对单页面应用不友好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、seo对单页面应用不友好"}},[t._v("#")]),t._v(" 3、seo对单页面应用不友好")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("vue是通过js控制路由，然后渲染出对应页面，因此所有隐藏在js中的跳转或者数据都获取不到，蜘蛛抓取中不会执行js，导致搜索引擎只能收录 index.html，而无法搜到其相关的子页面的内容。")])]),t._v(" "),a("li",[a("p",[t._v("浏览器加载页面时，首先会对页面进行渲染（dom生成、css构建、javascript解析、布局、绘制），当解析到js的时候，才会去触发vue的渲染，将元素挂载到id为app的div上，这时候我们才能看到页面的内容。因此被搜索引擎收录的index页面，可能也毫无价值，因为没有任何数据。")]),t._v(" "),a("blockquote",[a("p",[t._v("导致的问题")]),t._v(" "),a("ul",[a("li",[t._v("单页面应用无法被SEO")]),t._v(" "),a("li",[t._v("无法动态改变网页的TDK（ title、描述、关键字），每个页面的title和meta标签都是一样的，不利于蜘蛛爬取。")])])])])]),t._v(" "),a("h2",{attrs:{id:"vue-seo-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-seo-解决方案"}},[t._v("#")]),t._v(" VUE SEO 解决方案")]),t._v(" "),a("h3",{attrs:{id:"_1、优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、优缺点"}},[t._v("#")]),t._v(" 1、优缺点")]),t._v(" "),a("ul",[a("li",[t._v("不分离的情况下、即不用暴露接口，安全系数高")]),t._v(" "),a("li",[t._v("压力全在服务器，导致服务器负载大")])]),t._v(" "),a("h3",{attrs:{id:"_2、技术方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、技术方案"}},[t._v("#")]),t._v(" 2、技术方案")]),t._v(" "),a("ol",[a("li",[t._v("预渲染 prerender-spa-plugin\n"),a("ul",[a("li",[t._v("预渲染也称客户端渲染 ，就是在页面加载之前把数据放在页面中，如果是vue文件，我们希望在打包时生成多个页面，这时候我们可以使用 prerender-spa-plugin插件。")]),t._v(" "),a("li",[t._v("存在问题\n"),a("ul",[a("li",[t._v("动态路由解决不了（比如详情页）")]),t._v(" "),a("li",[t._v("无法动态改变tdk")])])]),t._v(" "),a("li",[t._v("适用场景公司官网，适合某几个页面做seo")])])]),t._v(" "),a("li",[t._v("nuxt\n"),a("ul",[a("li",[t._v("优点：\n"),a("ul",[a("li",[t._v("纯静态文件，访问速度更快")]),t._v(" "),a("li",[t._v("对比SSR，不涉及到服务器负载方面的问题")]),t._v(" "),a("li",[t._v("静态网页不易遭受黑客攻击，安全性更高")])])]),t._v(" "),a("li",[t._v("存在问题\n"),a("ul",[a("li",[t._v("如果动态路由参数多的话不适用")]),t._v(" "),a("li",[t._v("Nuxt.js 执行"),a("code",[t._v("generate")]),t._v("静态化打包时，动态路由会被忽略")]),t._v(" "),a("li",[t._v("打开网站都效率慢，压力全在服务器，和前后端不分离差不多了")])])]),t._v(" "),a("li",[t._v("适用场景\n"),a("ul",[a("li",[t._v("整个网站都做 seo")])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);