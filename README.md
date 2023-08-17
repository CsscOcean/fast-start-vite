# Vue 3 + TypeScript + Vite + eslint + prettier +commitlint + styleLint + standard + husky + lint-staged

该项目为 前端快递开发模版 做了各类语法检查、以及在主分支的推送和 pr 时，对进行 ci 检测(是否项目能正常 build、
以及 eslint 是否通过)

## 下载安装

使用 fork 或者 使用[degit](https://github.com/Rich-Harris/degit)

`npx degit https://github.com/CsscOcean/fast-start-vite/tree/main my-project`

`cd my-project` `git init` `pnpm install`

`npm run dev`

`一定要先git init`

## 使用

### 自动生成 swagger 前端接口

1. 将 package.json http://36.137.184.33:18080/zhhfApi/v2/api-docs 替换成项目 swagger 地址
2. npm run gen-api

页面组件库 [element-plus](https://element-plus.org/zh-CN/component/button.html) + icon 组件库
[iconpark](https://iconpark.oceanengine.com/official) 点击前往官网查看
