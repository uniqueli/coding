import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-48000933.js";const t="/assets/fe/websocket-frame.png",o={},p=e('<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> websocket</h1><h2 id="websocket协议" tabindex="-1"><a class="header-anchor" href="#websocket协议" aria-hidden="true">#</a> websocket协议</h2><p>WebSocket是一种网络通信协议，很多高级功能都需要它，例如浏览器与服务器之间的实时通信。</p><p>WebSocket协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。</p><p>WebSocket协议和HTTP协议都是应用层协议，都基于TCP协议。但是，WebSocket协议是一种双向通信协议，在建立连接后，WebSocket服务器和Browser/Client Agent都能主动向对方发送或接收数据，就像Socket一样；而HTTP协议是一种单向通信协议，只能由Client Agent向WebSocket服务器发送请求，WebSocket服务器不能主动向Client Agent发送数据，但是WebSocket服务器可以向Client Agent发送HTTP响应。</p><p>它的最大特点就是：服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。</p><p>WebSocket协议在建立握手时，数据是通过HTTP传输的，但是建立之后，在真正进行数据传输时，是不需要HTTP协议的，因此，WebSocket是一个独立的协议。</p><h2 id="websocket的优势" tabindex="-1"><a class="header-anchor" href="#websocket的优势" aria-hidden="true">#</a> websocket的优势</h2><p>WebSocket协议相比传统的HTTP协议有如下优势：</p><ul><li>支持双向通信，实时性更强；</li><li>较少的控制开销。连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有2~10字节（取决于数据包长度），客户端到服务端的的话，需要加上额外的4字节的掩码。而HTTP协议每次通信都需要携带完整的头部；</li><li>支持扩展。ws协议定义了扩展，用户可以扩展协议，或者实现自定义的子协议（例如支持自定义压缩算法等）；</li><li>更好的压缩效果。相比HTTP协议，Websocket协议中包头的数据量小很多；</li><li>支持更多类型的数据。WebSocket定义了二进制帧，相比HTTP协议传输数据类型更多样化。</li></ul><h2 id="websocket的缺点" tabindex="-1"><a class="header-anchor" href="#websocket的缺点" aria-hidden="true">#</a> websocket的缺点</h2><ul><li>需要服务器支持。因为需要服务器进行协议升级处理，所以需要服务器支持WebSocket协议；</li><li>连接不能穿透防火墙。因为使用的是TCP协议，所以连接不能穿透防火墙；</li><li>数据包头部比较大。每次通信都需要携带完整的头部，带宽占用较多。</li></ul><h2 id="websocket的应用场景" tabindex="-1"><a class="header-anchor" href="#websocket的应用场景" aria-hidden="true">#</a> websocket的应用场景</h2><ul><li>聊天室</li><li>网络游戏</li><li>在线教育</li><li>在线客服</li><li>实时数据推送</li><li>在线视频/音频会议</li><li>在线多人协作开发</li><li>在线多人实时协作办公</li></ul><h2 id="websocket的使用" tabindex="-1"><a class="header-anchor" href="#websocket的使用" aria-hidden="true">#</a> websocket的使用</h2><h3 id="建立连接" tabindex="-1"><a class="header-anchor" href="#建立连接" aria-hidden="true">#</a> 建立连接</h3><p>WebSocket协议本质上是一个基于TCP的协议，WebSocket连接在建立时需要借助HTTP协议，连接建立好后，底层的TCP连接就与HTTP无关了。</p><p>WebSocket连接的建立过程如下：</p><ol><li><p>客户端向服务器发起一个HTTP请求，这个请求和通常的HTTP请求不同，包含了一些附加头信息，其中附加头信息&quot;Upgrade: WebSocket&quot;表明这是一个申请协议升级的HTTP请求，服务器端解析这些附加头信息，如果同意协议升级，则返回101状态码表示成功，表示协议已经升级，这时候TCP连接就升级为WebSocket连接了，后续的数据交换都按照WebSocket协议来进行，如果不同意协议升级，则返回4xx或5xx的状态码，表示协议升级失败，连接会按照HTTP协议来进行；</p></li><li><p>客户端和服务器端都可以在任意时刻发送数据，数据以帧（Frame）为单位传输，每个帧包含一定的数据以及标识信息，如数据是否被加密过、是否为控制帧等。</p></li></ol><h3 id="数据帧" tabindex="-1"><a class="header-anchor" href="#数据帧" aria-hidden="true">#</a> 数据帧</h3><p>WebSocket的不同类型的帧负责不同的功能，帧的类型如下：</p><ul><li>0x0：表示附加数据帧；</li><li>0x1：表示文本数据帧；</li><li>0x2：表示二进制数据帧；</li><li>0x3-7：保留的数据帧类型；</li><li>0x8：表示连接关闭；</li><li>0x9：表示ping；</li><li>0xA：表示pong；</li><li>0xB-F：保留的控制帧类型。</li></ul><h3 id="数据帧的格式" tabindex="-1"><a class="header-anchor" href="#数据帧的格式" aria-hidden="true">#</a> 数据帧的格式</h3><p>WebSocket协议定义了数据帧的格式，如下图所示：</p><figure><img src="'+t+`" alt="WebSocket数据帧格式" tabindex="0" loading="lazy"><figcaption>WebSocket数据帧格式</figcaption></figure><p>数据帧的格式如下：</p><ul><li>FIN：1位，表示这是消息的最后一个数据帧；</li><li>RSV1, RSV2, RSV3：各1位，保留字段，暂时不使用；</li><li>Opcode：4位，表示数据帧的类型，如果是0x0表示附加数据帧，如果是0x1表示文本数据帧，如果是0x2表示二进制数据帧，如果是0x8表示连接关闭，如果是0x9表示ping，如果是0xA表示pong；</li><li>Mask：1位，表示是否要对数据进行掩码处理，从客户端向服务器端发送数据时，需要对数据进行掩码处理，从服务器端向客户端发送数据时，不需要对数据进行掩码处理；</li><li>Payload length：7位，表示数据的长度，如果是0~125，表示数据的长度，如果是126，表示后面2个字节表示数据的长度，如果是127，表示后面8个字节表示数据的长度；</li><li>Masking-key：4字节，如果Mask为1，表示掩码，否则为0；</li><li>Payload data：数据，长度等于Payload length。</li></ul><h3 id="websocket的使用-1" tabindex="-1"><a class="header-anchor" href="#websocket的使用-1" aria-hidden="true">#</a> WebSocket的使用</h3><p>WebSocket的使用非常简单，只需要通过JavaScript的WebSocket对象即可，WebSocket对象的使用如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建WebSocket对象</span>
<span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&quot;ws://localhost:8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听WebSocket的打开事件</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket已经打开&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 监听WebSocket的关闭事件</span>

ws<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket已经关闭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 监听WebSocket的错误事件</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket发生错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 监听WebSocket的消息事件</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket接收到消息：&quot;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 向WebSocket发送消息</span>
ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello WebSocket&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="websocket的实现" tabindex="-1"><a class="header-anchor" href="#websocket的实现" aria-hidden="true">#</a> WebSocket的实现</h3><p>WebSocket的实现非常简单，只需要使用Java的ServerSocket即可，ServerSocket的使用如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建ServerSocket对象</span>
<span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听客户端的连接</span>
<span class="token class-name">Socket</span> socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取输入流</span>
<span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取输出流</span>
<span class="token class-name">OutputStream</span> outputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 读取数据</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> length <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到数据：&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 发送数据</span>
outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;Hello WebSocket&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 关闭连接</span>
socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),c=[p];function i(l,u){return s(),a("div",null,c)}const d=n(o,[["render",i],["__file","websocket.html.vue"]]);export{d as default};
