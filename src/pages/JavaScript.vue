<script setup>
import Question from '../components/Question.vue'
import questions from '../data.json'
</script>

<template>
 <div>
    <Question :subject="questions[2]"/>
  </div>
</template>

<style scoped>

</style>