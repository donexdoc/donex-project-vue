<template>
  <v-container id="aboutMe" fluid class="bg-blue-darken-2 pa-xs-5 pa-sm-10 pa-md-16">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" md="8" lg="6">
          <h1 class="text-h4 mb-5">Обо мне</h1>
          <p class="text-subtitle-1">
            Я - Донков Александр, мне {{ age }}. <br />
            Уже продолжительное время, я занимаюсь web-разрботкой и являюсь Fullstack специалистом.
            Имею обширный опыт в разработке приложений разных уровней сложностей. От простых
            лендингов, до больших сервисов контроля качества.
          </p>
          <br />
          <p class="text-subtitle-1">
            Разработкой web-приложений я занимаюсь еще со школьных времен. И активно развиваюсь в
            этом направлении по сей день. Пишу монолиты, микросервисы, API, CRM системы. Развиваю
            свои навыки как во Frontend разработке, так и в Backend. <br />
            Всегда стараюсь поддерживать актуальные знания, пробовать новые технологии и следить за
            трендами. Это помогает профессионально развиваться и мотивирует на углубленное изучение
            IT сферы.
          </p>
          <br />
          <p class="text-subtitle-1">
            В свободное от работы время, я веду свой канал на платформах YouTube, VK и Dzen. <br />
            В своем блоге, я занимаюсь фановым программированием, делаю проекты по играм,
            рассказываю о периферии и компьютерных железках.
          </p>
        </v-col>
        <v-col cols="12" xs="12" md="4" lg="6" class="d-flex justify-center">
          <v-img
            :src="adatpiveImg"
            alt="adaptive"
            class="pa-xs-16 pa-sm-16"
            max-width="320px"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import adatpiveImg from '@/assets/adaptive.png'
import { ref } from 'vue'

const currentDay = new Date()
const birthDay = new Date(1997, 8, 7)

const yearsDif = currentDay.getFullYear() - birthDay.getFullYear()
const monthsDif = currentDay.getMonth() - birthDay.getMonth()
const dateDif = currentDay.getDate() - birthDay.getDate()
const age = ref(yearsDif)

if ((monthsDif === 0 && dateDif < 0) || monthsDif < 0) {
  age.value--
}
</script>
