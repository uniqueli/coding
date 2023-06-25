import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as a,a as e,d as n,b as s,e as o}from"./app-2386b4e8.js";const d={},c=o(`<h1 id="node输出日志的正确姿势" tabindex="-1"><a class="header-anchor" href="#node输出日志的正确姿势" aria-hidden="true">#</a> Node输出日志的正确姿势</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>每个程序员都喜欢在有问题的代码中插入一些日志的方法来帮助调试程序，比如System.out.println或console.log。解决后，就会将这些语句删除，周而复始。</p><p>但是通过系统日志输出的日志格式都是这种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// output
console.log(&quot;log&quot;); // log
console.info(&quot;message&quot;); // message
console.warn(&quot;Warning&quot;);// warning
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在想象一下，如果你在后端排查问题时，你有数百条这样的信息。这样的日志不仅很难知道消息级别或消息记录的日期，而且过滤和排序日志也是一项艰巨的任务。</p><p>我们排查问题时，更期望看到这样的日志：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;level&quot;:&quot;error&quot;,&quot;message&quot;:&quot;Error message&quot;,&quot;timestamp&quot;:&quot;2022-09-20T11:39:33.953Z&quot;}

{&quot;level&quot;:&quot;warn&quot;,&quot;message&quot;:&quot;Warning message&quot;,&quot;timestamp&quot;:&quot;2022-09-20T11:39:33.957Z&quot;}

{&quot;level&quot;:&quot;info&quot;,&quot;message&quot;:&quot;Info message&quot;,&quot;timestamp&quot;:&quot;2022-09-20T11:39:33.957Z&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>日志API就是为了解决这个问题而设计的。日志API的优点：</p><ul><li>可以很容易地取消全部日志记录，或者仅仅取消某个级别以下的日志，而且可以很容易地再次打开日志开关。</li><li>可以很简单的禁止日志记录，因此，将这些日志代码留在程序中的开销很小。</li><li>日志记录可以被定向到不同的处理器，如在控制台、文件等等。</li><li>日志记录器和处理器都可以记录进行过滤，过滤器可以根据过滤器实现指定的标准丢弃那些无用的记录。</li><li>日志记录可以采用不同的方式格式化，例如：纯文本或JSON。</li><li>应用程序可以使用多个日志记录器。</li><li>日志系统的配置由配置文件控制。</li></ul><p>在 Node.js 应用中进行日志记录是非常重要的，因为它可以帮助我们跟踪应用程序中的问题和错误。接下来介绍 一下Node.js 的日志记录技术。</p><h2 id="使用-winston-进行日志记录" tabindex="-1"><a class="header-anchor" href="#使用-winston-进行日志记录" aria-hidden="true">#</a> 使用 Winston 进行日志记录</h2><p>Winston是一个流行的、功能丰富的、灵活的Node.js日志库。它使用的默认格式是JSON，但可以配置向多个存储设备中发送日志，目前每周下载量接近1千万。</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae323b0943204696a96a592e5d4ce625~tplv-k3u1fbpfcp-zoom-1.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="安装和使用-winston" tabindex="-1"><a class="header-anchor" href="#安装和使用-winston" aria-hidden="true">#</a> 安装和使用 Winston</h3><p>要使用 Winston，首先需要安装它。可以使用 npm 安装 Winston：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install winston
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后，在应用程序中引入 Winston：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const winston = require(&#39;winston&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在可以创建一个 Winston 实例，并开始记录日志。以下是一个示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const winston = require(&#39;winston&#39;);
const logger = winston.createLogger({   
  level: &#39;info&#39;,   
  format: winston.format.json(),   
  transports: [     
    new winston.transports.Console(),     
    new winston.transports.File({ 
      filename: &#39;error.log&#39;, level: &#39;error&#39; 
    })  
  ]
}); 
logger.info(&#39;Hello, world!&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，创建了一个名为 <strong>logger</strong> 的 Winston 实例。指定了日志级别为 <strong>info</strong>，表示只记录等级为 info 或更高的日志消息。我们还指定了一个 <strong>json</strong> 格式化器，以便记录格式化的 JSON 日志消息。定义了两个传输器，一个将日志消息记录到控制台，另一个将错误日志消息记录到名为 <strong>error.log</strong> 的文件中。</p><h3 id="winston-的日志级别" tabindex="-1"><a class="header-anchor" href="#winston-的日志级别" aria-hidden="true">#</a> Winston 的日志级别</h3><p>Winston 支持多个日志级别，可以根据日志消息的严重程度选择不同的日志级别来记录。Winston 的日志级别从高到低分别为：</p><ul><li>error：表示发生了错误</li><li>warn：表示警告性的信息</li><li>info：表示常规信息</li><li>verbose：表示详细信息</li><li>debug：表示调试信息</li><li>silly：表示无关紧要的信息</li></ul><h3 id="winston-的格式化器" tabindex="-1"><a class="header-anchor" href="#winston-的格式化器" aria-hidden="true">#</a> Winston 的格式化器</h3><p>Winston 的格式化器可以帮助我们格式化日志消息，以便更好地组织和分析日志数据。Winston 提供了多个内置的格式化器，例如 <strong>json</strong>、<strong>simple</strong>、<strong>prettyPrint</strong> 等。我们也可以自定义格式化器，根据自己的需求来记录日志数据。</p><p>以下是一个使用 <strong>json</strong> 格式化器记录日志的示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const winston = require(&#39;winston&#39;); 
const logger = winston.createLogger({   
  level: &#39;info&#39;,   
  format: winston.format.json(),   
  transports: [new winston.transports.Console()] 
}); 
logger.info({ message: &#39;Hello, world!&#39;, user: &#39;Alice&#39; });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="winston-的传输器" tabindex="-1"><a class="header-anchor" href="#winston-的传输器" aria-hidden="true">#</a> Winston 的传输器</h3><p>Winston 支持多个传输器，可以将日志消息记录到不同的目标中，例如控制台、文件、数据库、syslog 等。以下是一个将日志消息记录到文件中的示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const winston = require(&#39;winston&#39;); 
const logger = winston.createLogger({   
  level: &#39;info&#39;,   
  format: winston.format.simple(),   
  transports: [
    new winston.transports.File({ filename: &#39;app.log&#39; })
  ] 
}); 
logger.info(&#39;Hello, world!&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们使用 <strong>File</strong> 传输器将日志消息记录到名为 <strong>app.log</strong> 的文件中。我们设置日志级别为 <strong>info</strong>，只记录等级为 <strong>info</strong> 或更高的日志消息。</p><p>除了输出到文件中，Winston还支持输出控制台、http请求以及流的方式。</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fcce801df826469b8b1ae6603a8b7296~tplv-k3u1fbpfcp-zoom-1.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们也可以自定义输出的方式，比如输出到邮件、通过接口消息通知等等。</p><h2 id="winston的实践" tabindex="-1"><a class="header-anchor" href="#winston的实践" aria-hidden="true">#</a> Winston的实践</h2>`,37),u=e("strong",null,"console.log",-1),g={href:"http://logger.info",target:"_blank",rel:"noopener noreferrer"},v=e("strong",null,"console.log",-1),m={href:"http://logger.info",target:"_blank",rel:"noopener noreferrer"},p=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const winston = require(&#39;winston&#39;);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File()
  ]
});

