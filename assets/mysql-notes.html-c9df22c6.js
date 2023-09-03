const l=JSON.parse('{"key":"v-56bd5e7e","path":"/posts/program/mysql/notes/mysql-notes.html","title":"MySQL 学习笔记","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2021-11-16T00:00:00.000Z","isOriginal":true,"category":["tutorial"],"tag":["mysql"],"description":"MySQL 学习笔记 执行一条 SQL 查询语句，期间发生了什么？ 索引 内存 日志 事务 锁 说清楚Buffer Pool是啥","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/program/mysql/notes/mysql-notes.html"}],["meta",{"property":"og:title","content":"MySQL 学习笔记"}],["meta",{"property":"og:description","content":"MySQL 学习笔记 执行一条 SQL 查询语句，期间发生了什么？ 索引 内存 日志 事务 锁 说清楚Buffer Pool是啥"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-03T02:35:03.000Z"}],["meta",{"property":"article:author","content":"离心"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:published_time","content":"2021-11-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-03T02:35:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 学习笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-03T02:35:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"离心\\"}]}"]]},"headers":[{"level":2,"title":"执行一条SQL查询语句，期间发生了什么","slug":"执行一条sql查询语句-期间发生了什么","link":"#执行一条sql查询语句-期间发生了什么","children":[{"level":3,"title":"连接器","slug":"连接器","link":"#连接器","children":[]},{"level":3,"title":"查询缓存","slug":"查询缓存","link":"#查询缓存","children":[]},{"level":3,"title":"解析 SQL","slug":"解析-sql","link":"#解析-sql","children":[{"level":4,"title":"解析器","slug":"解析器","link":"#解析器","children":[]}]},{"level":3,"title":"执行 SQL","slug":"执行-sql","link":"#执行-sql","children":[{"level":4,"title":"预处理器","slug":"预处理器","link":"#预处理器","children":[]},{"level":4,"title":"优化器","slug":"优化器","link":"#优化器","children":[]},{"level":4,"title":"执行器","slug":"执行器","link":"#执行器","children":[]}]}]},{"level":2,"title":"索引常见问题","slug":"索引常见问题","link":"#索引常见问题","children":[{"level":3,"title":"什么时候需要创建索引","slug":"什么时候需要创建索引","link":"#什么时候需要创建索引","children":[]},{"level":3,"title":"什么时候不需要创建索引","slug":"什么时候不需要创建索引","link":"#什么时候不需要创建索引","children":[]},{"level":3,"title":"有什么优化索引的方法？","slug":"有什么优化索引的方法","link":"#有什么优化索引的方法","children":[]}]},{"level":2,"title":"内存 揭开 Buffer Pool 的面纱","slug":"内存-揭开-buffer-pool-的面纱","link":"#内存-揭开-buffer-pool-的面纱","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]},{"level":2,"title":"日志","slug":"日志","link":"#日志","children":[{"level":3,"title":"为什么需要undo log","slug":"为什么需要undo-log","link":"#为什么需要undo-log","children":[]},{"level":3,"title":"为什么需要 redo log ？","slug":"为什么需要-redo-log","link":"#为什么需要-redo-log","children":[]},{"level":3,"title":"为什么需要 binlog ？","slug":"为什么需要-binlog","link":"#为什么需要-binlog","children":[]},{"level":3,"title":"主从复制是怎么实现？","slug":"主从复制是怎么实现","link":"#主从复制是怎么实现","children":[]},{"level":3,"title":"为什么需要两阶段提交？","slug":"为什么需要两阶段提交","link":"#为什么需要两阶段提交","children":[]}]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"事务的隔离级别是怎么实现的","slug":"事务的隔离级别是怎么实现的","link":"#事务的隔离级别是怎么实现的","children":[]}]},{"level":2,"title":"锁","slug":"锁","link":"#锁","children":[{"level":3,"title":"全局锁","slug":"全局锁","link":"#全局锁","children":[]},{"level":3,"title":"表级锁","slug":"表级锁","link":"#表级锁","children":[{"level":4,"title":"表锁","slug":"表锁","link":"#表锁","children":[]},{"level":4,"title":"元数据锁","slug":"元数据锁","link":"#元数据锁","children":[]},{"level":4,"title":"意向锁","slug":"意向锁","link":"#意向锁","children":[]},{"level":4,"title":"AUTO-INC 锁","slug":"auto-inc-锁","link":"#auto-inc-锁","children":[]}]},{"level":3,"title":"行级锁","slug":"行级锁","link":"#行级锁","children":[{"level":4,"title":"Record Lock","slug":"record-lock","link":"#record-lock","children":[]},{"level":4,"title":"Gap Lock","slug":"gap-lock","link":"#gap-lock","children":[]},{"level":4,"title":"Next-Key Lock","slug":"next-key-lock","link":"#next-key-lock","children":[]},{"level":4,"title":"插入意向锁","slug":"插入意向锁","link":"#插入意向锁","children":[]}]}]},{"level":2,"title":"Buffer Pool","slug":"buffer-pool","link":"#buffer-pool","children":[{"level":3,"title":"为什么要有Buffer Pool?","slug":"为什么要有buffer-pool","link":"#为什么要有buffer-pool","children":[]},{"level":3,"title":"如何管理Buffer Pool?","slug":"如何管理buffer-pool","link":"#如何管理buffer-pool","children":[]}]}],"git":{"createdTime":1693708503000,"updatedTime":1693708503000,"contributors":[{"name":"lixin","email":"lixin@lixins-MacBook-Pro.local","commits":1}]},"readingTime":{"minutes":68.33,"words":20498},"filePathRelative":"posts/program/mysql/notes/mysql-notes.md","localizedDate":"2021年11月16日","excerpt":"<h1> MySQL 学习笔记</h1>\\n<ul>\\n<li><a href=\\"#%E6%89%A7%E8%A1%8C%E4%B8%80%E6%9D%A1SQL%E6%9F%A5%E8%AF%A2%E8%AF%AD%E5%8F%A5%EF%BC%8C%E6%9C%9F%E9%97%B4%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88\\">执行一条 SQL 查询语句，期间发生了什么？</a></li>\\n<li><a href=\\"#%E7%B4%A2%E5%BC%95\\">索引</a></li>\\n<li><a href=\\"#%E5%86%85%E5%AD%98\\">内存</a></li>\\n<li><a href=\\"#%E6%97%A5%E5%BF%97\\">日志</a></li>\\n<li><a href=\\"#%E4%BA%8B%E5%8A%A1\\">事务</a></li>\\n<li><a href=\\"#%E9%94%81\\">锁</a></li>\\n<li><a href=\\"#BufferPool\\">说清楚Buffer Pool是啥</a></li>\\n</ul>","autoDesc":true}');export{l as data};
