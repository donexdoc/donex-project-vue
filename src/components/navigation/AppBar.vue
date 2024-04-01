<template>
  <nav>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-app-bar-nav-icon class="d-sm d-md-none" @click="openDrawer"></v-app-bar-nav-icon>
        <v-avatar class="me-2" size="32">
          <v-img alt="DonEx" :src="logoImage"></v-img>
        </v-avatar>
        <div class="text-h6 me-2">
          <span class="text-red-accent-4">D</span>on<span class="text-indigo-darken-1">E</span>x
        </div>

        <div class="d-none d-md-flex">
          <v-btn
            v-for="link in links"
            :key="link.title"
            :text="link.title"
            variant="text"
            @click="navigateTo(link.path)"
          ></v-btn>
        </div>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-container class="d-flex flex-row-reverse">
            <v-btn variant="text" @click="navigateTo('/#ytBlog')" icon="mdi-youtube"></v-btn>
          </v-container>
        </v-responsive>
      </v-container>
    </v-app-bar>
  </nav>
</template>

<script setup lang="ts">
import logoImage from '@/assets/sticker.png'
import useNavigation from '@/composables/navigation.js'

const props = defineProps<{
  setDrawerState?: (state: boolean) => void
}>()

const { links, navigate } = useNavigation()

const navigateTo = (to: string) => {
  if (props.setDrawerState) {
    props.setDrawerState(false)
  }
  navigate(to)
}

const openDrawer = () => {
  if (props.setDrawerState) {
    props.setDrawerState(true)
  }
}
</script>
