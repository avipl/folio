<script setup lang="ts">
let props = defineProps(['snap', 'title', 'lu', 'is_active'])
</script>

<template>
    <div v-if="is_active == true" class="active">
        <img alt="Project Snapshot" class="snap-shot" :src=snap width="125" height="125" />
        <div class="title"><h2>{{ title }}</h2></div>
        <div class="last-update">{{ new Date(lu).toDateString() }}</div>
    </div>

    <div v-else class="inactive">
        <img alt="Project Snapshot" class="snap-shot" :src=snap width="125" height="125" />
        <div class="title"><h2>{{ title }}</h2></div>
        <div class="last-update">{{ new Date(lu).toDateString() }}</div>
    </div>

</template>

<style scoped>
.snap-shot{
    object-fit: cover;
    width: 128px;
    height: 72px;
}

.active{
    background-color: var(--color-background-mute);
    padding: 20px;
}

.inactive{
    padding: 20px;
}

</style>
