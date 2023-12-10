<script setup>
import {onMounted} from 'vue';
import {RouterView} from 'vue-router'
import Search from '../components/Search.vue';
import BaseButton from '@/core/components/BaseButton.vue';
import { workerListStore } from '../stores/workerList.store.js';

const workerList = workerListStore();
onMounted(workerList.getWorkerList);


</script>

<template>

<RouterView/>

<Search/>

<div class="loading-container" v-if="workerList.loading" >
    <div class="loading"></div>
    
</div>

<div class="error" v-if="workerList.err">
    <button @click="workerCategory.getCategories">Retry</button>
</div>

<div class="plumber__list-container">

    <div class="plumber__list-item"
        v-for="worker in workerList.workers"> 
        <span>{{ worker.username }}</span>
        <p>Rating</p>
        <p>Location</p>
        <BaseButton value="Details" @click="workerList.showDetails(worker.id)"></BaseButton>

    </div>

</div>

</template>

<style scoped>

.plumber__list-container{

}

.plumber__list-item{
    border-radius:10px;
    width:100%;
    height:150px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:1rem;
    margin-bottom:50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.plumber__img{
    width: auto;
    height:100%;
}

.loading-container, .error{
    widows: auto;
    height:80vh;
    display: flex;
    align-items:center;
    justify-content: center;
}
.loading{
    border:5px solid gray;
    border-top:5px solid blue;
    width:100px;
    height:100px;
    border-radius:50%;
    animation: loadingAnimation 0.55s linear infinite;
}

</style>