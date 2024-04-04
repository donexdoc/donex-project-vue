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
        За свою карьеру я поработал в разных командах, в компаниях разных размеров. От небольших
        компаний в сфере телевидения до гигантов авиации.
      </p>

      <v-row class="my-3">
        <v-col xs="12" sm="12" md="4">
          <CompanyCard title="Аеroflot">
            <template v-slot:avatar>
              <v-img alt="Aeroflot" :src="AeroflotLogo"></v-img>
            </template>
            <template v-slot:time> 3 года </template>
            <template v-slot:description>
              <div>
                Сложные самостоятельные проекты в сфере технического обслуживания воздушных судов.
              </div>

              <v-list lines="two">
                <v-list-item
                  title="Чек-лист ОТК"
                  subtitle="Контроль качества технического обслуживания"
                ></v-list-item>
                <v-list-item
                  title="СКУД администратор"
                  subtitle="Контроль времени работы сотрудников"
                ></v-list-item>
                <v-list-item
                  title="Умный склад"
                  subtitle="Система оповещения нарушений в температуре и влажности склада"
                ></v-list-item>
              </v-list>
              JavaScript, TypeScript, Node JS, Vue, Vuetify, Vuex, React, Redux, MUI, Next JS, Nest
              JS
            </template>
          </CompanyCard>
        </v-col>

        <v-col xs="12" sm="12" md="4">
          <CompanyCard title="Beeline">
            <template v-slot:avatar>
              <v-img alt="Beeline" :src="BeelineLogo"></v-img>
            </template>
            <template v-slot:time> 2 стажировки </template>
            <template v-slot:description>
              <div>
                Разработка новых и доработка существующих проектов в компании в виде web-сервисов.
              </div>

              <v-list lines="two">
                <v-list-item
                  title="Корпоративный портал"
                  subtitle="Портал оценки работы коллег"
                ></v-list-item>
                <v-list-item
                  title="Парсер выгрузки PCRF"
                  subtitle="Выгрузка и фильтрация данных пользователей"
                ></v-list-item>
              </v-list>

              Java, Python, Django, JavaScript, Bootstrap, JQuery
            </template>
          </CompanyCard>
        </v-col>

        <v-col xs="12" sm="12" md="4">
          <CompanyCard title="Telebreeze">
            <template v-slot:avatar>
              <v-img alt="Telebreeze" :src="TelebreezeLogo"></v-img>
            </template>
            <template v-slot:time> 6 месяцев стажировки </template>
            <template v-slot:description>
              <div>
                Доработка клиентских приложений интернет-телевидения. Оптимизация приложений под
                Android, IOS, ТВ-приставки.
              </div>

              <v-list lines="two">
                <v-list-item
                  title="Приложение Android"
                  subtitle="Приложение интернет-телевидения для сматрфонов и приставок."
                ></v-list-item>
                <v-list-item
                  title="Приложение IOS"
                  subtitle="Приложение интернет-телевидения для IOS"
                ></v-list-item>
              </v-list>

              Java, Objective-c
            </template>
          </CompanyCard>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
