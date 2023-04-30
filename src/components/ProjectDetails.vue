<script setup lang="ts">
import LangBar from './LangBar.vue'

let props = defineProps(['proj_details'])

</script>

<template>
    <div class="card-details">
        <div v-if="Object.keys(proj_details.langs).length != 0">
            <div class="langs"  v-for="(perc, lang) in proj_details.langs">
                <LangBar :lang="lang" :perc="perc" />
            </div>
        </div>

        <div v-html="proj_details.readme"/>
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

    .card-details{
        height: calc(var(--view-height) * 0.60);
        scroll-behavior: auto;
    }

    .card-details::-webkit-scrollbar-thumb {
        background: var(--color-border-hover);
        width: 2px;
        border-radius: 5px;
    }
    .card-details::-webkit-scrollbar {
        width: 4px;
        height: 8px;
        opacity: 0;
    }
}

</style>