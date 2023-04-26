<script setup lang="ts">
let props = defineProps(['snap', 'title', 'lu', 'is_active'])

console.log(props.is_active);

</script>

<template>
    <div v-if="is_active == true" class="active">
        <img alt="Project Snapshot" class="snap-shot" :src=snap width="125" height="125" />
        <div class="title"><h2>{{ title }}</h2></div>
        <div class="last-update">{{ lu }}</div>
    </div>

    <div v-else class="inactive">
        <img alt="Project Snapshot" class="snap-shot" :src=snap width="125" height="125" />
        <div class="title"><h2>{{ title }}</h2></div>
        <div class="last-update">{{ lu }}</div>
    </div>

</template>

<style scoped>
.snap-shot{
    width: 128px;
    height: 72px;
}

.active{
    border: 1px solid var(--color-border);
    background-color: var(--color-background-mute);
    padding: 20px;
}

.inactive{
    padding: 20px;
}

.title{
}
</style>