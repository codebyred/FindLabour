<script setup>

import {ref} from 'vue'
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


</script>

<template>

<Header class="container"></Header>

<main class="container">

  <RouterView />

</main>

<Footer class="container"></Footer>

</template>

<style scoped>

main{

  flex: 1 1 auto;
  min-height: 100vh;

}

.container{

  width: 100%;
  margin-left:auto;
  margin-right:auto; 
  padding-left: 0.5rem;
  padding-right: 0.5rem;

}

@media (width > 1280px){
  .container{
    max-width: 1400px;
  }

}

</style>
