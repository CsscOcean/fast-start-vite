<script setup lang="ts">
import SvgMySQL from '@/assets/icons/dataSource/MySQL.svg';
import AppManage from '@/assets/icons/menu/appManage.svg';
import AppManageUrl from '@/assets/icons/menu/appManage.svg?url';
</script>

<template>
  <a-space>
    <VIcon icon="icon-park-outline:dislike" />
    <VIcon icon="icon-park-outline:search" />
    <VIcon icon="icon-park-outline:close-one" />
    <VIcon icon="icon-park-outline:close" />
    <VIcon icon="icon-park-outline:abdominal" />
    <VIcon icon="svg:dataSource-MySQL" />
    <VIcon>
      <SvgMySQL width="1em" />
    </VIcon>
    <VIcon>
      <AppManage width="1em" />
    </VIcon>
    <img :src="AppManageUrl" />
  </a-space>
  <div style="font-size: 24px">
    <VIcon icon="svg:dataSource-MySQL" />
    <VIcon>
      <AppManage width="1em" />
    </VIcon>
    <span style="font-size: 16px">MySQL</span>
    <VIcon icon="icon-park-outline:abdominal" />
    <VIcon>
      <SvgMySQL width="1em" />
    </VIcon>
  </div>
  <br />
  <a-space>
    <a-button>Default</a-button>
    <a-button type="primary">Primary</a-button>
    <a-button type="link">Success</a-button>
    <a-button type="text">Info</a-button>
    <a-button type="ghost">Warning</a-button>
    <a-button type="dashed">Danger</a-button>
  </a-space>
</template>

<style lang="less" scoped>
h5 {
  padding: 0;
  margin: 0;
}
</style>
