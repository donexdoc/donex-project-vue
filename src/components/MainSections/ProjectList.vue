<script setup lang="ts">
import ProjectInfo from './Parts/ProjectInfo.vue'
</script>

<template>
  <v-container id="projectList" fluid class="pa-xs-5 pa-sm-10 pa-md-16">
    <v-container>
      <h1 class="text-h4 mb-5">Проекты</h1>
      <p class="text-h6">
        Мне удалось поработать над большим количеством проектов. Здесь описаны самые интересные из
        них. Смоделированы и реализованы мною с нуля до релиза и претерпевшие несколько итераций и
        крупных доработок.
      </p>

      <div>
        <ProjectInfo>
          <template v-slot:title> Чек-лист ОТК </template>
          <template v-slot:description>
            Web-приложение (PWA с подходом mobile first), для ведения проверок качества, выполняемых
            технических работ, при обслуживании воздушных судов. JavaScript (Node js), Express,
            Postgres, Vue js, Vuetify js. Новость в прессе –
            <v-btn
              variant="text"
              color="blue"
              density="comfortable"
              href="https://atechnics.ru/news/4184/"
              target="__blank"
              >atechnics.ru</v-btn
            >
          </template>
        </ProjectInfo>
        <v-divider class="border-opacity-75" color="blue"></v-divider>
        <ProjectInfo>
          <template v-slot:title> Умный склад </template>
          <template v-slot:description>
            Web-приложение + бот Telegram, с мониторингом температуры и влажности на складе химии. В
            случае нарушения условий хранения, рабочий персонал оповещается через Telegram бота. Для
            web-приложения использовал TypeScript, Nest js, Postgres, Vue js, Vuetify js. Для
            hardware-части использовал ESP8266 с датчиками влажности и температуры. Прошивку для
            микроконтроллера писал на С++. Этот проект позволил в кратчайшие сроки сохранить запасы
            технических жидкостей на складе.
          </template>
        </ProjectInfo>
        <v-divider class="border-opacity-75" color="blue"></v-divider>
        <ProjectInfo>
          <template v-slot:title> СКУД администратор </template>
          <template v-slot:description>
            Web-приложениe, отслеживающее общее время работы сотрудников через пропускную систему
            Perco. Приложение использует данные о сотрудниках из системы Perco, сопоставляет с
            данными из 1C и делает анализ суммарного времени, проведенного каждым сотрудником в
            офисе. Использовались TypeScript, Nest js, Postgres, Firebird (на стороне Perco), React
            js, Redux, Material UI.
          </template>
        </ProjectInfo>
        <v-divider class="border-opacity-75" color="blue"></v-divider>
        <ProjectInfo>
          <template v-slot:title> Расширение для Google Chrome </template>
          <template v-slot:description>
            Расширение с автоматизацией сборки информации по транспондерам. Приложение собирает все
            данные по транспондерам в личном кабинете компании и генерирует отчетные данные исходя
            из лимитов каждого сотрудника. JavaScript, HTML, CSS, Bootstrap.
          </template>
        </ProjectInfo>
      </div>
    </v-container>
  </v-container>
</template>
