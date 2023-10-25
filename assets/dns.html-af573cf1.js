import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as h,c as d,a as r,d as e,b as n,e as a}from"./app-123ab3ff.js";const i="/assets/fe/network-dns.png",l="/assets/fe/network-dns-steps.gif",_={},c=a('<h1 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h1><h2 id="dns协议" tabindex="-1"><a class="header-anchor" href="#dns协议" aria-hidden="true">#</a> DNS协议</h2><p>DNS（Domain Name System）是一种组织成域层次结构的计算机和网络服务命名系统，它用于TCP/IP网络，它所提供的服务是用来将主机名和域名转换为IP地址的工作。</p><p>DNS协议的作用是将域名解析成IP地址，以便于计算机之间相互通信。</p><h2 id="dns原理" tabindex="-1"><a class="header-anchor" href="#dns原理" aria-hidden="true">#</a> DNS原理</h2><p>DNS的工作原理是：当用户在浏览器中输入一个域名时，浏览器会向本地DNS服务器发出请求，本地DNS服务器一般是由网络服务提供商提供的，也可以是由网络管理员搭建的。本地DNS服务器收到请求后，首先会查询它的缓存记录，如果缓存中有此条记录，就可以直接返回结果，此过程结束；如果没有，本地DNS服务器就要向根DNS服务器发出请求，根DNS服务器收到请求后会返回一个所查询域的主域名服务器的地址，本地DNS服务器收到后，继续向主域名服务器发出请求，这个过程一般会进行两次，第一次向主域名服务器请求的是所查询域的权威DNS服务器的地址，第二次向权威DNS服务器请求的是域名对应的IP地址，当本地DNS服务器收到IP地址后，就可以将其返回给用户的浏览器，用户的浏览器最后根据IP地址向web服务器发出请求，web服务器返回响应后，用户就可以看到web页面了。</p><h2 id="dns域名结构" tabindex="-1"><a class="header-anchor" href="#dns域名结构" aria-hidden="true">#</a> DNS域名结构</h2><p>DNS域名结构是一个树形结构，根域名服务器在树的顶部，它的下面是顶级域名服务器，顶级域名服务器的下面是二级域名服务器，二级域名服务器的下面是三级域名服务器，以此类推。</p><h2 id="dns域名结构示意图" tabindex="-1"><a class="header-anchor" href="#dns域名结构示意图" aria-hidden="true">#</a> DNS域名结构示意图</h2><figure><img src="'+i+'" alt="DNS域名结构示意图" tabindex="0" loading="lazy"><figcaption>DNS域名结构示意图</figcaption></figure><h2 id="dns域名结构说明" tabindex="-1"><a class="header-anchor" href="#dns域名结构说明" aria-hidden="true">#</a> DNS域名结构说明</h2>',11),p={href:"http://xn--a-uc8ale040g.root-servers.net",target:"_blank",rel:"noopener noreferrer"},f={href:"http://b.root-servers.net",target:"_blank",rel:"noopener noreferrer"},g={href:"http://c.root-servers.net",target:"_blank",rel:"noopener noreferrer"},b={href:"http://d.root-servers.net",target:"_blank",rel:"noopener noreferrer"},v={href:"http://e.root-servers.net",target:"_blank",rel:"noopener noreferrer"},S={href:"http://f.root-servers.net",target:"_blank",rel:"noopener noreferrer"},N={href:"http://g.root-servers.net",target:"_blank",rel:"noopener noreferrer"},u={href:"http://h.root-servers.net",target:"_blank",rel:"noopener noreferrer"},x={href:"http://i.root-servers.net",target:"_blank",rel:"noopener noreferrer"},k={href:"http://j.root-servers.net",target:"_blank",rel:"noopener noreferrer"},D={href:"http://k.root-servers.net",target:"_blank",rel:"noopener noreferrer"},m={href:"http://l.root-servers.net",target:"_blank",rel:"noopener noreferrer"},P={href:"http://m.root-servers.net",target:"_blank",rel:"noopener noreferrer"},I={href:"http://xn--fsqu6v.xn--coma-x29fi9ew9fzwbeez9dy70g8fct44fb2xat09f.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},w={href:"http://b.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},T={href:"http://c.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},y={href:"http://d.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},A={href:"http://e.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},j={href:"http://f.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},E={href:"http://g.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},z={href:"http://h.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},C={href:"http://i.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},M={href:"http://j.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},V={href:"http://k.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},X={href:"http://l.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},B={href:"http://m.gtld-servers.net",target:"_blank",rel:"noopener noreferrer"},L={href:"http://xn--tal-uc0ep96b.xn--comns1-df4j27gdwhf7bbf29ec03gxsc1y2gch1ady5g.tal.com",target:"_blank",rel:"noopener noreferrer"},O={href:"http://ns2.tal.com",target:"_blank",rel:"noopener noreferrer"},R=r("li",null,[r("p",null,"三级域名服务器：三级域名服务器是二级域名服务器的下一级，它的作用是指明域名对应的IP地址，三级域名服务器的地址是由二级域名服务器指定的，例如www.tal.com二级域名服务器的地址是")],-1),q=a('<h2 id="dns解析过程" tabindex="-1"><a class="header-anchor" href="#dns解析过程" aria-hidden="true">#</a> DNS解析过程</h2><figure><img src="'+l+'" alt="DNS解析过程" tabindex="0" loading="lazy"><figcaption>DNS解析过程</figcaption></figure><h3 id="_1-浏览器缓存" tabindex="-1"><a class="header-anchor" href="#_1-浏览器缓存" aria-hidden="true">#</a> 1. 浏览器缓存</h3><p>浏览器会缓存DNS记录一段时间，因此在一段时间内，不需要再次进行DNS解析。</p><h3 id="_2-系统缓存" tabindex="-1"><a class="header-anchor" href="#_2-系统缓存" aria-hidden="true">#</a> 2. 系统缓存</h3><p>如果在浏览器缓存中没有找到需要的记录，浏览器会搜索操作系统缓存中是否有这个域名对应的记录，如果有，就可以直接返回结果，如果没有，就需要进行下一步查询。</p><h3 id="_3-路由器缓存" tabindex="-1"><a class="header-anchor" href="#_3-路由器缓存" aria-hidden="true">#</a> 3. 路由器缓存</h3><p>路由器也会缓存DNS记录，如果路由器缓存中有需要的记录，就可以直接返回结果，如果没有，就需要进行下一步查询。</p><h3 id="_4-isp-dns缓存" tabindex="-1"><a class="header-anchor" href="#_4-isp-dns缓存" aria-hidden="true">#</a> 4. ISP DNS缓存</h3><p>ISP（Internet Service Provider）是互联网服务提供商，ISP DNS缓存也是DNS缓存的一种，如果ISP DNS缓存中有需要的记录，就可以直接返回结果，如果没有，就需要进行下一步查询。</p><h3 id="_5-递归搜索" tabindex="-1"><a class="header-anchor" href="#_5-递归搜索" aria-hidden="true">#</a> 5. 递归搜索</h3><p>如果以上都没有找到需要的记录，就需要进行递归搜索，递归搜索是从根域名服务器开始，依次向下搜索，直到找到需要的记录，或者搜索到叶子节点，如果搜索到叶子节点，就会返回一个错误。</p><h2 id="dns查询类型" tabindex="-1"><a class="header-anchor" href="#dns查询类型" aria-hidden="true">#</a> DNS查询类型</h2><h3 id="_1-a记录" tabindex="-1"><a class="header-anchor" href="#_1-a记录" aria-hidden="true">#</a> 1. A记录</h3><p>A记录是最基本的DNS记录类型，它将域名指向一个IP地址。</p><h3 id="_2-cname记录" tabindex="-1"><a class="header-anchor" href="#_2-cname记录" aria-hidden="true">#</a> 2. CNAME记录</h3><p>CNAME记录是将域名指向另一个域名，这个域名就是实际的域名，而另一个域名就是别名。</p><h3 id="_3-mx记录" tabindex="-1"><a class="header-anchor" href="#_3-mx记录" aria-hidden="true">#</a> 3. MX记录</h3><p>MX记录是邮件交换记录，它指向一个邮件服务器，用于处理域名的电子邮件。</p><h3 id="_4-ns记录" tabindex="-1"><a class="header-anchor" href="#_4-ns记录" aria-hidden="true">#</a> 4. NS记录</h3><p>NS记录是域名服务器记录，它指向一个域名服务器，用于处理域名解析。</p><h3 id="_5-ptr记录" tabindex="-1"><a class="header-anchor" href="#_5-ptr记录" aria-hidden="true">#</a> 5. PTR记录</h3><p>PTR记录是反向解析记录，它将IP地址指向一个域名。</p><h3 id="_6-soa记录" tabindex="-1"><a class="header-anchor" href="#_6-soa记录" aria-hidden="true">#</a> 6. SOA记录</h3><p>SOA记录是起始授权记录，它包含了域名的基本信息，如域名的主域名服务器、域名的管理员邮箱等。</p><h3 id="_7-txt记录" tabindex="-1"><a class="header-anchor" href="#_7-txt记录" aria-hidden="true">#</a> 7. TXT记录</h3><p>TXT记录是文本记录，它可以用来存储任意文本信息。</p>',27);function F(G,H){const t=o("ExternalLinkIcon");return h(),d("div",null,[c,r("ul",null,[r("li",null,[r("p",null,[e("根域名服务器：根域名服务器是DNS服务器的顶级，它的作用是指明顶级域名服务器的地址，根域名服务器的地址是固定的，一般有13个，"),r("a",p,[e("分别是a.root-servers.net"),n(t)]),e("、"),r("a",f,[e("b.root-servers.net"),n(t)]),e("、"),r("a",g,[e("c.root-servers.net"),n(t)]),e("、"),r("a",b,[e("d.root-servers.net"),n(t)]),e("、"),r("a",v,[e("e.root-servers.net"),n(t)]),e("、"),r("a",S,[e("f.root-servers.net"),n(t)]),e("、"),r("a",N,[e("g.root-servers.net"),n(t)]),e("、"),r("a",u,[e("h.root-servers.net"),n(t)]),e("、"),r("a",x,[e("i.root-servers.net"),n(t)]),e("、"),r("a",k,[e("j.root-servers.net"),n(t)]),e("、"),r("a",D,[e("k.root-servers.net"),n(t)]),e("、"),r("a",m,[e("l.root-servers.net"),n(t)]),e("、"),r("a",P,[e("m.root-servers.net"),n(t)]),e("。")])]),r("li",null,[r("p",null,[e("顶级域名服务器：顶级域名服务器是根域名服务器的下一级，它的作用是指明二级域名服务器的地址，顶级域名服务器的地址是固定的，"),r("a",I,[e("例如.com顶级域名服务器的地址是a.gtld-servers.net"),n(t)]),e("、"),r("a",w,[e("b.gtld-servers.net"),n(t)]),e("、"),r("a",T,[e("c.gtld-servers.net"),n(t)]),e("、"),r("a",y,[e("d.gtld-servers.net"),n(t)]),e("、"),r("a",A,[e("e.gtld-servers.net"),n(t)]),e("、"),r("a",j,[e("f.gtld-servers.net"),n(t)]),e("、"),r("a",E,[e("g.gtld-servers.net"),n(t)]),e("、"),r("a",z,[e("h.gtld-servers.net"),n(t)]),e("、"),r("a",C,[e("i.gtld-servers.net"),n(t)]),e("、"),r("a",M,[e("j.gtld-servers.net"),n(t)]),e("、"),r("a",V,[e("k.gtld-servers.net"),n(t)]),e("、"),r("a",X,[e("l.gtld-servers.net"),n(t)]),e("、"),r("a",B,[e("m.gtld-servers.net"),n(t)]),e("。")])]),r("li",null,[r("p",null,[e("二级域名服务器：二级域名服务器是顶级域名服务器的下一级，它的作用是指明三级域名服务器的地址，二级域名服务器的地址是由顶级域名服务器指定的，"),r("a",L,[e("例如tal.com顶级域名服务器的地址是ns1.tal.com"),n(t)]),e("、"),r("a",O,[e("ns2.tal.com"),n(t)]),e("。")])]),R]),q])}const Q=s(_,[["render",F],["__file","dns.html.vue"]]);export{Q as default};
