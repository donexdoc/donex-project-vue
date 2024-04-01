<template>
  <v-app id="inspire">
    <AppDrawer
      :set-drawer-state="setDrawerState"
      :toggle-drawer="toggleDrawer"
      :drawer-state="drawerState"
    />
    <header>
      <AppBar :set-drawer-state="setDrawerState" />
    </header>
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2"></v-col>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
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
