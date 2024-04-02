<script setup lang="ts"></script>

<template>
  <v-container id="summarySkills" fluid class="pa-xs-5 pa-sm-10 pa-md-16">
    <v-container>
      <h1 class="text-h4 mb-5">Мои скиллы</h1>
      <p class="text-subtitle-1">
        В своей сфере, я использую профессиональные инструменты. Мои основные знания:
      </p>
      <v-container>
        <v-chip class="ma-1" color="amber-darken-4" prepend-icon="mdi-language-javascript"
          >JavaScript</v-chip
        >
        <v-chip class="ma-1" color="blue-darken-3" prepend-icon="mdi-language-typescript"
          >TypeScript</v-chip
        >
        <v-chip class="ma-1" color="green" prepend-icon="mdi-nodejs">Node JS</v-chip>
        <v-chip class="ma-1" color="green-darken-3" prepend-icon="mdi-vuejs">Vue JS</v-chip>
        <v-chip class="ma-1" color="blue" prepend-icon="mdi-react">React</v-chip>
        <v-chip class="ma-1" color="amber-darken-4" prepend-icon="mdi-code-braces"
          >Express JS</v-chip
        >
        <v-chip class="ma-1" color="pink" prepend-icon="mdi-code-braces">Nest JS</v-chip>
        <v-chip class="ma-1" color="blue" prepend-icon="mdi-code-braces">Next JS</v-chip>
        <v-chip class="ma-1" color="purple-darken-3" prepend-icon="mdi-code-braces"
          >Prisma ORM</v-chip
        >
        <v-chip class="ma-1" color="blue" prepend-icon="mdi-database">PostgreSQL</v-chip>
        <v-chip class="ma-1" color="blue" prepend-icon="mdi-docker">Docker</v-chip>
      </v-container>
    </v-container>
  </v-container>
</template>
