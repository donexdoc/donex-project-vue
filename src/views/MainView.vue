<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue'
import SummarySkills from '@/components/SummarySkills.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import YTBlog from '@/components/YTBlog.vue'
import AboutMe from '@/components/AboutMe.vue'
import main from '@/utils/main.js'
import HelloWorld from '@/components/HelloWorld.vue'
import BarFoo from '@/components/BarFoo.vue'
main.mainUtil()
</script>

<template>
  <AboutMe />
  <SummarySkills />
  <WorkExperience />
  <ProjectList />
  <YTBlog />
  <HelloWorld msg="kek" />
  <BarFoo
    head="Culpa nostrud nisi reprehenderit voluptate officia excepteur non consequat voluptate."
    text="Eiusmod tempor magna quis excepteur labore Lorem minim ipsum ex in consequat minim culpa Lorem. Minim mollit excepteur laboris aute proident cillum consequat laboris. Minim cillum duis excepteur veniam occaecat consequat magna reprehenderit elit nisi irure. In qui deserunt labore consequat."
  />
</template>
