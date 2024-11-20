<script setup>
import { ref, computed, onMounted } from "vue";
const props = defineProps({
  subject: Object
})

const currentQuestion = ref(0);
const selectedAnswer = ref(null);
const answers = ref([]);
const isSelected = ref(false);
const subAnswer = ref( ['A', 'B', 'C', 'D']);

onMounted(() => {
    const savedAnswers = localStorage.getItem('quizAnswers');
    if (savedAnswers) {
        answers.value = JSON.parse(savedAnswers);
    }
});

function submitAnswer() {
    if (!isSelected.value) {
        return; 
    }

    if (selectedAnswer.value !== null) {
        answers.value[currentQuestion.value] = selectedAnswer.value;     
    }

    localStorage.setItem('quizAnswers', JSON.stringify(answers.value));

    if (currentQuestion.value < props.subject.questions.length - 1) {
        currentQuestion.value++;
        selectedAnswer.value = null;
        isSelected.value = false;
    }
}

function selectOption(answer) {
    selectedAnswer.value = answer;
    isSelected.value = true;
}

function indexToLetter(index) {
    return String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
}

function progressBarWidth() {
    const totalSteps = props.subject.questions.length;
    const stepPercentage = 100 / totalSteps;
    let progress = stepPercentage * (currentQuestion.value + 1);
    return Math.min(progress, 100);
}

</script>

<template>

    <div class="container question-wrapper">
        <div class="question-container">
            <p class="sub-title mb-3">Question {{ currentQuestion + 1 }} of {{ subject.questions.length }}</p>
            <h2>{{ subject.questions[currentQuestion].question }}</h2>
            <div class="progress-bar">
                <div class="progress" :style="{ width: progressBarWidth() + '%' }"></div>
            </div>
        </div>

        <div class="d-grid gap-4 col-md">
            <button v-for="(options, idex) in subject.questions[currentQuestion].options" :key="idex" @click="selectOption(options)" class="d-flex align-items-center gap-3 btn-quiz">
                <p class="bg-option option">{{indexToLetter(idex)}}</p>
                <p>{{options}}</p>
            </button>
        </div>

        <button class="btn btn_submit" @click="submitAnswer">Submit Answer</button>
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
    border-radius: .5rem;
    transition: width 0.3s ease;
}

.btn_submit {
    background: var(--clr-purple);
    color: var(--clr-white);
    border-radius: .75rem;
    width: 100%;
}

.option {
    background: var(--clr-text);
    color: var(--clr-bg-body);
    width: 40px;
    aspect-ratio: 1;
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