# 京东到家app
本项目旨在学习vue3, 从0到1搭建一个移动端项目。  
目标： vue3.js + axios + node.js + ... 目前数据使用的是mock

### 目标：
#### 目前完成的功能有
- [x] sass全局变量以及mixins设置
- [x] 路由守卫设置
- [x] axios全局g以及响应拦截
- [x] vuex模块化管理
- [x] Eslint + prettier配置
- [x] fastmock数据模拟

#### 未完成
- [ ] node.js服务端


### Project scripts
```
npm install 
npm run serve
npm run build
npm run lint
```

### 目录：
```
├─models              // 数据模型
├─node_modules        // 所需依赖
└─router
    └─index.js             // 路由
└─views
    └─home             // 首页
    └─login            // 登录
    └─register         // 注册
    └─shop             // 店铺列表
├─package.json        
├─main.js           // 入口文件        
``` 

### 文档参考：
- vue3 axios全局挂在参考[点击此处](https://www.jianshu.com/p/f8b14062337a)