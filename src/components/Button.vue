<script setup>
const props = defineProps({
  title: String,
  icon: String,
})

</script>

<template>

 <button class="btn btn-primary d-flex align-items-center gap-3 btn-quiz">
    <img :src="`src/assets/images/` + icon + `.svg`"/>
    <p>{{title}}</p>
</button>

</template>

<style scoped>
.btn-quiz {
    background: var(--clr-bg-buttons);
    border: none;
    color: var(--clr-text);
    font-weight: bold;
  }
</style>