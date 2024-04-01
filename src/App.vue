<template>
  <v-app>
    <AppDrawer
      :set-drawer-state="setDrawerState"
      :toggle-drawer="toggleDrawer"
      :drawer-state="drawerState"
    />
    <header>
      <AppBar :set-drawer-state="setDrawerState" />
    </header>
    <v-main class="bg-grey-lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from '@/components/navigation/AppBar.vue'
import useDrawer from './composables/drawer.js'
import AppDrawer from './components/navigation/AppDrawer.vue'

const { drawerState, setDrawerState, toggleDrawer } = useDrawer()
</script>

<style scoped></style>
