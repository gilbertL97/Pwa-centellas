<script setup lang="ts">
import { kPage, kNavbar, kLink } from 'konsta/vue'
import menuIcon from '@/common/icons/menuIcon.vue'
import { useMainMenu } from '@/composable/useMainMenu'
const { toggleMenu } = useMainMenu();
</script>
<template>
  <k-navbar centerTitle title="Centaxis" fontSizeMaterial="text-[18px]">
    <template #left>
      <k-link navbar iconOnly @click="() => toggleMenu()">
        <menu-icon />
      </k-link>
    </template>
  </k-navbar>
</template>
