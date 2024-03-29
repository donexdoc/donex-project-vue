<script setup lang="ts">
defineProps<{
  head: string
  text: string
}>()
</script>

<template>
  <div id="barFoo">
    <h1>{{ head }}</h1>
    <p>
      {{ text }}
    </p>
  </div>
</template>
