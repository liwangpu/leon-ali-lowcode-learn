# 阿里宜搭低代码引擎学习

**学习目录介绍**
- lowcode-demo 低代码平台的设计器
- lowcode-engine 低代码引擎
- cool-card 自定义的一个物料组件

## 1. lowcode-demo 低代码平台的设计器

**相关文档**

[认识Demo](https://www.yuque.com/lce/doc/lhggxn#AJz92)

**启动与调试** ( 终端进入lowcode-demo再执行命令 )

- 启动
```
npm run start
```
之后就可以通过 http://localhost:5556/ 来访问




## 2. cool-card 自定义的一个物料组件

**组件的元数据**
> 组件的元数据保存在当前项目的lowcode/leon-alilc-cool-card/meta.ts下,默认在执行npm run lowcode:build会自己生成,如果存在,那么就用现有的配置.
> meta.ts的componentName和title会根据项目package>name名字去掉中横线后帕斯卡命名作为默认名字


**启动与调试** ( 终端进入cool-card再执行命令 )

- 启动
```
npm run lowcode:dev
```
之后就可以通过 http://localhost:3333/ 来访问

- 构建与发布
```
npm publish
```
**这个命令默认会自己先执行npm run lowcode:build,所以不用手动执行了**

- Demo使用组件

我们将刚刚发布的组件的 build/lowcode/assets-prod.json 的内容放到 demo 的 src/universal/assets.json 中
> assets-prod.json里面的packages是一个数组,把这个数组下面的对象复制到assets.json的packages数组中末尾,同理把assets-prod.json下的components数组下的对象也复制到assets.json的components数组中末尾,最好放到最后，防止因为资源加载顺序问题导致出现报错

这里为了方便,写了一个gulp task
```
npm run copy2demo
```


**相关文档**

[开发一个自定义的物料组件](https://www.yuque.com/lce/doc/lhggxn#lpmpl)

## 3. lowcode-engine 低代码引擎

**相关文档**

[开发一个自定义的物料组件](https://www.yuque.com/lce/doc/lhggxn#lpmpl)
