<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="intro">
    <h1 class="name">{{ name }}</h1>
    <h3 class="abt">
      Passionate about developing optimized programs to solve complex real-life problems.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.name{
  color: var(--primary);
}

.abt{
  color: var(--color-heading);
}

.intro h1,
.intro h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .intro h1,
  .intro h3 {
    text-align: left;
  }
}
</style>
