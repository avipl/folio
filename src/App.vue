<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Intro from './components/Intro.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Intro name="Avinash Lakhmawad" />
    </div>
  </header>
  <div class="router-view">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%;
  border-style: hidden;
  border-width: 2px;
  box-shadow: 0 0 1px transparent;

  width: calc(var(--header-width) * 0.25);
  height: calc(var(--header-width) * 0.25);
  aspect-ratio: 1/1;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3vw;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

    width: var(--header-width);
  }

  .router-view{
    width: var(--view-width);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (prefers-color-scheme: dark) {
  .linked-in-prof{
    content: url('./assets/In-White-26.png');
  }
}
</style>
