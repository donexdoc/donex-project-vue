<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from '@/components/navigation/AppBar.vue'
</script>

<template>
  <v-app id="inspire">
    <header>
      <AppBar />
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

<style scoped></style>
