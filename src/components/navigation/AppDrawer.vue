<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list density="compact">
      <v-list-subheader>Навигация</v-list-subheader>

      <v-list-item
        v-for="(item, i) in links"
        :key="i"
        :value="item"
        @click="navigate(item.path)"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title>{{ item.title }} </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import useNavigation from '@/composables/navigation.js'
import { computed } from 'vue'

const props = defineProps<{
  drawerState: boolean
  setDrawerState: (state: boolean) => void
  toggleDrawer: () => void
}>()

const { links, navigate } = useNavigation()

const drawer = computed({
  get() {
    return props.drawerState
  },
  set(state: boolean) {
    props.setDrawerState(state)
  },
})
</script>
