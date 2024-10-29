<script setup>
import Question from '../components/Question.vue'
import questions from '../data.json'
</script>

<template>
  <div>
    <Question :subject="questions[3]"/>
  </div>
</template>

<style scoped>

</style>