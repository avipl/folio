<script setup lang="ts">
import {ref, onMounted} from 'vue'
import ProjectCard from './ProjectCard.vue';

let props = defineProps(['cw_projs', 'id_active_changed', 'id_active'])

let step = ref(0)
let movement = ref(0)
let rightColor = ref('var(--primary)');
let leftColor = ref('var(--color-border)');
let slider = ref({scrollWidth: 0})
     
onMounted(() => {
  setStep()
  resetCaro()
})

function setStep() {
    const innerWidth = slider.value.scrollWidth;
    const totalCards = props.cw_projs.length;
    step.value = innerWidth / totalCards;

}

function toLeft(){
    if(movement.value >= 0) return;

    movement.value += step.value;
    if(movement.value >= 0) leftColor.value = 'var(--color-border)';
    rightColor.value = 'var(--primary)';
}

function toRight(){
    const innerWidth = slider.value.scrollWidth;
    if(movement.value <= -1 * (innerWidth - step.value)) return;
    
    movement.value -= step.value;
    if(movement.value <= -1 * (innerWidth - step.value)) rightColor.value = 'var(--color-border)';
    leftColor.value = 'var(--primary)';
}

function resetCaro(){
    movement.value = 0;
}

</script>

<template>
    <div class="caro-belt">
        <div class="arrow-pan">
            <div class="chev chev-left" @click="toLeft" :style="{'border-color': leftColor }"></div>
        </div>
        <div class="caro">
            <div class="slider" ref="slider" :style="{'transform': `translateX(` + movement +`px)`}">
                <div class="card" v-for="proj in cw_projs" :key="proj.id">
                    <ProjectCard :title="proj.title" :lu="proj.lu" :snap="proj.snap" 
                    :is_active="proj.id == id_active"
                    @click="id_active_changed(proj.id)"/>
                </div>
            </div>
        </div>
        <div class="arrow-pan">
            <div class="chev chev-right" @click="toRight" :style="{'border-color': rightColor }"></div>
        </div>
    </div>
</template>

<style scoped>
.caro-belt{
    display: inline-flex;
    width: var(--view-width);
}

.caro {
    display: inline-flex;
    width: calc(var(--view-width) - 10);
    overflow: hidden;
}

.slider {
    transition: transform 0.2s;
    white-space: nowrap;
}

.card {
    display: inline-flex;
    cursor: pointer;

    align-items: center;
    justify-content: center;
    margin-right: 5px;
}

.card:hover{
    background-color: var(--color-border);
}

.arrow-pan{
    display: inline-flex;
    background-color: var(--color-border) 0.5;
    align-items: center;
    width: 4vw;
    margin-left: 1vw;
}

.chev{
    width: 20px;
    height: 20px;
    border-style: solid;
    border-width: 2px 2px 0px 0px;
    border-color: var(--primary);

    opacity: 1.0;
}

.chev-right{
    transform: rotate(45deg);
}

.chev-left{
    transform: rotate(-135deg);
}
</style>