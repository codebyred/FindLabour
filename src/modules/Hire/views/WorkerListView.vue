<script setup>
import {onMounted} from 'vue';
import {RouterView} from 'vue-router'
import Search from '../components/Search.vue';
import BaseButton from '@/core/components/BaseButton.vue';
import { workerStore } from '../stores/worker.store.js';

const worker = workerStore();
onMounted(worker.fetchList);

</script>

<template>

<RouterView/>

<Search/>

<div class="loading-container" v-if="worker.loading" >
    <div class="loading"></div>
    
</div>

<div class="error" v-if="worker.err">
    <button @click="worker.fetchList">Retry</button>
</div>

<div class="plumber__list-container">

    <div class="plumber__list-item"
        v-for="w in worker.list"> 
        <span>{{ `${w.id} ${w.firstName}  ${w.lastName}` }}</span>
        <p>Rating</p>
        <p>Location</p>
        <BaseButton value="Details" @click="worker.viewDetails(w.id)"></BaseButton>

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