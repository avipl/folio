<script setup lang="ts">
import { nextTick, ref } from 'vue';
import ProjectCarousel from '../components/ProjectCarousel.vue'
import ProjectDetails from '../components/ProjectDetails.vue'

const cw = ref({})
let id_active = ref('')
let fetch_status = ref('Fetching project details. Please wait...')
let is_fetching = ref(true)
fetch_projects()

function send_req(token: string){
    var requestOptions = {
        method: 'GET',
        headers: {
            'X-Firebase-AppCheck': token,
        }
    };

    fetch(import.meta.env.VITE_API_URL_PFX + 'apis/get_projs', requestOptions)
    .then(response => {
        if(response.status == 200) return response.json()
        else if(response.status == 404) fetch_status.value = "No projects found."
        else if(response.status == 401) fetch_status.value = "Unauthorized request."
        else if(response.status == 500) fetch_status.value = "Problem while processing request."
        return
    })
    .then(result => {
        id_active.value = Object.keys(result)[0]
        cw.value = result
        is_fetching.value = false
    })
    .catch(error => console.log('error', error));
}

function fetch_projects(){
    if(process.env.NODE_ENV === 'production'){
        grecaptcha.ready(function() {
            grecaptcha.execute(import.meta.env.VITE_API_URL_PFX, {action: 'submit'}).then(function(token) {
                send_req(token)
            });
        });
    }else{
        send_req('')
    }
}

function id_active_changed(new_id: any){
    id_active.value = new_id
}

</script>

<template>
    <div class="course-loading" v-if="is_fetching">
        {{ fetch_status }}
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
