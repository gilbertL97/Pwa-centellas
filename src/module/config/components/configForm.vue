
<script setup lang="ts">
import { kBlockTitle,kList,kListInput} from 'konsta/vue'
import kmIcon  from '@/common/icons/kmIcon.vue'
import faceIcon  from '@/common/icons/faceIcon.vue'
</script>
<template>
  <k-block-title medium colors.textMaterial="text-red-600">Configuración</k-block-title>
  <k-list strong inset>
    <k-list-input
      outline
      label="Precio x kilometros"
      type="number"
      min="0"
      step="0.5"
      placeholder="Precio x kilometros"
    >
      <template #media>
        <kmIcon />
      </template>
    </k-list-input>

    <k-list-input
      outline
      label="Nombre"
      type="text"
      placeholder="Nombre"
    >
      <template #media>
        <face-icon />
      </template>
    </k-list-input>
  </k-list>
</template>


<style scoped>

</style>