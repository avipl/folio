<script setup lang="ts">
import { nextTick, ref } from 'vue';
import ProjectCarousel from '../components/ProjectCarousel.vue'
import ProjectDetails from '../components/ProjectDetails.vue'

const cw = ref({})
let id_active = ref('')
let is_fetching = ref(true)
fetch_projects()

function fetch_projects(){
    var requestOptions = {
        method: 'GET'
    };

    fetch(import.meta.env.VITE_API_URL_PFX + 'apis/get_projs', requestOptions)
    .then(response => response.text())
    .then(result => {
        let res_obj = JSON.parse(result)
        id_active.value = Object.keys(res_obj)[0]
        cw.value = res_obj
        is_fetching.value = false
    })
    .catch(error => console.log('error', error));
}

function id_active_changed(new_id: any){
    id_active.value = new_id
}

</script>

<template>
    <div class="course-loading" v-if="is_fetching">
        Fetching projects, please wait...
    </div>
    <div class="course" v-else>
        <ProjectCarousel :cw_projs="Object.values(cw)" :id_active_changed="id_active_changed" :id_active="id_active"/>
        <ProjectDetails :proj_details="cw[id_active]"/>
    </div>
</template>

<style scoped>
.course{
  display: grid;
  row-gap: 2vw;
}

.course-loading{
    display: grid;
    row-gap: 2vw;
    background-color: var(--color-background-soft);
    box-shadow: 2px 2px var(--color-background-soft);

    padding: 30px;
    overflow: auto;
    width: var(--view-width);
    align-content: center;
    justify-content: center;
}

@media (min-width: 1024px) {
  .course {
    align-items: center;
  }
}
</style>
