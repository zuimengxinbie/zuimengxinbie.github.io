(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{650:function(t,a,c){"use strict";c.r(a);var e=c(5),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("p",{attrs:{align:"center"}},[c("img",{attrs:{width:"500",src:"https://p18.qhimg.com/dmfd/2560_1440_/t017dec744f707953dd.jpg"}})]),t._v(" "),c("blockquote",[c("p",[t._v("图解 HTTP 笔记，简单记忆重点")])]),t._v(" "),c("h1",{attrs:{id:"知识点"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),c("ul",[c("li",[t._v("tcp/ip 三次握确保通信可靠性。TCP 标志 SYN/ACK")]),t._v(" "),c("li",[t._v("ping www.baidu.com 解析对应的 IP 地址")]),t._v(" "),c("li",[t._v("HTTP/1.1 虽然是无状态协议，但为了实现期望的保持状态功能，于 是引入了 Cookie 技术。")]),t._v(" "),c("li",[t._v("服务端数据无更，返回 304 状态码")]),t._v(" "),c("li",[t._v("kee-alive 持久连接的特点是，只要任意一端 没有明确提出断开连接，则保持 TCP 连接状态")]),t._v(" "),c("li",[t._v("第一次连接服务端返回 Set-Cookie")]),t._v(" "),c("li",[t._v("使用 Content-Range 来限制请求大小，范围请求返回 206 状态码")]),t._v(" "),c("li",[t._v("403 服务器禁止访问， 500 服务器错误")]),t._v(" "),c("li",[t._v("使用代理服务器的理由有：利用缓存技术减少网络带宽的流量，组织内部针对特定网站的访问控制，以获取访问日志为主要 目的，等等。")]),t._v(" "),c("li",[t._v("网关的工作机制和代理相似")]),t._v(" "),c("li",[t._v("首部字段 Transfer-Encoding 规定了传输报文主体时采用的编码方式。Transfer-Encoding: chunked")]),t._v(" "),c("li",[t._v("使用首部字段 Via 是为了追踪客户端与服务器之间的请求和响应报文 的传输路径。")]),t._v(" "),c("li",[t._v("Cookie 的 secure 属性用于限制 Web 页面仅在 HTTPS 安全连接时，才 可以发送 Cookie。")]),t._v(" "),c("li",[t._v("Cookie 的 HttpOnly 属性是 Cookie 的扩展功能，它使 JavaScript 脚本 无法获得 Cookie。其主要目的为防止跨站脚本攻击（Cross-site scripting，XSS）对 Cookie 的信息窃取。")]),t._v(" "),c("li",[t._v("首部字段 DNT 属于 HTTP 请求首部，其中 DNT 是 Do Not Track 的简 称，意为拒绝个人信息被收集，是表示拒绝被精准广告追踪的一种方 法，0 同意被追踪，1：拒绝")]),t._v(" "),c("li")]),t._v(" "),c("h2",{attrs:{id:"tcp-ip"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip"}},[t._v("#")]),t._v(" TCP/IP")]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b27535ba4604bcc83e84c213473399a~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33f5c781024947b796d7c2b0900c78b3~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("h2",{attrs:{id:"一个-http-传输过程"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#一个-http-传输过程"}},[t._v("#")]),t._v(" 一个 http 传输过程")]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24e704c05cbe4296a247af93bf16e83e~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("h2",{attrs:{id:"内容协商"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#内容协商"}},[t._v("#")]),t._v(" 内容协商")]),t._v(" "),c("p",[t._v("内容协商机制是指客户端和服务器端就响应的资源内容进行交涉，然后提供给客户端最为适合的资源。内容协商会以响应资源的语言、字 符集、编码方式等作为判断的基准。")]),t._v(" "),c("h2",{attrs:{id:"首部字段"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#首部字段"}},[t._v("#")]),t._v(" 首部字段")]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a236cbee3f246aa9b1f87790bde1ccc~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),t._v(" "),c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/993e8889c06d4449b1553204da6a6835~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),t._v(" "),c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97d5d11f14ed47bd920b9f0e67030f71~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),t._v(" "),c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d120c56d022d45e48efaf14fe1e9d124~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("h2",{attrs:{id:"缓存"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),c("ul",[c("li",[t._v("Cache-Control: public 缓存公用，private 缓存只提供给一个用户")]),t._v(" "),c("li",[t._v("Pragm: no-cache 兼容 http1.0")]),t._v(" "),c("li",[t._v("no-cache 强制缓存服务器从资源服务器重新拉取对应资源")]),t._v(" "),c("li",[t._v("max-age 指定缓存有效的时间，max-age=0，请求要转发给源服务器。http 1.1 中，存在 Expires 和 max-age 时，优先处理 max-age，htt 1.0 相反")])]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/163448c39b2043349562374ded279224~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2908be293a564911be9383eaa0c8f5f6~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("h2",{attrs:{id:"connection"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[t._v("#")]),t._v(" Connection")]),t._v(" "),c("ul",[c("li",[t._v("控制不转发给代理的字段")]),t._v(" "),c("li",[t._v("持久连接 keep-Alive 关闭 close")])]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1de5e98f1dd4c7e85bfee84a415bbcc~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("h2",{attrs:{id:"请求首部字段"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#请求首部字段"}},[t._v("#")]),t._v(" 请求首部字段")]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd31ae48b8a34f3cb2216c20b57c31a1~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("ul",[c("li",[t._v("只有当 If-Match 的字段值跟 ETag 值匹配一致时，服务器才会接受请求。If-None-Match 相反")]),t._v(" "),c("li",[t._v("如果在 If-Modified-Since 字段指定的日期时间后，资源发生了 更新，服务器才会接受请求")])]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b152be43cef24a49ad719af1099e54aa~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),t._v(" "),c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1284b6b75b44814a3508324e0ce1ada~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),t._v(" "),c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7b76c3e7d644fe09018878412466ecb~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b9177dcf5d74894a61d053117c24faf~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd0d7c3f90c74b39bea9889a55c1dce7~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("h2",{attrs:{id:"https"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),c("ul",[c("li",[t._v("HTTPS 是身披 SSL 外壳的 HTTP")])]),t._v(" "),c("p",[t._v("通常，HTTP 直接和 TCP 通信。当使用 SSL 时，则演变成先和 SSL 通 信，再由 SSL 和 TCP 通信了。简言之，所谓 HTTPS，其实就是身披 SSL 协议这层外壳的 HTTP。")]),t._v(" "),c("ul",[c("li",[t._v("公钥和私钥 （公钥可能被替换，用证书（收费））")])]),t._v(" "),c("p",[t._v("公开密钥加密使用一对非对称的密钥。使用公开密钥加密方式，发送密文的一方使用对方的公开密钥进 行加密处理，对方收到被加密的信息后，再使用自己的私有密钥 进行解密。")]),t._v(" "),c("ul",[c("li",[t._v("HTTPS 采用混合加密机制")])]),t._v(" "),c("p",[t._v("采用共享密钥加密和公开密钥加密两者并用的混合加密")]),t._v(" "),c("ul",[c("li",[t._v("https 比 http 慢 2-100 倍，会消耗服务器大量资源，一般涉及隐私的时候用 https")])]),t._v(" "),c("h2",{attrs:{id:"webscoket"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#webscoket"}},[t._v("#")]),t._v(" WebScoket")]),t._v(" "),c("p",[t._v("为了实现 WebSocket 通信，在 HTTP 连接建立之后，需要完成一 次“握手”（Handshaking）的步骤。对于之前的请求，返回状态码 101 Switching Protocols 的响应")]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f924bb06894a4648916d61326f264429~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),c("p",[c("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7d46dac217b4cc4b3457733d8f05f14~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})])])}),[],!1,null,null,null);a.default=i.exports}}]);