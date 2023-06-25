import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,e as a}from"./app-811b9615.js";const l={},h=a('<h1 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> Https</h1><h2 id="https协议" tabindex="-1"><a class="header-anchor" href="#https协议" aria-hidden="true">#</a> Https协议</h2><p>HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer），是以安全为目标的HTTP通道，简单讲是HTTP的安全版。</p><p>HTTPS协议的主要作用可以分为两种：</p><ul><li>一种是建立一个信息安全通道，来保证数据传输的安全；</li><li>另一种就是确认网站的真实性。</li></ul><h2 id="https的优势" tabindex="-1"><a class="header-anchor" href="#https的优势" aria-hidden="true">#</a> Https的优势</h2><p>HTTPS的优势：</p><ul><li>通过认证，确保了数据发送到正确的服务器，没有被劫持；</li><li>加密信息，防止数据被窃取；</li><li>保护用户的隐私，增强了用户的信任感。</li></ul><h2 id="https的缺点" tabindex="-1"><a class="header-anchor" href="#https的缺点" aria-hidden="true">#</a> Https的缺点</h2><ul><li>HTTPS协议多次握手，导致页面的加载时间延长近50%，增加10%到20%的耗电；</li><li>HTTPS连接缓存不如HTTP高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响；</li><li>SSL证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用。</li></ul><h2 id="https的工作原理" tabindex="-1"><a class="header-anchor" href="#https的工作原理" aria-hidden="true">#</a> Https的工作原理</h2><p>HTTPS并不是应用层的一种新协议，而是HTTP通信接口部分用SSL和TLS协议代替，所以，只要搞懂了HTTPS的工作原理，就能够很好的理解HTTPS。</p><p>HTTPS的工作原理如下：</p><ul><li>客户使用https的url访问web服务器，要求与web服务器建立SSL连接。</li><li>web服务器收到客户端请求后，会将网站的证书信息（证书中包含公钥）传送一份给客户端。</li><li>客户端的浏览器与web服务器开始协商SSL连接的安全等级，也就是信息加密的等级。</li><li>客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站。</li><li>web服务器利用自己的私钥解密出会话密钥。</li><li>web服务器利用会话密钥加密与客户端之间的通信。</li></ul><h2 id="https的加密方式" tabindex="-1"><a class="header-anchor" href="#https的加密方式" aria-hidden="true">#</a> Https的加密方式</h2><p>HTTPS采用混合加密机制，即使用非对称加密方式，对称加密方式共同加密。</p><ul><li><p>非对称加密：非对称加密也叫公钥加密，它需要两个密钥，一个是公钥，一个是私钥。公钥与私钥是一对，如果用公钥对数据进行加密，只有用对应的私钥才能解密；如果用私钥对数据进行加密，那么只有用对应的公钥才能解密。因为加密和解密使用的是两个不同的密钥，所以这种算法叫作非对称加密算法。非对称加密算法在加密和解密的过程中，使用了不同的密钥，因此也叫作公钥加密算法。</p></li><li><p>对称加密：对称加密也叫私钥加密，它使用相同的密钥进行加密和解密。对称加密的特点是算法公开、加密和解密速度快，适合于对大数据量进行加密。常见的对称加密算法有DES、3DES、TDEA、Blowfish、RC5和IDEA等。</p></li></ul>',17),r=[h];function s(p,d){return e(),i("div",null,r)}const T=t(l,[["render",s],["__file","https.html.vue"]]);export{T as default};
