<script setup lang="ts">
defineProps(['lang', 'perc'])
</script>

<template>
    <div class="lang-bar">
        <div class="lbl">{{ lang }}</div>
        <div class="bar">
            <span class="fill" :style="{'width': perc + '%'}"></span>
        </div>
        <div>
            <h3>{{ perc }}%</h3>
        </div>
    </div>
</template>

<style>
    .lang-bar{
        grid-template-columns: repeat(3, auto);
        column-gap: 1vw;
        align-items: center;
        display: inline-grid;
    }

    .lbl{
        width: 20vw;
        font-size: 1.2rem;
    }

    .bar{
        background-color: var(--color-background-mute);
        height: 5px;
        width: 40vw;
    }

    .fill{
        display: block;
        height: 100%;
        background-color: var(--primary);
    }

@media (min-width: 1024px) {
    .bar{
        width: 15vw;
    }

    .lbl{
        width: 7vw;
    }
}
</style>