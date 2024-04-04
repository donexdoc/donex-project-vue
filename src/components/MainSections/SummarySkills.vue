<script setup lang="ts"></script>

<template>
  <v-container id="summarySkills" fluid class="pa-xs-5 pa-sm-10 pa-md-16">
    <v-container>
      <h1 class="text-h4 mb-5">Мои скиллы</h1>
      <p class="text-subtitle-1">
        В своей сфере, я использую профессиональные инструменты. Мои основные знания:
      </p>
      <v-container class="text-center">
        <v-chip
          class="ma-1"
          color="amber-darken-4"
          prepend-icon="mdi-language-javascript"
          size="x-large"
          variant="elevated"
          >JavaScript</v-chip
        >
        <v-chip
          class="ma-1"
          color="blue-darken-3"
          prepend-icon="mdi-language-typescript"
          size="x-large"
          variant="elevated"
          >TypeScript</v-chip
        >
        <v-chip
          class="ma-1"
          color="green"
          prepend-icon="mdi-nodejs"
          size="x-large"
          variant="elevated"
          >Node JS</v-chip
        >
        <v-chip
          class="ma-1"
          color="green-darken-3"
          prepend-icon="mdi-vuejs"
          size="x-large"
          variant="elevated"
          >Vue JS</v-chip
        >
        <v-chip class="ma-1" color="blue" prepend-icon="mdi-react" size="x-large" variant="elevated"
          >React</v-chip
        >
        <v-chip
          class="ma-1"
          color="amber-darken-4"
          prepend-icon="mdi-code-braces"
          size="x-large"
          variant="elevated"
          >Express JS</v-chip
        >
        <v-chip
          class="ma-1"
          color="pink"
          prepend-icon="mdi-code-braces"
          size="x-large"
          variant="elevated"
          >Nest JS</v-chip
        >
        <v-chip
          class="ma-1"
          color="blue"
          prepend-icon="mdi-code-braces"
          size="x-large"
          variant="elevated"
          >Next JS</v-chip
        >
        <v-chip
          class="ma-1"
          color="purple-darken-3"
          prepend-icon="mdi-code-braces"
          size="x-large"
          variant="elevated"
          >Prisma ORM</v-chip
        >
        <v-chip
          class="ma-1"
          color="blue"
          prepend-icon="mdi-database"
          size="x-large"
          variant="elevated"
          >PostgreSQL</v-chip
        >
        <v-chip
          class="ma-1"
          color="blue"
          prepend-icon="mdi-docker"
          size="x-large"
          variant="elevated"
          >Docker</v-chip
        >
      </v-container>
    </v-container>
  </v-container>
</template>
