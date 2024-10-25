<script setup>
import questions from '../data.json'
const props = defineProps({
  subject: Object
})
</script>

<template>
  <div class="container question-wrapper">
    <div class="question-container">
        <p>Question 1 of 10 </p>
        <h2>What does HTML stand for?</h2>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
    </div>

    <div>
        <div>
            <div class="d-flex">
                <p>A</p>
                <p>4.5:1</p>
            </div>
        </div>
        <button class="btn btn_submit">Submit Answer</button>
    </div>
</div>
</template>

<style scoped>
.question-wrapper {
    display: grid;
    gap: 2.5rem;
}

.question-container {
    position: relative;
}

.progress-bar {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: var(--clr-bg-buttons); 
    height: 7px;
    border-radius: .5rem;
}

.progress {
    height: 70%;
    background-color: var(--clr-purple);
    width: 75%;
    border-radius: .5rem;
}

.btn_submit {
    background: var(--clr-purple);
    color: var(--clr-white);
    border-radius: .75rem;
    width: 100%;
}

@media (max-width:767px) {
    .question-wrapper {
      gap: 4rem;
    }
  }

@media (min-width:768px) {
    .question-wrapper {
      grid-template-columns: repeat(2, 1fr);
      gap: 10rem;
    }
 }
</style>