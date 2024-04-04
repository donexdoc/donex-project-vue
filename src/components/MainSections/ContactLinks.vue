<template>
  <v-container id="contacts" fluid class="bg-grey-darken-4 text-center pa-xs-5 pa-sm-10 pa-md-16">
    <v-container>
      <h1 class="text-h4 mb-5">Контакты</h1>
      <p class="text-subtitle-1">
        По всем предложениям вы можете обращаться на почту:
        <v-btn v-if="mailHide" color="blue" variant="text" @click="showMail">{{
          emailDisplay
        }}</v-btn>
        <v-btn v-else color="blue" variant="text" @click="copyMail"> {{ emailDisplay }}</v-btn>
      </p>

      <p class="text-subtitle-1">
        Гитхаб (редко публикуюсь):

        <v-btn color="blue" variant="text" href="https://github.com/donexdoc" target="__blank"
          >github.com/donexdoc</v-btn
        >
      </p>
    </v-container>
  </v-container>

  <v-snackbar v-model="snackbar" :timeout="2000">
    <p class="text-center">
      {{ snackMessage }}
    </p>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const snackbar = ref(false)
const mailHide = ref(true)
const snackMessage = ref('')
const emailDisplay = ref('Показать')

const EMAIL = 'donexcode@gmail.com'

const copyMail = () => {
  navigator.clipboard.writeText(EMAIL).then(() => {
    snackMessage.value = 'Скопировано в буфер обмена'
    snackbar.value = true
  })
}

const showMail = () => {
  snackMessage.value = 'Нажмите еще раз, чтобы скопировать'
  emailDisplay.value = EMAIL
  mailHide.value = false
  snackbar.value = true
}
</script>
