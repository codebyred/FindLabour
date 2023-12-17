<script setup>

import {onMounted, ref} from 'vue'
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

.header-container{
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

</style>
