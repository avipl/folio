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
        <div class="prof-link">
            <a class="linked-in-prof" target="_blank" href="https://www.linkedin.com/in/avipl/"></a>
            <a class="git-prof" target="_blank" href="https://github.com/avipl"></a>
        </div>
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

.prof-link{
    display: grid;
    margin: 2vw 2vw 4vw 0;
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
}

.intro h1,
.intro h3 {
  text-align: center;
}

.linked-in-prof{
  content: url('../assets/In-Blue-26.png');
  margin-right: 10px;
  cursor: pointer;
}

.git-prof{
  content: url('../assets/github-mark.svg');
  width: 26px;
  height: 26px;
  cursor: pointer;
}

@media (min-width: 1024px) {
      .intro h1,
    .intro h3 {
        text-align: left;
    }
    .prof-link{
        justify-content: left;
        margin-bottom: 2vw;
    }
}

@media (prefers-color-scheme: dark) {
    .linked-in-prof{
        content: url('../assets/In-White-26.png');
    }

    .git-prof{
        content: url('../assets/github-mark-white.svg');
        width: 26px;
        height: 26px;
    }
}
</style>
