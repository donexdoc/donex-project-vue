<script setup lang="ts">
import CompanyCard from './Parts/CompanyCard.vue'
import BeelineLogo from '@/assets/beeline-logo.png'
import AeroflotLogo from '@/assets/aeroflot-logo.png'
import TelebreezeLogo from '@/assets/telebreeze-logo.png'
</script>

<template>
  <v-container id="workEsperience" fluid class="bg-grey-darken-3 pa-xs-5 pa-sm-10 pa-md-16">
    <v-container>
      <h1 class="text-h4 mb-5">Опыт работы</h1>
      <p>
        Более 6 лет я работал на фрилансе, выполняя заказы разных уровней сложности. Лендинги,
        блоги, сайты-визитки, интернет-магазины, проекты под ключ.
      </p>
      <p>
        За свою карьеру я работал в разных командах, в компаниях разных размеров. От небольших
        компаний в сфере телевидения до гигантов авиации.
      </p>

      <v-row class="my-3">
        <v-col cols="12" xs="12" sm="12" md="4">
          <CompanyCard title="Аеroflot">
            <template v-slot:avatar>
              <v-img alt="Aeroflot" :src="AeroflotLogo"></v-img>
            </template>
            <template v-slot:time> 3 года </template>
            <template v-slot:description>
              <div>
                Сложные самостоятельные проекты в сфере технического обслуживания воздушных судов.
              </div>
              <v-list lines="one">
                <v-list-item title="Чек-лист ОТК"></v-list-item>
                <v-list-item title="СКУД администратор"></v-list-item>
                <v-list-item title="Умный склад"></v-list-item>
              </v-list>
            </template>
            <template v-slot:techs>
              <v-chip
                class="ma-1"
                color="amber-darken-4"
                prepend-icon="mdi-language-javascript"
                size="small"
                variant="elevated"
                >JavaScript</v-chip
              >
              <v-chip
                class="ma-1"
                color="blue-darken-3"
                prepend-icon="mdi-language-typescript"
                size="small"
                variant="elevated"
                >TypeScript</v-chip
              >
              <v-chip
                class="ma-1"
                color="green"
                prepend-icon="mdi-nodejs"
                size="small"
                variant="elevated"
                >Node JS</v-chip
              >
              <v-chip
                class="ma-1"
                color="green-darken-3"
                prepend-icon="mdi-vuejs"
                size="small"
                variant="elevated"
                >Vue + Vuex + Vuetify</v-chip
              >
              <v-chip
                class="ma-1"
                color="blue"
                prepend-icon="mdi-react"
                size="small"
                variant="elevated"
                >React + Redux + MUI</v-chip
              >
              <v-chip
                class="ma-1"
                color="pink"
                prepend-icon="mdi-code-braces"
                size="small"
                variant="elevated"
                >Nest JS</v-chip
              >
              <v-chip
                class="ma-1"
                color="blue"
                prepend-icon="mdi-code-braces"
                size="small"
                variant="elevated"
                >Next JS</v-chip
              >
            </template>
          </CompanyCard>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="4">
          <CompanyCard title="Beeline">
            <template v-slot:avatar>
              <v-img alt="Beeline" :src="BeelineLogo"></v-img>
            </template>
            <template v-slot:time> 2 стажировки </template>
            <template v-slot:description>
              <div>
                Разработка новых и доработка существующих проектов в компании в виде web-сервисов.
              </div>

              <v-list lines="one">
                <v-list-item title="Корпоративный портал"></v-list-item>
                <v-list-item title="Парсер выгрузки PCRF"></v-list-item>
              </v-list>
            </template>
            <template v-slot:techs>
              <v-chip
                class="ma-1"
                color="red"
                prepend-icon="mdi-language-java"
                size="small"
                variant="elevated"
                >Java</v-chip
              >

              <v-chip
                class="ma-1"
                color="blue-darken-3"
                prepend-icon="mdi-language-python"
                size="small"
                variant="elevated"
                >Python</v-chip
              >

              <v-chip
                class="ma-1"
                color="green-darken-3"
                prepend-icon="mdi-code-braces"
                size="small"
                variant="elevated"
                >Django</v-chip
              >

              <v-chip
                class="ma-1"
                color="amber-darken-4"
                prepend-icon="mdi-language-javascript"
                size="small"
                variant="elevated"
                >JavaScript</v-chip
              >

              <v-chip
                class="ma-1"
                color="pink"
                prepend-icon="mdi-bootstrap"
                size="small"
                variant="elevated"
                >Bootstrap</v-chip
              >

              <v-chip
                class="ma-1"
                color="amber-darken-4"
                prepend-icon="mdi-jquery"
                size="small"
                variant="elevated"
                >JQuery</v-chip
              >
            </template>
          </CompanyCard>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="4">
          <CompanyCard title="Telebreeze">
            <template v-slot:avatar>
              <v-img alt="Telebreeze" :src="TelebreezeLogo"></v-img>
            </template>
            <template v-slot:time> 6 месяцев стажировки </template>
            <template v-slot:description>
              <div>
                Доработка клиентских приложений интернет-телевидения. Оптимизация приложений под
                Android, iOS, ТВ-приставки.
              </div>

              <v-list lines="one">
                <v-list-item title="Приложение Android"></v-list-item>
                <v-list-item title="Приложение iOS"></v-list-item>
              </v-list>
            </template>
            <template v-slot:techs>
              <v-chip
                class="ma-1"
                color="red"
                prepend-icon="mdi-language-java"
                size="small"
                variant="elevated"
                >Java</v-chip
              >

              <v-chip
                class="ma-1"
                color="amber-darken-5"
                prepend-icon="mdi-code-brackets"
                size="small"
                variant="elevated"
                >Objective-c</v-chip
              >
            </template>
          </CompanyCard>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
