<template>
  <nav>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4" size="32">
          <v-img alt="DonEx" :src="logoImage"></v-img>
        </v-avatar>
        <v-btn
          v-for="link in links"
          :key="link.title"
          :text="link.title"
          variant="text"
          @click="navigate(link.path)"
        ></v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-container class="d-flex flex-row-reverse">
            <v-btn variant="text" @click="navigate('/#ytBlog')" icon="mdi-youtube"></v-btn>
          </v-container>
        </v-responsive>
      </v-container>
    </v-app-bar>
  </nav>
</template>

<script setup lang="ts">
import logoImage from '@/assets/sticker.png'
import useNavigation from '@/composables/navigation.js'

const { links, navigate } = useNavigation()
</script>
