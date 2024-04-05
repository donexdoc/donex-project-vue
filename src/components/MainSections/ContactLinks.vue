<template>
  <v-container id="contacts" fluid class="bg-grey-darken-4 text-center pa-xs-5 pa-sm-10 pa-md-16">
    <v-container>
      <h1 class="text-h4 mb-5">Контакты</h1>
      <p class="text-subtitle-1">
        По всем предложениям вы можете обращаться на почту:
        <v-btn v-if="emailHide" color="blue" variant="text" @click="showMail">{{
          emailDisplay
        }}</v-btn>
        <v-btn v-else color="blue" variant="text" @click="copyMail"> {{ emailDisplay }}</v-btn>
      </p>

      <p class="text-subtitle-1">
        Github (редко публикуюсь):

        <v-btn color="blue" variant="text" href="https://github.com/donexdoc" target="__blank"
          >github.com/donexdoc</v-btn
        >
      </p>
    </v-container>
  </v-container>

  <v-snackbar v-model="snackbar" :timeout="snackTimeout">
    <p class="text-center">
      {{ snackMessage }}
    </p>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const SNACK_DEFAUT_TIMEOUT = 2000
const SNACK_ERROR_TIMEOUT = 5000

const snackbar = ref(false)
const emailHide = ref(true)
const snackTimeout = ref(SNACK_DEFAUT_TIMEOUT)
const snackMessage = ref('')
const emailDisplay = ref('Показать')

const EMAIL = 'donexcode@gmail.com'

const showToast = (message: string, timeout?: number) => {
  if (timeout !== undefined) {
    snackTimeout.value = timeout
  } else {
    snackTimeout.value = SNACK_DEFAUT_TIMEOUT
  }

  snackMessage.value = message
  snackbar.value = true
}

const copyMail = () => {
  navigator.clipboard
    .writeText(EMAIL)
    .then(() => {
      showToast('Скопировано в буфер обмена')
      throw Error('kek')
    })
    .catch(() => {
      showToast(`Ваш браузер не поддерживает копирование. ${EMAIL}`, SNACK_ERROR_TIMEOUT)
    })
}

const showMail = () => {
  emailDisplay.value = EMAIL
  emailHide.value = false

  showToast('Нажмите еще раз, чтобы скопировать')
}
</script>
