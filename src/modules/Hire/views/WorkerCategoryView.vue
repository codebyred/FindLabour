<script setup>

import {ref, onMounted, onBeforeMount, onBeforeUpdate} from 'vue'
import { RouterView } from 'vue-router';
import CategoryCard from '../components/CategoryCard.vue';
import Search from '../components/Search.vue';
import { workerStore } from '../stores/worker.store';

const worker = workerStore();

onMounted(worker.fetchCategories);

</script>

<template>

<RouterView/>

<Search/>

<div class="loading-container" v-if="worker.loading" >

    <div class="loading"></div>
    
</div>

<div class="error" v-if="worker.err">
    <button @click="worker.fetchCategories">Retry</button>
</div>

<div class="workerCategory-cards-container" v-else>

    <CategoryCard        
        v-for="category in worker.categories"
        :key="category.id"
        :category_name="category.name"
        :description="category.description"
        @browse="worker.viewList">
    </CategoryCard>

</div>
    
          
</template>

<style scoped>

.workerCategory-cards-container{
    display:flex;
    justify-content: space-between;
    padding:50px 0px 50px 0px;
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

@keyframes loadingAnimation {
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(360deg);
    }
}

</style>