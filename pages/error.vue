<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <h1>Error: {{ error?.message || 'Error desconocido' }}</h1>
  </div>
</template>