<script setup>
import { reactive, computed } from 'vue'
const props = defineProps({
  title: String,
  icon: String,
})


</script>

<template>

 <button class="btn btn-primary d-flex align-items-center gap-3 btn-quiz">
    <div :class='["icon", `icon-${title}`]'>
        <img :src="`src/assets/images/` + icon + `.svg`" :alt="title"/>
    </div>
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

.icon {
    padding: .5rem;
    border-radius: .5rem;
}

.icon-HTML {
    background: var(--clr-html);
}

.icon-CSS {
    background: var(--clr-css);
}

.icon-JavaScript {
    background: var(--clr-js);
}

.icon-Accessibility {
    background: var(--clr-a);
}

</style>