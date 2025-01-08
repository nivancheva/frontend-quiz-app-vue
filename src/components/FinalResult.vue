<script setup>
import { ref, computed, onMounted, onUpdated } from "vue";
import quizzes from ".././data.json"
const props = defineProps({
  corectAnswers: Number
})

</script>

<template>

    <div class="container d-flex justify-content-center">
        <div class="score-container text-center">
            <div class="d-flex align-items-center mb-3">
                <div :class='["bg-option me-2", `icon-${quizzes[0].title}`]'>
                    <img :src="`src/assets/images/` + quizzes[0].icon + `.svg`" :alt="quizzes[0].title"/>
                </div>
                <h4 class="m-0">{{quizzes[0].title}}</h4>
            </div>
            <h1>Quiz completed!<br>You score is </h1>
            <p class="big-fs">6</p>
            <p class="sub-title">out of 10</p>        
        </div>
    </div>

</template>

<style scoped>
.score-container {
    background: var(--clr-bg-buttons);
    border-radius: 1rem;
    padding: 1rem;
    width: 100%;

    display: grid;
    place-items: center;
}

@media (min-width:992px) {
    .score-container {
      width: 50%;
    }
}

.big-fs {
    font-size: 9rem;
}
</style>