<script setup lang="ts">
import { ref } from 'vue';
import ProjectCarousel from '../components/ProjectCarousel.vue'
import ProjectDetails from '../components/ProjectDetails.vue'

const cw = ref({
    1: {
        id: 1,
        snap: 'src/assets/se.png',
        title: 'Search Engine',
        lu: '04/23/2023',
        langs: {
            'python': 84,
            'HTML': 16
        },
        description: `<div id="readme" class="md" data-path="README.md"><article class="markdown-body entry-content container-lg" itemprop="text"><h1 dir="auto"><a id="user-content-search-engine-with-pylucene--bert" class="anchor" aria-hidden="true" href="#search-engine-with-pylucene--bert"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Search Engine With PyLucene &amp; BERT</h1><p dir="auto">Search engine for movies. Data is indexed using Lucene and BERT. The user can choose the index type during search.Data is sourced form IMDB.com.</p><p dir="auto">Most of the work done in this project for a gradute level Information Retreival class. It's been further enhanced as personal project.</p><h2 dir="auto"><a id="user-content-demo" class="anchor" aria-hidden="true" href="#demo"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Demo</h2><p dir="auto">Live demo coming soon</p></article></div>`
    },
    2: {
        id: 2,
        snap: 'src/assets/se.png',
        title: 'Search Engine2',
        lu: '04/23/2024'
    },
    3: {
        id: 3,
        snap: 'src/assets/se.png',
        title: 'Search Engine',
        lu: '04/23/2023'
    },
    4: {
        id: 4,
        snap: 'src/assets/se.png',
        title: 'Search Engine',
        lu: '04/23/2023'
    },
    5: {
        id: 5,
        snap: 'src/assets/se.png',
        title: 'Search Engine',
        lu: '04/23/2023'
    },
    6: {
        id: 6,
        snap: 'src/assets/se.png',
        title: 'Search Engine',
        lu: '04/23/2023'
    }
})
let id_active = ref(Object.keys(cw.value)[0])

function id_active_changed(new_id: any){
    id_active.value = new_id
}

</script>

<template>
    <div class="course">
      <ProjectCarousel :cw_projs="Object.values(cw)" :id_active_changed="id_active_changed" :id_active="id_active"/>
      <ProjectDetails :proj_details="cw[id_active]"/>
    </div>
</template>

<style scoped>
.course{
  display: grid;
  row-gap: 2vw;
}

@media (min-width: 1024px) {
  .course {
    align-items: center;
  }
}
</style>
