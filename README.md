# yzw-webpack-numbers

> 如何通过webpack来打包库

[来源](http://www.css88.com/doc/webpack2/guides/author-libraries/)
[参考](https://github.com/kalcifer/webpack-library-example)

只能用"webpack": "^3.5.5"
不能用更高版本，更高版本启动会让你安装webpack-cli，安装之后打包的webpack-number.js里会有window，导致node无法引用该文件

## 使用方式一：
当库通过 script 标签引入的时候，可以通过全局变量 webpackNumbers 来使用
```
npm run build
```
打开index.html

## 使用方式二：
库可以在 Node.js 中使用

引入webpack-numbers
```
var webpackNumbers = require('./webpack-numbers.js');
```
执行
```
npm run build:node
```
