<template>
  <div class="floating-button-area">
    <v-btn icon="mdi-arrow-up" class="my-4" color="blue" size="64" @click="scrollToTop"></v-btn>
  </div>
</template>

<script setup lang="ts">
import { useGoTo } from 'vuetify'

const goTo = useGoTo()

const scrollToTop = () => {
  goTo(0)
}
</script>

<style scoped>
.floating-button-area {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
