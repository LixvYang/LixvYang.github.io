const e=JSON.parse('{"key":"v-46709ae2","path":"/posts/program/redis/cache-consistency/cache-consistency.html","title":"缓存一致性目录","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-11-21T00:00:00.000Z","isOriginal":true,"category":["tutorial"],"tag":["redis","consistency"],"description":"缓存一致性目录 缓存一致性目录 引入缓存提高性能 缓存利用率与一致性问题 并发引入的一致性问题 删除缓存可以保证一致性吗 如何保证两步都执行成功? 主从库延迟和延迟双删问题 可以做到强一致吗? 总结","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/program/redis/cache-consistency/cache-consistency.html"}],["meta",{"property":"og:site_name","content":"离心的Blog"}],["meta",{"property":"og:title","content":"缓存一致性目录"}],["meta",{"property":"og:description","content":"缓存一致性目录 缓存一致性目录 引入缓存提高性能 缓存利用率与一致性问题 并发引入的一致性问题 删除缓存可以保证一致性吗 如何保证两步都执行成功? 主从库延迟和延迟双删问题 可以做到强一致吗? 总结"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-03T02:35:03.000Z"}],["meta",{"property":"article:author","content":"离心"}],["meta",{"property":"article:tag","content":"redis"}],["meta",{"property":"article:tag","content":"consistency"}],["meta",{"property":"article:published_time","content":"2022-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-03T02:35:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"缓存一致性目录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-03T02:35:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"离心\\"}]}"]]},"headers":[{"level":2,"title":"引入缓存提高性能","slug":"引入缓存提高性能","link":"#引入缓存提高性能","children":[]},{"level":2,"title":"缓存利用率与一致性问题","slug":"缓存利用率与一致性问题","link":"#缓存利用率与一致性问题","children":[]},{"level":2,"title":"并发引入的一致性问题","slug":"并发引入的一致性问题","link":"#并发引入的一致性问题","children":[]},{"level":2,"title":"删除缓存可以保证一致性吗","slug":"删除缓存可以保证一致性吗","link":"#删除缓存可以保证一致性吗","children":[]},{"level":2,"title":"如何保证两步都执行成功?","slug":"如何保证两步都执行成功","link":"#如何保证两步都执行成功","children":[]},{"level":2,"title":"主从库延迟和延迟双删问题","slug":"主从库延迟和延迟双删问题","link":"#主从库延迟和延迟双删问题","children":[]},{"level":2,"title":"可以做到强一致吗?","slug":"可以做到强一致吗","link":"#可以做到强一致吗","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1693708503000,"updatedTime":1693708503000,"contributors":[{"name":"lixin","email":"lixin@lixins-MacBook-Pro.local","commits":1}]},"readingTime":{"minutes":16.31,"words":4894},"filePathRelative":"posts/program/redis/cache-consistency/cache-consistency.md","localizedDate":"2022年11月21日","excerpt":"<h1> 缓存一致性目录</h1>\\n<ul>\\n<li><a href=\\"#%E7%BC%93%E5%AD%98%E4%B8%80%E8%87%B4%E6%80%A7%E7%9B%AE%E5%BD%95\\">缓存一致性目录</a>\\n<ul>\\n<li><a href=\\"#%E5%BC%95%E5%85%A5%E7%BC%93%E5%AD%98%E6%8F%90%E9%AB%98%E6%80%A7%E8%83%BD\\">引入缓存提高性能</a></li>\\n<li><a href=\\"#%E7%BC%93%E5%AD%98%E5%88%A9%E7%94%A8%E7%8E%87%E4%B8%8E%E4%B8%80%E8%87%B4%E6%80%A7%E9%97%AE%E9%A2%98\\">缓存利用率与一致性问题</a></li>\\n<li><a href=\\"#%E5%B9%B6%E5%8F%91%E5%BC%95%E5%85%A5%E7%9A%84%E4%B8%80%E8%87%B4%E6%80%A7%E9%97%AE%E9%A2%98\\">并发引入的一致性问题</a></li>\\n<li><a href=\\"#%E5%88%A0%E9%99%A4%E7%BC%93%E5%AD%98%E5%8F%AF%E4%BB%A5%E4%BF%9D%E8%AF%81%E4%B8%80%E8%87%B4%E6%80%A7%E5%90%97\\">删除缓存可以保证一致性吗</a></li>\\n<li><a href=\\"#%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E4%B8%A4%E6%AD%A5%E9%83%BD%E6%89%A7%E8%A1%8C%E6%88%90%E5%8A%9F\\">如何保证两步都执行成功?</a></li>\\n<li><a href=\\"#%E4%B8%BB%E4%BB%8E%E5%BA%93%E5%BB%B6%E8%BF%9F%E5%92%8C%E5%BB%B6%E8%BF%9F%E5%8F%8C%E5%88%A0%E9%97%AE%E9%A2%98\\">主从库延迟和延迟双删问题</a></li>\\n<li><a href=\\"#%E5%8F%AF%E4%BB%A5%E5%81%9A%E5%88%B0%E5%BC%BA%E4%B8%80%E8%87%B4%E5%90%97\\">可以做到强一致吗?</a></li>\\n<li><a href=\\"#%E6%80%BB%E7%BB%93\\">总结</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
