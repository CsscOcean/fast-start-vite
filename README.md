# Vue 3 + TypeScript + Vite + eslint + prettier +commitlint + styleLint + standard + husky + lint-staged

该项目为 前端快递开发模版 做了各类语法检查、以及在主分支的推送和 pr 时，对进行 ci 检测(是否项目能正常 build、
以及 eslint 是否通过)

## 下载安装

使用 fork 或者 使用[degit](https://github.com/Rich-Harris/degit)

```bash
npx degit npx degit https://github.com/CsscOcean/fast-start-vite my-project

cd my-project

git init

pnpm install

pnpm run dev

```

## 使用

### 自动生成 swagger 前端接口

1. 将 package.json http://36.137.184.33:18080/zhhfApi/v2/api-docs 替换成项目 swagger 地址
2. `pnpm run gen-api`

### 组件

- 页面组件库 [antdv](https://www.antdv.com/components/overview)
- Icon 组件[参照](src/components/VIcon/README.md')

### Unocss 使用

打开 [tailwindcss](https://tailwindcss.com/docs/installation) 直接使用里面的 class

参照 [windicss](https://cn.windicss.org/)

## 文件命名

- 项目文件夹命名使用 kebab-case
- 单文件组件的文件名应该始终是单词大写开头 (PascalCase)。
- 文件夹命名规范
  - 属于 components 文件夹下的子文件夹，使用大写字母开头的 PascalBase 风格
    > 全局通用的组件放在 /src/components 下 其他业务页面中的组件，放在各自页面下的 ./components 文件夹下 每个
    > components 文件夹下最多只有一层文件夹，且文件夹名称为组件的名称，文件夹下必须有 index.vue 或 index.ts，
    > 其他.vue 文件统一大写开头（Pascal case），components 下的子文件夹名称统一大写开头（PascalCase）

### 全局公共组件：/src/components 示例

> 统一 V 开头

```bash
- [components]
  - [Breadcrumb]
    - index.vue
  - [Hamburger]
    - index.vue
  - [SvgIcon]
    - index.vue
```

### 业务页面内部封装的组件：以 /src/views/layout/components 示例

```bash
-[src]
  - [views]
    - [layout]
      - [components]
        - [Sidebar]
          - index.vue
          - Item.vue
          - SidebarItem.vue
        - AppMain.vue
        - index.ts
        - Navbar.vue
```

index.ts 中导出组件方式如下：

```typescript
export { default as AppMain } from './AppMain';
export { default as Navbar } from './Navbar';
export { default as Sidebar } from './Sidebar';
```

> 看 index.ts 中最后一行代码，不难发现，为什么 components 下的子文件夹要使用 PascalCase 命名：
>
> ```typescript
> export { default as Sidebar } from './sidebar'; // 使用kebab-case命名的文件夹
> export { default as Sidebar } from './Sidebar'; // 使用 PascalCase命名的文件夹
> ```
>
> 对于组件的导出/导入，我们一般都是使用大写字母开头的 PascalCase 风格， 以区别于.vue 组件内部的其他 camelCase
> 声明的变量， [Sidebar] 作为【侧边栏组件】的一个整体被导出，文件夹的命名也采用 PascalCase， 有利于 index.ts
> 中 export 时的前后统一，避免很多情况下不注意区分大小写

### \*.ts 文件命名规范

> 1. 属于类的 .ts 文件，除 index.ts 外，使用 PascalBase 风格
> 2. 其他类型的 .ts 文件，使用 camelCase 风格

### \*.vue 文件命名规范

> 除 index.vue 之外，其他.vue 文件统一用 PascalBase 风格

### \*.less 文件命名规范

> 统一使用 camelCase 命名风格
