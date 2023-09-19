
<script setup lang="ts">
import { kBlockTitle,kList,kListInput} from 'konsta/vue'
import kmIcon  from '@/common/icons/kmIcon.vue'
</script>
<template>
  <k-block-title>Configuración</k-block-title>
  <k-list inset-ios strong-ios>
    <k-list-input
      outline
      label="Precio x kilometros"
      floating-label
      type="number"
      placeholder="Precio x kilometros"
    >
      <template #media>
        <kmIcon />
      </template>
    </k-list-input>

    <k-list-input
      outline
      label="Password"
      floating-label
      type="password"
      placeholder="Your password"
    >
      <template #media>
        <demo-icon />
      </template>
    </k-list-input>

    <k-list-input
      outline
      label="E-mail"
      floating-label
      type="email"
      placeholder="Your e-mail"
    >
      <template #media>
        <demo-icon />
      </template>
    </k-list-input>

    <k-list-input
      outline
      label="URL"
      floating-label
      type="url"
      placeholder="URL"
    >
      <template #media>
        <demo-icon />
      </template>
    </k-list-input>

    <k-list-input
      outline
      label="Phone"
      floating-label
      type="tel"
      placeholder="Your phone number"
    >
      <template #media>
        <kmIcons />
      </template>
    </k-list-input>
  </k-list>
</template>


<style scoped>

</style>