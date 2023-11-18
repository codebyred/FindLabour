<script setup>

import {ref} from 'vue'
import { RouterView } from 'vue-router'

import BaseHeader from '@/core/components/BaseHeader.vue'
import BaseFooter from '@/core/components/BaseFooter.vue'


</script>

<template>

<BaseHeader class="container"></BaseHeader>

<main class="container">

  <RouterView />

</main>

<BaseFooter class="container"></BaseFooter>

</template>

<style scoped>

main{

  min-height: 100vh;

}

.container{

  margin-left:auto;
  margin-right:auto; 
  padding-left: 0.5rem;
  padding-right: 0.5rem;

}

@media (width > 1280px){
  .container{
    width: 1400px;
  }

}

@media (width < 1280px){
  .container{
    width: 1100px;
  }

}


</style>
