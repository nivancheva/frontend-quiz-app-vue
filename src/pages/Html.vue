<script setup>
import { ref, computed } from "vue";
import Question from '../components/Question.vue'
import questions from '../data.json'

</script>

<template>
  <div>
    <Question :subject="questions[0]"/>
  </div>
</template>

<style scoped>

</style>