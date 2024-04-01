<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue'
import SummarySkills from '@/components/SummarySkills.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import YTBlog from '@/components/YTBlog.vue'
import AboutMe from '@/components/AboutMe.vue'
import main from '@/utils/main.js'
import HelloWorld from '@/components/HelloWorld.vue'
main.mainUtil()
</script>

<template>
  <AboutMe />
  <SummarySkills />
  <WorkExperience />
  <ProjectList />
  <YTBlog />
  <YTBlog />
  <YTBlog />
  <YTBlog />
  <YTBlog />
  <YTBlog />
  <YTBlog />
  <HelloWorld msg="kek" />
</template>