// 将 console.log 绑定到 logger.info 方法
console.log = logger.info.bind(logger); 
// 使用 console.log 记录日志消息
console.log(&#39;Hello, Winston!&#39;);
console.log(&#39;This is a log message.&#39;);
 
// error 也可以绑定到logger上，但是建议输出file时，指定新的文件名，方便后续的日志查看。
console.error = logger.error.bind(logger);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不在需要日志记录时，可以直接设置level为off，就可以停止日志的记录。</p><h3 id="接入es" tabindex="-1"><a class="header-anchor" href="#接入es" aria-hidden="true">#</a> 接入es</h3><p>日志输出和日志格式解决之后，为了方便检索和更快的排查问题，可以将日志接入es。</p><p>下面是接入es后，通过kibana查看的结果：</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/344769c3ffa84ed9b1116352436bc7d4~tplv-k3u1fbpfcp-zoom-1.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将日志接入 Elasticsearch (ES) 的好处：</p><ol><li>快速检索和分析：ES 是一种基于搜索引擎的分布式数据存储和分析引擎，它提供了一种高效的方式来存储和搜索大量的结构化和非结构化数据。通过将日志接入 ES，我们可以使用 ES 强大的搜索和聚合功能来快速检索和分析日志数据。</li><li>实时监控：ES 支持实时数据索引和搜索，因此可以实时监控应用程序和系统的状态和性能。通过将日志接入 ES，我们可以实时监控应用程序和系统的日志，并在出现异常或错误时立即采取行动。</li><li>可视化和报告：ES 提供了一种灵活和强大的可视化和报告工具，可以将日志数据可视化为图表、仪表板和报告等形式。通过将日志接入 ES，我们可以使用这些工具来生成可视化报告，并帮助我们更好地理解和优化应用程序和系统的性能。</li></ol><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><ul><li>日志级别，不要都使用info来使用，要区分不同的日志级别。</li><li>日志的打印方式：<strong>同步和异步</strong>。</li><li>日志体量的大小：LOG系统就是直接写磁盘文件，既然写磁盘文件就牵扯到磁盘IO，而磁盘IO跟内存读写有一个数量级的性能差别。</li></ul>`,10);function b(h,f){const i=t("ExternalLinkIcon");return r(),a("div",null,[c,e("p",null,[n("在实际使用过程中，我比较喜欢将console.log进行一次封装。将 "),u,n(" 绑定到 "),e("strong",null,[e("a",g,[n("logger.info"),s(i)])]),n(" 方法。每次调用 "),v,n(" 时，实际上是在调用 "),e("strong",null,[e("a",m,[n("logger.info"),s(i)])]),n(" 方法。因此，日志消息将通过Winston的Console传输器发送到标准控制台中和文件中。")]),p])}const q=l(d,[["render",b],["__file","nodelogs.html.vue"]]);export{q as default};
