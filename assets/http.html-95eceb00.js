import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,f as a}from"./app-48000933.js";const t={},d=a(`<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><h2 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> Http协议</h2><p>HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写，是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。</p><p>HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。</p><p>HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。</p><p>HTTP协议工作于客户端-服务端架构为上。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。Web服务器根据接收到的请求后，向客户端发送响应信息。</p><p>HTTP默认端口号为80，但是你也可以改为8080或者其他端口。</p><h2 id="http特点" tabindex="-1"><a class="header-anchor" href="#http特点" aria-hidden="true">#</a> HTTP特点</h2><ul><li><p>简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。</p></li><li><p>灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。</p></li><li><p>无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。</p></li><li><p>无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。</p></li></ul><h2 id="http报文" tabindex="-1"><a class="header-anchor" href="#http报文" aria-hidden="true">#</a> HTTP报文</h2><p>HTTP报文是HTTP协议交互的信息载体。客户端的HTTP请求报文和服务器的HTTP响应报文都是由开始行（request line/status line）、首部（header）、主体（body）三部分组成。</p><h3 id="请求报文" tabindex="-1"><a class="header-anchor" href="#请求报文" aria-hidden="true">#</a> 请求报文</h3><p>请求报文由请求行、请求头部、空行和请求数据4个部分组成。</p><ul><li>请求行以一个方法符号开头，以空格分开，后面跟着请求的URI和协议的版本，格式如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;method&gt; &lt;request-URL&gt; &lt;version&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求头部用来说明服务器要使用的附加信息，格式如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;headers&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>空行是用来分开头部和主体的，格式如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CRLF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求数据也叫主体，可以添加任意的其他数据，格式如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;entity-body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="响应报文" tabindex="-1"><a class="header-anchor" href="#响应报文" aria-hidden="true">#</a> 响应报文</h3><p>响应报文由状态行、消息报头、空行和响应正文4个部分组成。</p><ul><li>状态行由HTTP协议版本号， 状态码， 状态消息 三部分组成，格式如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;version&gt; &lt;status&gt; &lt;reason-phrase&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>消息报头用来说明客户端要使用的一些附加信息，格式如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;headers&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>空行是用来分开消息报头和响应正文的，格式如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CRLF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>响应正文就是服务器返回的资源的内容，格式由<code>Content-Type</code>头来确定。</li></ul><h2 id="http方法" tabindex="-1"><a class="header-anchor" href="#http方法" aria-hidden="true">#</a> HTTP方法</h2><p>HTTP/1.1协议中共定义了八种方法（有时也叫“动作”），来表明Request-URI指定的资源不同的操作方式。</p><ul><li><p>OPTIONS：返回服务器针对特定资源所支持的HTTP请求方法。也可以利用向Web服务器发送&#39;*&#39;的请求来测试服务器的功能性。</p></li><li><p>HEAD：向服务器索要与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以在不必传输整个响应内容的情况下，就可以获取包含在响应消息头中的元信息。</p></li><li><p>GET：向特定的资源发出请求。注意：GET方法不应当被用于产生“副作用”的操作中，例如在Web Application中。其中一个原因是GET可能会被网络蜘蛛等随意访问。</p></li><li><p>POST：向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。</p></li><li><p>PUT：向指定资源位置上传其最新内容。</p></li><li><p>DELETE：请求服务器删除Request-URI所标识的资源。</p></li><li><p>TRACE：回显服务器收到的请求，主要用于测试或诊断。</p></li><li><p>CONNECT：HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。</p></li></ul><h2 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码" aria-hidden="true">#</a> HTTP状态码</h2><p>HTTP状态码（HTTP Status Code）是用以表示网页服务器HTTP响应状态的3位数字代码。</p><p>它由RFC 2616规范定义的，并得到RFC 2518、RFC 2817、RFC 2295、RFC 2774等规范扩展。</p><p>HTTP状态码的英文为HTTP Status Code。</p><p>HTTP状态码的第一个数字代表当前HTTP响应的类型：</p><ul><li>1xx消息——请求已被服务器接收，继续处理</li><li>2xx成功——请求已成功被服务器接收、理解、并接受</li><li>3xx重定向——需要后续操作才能完成这一请求</li><li>4xx请求错误——请求含有词法错误或者无法被执行</li><li>5xx服务器错误——服务器在处理某个正确请求时发生错误</li></ul><h2 id="http缓存" tabindex="-1"><a class="header-anchor" href="#http缓存" aria-hidden="true">#</a> HTTP缓存</h2><h3 id="缓存位置" tabindex="-1"><a class="header-anchor" href="#缓存位置" aria-hidden="true">#</a> 缓存位置</h3><ul><li>Service Worker</li><li>Memory Cache</li><li>Disk Cache</li><li>Push Cache</li></ul><h3 id="缓存策略" tabindex="-1"><a class="header-anchor" href="#缓存策略" aria-hidden="true">#</a> 缓存策略</h3><ul><li><p>强缓存</p><ul><li><p>Expires</p><p>Expires是HTTP/1.0的产物，表示资源会在<code>Expires</code>指定的时间之前一直有效，即使请求命中缓存也会重新请求。</p></li><li><p>Cache-Control</p><p>Cache-Control是HTTP/1.1的产物，优先级高于Expires，表示资源会在<code>Cache-Control</code>指定的时间之前一直有效，可以在请求命中缓存时不重新请求。</p><ul><li>public：所有内容都将被缓存（客户端和代理服务器都可缓存）</li><li>private：内容只缓存到私有缓存中（仅客户端可以缓存，代理服务器不可缓存）</li><li>no-cache：客户端缓存内容，是否使用缓存则需要经过协商缓存来验证决定</li><li>no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存</li><li>max-age=xxx (xxx is numeric)：缓存内容将在 xxx 秒后失效</li></ul></li></ul></li><li><p>协商缓存</p><ul><li><p>Last-Modified</p><p><code>Last-Modified</code>表示本地文件最后修改日期，<code>If-Modified-Since</code>表示客户端最后修改日期，当本地文件最后修改日期大于客户端的时候，说明文件有修改，返回200，否则返回304。</p></li><li><p>ETag</p><p><code>ETag</code>表示文件内容的唯一标识（生成规则由服务器决定），<code>If-None-Match</code>表示客户端文件内容的唯一标识，当两者不一致的时候，说明文件有修改，返回200，否则返回304。</p></li></ul></li></ul>`,44),r=[d];function n(s,p){return i(),l("div",null,r)}const u=e(t,[["render",n],["__file","http.html.vue"]]);export{u as default};