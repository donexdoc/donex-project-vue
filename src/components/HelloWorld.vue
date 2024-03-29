<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Hello world component</h3>
    <br />
  </div>
</template>

<style scoped></style>
