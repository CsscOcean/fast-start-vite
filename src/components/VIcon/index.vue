<script setup lang="ts">
import { computed, type CSSProperties } from 'vue';
import { isString } from 'lodash-es';

const props = withDefaults(
  defineProps<{
    icon?: string;
    rotate?: number | string;
    size?: number | string;
  }>(),
  {
    rotate: 0,
  },
);

// 判断是否是本地图标
const isLocal = computed(() => props.icon?.startsWith('svg:'));

// 如果是本地图标拆分出 svg-icon: 后面的字段
const symbolId = computed(() => {
  return isLocal.value ? `#${props.icon?.split('svg:')[1]}` : props.icon;
});

const getWrapStyle = computed((): CSSProperties => {
  const { size, rotate } = props;
  let fs = size;
  if (isString(size)) {
    fs = parseInt(size, 10);
  }

  return {
    rotate: `rotate(${rotate}deg)`,
    ...(fs && { fontSize: `${fs}px` }),
  };
});
</script>

<template>
  <span v-if="props.icon || $slots.default" class="wrapper-icon" :style="getWrapStyle">
    <slot>
      <svg
        v-if="isLocal"
        aria-hidden="true"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 1024 1024"
      >
        <use :href="symbolId" />
      </svg>
      <iconify-icon v-else :icon="symbolId"></iconify-icon>
    </slot>
  </span>
</template>

<style scoped>
.wrapper-icon {
  display: inline-flex;
  align-items: center;
  font-style: normal;
  line-height: 0;
  color: inherit;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
}
</style>
