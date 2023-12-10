<script setup>

import BaseButton from '@/core/components/BaseButton.vue';

const props = defineProps(['category_name','description'])

</script>

<template>

<div class="category-card">
    <div class="category-card__img-container">
        <img class="category-card__img" src="@/assets/images/plumber.jpg">
    </div>
    <div class="category-card__content">
        <span>{{ props.category_name }}</span>
        <p>{{ props.description }}</p>
        <BaseButton class="category-card__btn" value="Browse" @click="$emit('browse',props.category_name)"/>
    </div>
</div>

</template>

<style scoped>

.category-card{
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius:10px;
    width:400px;
    height:450px;
}

.category-card__img{
    aspect-ratio: 16/9;
    width:100%;
    height:auto;
}
.category-card__content{
    padding:10px;
}
.category-card__content span{
    font-size: 1rem;
    font-weight:bold;
    margin-bottom: 5px;
}

.category-card__content p{
    font-size: 0.8rem;
    margin-bottom: 10px;
}

.category-card__btn{
    border: 1px solid #7743DB;
    padding: 0.15rem 0.6rem;
    border-radius: 0.3em;
    background:#7743DB;
    color:white;
    text-decoration: none;
}

</style>

