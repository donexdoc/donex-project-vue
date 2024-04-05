<script setup lang="ts">
import ProjectList from '@/components/MainSections/ProjectList.vue'
import SummarySkills from '@/components/MainSections/SummarySkills.vue'
import WorkExperience from '@/components/MainSections/WorkExperience.vue'
import YTBlog from '@/components/MainSections/YTBlog.vue'
import AboutMe from '@/components/MainSections/AboutMe.vue'
import ContactLinks from '@/components/MainSections/ContactLinks.vue'
import ScrollFab from '@/components/Navigation/ScrollFab.vue'
</script>

<template>
  <AboutMe />
  <SummarySkills />
  <WorkExperience />
  <ProjectList />
  <YTBlog />
  <ContactLinks />
  <ScrollFab />
</template>
