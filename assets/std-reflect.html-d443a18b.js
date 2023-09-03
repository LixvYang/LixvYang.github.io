const e=JSON.parse('{"key":"v-76b39f2f","path":"/posts/program/golang/%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/%E5%AE%98%E6%96%B9%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/std-reflect.html","title":"Go reflect 反射包详解","lang":"zh-CN","frontmatter":{"icon":"snow","date":"2023-05-27T00:00:00.000Z","isOriginal":true,"category":["tutorial"],"tag":["golang"],"description":"Go reflect 反射包详解 当我们接触一个新名词的时候，我们需要做的事情就是明确其定义，然后尽快适应，反射就是这样的名词之一。 首先是定义：反射允许程序在运行时检查和操作其结构、变量、方法等信息。Go语言提供了反射包（reflect），使得我们能够在运行时动态地获取类型信息、操作对象的字段和方法。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/program/golang/%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/%E5%AE%98%E6%96%B9%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/std-reflect.html"}],["meta",{"property":"og:title","content":"Go reflect 反射包详解"}],["meta",{"property":"og:description","content":"Go reflect 反射包详解 当我们接触一个新名词的时候，我们需要做的事情就是明确其定义，然后尽快适应，反射就是这样的名词之一。 首先是定义：反射允许程序在运行时检查和操作其结构、变量、方法等信息。Go语言提供了反射包（reflect），使得我们能够在运行时动态地获取类型信息、操作对象的字段和方法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-03T03:26:17.000Z"}],["meta",{"property":"article:author","content":"离心"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2023-05-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-03T03:26:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go reflect 反射包详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-03T03:26:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"离心\\"}]}"]]},"headers":[{"level":2,"title":"反射怎么用","slug":"反射怎么用","link":"#反射怎么用","children":[]},{"level":2,"title":"Type","slug":"type","link":"#type","children":[]},{"level":2,"title":"Value","slug":"value","link":"#value","children":[{"level":3,"title":"通过反射来更改变量的底层值","slug":"通过反射来更改变量的底层值","link":"#通过反射来更改变量的底层值","children":[]},{"level":3,"title":"isVaild","slug":"isvaild","link":"#isvaild","children":[]}]},{"level":2,"title":"结构体反射","slug":"结构体反射","link":"#结构体反射","children":[]},{"level":2,"title":"通过reflect自动注册HTTP路由","slug":"通过reflect自动注册http路由","link":"#通过reflect自动注册http路由","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1693711577000,"updatedTime":1693711577000,"contributors":[{"name":"lixin","email":"lixin@lixins-MacBook-Pro.local","commits":1}]},"readingTime":{"minutes":10.4,"words":3121},"filePathRelative":"posts/program/golang/标准库学习/官方标准库学习/std-reflect.md","localizedDate":"2023年5月27日","excerpt":"<h1> Go reflect 反射包详解</h1>\\n<div class=\\"language-card line-numbers-mode\\" data-ext=\\"card\\"><pre class=\\"language-card\\"><code>当我们接触一个新名词的时候，我们需要做的事情就是明确其定义，然后尽快适应，反射就是这样的名词之一。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>首先是定义：反射允许程序在运行时检查和操作其结构、变量、方法等信息。Go语言提供了反射包（reflect），使得我们能够在运行时动态地获取类型信息、操作对象的字段和方法。</p>","autoDesc":true}');export{e as data};
