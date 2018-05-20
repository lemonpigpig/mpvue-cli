# mpvue-cli

> A Mpvue project

## 相关依赖

* [flyio](https://github.com/wendux/fly/blob/master/README-CH.md) - 同时支持浏览器、小程序、Node、Weex 及快应用的基于 Promise 的跨平台请求库
* [mpvue-entry](https://github.com/F-loat/mpvue-entry) - 集中式页面配置，不再需要重复编辑各页面的 main.js 文件
* [mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch) - 在 mpvue 中使用 vue-router 兼容的路由写法

## 相关说明

* main.js为入口文件,作为模版
* flyio: 'flyio/dist/npm/wx',添加别名
* wx: resolve('src/utils/wx'),避免直接使用微信小程序的wx api，为了很好的兼容其他的转换
path: 页面路径
name：页面路径名字
config：页面的配置，最后会生成小程序某个页面的json配置文件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
