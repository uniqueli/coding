import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c as r,a as e,b as l,d as i,e as s}from"./app-ea1bb147.js";const c={},v=s('<h1 id="圈复杂度介绍" tabindex="-1"><a class="header-anchor" href="#圈复杂度介绍" aria-hidden="true">#</a> 圈复杂度介绍</h1><p>圈复杂度(Cyclomatic complexity)是一种代码复杂度的衡量标准，在1976年由Thomas J. McCabe, Sr. 提出。在软件测试的概念里，圈复杂度用来衡量一个模块判定结构的复杂程度，数量上表现为线性无关的路径条数，即合理的预防错误所需测试的最少路径条数。圈复杂度大说明程序代码可能质量低且难于测试和维护，根据经验：</p><p><strong>程序的可能错误和高的圈复杂度有着很大关系。</strong></p><h1 id="圈复杂度衡量标准" tabindex="-1"><a class="header-anchor" href="#圈复杂度衡量标准" aria-hidden="true">#</a> 圈复杂度衡量标准</h1><table><thead><tr><th><strong>圈复杂度</strong></th><th><strong>代码状况</strong></th><th><strong>可测性</strong></th><th><strong>维护成本</strong></th></tr></thead><tbody><tr><td>0 - 5</td><td>良好</td><td>高</td><td>低</td></tr><tr><td>5 - 10</td><td>良好</td><td>中等</td><td>中等</td></tr><tr><td>10 - 20</td><td>较差</td><td>低</td><td>高</td></tr><tr><td>20 - 30</td><td>差</td><td>很低</td><td>很高</td></tr></tbody></table><h1 id="圈复杂度计算" tabindex="-1"><a class="header-anchor" href="#圈复杂度计算" aria-hidden="true">#</a> 圈复杂度计算</h1><h2 id="计算公式" tabindex="-1"><a class="header-anchor" href="#计算公式" aria-hidden="true">#</a> 计算公式</h2><h4 id="计算公式1" tabindex="-1"><a class="header-anchor" href="#计算公式1" aria-hidden="true">#</a> 计算公式1</h4><p>V(G)=e-n+2p。其中，e表示控制流图中边的数量，n表示控制流图中节点的数量，p图的连接组件数目（图的组件数是相连节点的最大集合）。因为控制流图都是连通的，所以p为1.</p>',9),u={href:"https://baike.baidu.com/pic/%E5%9C%88%E5%A4%8D%E6%9D%82%E5%BA%A6/828737/0/0ff41bd5ad6eddc41f7406cd3bdbb6fd52663370?fr=lemma&fromModule=lemma_content-image&ct=single",target:"_blank",rel:"noopener noreferrer"},m=e("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d8027a351664e65ace647a8f2544538~tplv-k3u1fbpfcp-zoom-1.image",alt:"",tabindex:"0",loading:"lazy"},null,-1),o=e("figcaption",null,null,-1),b=e("h4",{id:"计算公式2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#计算公式2","aria-hidden":"true"},"#"),i(" 计算公式2")],-1),p=e("p",null,"V(G)=区域数=判定节点数+1。其实，圈复杂度的计算还有更直观的方法，因为圈复杂度所反映的是“判定条件”的数量，所以圈复杂度实际上就是等于判定节点的数量再加上1，也即控制流图的区域数。",-1),g=e("p",null,"对于多分支的CASE结构或IF-ELSEIF-ELSE结构，统计判定节点的个数时需要特别注意一点，要求必须统计全部实际的判定节点数，也即每个ELSEIF语句，以及每个CASE语句，都应该算为一个判定节点。",-1),h={href:"https://baike.baidu.com/pic/%E5%9C%88%E5%A4%8D%E6%9D%82%E5%BA%A6/828737/0/9213b07eca806538d31d162595dda144ad348215?fr=lemma&fromModule=lemma_content-image&ct=single",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fca4ba0332ee4ac290057259b3808658~tplv-k3u1fbpfcp-zoom-1.image",alt:"",tabindex:"0",loading:"lazy"},null,-1),x=e("figcaption",null,null,-1),y=e("h4",{id:"计算公式3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#计算公式3","aria-hidden":"true"},"#"),i(" 计算公式3")],-1),S=e("p",null,"计算公式3：V(G)=R。其中R代表平面被控制流图划分成的区域数。",-1),_={href:"https://baike.baidu.com/pic/%E5%9C%88%E5%A4%8D%E6%9D%82%E5%BA%A6/828737/0/8718367adab44aeda89c0cd2b11c8701a18bfb32?fr=lemma&fromModule=lemma_content-image&ct=single",target:"_blank",rel:"noopener noreferrer"},k=e("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/156ef5547f1b483789d09eb1a469f63b~tplv-k3u1fbpfcp-zoom-1.image",alt:"",loading:"lazy"},null,-1),E={href:"https://baike.baidu.com/item/%E5%9B%BE%E8%AE%A1%E7%AE%97/23685852?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"},A=s(`<p><strong>推荐使用第一种计算方法。</strong></p><h2 id="圈复杂度示例" tabindex="-1"><a class="header-anchor" href="#圈复杂度示例" aria-hidden="true">#</a> 圈复杂度示例</h2><p>典型的控制流程，如if-else，While，until和正常的流程顺序：</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8b31e9b929c4e8fb1532854f7ca2969~tplv-k3u1fbpfcp-zoom-1.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>圈复杂度的计算还有更直观的方法，因为圈复杂度所反映的是“判定条件”的数量，所以圈复杂度实际上就是等于判定节点的数量再加上1，也即控制流图的区域数，对应的计算公式为：</p><p><em>V (G) = P + 1</em></p><ol><li>if语句</li><li>while语句</li><li>for语句</li><li>case语句</li><li>catch语句</li><li>and和or布尔操作</li><li>?:三元运算符</li></ol><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sort(A: number[]): void {
  let i = 0
  const n = 4
  let j = 0
  while (i &lt; n - 1) {
      j = i + 1
      while (j &lt; n) {
          if (A[i] &lt; A[j]) {
              const temp = A[i]
              A[i] = A[j]
              A[j] = temp
          }
      }
      i = i + 1
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用点边计算法绘出控制流图：</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/841704d4329e40f283c799ee6e94a350~tplv-k3u1fbpfcp-zoom-1.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其圈复杂度为：V(G) = 9 - 7 + 2 = 4</p><h1 id="圈复杂度的检测工具" tabindex="-1"><a class="header-anchor" href="#圈复杂度的检测工具" aria-hidden="true">#</a> 圈复杂度的检测工具</h1><table><thead><tr><th><strong>项目</strong></th><th><strong>sonarqube</strong></th><th><strong>eslint</strong></th><th><strong>codemetrics</strong></th></tr></thead><tbody><tr><td>圈复杂度度量标准</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>检测效率</td><td>高</td><td>中</td><td>低</td></tr><tr><td>精度</td><td>高</td><td>中</td><td>低</td></tr><tr><td>支持的编程语言</td><td>多</td><td>一般</td><td>一般</td></tr><tr><td>对圈复杂度高的代码的指导性</td><td>高</td><td>中</td><td>低</td></tr></tbody></table><h2 id="sonarqube" tabindex="-1"><a class="header-anchor" href="#sonarqube" aria-hidden="true">#</a> sonarqube</h2><ol><li>安装SonarQube服务器</li></ol><p>SonarQube服务器可以通过下载和安装来获取，也可以在云上进行部署。你可以从SonarQube的官方网站上下载并安装相应的版本。安装完成后，需要启动SonarQube服务器。</p><ol start="2"><li>配置SonarQube服务器</li></ol><p>安装完成后，需要在SonarQube服务器中进行一些配置，例如配置数据库和LDAP等。你可以参考SonarQube的官方文档来进行相应的配置。</p><ol start="3"><li>安装SonarQube扫描器</li></ol><p>SonarQube扫描器可以安装在本地开发机器或者CI/CD服务器上。你需要下载并安装相应的扫描器，然后配置扫描器与SonarQube服务器的连接。</p><ol start="4"><li>配置项目</li></ol><p>在SonarQube服务器中，你需要为每个项目进行相应的配置。你可以在SonarQube界面中手动创建项目，也可以使用SonarQube API进行自动化配置。在配置项目时，需要设置项目名称、语言类型、代码仓库地址等信息。</p><ol start="5"><li>运行SonarQube扫描器</li></ol><p>在配置完成后，你需要使用SonarQube扫描器对代码进行扫描。在扫描时，你需要指定要扫描的代码路径、扫描器的参数等。扫描器将会把扫描结果上传到SonarQube服务器中。</p><hr><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h2><p>使用ESLint检测圈复杂度的步骤：</p><ol><li>安装ESLint</li></ol><p>在命令行中执行以下命令安装ESLint：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install eslint --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>安装eslint-plugin-complexity插件</li></ol><p>在命令行中执行以下命令安装eslint-plugin-complexity插件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install eslint-plugin-complexity --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>配置ESLint</li></ol><p>在项目根目录下创建.eslintrc.js文件，配置ESLint和eslint-plugin-complexity插件。示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    &#39;eslint:recommended&#39;,
  ],
  plugins: [
    &#39;complexity&#39;,
  ],
  rules: {
    &#39;complexity&#39;: [&#39;error&#39;, { &#39;max&#39;: 10 }],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，&quot;max&quot;表示允许的最大圈复杂度，上述配置将检测每个函数的圈复杂度是否大于10。</p><ol start="4"><li>运行ESLint</li></ol><p>在命令行中执行以下命令来运行ESLint：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx eslint yourfile.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，&quot;yourfile.js&quot;为待检测的JavaScript文件。</p><p>运行结果将会显示每个函数的圈复杂度是否超过了配置的最大值，如果超过了，ESLint将会给出相应的警告和建议。</p><h2 id="codemetrics" tabindex="-1"><a class="header-anchor" href="#codemetrics" aria-hidden="true">#</a> codeMetrics</h2><p>插件商店直接搜索codeMetrics，直接安装既可。</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef3e01986a9b48568cc7b60284e32aa7~tplv-k3u1fbpfcp-zoom-1.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>检测结果。</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c449218d5e8413791d0e9db86ecd292~tplv-k3u1fbpfcp-zoom-1.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="如何保障代码质量" tabindex="-1"><a class="header-anchor" href="#如何保障代码质量" aria-hidden="true">#</a> 如何保障代码质量</h1><ol><li>单一职责原则</li></ol><p>单一职责原则是指每个类或方法应该只有一个责任。如果一个方法或类的职责过于复杂，那么它就很容易产生高圈复杂度。通过将复杂的方法或类拆分为多个小方法或类，每个方法或类只关注一个特定的任务，可以有效地降低圈复杂度。</p><p>before：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class User {
  login(username: string, password: string): boolean {
    // 验证用户身份
    // ...
    return true;
  }

  getProfile(userId: number): object {
    // 获取用户信息
    // ...
    return {};
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>after：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Authenticator {
  login(username: string, password: string): boolean {
    // 验证用户身份
    // ...
    return true;
  }
}

class UserProfile {
  getProfile(userId: number): object {
    // 获取用户信息
    // ...
    return {};
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>开闭原则</li></ol><p>开闭原则是指软件实体（类、模块、函数等）应该对扩展开放，对修改关闭。通过采用开闭原则，可以使我们的代码更加容易扩展，从而避免出现复杂的控制流程和高圈复杂度。</p><p>before</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function quickSort(data: number[]) {
  // 快速排序算法的实现
}

function mergeSort(data: number[]) {
  // 归并排序算法的实现
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>after：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface SortStrategy {
  sort(data: number[]): number[];
}

class QuickSortStrategy implements SortStrategy {
  sort(data: number[]) {
    // 快速排序算法的实现
  }
}

class MergeSortStrategy implements SortStrategy {
  sort(data: number[]) {
    // 归并排序算法的实现
  }
}

class Sorter {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  sort(data: number[]) {
    return this.strategy.sort(data);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>去除重复代码</li></ol><p>重复的代码是代码复杂度的一种来源。通过去除重复的代码，可以将代码块中的控制流程减少到最小，从而降低圈复杂度。</p><ol start="4"><li>提炼函数</li></ol><p>将复杂的代码块提炼到一个单独的函数中，可以将控制流程减少到最小，从而降低圈复杂度。</p><p>before：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 原始代码
function calculateTotalPrice(products) {
  let totalPrice = 0;
  for (let i = 0; i &lt; products.length; i++) {
    const product = products[i];
    totalPrice += product.price * product.quantity;
    if (product.isOnSale) {
      totalPrice -= product.discount;
    }
  }
  return totalPrice;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>after：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 重构后的代码
function calculateTotalPrice(products) {
  let totalPrice = 0;
  for (let i = 0; i &lt; products.length; i++) {
    const product = products[i];
    totalPrice += calculateProductPrice(product);
  }
  return totalPrice;
}

function calculateProductPrice(product) {
  let productPrice = product.price * product.quantity;
  if (product.isOnSale) {
    productPrice -= product.discount;
  }
  return productPrice;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>引入多态</li></ol><p>引入多态可以避免复杂的条件语句，从而使代码更加简洁和易于理解。多态是一种在运行时根据对象类型选择方法的机制，它可以<strong>避免使用复杂的条件语句</strong>，从而减少代码块中的控制流程，降低圈复杂度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 抽象的动物类
abstract class Animal {
  abstract makeSound(): void;
}

// 具体的狗类
class Dog extends Animal {
  makeSound(): void {
    console.log(&quot;汪汪汪！&quot;);
  }
}

// 具体的猫类
class Cat extends Animal {
  makeSound(): void {
    console.log(&quot;喵喵喵！&quot;);
  }
}

// Animal 类型的数组
const animals: Animal[] = [new Dog(), new Cat()];

// 遍历数组，调用不同的 makeSound 方法
animals.forEach(animal =&gt; animal.makeSound());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>提前返回</li></ol><p>通过提前返回可以避免过多的条件语句和嵌套，从而减少圈复杂度。使用break和return提前返回。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function calculateBonus(salary: number, level: string) {
  if (salary &lt;= 0) {
    return 0;
  }
  
  let bonus = 0;
  switch (level) {
    case &#39;A&#39;:
      bonus = salary * 0.2;
      break;
    case &#39;B&#39;:
      bonus = salary * 0.1;
      break;
    case &#39;C&#39;:
      bonus = salary * 0.05;
      break;
    default:
      break;
  }
  
  return bonus;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>使用多个小函数</li></ol><p>使用多个小函数可以使代码更加模块化，从而降低圈复杂度。每个小函数只需要关注一个具体的任务，从而避免出现复杂的控制流程。</p><p>before：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 大函数
function processItems(items: any[]) {
  const results = [];
  for (let i = 0; i &lt; items.length; i++) {
    const item = items[i];
    // 执行一系列操作...
    if (item.isValid) {
      results.push(item.value * 2);
    }
    // 执行一系列操作...
    if (item.isValid &amp;&amp; item.value &gt; 10) {
      results.push(item.value * 3);
    }
    // 执行一系列操作...
  }
  return results;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>after：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 使用多个小函数
function processItems(items: any[]) {
  const results = [];
  for (let i = 0; i &lt; items.length; i++) {
    const item = items[i];
    const result = processItem(item);
    if (result !== null) {
      results.push(result);
    }
  }
  return results;
}

function processItem(item: any): any {
  const result1 = processItemPart1(item);
  const result2 = processItemPart2(item);
  if (result1 !== null &amp;&amp; result2 !== null) {
    return result1 * 2 + result2 * 3;
  }
  return null;
}

function processItemPart1(item: any): any {
  // 执行一系列操作...
  if (item.isValid) {
    return item.value;
  }
  return null;
}

function processItemPart2(item: any): any {
  // 执行一系列操作...
  if (item.isValid &amp;&amp; item.value &gt; 10) {
    return item.value;
  }
  return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>使用函数式编程</li></ol><p>函数式编程是一种通过函数组合来构建复杂程序的编程范式，它可以避免出现复杂的控制流程和高圈复杂度。函数式编程中的函数通常都是纯函数，即给定相同的输入，始终返回相同的输出，因此不会受到外部环境的影响。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(array) {
  let result = 0;
  for (let i = 0; i &lt; array.length; i++) {
    result += array[i];
  }
  return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>after：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(array) {
  return array.reduce((acc, val) =&gt; acc + val, 0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,86);function P(j,I){const n=a("ExternalLinkIcon");return t(),r("div",null,[v,e("figure",null,[e("a",u,[m,l(n)]),o]),b,p,g,e("figure",null,[e("a",h,[f,l(n)]),x]),y,S,e("p",null,[e("a",_,[k,l(n)]),i("圈复杂度")]),e("p",null,[i("针对程序的控制流"),e("a",E,[i("图计算"),l(n)]),i("圈复杂度V(G)时，最好还是采用第一个公式，也即V(G)=e-n+2；而针对模块的控制流图时，可以直接统计判定节点数，这样更为简单；针对复杂的控制流图是，使用区域计算公式V(G)=R更为简单。")]),A])}const q=d(c,[["render",P],["__file","codeMetries.html.vue"]]);export{q as default};
