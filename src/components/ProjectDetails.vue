<script setup lang="ts">
import LangBar from './LangBar.vue'

let props = defineProps(['proj_details'])

</script>

<template>
    <div class="card-details">
        <div class="langs" v-for="(perc, lang) in proj_details.langs">
            <LangBar :lang="lang" :perc="perc" />
        </div>

        <div v-html="proj_details.description"/>
    </div>
</template>

<style scoped>

.card-details{
    display: grid;
    row-gap: 2vw;
    background-color: var(--color-background-soft);
    box-shadow: 2px 2px var(--color-background-soft);

    padding: 30px;
    overflow: auto;
    width: var(--view-width);
}

@media (min-width: 1024px) {
    .langs{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

</style>