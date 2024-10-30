# SVG 使用

组件包括几种 svg 使用方式，并且提供图标和文字对齐功能

## 使用方式

### 1. 使用 [iconify.design](https://iconify.design/getting-started/) 上的图标

**优点**

- 基本上集合了市面上所有的组件 icon 图标
- 不需要复制到项目里面，只需要名字

**缺点**

- 图标都是在线拉取的，可以本地部署图标服务

---

**使用方式**

1. 打开 [iconify.design](https://icon-sets.iconify.design/) 搜索图标名称
2. 复制图标名称带上来源，比如 `ant-design` 的 `close-outlined` 图标 `ant-design:close-outlined`

```vue
<VIcon icon="icon-park-outline:dislike" />
```

### 2. 使用本地图标，通过 use 引用

**优点**

- 集中管理图标

**缺点**

- 会一次性把所有图标都加在到页面中

**使用方式**

1. 复制 svg 图标到指定目录（`@/assets/icons`）
2. 复制文件名称带上所有路径名，比如图标路径 `@/assets/icons/menu/appManage.svg` 对应名称 `svg:menu-appManage`

```vue
<VIcon icon="svg:menu-appManage" />
```

### 3. 之间 `import` svg 文件，当成组件用

> 宽度指定 1em，em 单位会根据 font-size 自动计算，方便和文字对齐

**优点**

- 按需引用
- 不需要指定目录

1. `import` svg 文件，通过 VIcon 组件提供图标和文字对齐功能

```vue
<script setup lang="ts">
import AppManage from '@/assets/icons/menu/appManage.svg';
</script>

<VIcon>
  <AppManage width="1em" />
</VIcon>
```

2. 直接使用不通过 VIcon 组件包裹

```vue
<script setup lang="ts">
import AppManage from '@/assets/icons/menu/appManage.svg';
</script>

<AppManage width="1em" />
```

### 4. 通过 `img` tag 直接使用

**优点**

- 按需引用
- 不需要指定目录

**缺点**

- 没法通过 svgo 优化缩小
- 没法通过 css 改变图标颜色

**使用方式**

1. `import` svg 文件，静态资源的方式

```vue
<script setup lang="ts">
import AppManageUrl from '@/assets/icons/menu/appManage.svg?url';
</script>

<img :src="AppManageUrl" />
```

## SVG 通过 css 改变图标颜色

一般会制作双色图标，通过 color 和 fill 控制

1. 改变 svg 文件，找到需要控制的两个元素，挑选其中一个设置 `fill='currentColor'`

```css
.style {
  color: red;
  fill: blue;
}
```
