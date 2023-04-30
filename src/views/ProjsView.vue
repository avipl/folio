<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { load } from 'recaptcha-v3'
import ProjectCarousel from '../components/ProjectCarousel.vue'
import ProjectDetails from '../components/ProjectDetails.vue'

const cw: any = ref({})
let id_active:any = ref(null)
let fetch_status = ref('Why portfolio? Only showcases active projects. Updated promptly with GitHub webhooks.')
let is_fetching = ref(true)

onMounted(() => {
    load(import.meta.env.VITE_SITE_KEY) .then((recaptcha) => {
        fetch_projects(recaptcha)
    })
})

function send_req(token: string){
    var requestOptions = {
        method: 'GET',
        headers: {
            'X-Firebase-AppCheck': token,
            'Access-Control-Allow-Origin': location.protocol + '//' + location.hostname 
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

function fetch_projects(recaptcha: any){
    if(import.meta.env.MODE === 'production'){
        recaptcha.execute('submit').then((token: string) => {
            send_req(token)
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
        <div class="load-circle"></div>
        <div class="changing-faq">{{ fetch_status }}</div>
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

.changing-faq{
    width: 100%;
    overflow: hidden;
    transition: 2s;
}

.load-circle{
    width: 32px;
    height: 32px;
    border: solid var(--color-text);
    border-top: solid var(--primary); 
    border-radius: 50%;
    border-width: 5px;
    justify-self: center;

    animation: load 1.0s infinite;
}

@keyframes load {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}    
}

.course-loading{
    display: grid;
    row-gap: 1vw;
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
