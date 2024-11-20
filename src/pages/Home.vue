<script setup>
import Toggle from '../components/Toggle.vue'
import Button from '../components/Button.vue'
import quizzes from "../data.json"

</script>

<template>
<div class="container">

  <div class="row main-content">
    <header class="col-md title-container">
      <h1 class="title">Welcome to the <strong class="d-block mb-3">Frontend Quiz!</strong></h1>
      <p class="fst-italic fs-6 sub-title">Pick a subject to get started.</p>
    </header>


    <div class="d-grid gap-4 col-md">
      <Button v-for="quiz in quizzes" v-bind="quiz" :key="quiz.id"/>
    </div>
  </div>
</div>
</template>

<style scoped>
  .title {
    color: var(--clr-text)g;
  }

  @media (max-width:767px) {
    .title-container {
      margin-bottom: 4rem;
    }
  }

  @media (min-width:768px) {

}

</style>