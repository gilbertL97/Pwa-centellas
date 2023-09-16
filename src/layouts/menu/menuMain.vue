
<script setup lang="ts">
import { kPage, kNavbar, kPanel, kBlock, kFab, kLink } from 'konsta/vue'
import menuIcon from '@/common/icons/menuIcon.vue'
import { useMainMenu } from '@/composable/useMainMenu'
const { toggleMenu, menuOpenRef } = useMainMenu();
</script>
<template>
    <k-panel side="left" :opened="menuOpenRef" @backdropclick="() => toggleMenu()">
        <k-page>
            <k-navbar title="Menu">
                <template #right>
                    <k-link navbar @click="() => toggleMenu()"><menu-icon /></k-link>
                </template>
            </k-navbar>
        </k-page>
    </k-panel>
</template>

<style scoped></style>