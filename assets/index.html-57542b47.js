import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c,a as n,d as s,b as r,e}from"./app-811b9615.js";const o={},t=e('<h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1><h2 id="什么是node-js" tabindex="-1"><a class="header-anchor" href="#什么是node-js" aria-hidden="true">#</a> 什么是Node.js</h2><p>Node.js是一个基于Chrome V8引擎的JavaScript运行环境，Node.js使用了一个事件驱动、非阻塞式I/O的模型，使其轻量又高效。</p><h2 id="node-js的特点" tabindex="-1"><a class="header-anchor" href="#node-js的特点" aria-hidden="true">#</a> Node.js的特点</h2><ul><li>事件驱动</li><li>非阻塞I/O</li><li>轻量和高效</li></ul><h2 id="node-js的应用场景" tabindex="-1"><a class="header-anchor" href="#node-js的应用场景" aria-hidden="true">#</a> Node.js的应用场景</h2><ul><li>Web服务器</li><li>命令行工具</li><li>游戏服务器</li><li>桌面应用程序</li></ul><h2 id="node-js的优缺点" tabindex="-1"><a class="header-anchor" href="#node-js的优缺点" aria-hidden="true">#</a> Node.js的优缺点</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>事件驱动、异步编程，为网络服务而设计</li><li>轻量、高效</li><li>单线程、单进程</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>不适合CPU密集型应用</li><li>可靠性低，一旦代码某个环节崩溃，整个系统都崩溃</li><li>只支持单核CPU，不能充分利用多核CPU服务器</li></ul><h2 id="node-js的安装" tabindex="-1"><a class="header-anchor" href="#node-js的安装" aria-hidden="true">#</a> Node.js的安装</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>',14),u={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,"安装Node.js",-1),m=e(`<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><ul><li>使用包管理器安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Debian or Ubuntu</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs

<span class="token comment"># CentOS, Fedora, or RHEL</span>
$ <span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3><ul><li>使用包管理器安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ brew <span class="token function">install</span> <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用Node.js版本管理工具安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装nvm</span>
$ <span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token comment"># 安装Node.js</span>
$ nvm <span class="token function">install</span> <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node-js的版本管理" tabindex="-1"><a class="header-anchor" href="#node-js的版本管理" aria-hidden="true">#</a> Node.js的版本管理</h2><h3 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h3><ul><li>安装nvm</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用nvm安装Node.js</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装最新版本</span>
$ nvm <span class="token function">install</span> <span class="token function">node</span>

<span class="token comment"># 安装指定版本</span>
$ nvm <span class="token function">install</span> <span class="token number">12.18</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用nvm切换Node.js版本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到最新版本</span>
$ nvm use <span class="token function">node</span>

<span class="token comment"># 切换到指定版本</span>
$ nvm use <span class="token number">12.18</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用nvm卸载Node.js</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载最新版本</span>
$ nvm uninstall <span class="token function">node</span>

<span class="token comment"># 卸载指定版本</span>
$ nvm uninstall <span class="token number">12.18</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> n</h3><ul><li>安装n</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用n安装Node.js</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装最新版本</span>
$ n latest

<span class="token comment"># 安装指定版本</span>
$ n <span class="token number">12.18</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用n切换Node.js版本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到最新版本</span>
$ n latest

<span class="token comment"># 切换到指定版本</span>
$ n <span class="token number">12.18</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用n卸载Node.js</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载最新版本</span>
$ n <span class="token function">rm</span> latest

<span class="token comment"># 卸载指定版本</span>
$ n <span class="token function">rm</span> <span class="token number">12.18</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function h(p,b){const a=l("ExternalLinkIcon");return d(),c("div",null,[t,n("ul",null,[n("li",null,[s("下载安装包："),n("a",u,[s("https://nodejs.org/en/download/"),r(a)])]),v]),m])}const f=i(o,[["render",h],["__file","index.html.vue"]]);export{f as default};
