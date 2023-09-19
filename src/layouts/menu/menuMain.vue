
<script setup lang="ts">
import { kPage, kNavbar, kPanel, kLink, kBlock, kMenuList, kMenuListItem } from 'konsta/vue'
import closeIcon from '@/common/icons/closeIcon.vue'
import { useMainMenu } from '@/composable/useMainMenu'
const { toggleMenu, menuOpenRef, selectedRef, setSelected } = useMainMenu();
</script>
<template>
  <k-panel side="left" :opened="menuOpenRef" @backdropclick="() => toggleMenu()">
    <k-page>
      <k-navbar title="Menu">
        <template #right>
          <k-link navbar @click="() => toggleMenu()"><close-icon /></k-link>
        </template>
      </k-navbar>
      <k-block>
        <k-menu-list>
          <k-menu-list-item title="Home" :active="selectedRef === 'home'" @click="() => setSelected('home', true)">
            <template #media> </template>
          </k-menu-list-item>

          <k-menu-list-item title="About" :active="selectedRef === 'about'" @click="() => setSelected('about', true)">
            <template #media> </template>
          </k-menu-list-item>
          <k-menu-list-item
            title="Configuración" :active="selectedRef === 'config'"
            @click="() => setSelected('config', true)">
            <template #media> </template>
          </k-menu-list-item>
        </k-menu-list>
      </k-block>
    </k-page>
  </k-panel>
</template>

<style scoped></style>