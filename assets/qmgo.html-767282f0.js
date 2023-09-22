import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as l,f as r,b as n,d as o,a,e as i}from"./app-b924988e.js";const c={},m=n("p",null,[o("我大七牛提供的"),n("code",null,"qmgo"),o("最好用了...")],-1),p=i(`<h1 id="go操作mongo最便捷的方式" tabindex="-1"><a class="header-anchor" href="#go操作mongo最便捷的方式" aria-hidden="true">#</a> Go操作Mongo最便捷的方式</h1><p>本篇文章分为三个部分:</p><ol><li>介绍MongoDB</li><li>使用Docker启动MongoDB(有手就行,没手让AI帮忙也行)</li><li>在Go语言实操使用Qmgo摆弄MongoDB</li></ol><h2 id="介绍mongodb" tabindex="-1"><a class="header-anchor" href="#介绍mongodb" aria-hidden="true">#</a> 介绍MongoDB</h2><p>MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案，MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。</p><p>NoSQL(NoSQL = Not Only SQL )，意即&quot;不仅仅是SQL&quot;。</p><p>MongoDB 将数据存储为一个文档，数据结构由键值(key=&gt;value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。</p><h3 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念" aria-hidden="true">#</a> 相关概念</h3><table><thead><tr><th>SQL术语/概念</th><th>Mongo术语/概念</th><th>解释/说明</th></tr></thead><tbody><tr><td>database</td><td>database</td><td>数据库</td></tr><tr><td>table</td><td>collection</td><td>数据库表/集合</td></tr><tr><td>row</td><td>document</td><td>数据记录行/文档</td></tr><tr><td>column</td><td>filed</td><td>数据字段/域</td></tr><tr><td>index</td><td>index</td><td>索引</td></tr><tr><td>table joins</td><td>database</td><td>表连接,MongoDB不支持</td></tr><tr><td>primary key</td><td>primary key</td><td>主键,MongoDB自动将_id字段设置为主键</td></tr></tbody></table><h3 id="mongodb安装以及简单上手" tabindex="-1"><a class="header-anchor" href="#mongodb安装以及简单上手" aria-hidden="true">#</a> MongoDB安装以及简单上手</h3><p>我们使用Docker来安装MongoDB，Docker可以很方便地启动MongoDB、Redis、MySQL等常见的组件，用起来很简单:</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当然首先你得确保你已经启动了Docker</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取Mongo6.0版本镜像</span>
<span class="token function">docker</span> pull mongo:6.0

<span class="token comment"># 启动运行mongo </span>
<span class="token comment"># docker中的名称是 mongodb</span>
<span class="token comment"># 自己主机端口号是27017 容器内对应的端口号也是27017</span>
<span class="token comment"># -d 是设置容器以守护进程方式运行</span>
<span class="token comment"># 想使用volumn持久化的话可以代替使用下面的两个命令</span>
<span class="token comment"># docker create volumn mongodb</span>
<span class="token comment"># docker run -p 27017:27017 --name mongodb -v mongodb:/data/db -d mongo</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 <span class="token parameter variable">--name</span> mongodb <span class="token parameter variable">-d</span> mongo

<span class="token comment"># 紧接着就可以通过以下命令行进入了mongo了</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mongodb mongosh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),g=n("code",null,"Qmgo",-1),h=n("code",null,"MongoDB",-1),u={href:"https://github.com/mongodb/mongo-go-driver",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/go-mgo/mgo",target:"_blank",rel:"noopener noreferrer"},v=n("ul",null,[n("li",null,[n("p",null,"Qmgo让您以更优雅的姿势使用MongoDB的新特性。")]),n("li",null,[n("p",null,"Qmgo是从mgo迁移到新MongoDB driver的第一选择，对代码的改动影响最小。")])],-1),k=n("h2",{id:"要求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#要求","aria-hidden":"true"},"#"),o(" 要求")],-1),_=n("ul",null,[n("li",null,"Go 1.10 及以上。"),n("li",null,"MongoDB 2.6 及以上。")],-1);function f(M,B){const e=s("ExternalLinkIcon");return d(),l("div",null,[m,r(" more "),p,n("p",null,[g,o("是一款Go语言的"),h,o("驱动器，它基于官方提供的"),n("a",u,[o("Mongo官方驱动器"),a(e)]),o("开发实现，同时使用了更简便易懂的接口设计，比如参考了"),n("a",b,[o("mgo"),a(e)]),o("的链式调用。")]),v,k,_])}const Q=t(c,[["render",f],["__file","qmgo.html.vue"]]);export{Q as default};
