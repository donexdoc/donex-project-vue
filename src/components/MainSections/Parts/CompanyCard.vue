<template>
  <v-card class="h-100" :title="props.title">
    <template v-slot:prepend>
      <v-avatar size="32">
        <slot name="avatar"></slot>
      </v-avatar>
    </template>
    <v-card-item>
      <v-card-subtitle>
        <slot name="time"></slot>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <slot name="description"></slot>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>
