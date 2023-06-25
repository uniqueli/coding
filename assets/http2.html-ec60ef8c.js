import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as p,c as T,e as a}from"./app-811b9615.js";const t="/assets/fe/network-http2-1.png",e="/assets/fe/network-http2-2.png",l="/assets/fe/network-http2-3.png",r="/assets/fe/network-http2-4.png",n={},h=a('<h1 id="http2" tabindex="-1"><a class="header-anchor" href="#http2" aria-hidden="true">#</a> HTTP2</h1><h2 id="http2协议" tabindex="-1"><a class="header-anchor" href="#http2协议" aria-hidden="true">#</a> HTTP2协议</h2><p>HTTP/2是一种新的HTTP协议，它由SPDY协议演变而来，由IETF的HTTPbis工作组进行开发，于2015年5月作为标准正式发布。</p><p>HTTP/2的目标是通过支持请求与响应的多路复用，有效压缩HTTP头部字段数据，允许服务器主动向客户端推送非请求的资源等方式来减少网络延迟，提升页面加载速度，进而提升用户的使用体验。</p><p>HTTP/2的主要特性：</p><ul><li><p>二进制分帧：HTTP/2在应用层和传输层之间增加了一个二进制分帧层，通过二进制分帧层将HTTP消息分割成更小的帧，并对它们采用二进制格式的编码，从而实现了一个完整的消息可以由多个帧组成，帧之间可以乱序发送，然后再根据每个帧首部的流标识符重新组装成完整的消息。</p></li><li><p>多路复用：HTTP/2在同一个TCP连接上可以存在多个流，每个流都有一个唯一的标识符，而且流之间是相互独立的，可以随意的交错传输，这样就避免了HTTP/1.1中的队头阻塞问题。</p></li><li><p>首部压缩：HTTP/2使用HPACK算法对首部进行压缩，减少了首部的大小，降低了网络延迟。</p></li><li><p>服务器推送：HTTP/2允许服务器主动向客户端推送非请求的资源，这样可以避免客户端重复的请求资源，提高页面加载速度。</p></li></ul><h2 id="http2与http1-1的区别" tabindex="-1"><a class="header-anchor" href="#http2与http1-1的区别" aria-hidden="true">#</a> HTTP2与HTTP1.1的区别</h2><h3 id="二进制分帧" tabindex="-1"><a class="header-anchor" href="#二进制分帧" aria-hidden="true">#</a> 二进制分帧</h3><p>HTTP/2在应用层和传输层之间增加了一个二进制分帧层，通过二进制分帧层将HTTP消息分割成更小的帧，并对它们采用二进制格式的编码，从而实现了一个完整的消息可以由多个帧组成，帧之间可以乱序发送，然后再根据每个帧首部的流标识符重新组装成完整的消息。</p><p>HTTP/2的帧结构如下图所示：</p><figure><img src="'+t+'" alt="HTTP2帧结构" tabindex="0" loading="lazy"><figcaption>HTTP2帧结构</figcaption></figure><p>HTTP/2的帧结构包含了以下几个部分：</p><ul><li><p>首部：每个帧都包含了至少9个字节的首部，用于描述当前帧的一些基本信息，如帧的长度、类型、标志位、流标识符等。</p></li><li><p>负载：每个帧都可以携带不同的负载，负载的内容由帧的类型决定。</p></li><li><p>帧的长度：用于描述当前帧的长度，占用3个字节。</p></li><li><p>帧的类型：用于描述当前帧的类型，占用1个字节。</p></li><li><p>标志位：用于描述当前帧的一些标志信息，占用1个字节。</p></li><li><p>流标识符：用于描述当前帧所属的流，占用4个字节。</p></li><li><p>帧的负载：用于描述当前帧的负载，占用N个字节。</p></li></ul><h3 id="多路复用" tabindex="-1"><a class="header-anchor" href="#多路复用" aria-hidden="true">#</a> 多路复用</h3><p>HTTP/2在同一个TCP连接上可以存在多个流，每个流都有一个唯一的标识符，而且流之间是相互独立的，可以随意的交错传输，这样就避免了HTTP/1.1中的队头阻塞问题。</p><p>HTTP/2的多路复用机制如下图所示：</p><figure><img src="'+e+'" alt="HTTP2多路复用" tabindex="0" loading="lazy"><figcaption>HTTP2多路复用</figcaption></figure><p>HTTP/2的多路复用机制包含了以下几个部分：</p><ul><li><p>流：HTTP/2中的流是一个虚拟的概念，它是一个双向的逻辑消息流，可以承载双向的消息，每个流都有一个唯一的标识符，而且流之间是相互独立的，可以随意的交错传输。</p></li><li><p>流优先级：HTTP/2中的流可以设置优先级，优先级用于指定流的重要性，优先级越高的流越优先被传输。</p></li><li><p>流依赖：HTTP/2中的流可以设置依赖关系，依赖关系用于指定流之间的依赖关系，一个流可以依赖于另一个流，这样就可以实现流之间的优先级继承。</p></li><li><p>流的权重：HTTP/2中的流可以设置权重，权重用于指定流的优先级，权重越高的流越优先被传输。</p></li></ul><h3 id="首部压缩" tabindex="-1"><a class="header-anchor" href="#首部压缩" aria-hidden="true">#</a> 首部压缩</h3><p>HTTP/2使用HPACK算法对首部进行压缩，减少了首部的大小，降低了网络延迟。</p><p>HTTP/2的首部压缩机制如下图所示：</p><figure><img src="'+l+'" alt="HTTP2首部压缩" tabindex="0" loading="lazy"><figcaption>HTTP2首部压缩</figcaption></figure><p>HTTP/2的首部压缩机制包含了以下几个部分：</p><ul><li><p>首部表：HTTP/2使用首部表来存储之前发送过的首部，首部表中的每个首部都有一个索引号，索引号从1开始，每当发送一个首部时，就会在首部表中查找该首部，如果首部表中存在该首部，则使用索引号来表示该首部，如果首部表中不存在该首部，则将该首部添加到首部表中，并使用索引号来表示该首部。</p></li><li><p>静态表：HTTP/2使用静态表来存储一些常用的首部，静态表中的每个首部都有一个索引号，索引号从1开始，静态表中的首部是不可修改的。</p></li><li><p>动态表：HTTP/2使用动态表来存储之前发送过的首部，动态表中的每个首部都有一个索引号，索引号从1开始，动态表中的首部是可以修改的。</p></li><li><p>首部块：HTTP/2使用首部块来存储首部，首部块由一个索引号和一个首部值组成，索引号用于表示首部，首部值用于表示首部的值。</p></li></ul><h3 id="服务器推送" tabindex="-1"><a class="header-anchor" href="#服务器推送" aria-hidden="true">#</a> 服务器推送</h3><p>HTTP/2允许服务器主动向客户端推送非请求的资源，这样可以避免客户端重复的请求资源，提高页面加载速度。</p><p>HTTP/2的服务器推送机制如下图所示：</p><figure><img src="'+r+'" alt="HTTP2服务器推送" tabindex="0" loading="lazy"><figcaption>HTTP2服务器推送</figcaption></figure><p>HTTP/2的服务器推送机制包含了以下几个部分：</p><ul><li><p>服务器推送：HTTP/2允许服务器主动向客户端推送非请求的资源，这样可以避免客户端重复的请求资源，提高页面加载速度。</p></li><li><p>服务器推送缓存：HTTP/2使用服务器推送缓存来存储之前推送过的资源，服务器推送缓存中的每个资源都有一个索引号，索引号从1开始，每当推送一个资源时，就会在服务器推送缓存中查找该资源，如果服务器推送缓存中存在该资源，则使用索引号来表示该资源，如果服务器推送缓存中不存在该资源，则将该资源添加到服务器推送缓存中，并使用索引号来表示该资源。</p></li><li><p>服务器推送缓存表：HTTP/2使用服务器推送缓存表来存储之前推送过的资源，服务器推送缓存表中的每个资源都有一个索引号，索引号从1开始，服务器推送缓存表中的资源是不可修改的。</p></li><li><p>服务器推送缓存块：HTTP/2使用服务器推送缓存块来存储资源，服务器推送缓存块由一个索引号和一个资源值组成，索引号用于表示资源，资源值用于表示资源的值。</p></li></ul>',31),P=[h];function s(H,d){return p(),T("div",null,P)}const f=i(n,[["render",s],["__file","http2.html.vue"]]);export{f as default};
