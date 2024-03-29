<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNavigation from '@/components/navigation/HeaderNavigation.vue'
</script>

<template>
  <header>
    <HeaderNavigation />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
