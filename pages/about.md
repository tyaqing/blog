---
title: GraphQL的利用
pageTitle: 地磁 - Never miss the cache again.
description: Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.
---

## GraphQL的优势是什么呢

```graphql
query {
  blog_by_id(id: 4) {
    id
    title
  }
}
```

你应该这到这个东西的厉害
再测试一下表格

| Mutation | Query | Subscription |
|----------|-------|--------------|
| 突变       | 查询    | 订阅           | 

我觉得这个表格还是不错的

首先，我们需要一个`Mutation`来创建一个`Post`，这个`Mutation`的名字叫`createPost`，它接受一个`title`和`content`的参数，返回一个`Post`的对象。

## Muation
```graphql
mutation {
  createPost(title: "Hello World", content: "This is my first post") {
    id
    title
    content 
  }
}
```
这个就是一个`Mutation`的例子
> 来字到到的 的


# dier 

## 缺点
### 非长适合
### 不太适合
## haha 

## 比