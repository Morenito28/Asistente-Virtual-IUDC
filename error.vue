<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  message: string
}>()
</script>

<template>
  <div>
    <h1>Error</h1>
    <p>{{ props.message }}</p>
  </div>
</template>
