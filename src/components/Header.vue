<script setup>

import { RouterLink } from 'vue-router'
import {ref} from 'vue'

const signedin = ref(true);

</script>

<template>

<header>

    <div id="logo">

        <p>Kormi</p>

    </div>

    <nav id="page-links">

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/hire">Hire</RouterLink>
        <RouterLink to="/apply">Apply</RouterLink>
        <RouterLink to="/about">About</RouterLink>

    </nav>

    <div id="user-profile">

        <RouterLink v-if="signedin" to="/signin">Signin</RouterLink>

    </div>

</header>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

header{

    width: 100%;
    
    top:0;
    left: 0;
    flex: 0 1 auto;
    min-height: 10vh;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    display: flex;
    align-items: center;

}

div{

    flex: 0 1 150px;
    min-height: inherit;


}

#logo{
    display: flex;
    align-items: center;
    font-size: 1.5rem;
}

nav{

    flex: 1 1 auto;
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

}

nav a{

    color:black;
    text-decoration: none;
    transition: all 0.1s ease;
}

nav a.router-link-exact-active{

    color:red;
}

nav a:hover{
    border-bottom: 1px solid red;
}
#user-profile{
    display: flex;
    justify-content: center;
    align-items: center;
}
#user-profile a{

    border: 1px solid blueviolet;
    padding: 0.15rem 0.6rem;
    border-radius: 0.3em;
    background:blueviolet;
    color:white;
    text-decoration: none;

}

#user-profile a:hover{   
    background: none;
    color: black;
}



</style>