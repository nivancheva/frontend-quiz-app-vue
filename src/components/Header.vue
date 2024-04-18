<script setup>
import Toggle from './Toggle.vue'
</script>

<template>
    <div class="nav d-flex justify-content-between container">
        <div></div>
        <Toggle />
    </div>
</template>

<style scoped>

.nav {
    margin-block: 3rem;
}

@media (min-width:768px) {
    .nav {
      margin-block: 5rem;
    }
 }
</style>