const t=JSON.parse('{"key":"v-4931fef0","path":"/posts/program/golang/%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/%E5%AE%98%E6%96%B9%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/std-log.html","title":"Go log 包详解","lang":"zh-CN","frontmatter":{"icon":"meteocons:wind-snow-fill","title":"Go log 包详解","date":"2023-05-20T00:00:00.000Z","isOriginal":true,"category":["tutorial"],"tag":["golang"],"description":"Log包详解 相关信息 之前不知道在哪看到过一句话，一个程序员开始重视日志的时候才是这个程序员从程序员迈向工程师的时候。 在程序开发中，日志是一个非常重要的工具，它可以帮助我们记录和追踪程序的运行状态和错误信息。在Go语言中，log 包是一个基础的标准库，提供了许多日志相关的功能。本文将介绍 log 包的常用函数以及如何配置和使用日志。 常用函数 log 包提供了一些常用的函数，可以方便地打印日志信息。这些函数包括 Print、Printf、Println、Fatal、Fatalf、Fatalln、Panic、Panicf 和 Panicln。它们的功能类似，区别在于添加换行符(ln)和是否触发程序的退出或崩溃。","head":[["meta",{"property":"og:url","content":"https://yanglixin.com/posts/program/golang/%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/%E5%AE%98%E6%96%B9%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/std-log.html"}],["meta",{"property":"og:title","content":"Go log 包详解"}],["meta",{"property":"og:description","content":"Log包详解 相关信息 之前不知道在哪看到过一句话，一个程序员开始重视日志的时候才是这个程序员从程序员迈向工程师的时候。 在程序开发中，日志是一个非常重要的工具，它可以帮助我们记录和追踪程序的运行状态和错误信息。在Go语言中，log 包是一个基础的标准库，提供了许多日志相关的功能。本文将介绍 log 包的常用函数以及如何配置和使用日志。 常用函数 log 包提供了一些常用的函数，可以方便地打印日志信息。这些函数包括 Print、Printf、Println、Fatal、Fatalf、Fatalln、Panic、Panicf 和 Panicln。它们的功能类似，区别在于添加换行符(ln)和是否触发程序的退出或崩溃。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-02T09:43:53.000Z"}],["meta",{"property":"article:author","content":"离心"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2023-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-02T09:43:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go log 包详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-02T09:43:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"离心\\"}]}"]]},"headers":[{"level":2,"title":"常用函数","slug":"常用函数","link":"#常用函数","children":[]},{"level":2,"title":"Logger类型配置日志","slug":"logger类型配置日志","link":"#logger类型配置日志","children":[{"level":3,"title":"配置日志前缀","slug":"配置日志前缀","link":"#配置日志前缀","children":[]},{"level":3,"title":"配置日志输出位置","slug":"配置日志输出位置","link":"#配置日志输出位置","children":[]}]},{"level":2,"title":"创建自己的logger","slug":"创建自己的logger","link":"#创建自己的logger","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1693711577000,"updatedTime":1696239833000,"contributors":[{"name":"lixin","email":"lixin@lixins-MacBook-Pro.local","commits":2}]},"readingTime":{"minutes":3.54,"words":1061},"filePathRelative":"posts/program/golang/标准库学习/官方标准库学习/std-log.md","localizedDate":"2023年5月20日","excerpt":"<h1> Log包详解</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>之前不知道在哪看到过一句话，一个程序员开始重视日志的时候才是这个程序员从程序员迈向工程师的时候。</p>\\n<p>在程序开发中，日志是一个非常重要的工具，它可以帮助我们记录和追踪程序的运行状态和错误信息。在Go语言中，log 包是一个基础的标准库，提供了许多日志相关的功能。本文将介绍 log 包的常用函数以及如何配置和使用日志。</p>\\n</div>\\n<h2> 常用函数</h2>\\n<p>log 包提供了一些常用的函数，可以方便地打印日志信息。这些函数包括 Print、Printf、Println、Fatal、Fatalf、Fatalln、Panic、Panicf 和 Panicln。它们的功能类似，区别在于添加换行符(ln)和是否触发程序的退出或崩溃。</p>","autoDesc":true}');export{t as data};
