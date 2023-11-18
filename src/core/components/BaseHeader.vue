<script setup>

import { RouterLink } from 'vue-router'
import { authStore } from '../stores/auth.store';
import {computed, ref, watch} from 'vue'

const auth = authStore();
const isLogedIn = ref(false);
const showDropDown = ref(false);
const authStatus = auth.getAuth();

function toggle(){
    showDropDown.value = !showDropDown.value;
}
function logout(){
    auth.resetAuth();
}

watch(authStatus,()=>{

    isLogedIn.value = !isLogedIn.value;
    console.log(authStatus.value);

})

</script>

<template>

<header>

    <div class="header__left" >

        <p>Kormi</p>

    </div>

    <nav class="header__nav">

        <RouterLink class="header__link" to="/">Home</RouterLink>
        <RouterLink class="header__link" to="/hire">Hire</RouterLink>
        <RouterLink class="header__link" to="/apply">Apply</RouterLink>
        <RouterLink class="header__link" to="/about">About</RouterLink>

    </nav>

    <div class="header__right">

        <RouterLink
            class="header__btn"
            v-show="!isLogedIn"
            to="/signin"
        >
            SignIn
        </RouterLink>

        <div
            v-show="isLogedIn" 
            class="dropdown"
        >

            <img class="notification" src="@/assets/images/bell.png"/>

            <div class="dropdown__menu">
                <ul>
                    <li>new notif</li>
                    <li>new notif</li>
                </ul>
            </div>

        </div>

        <div 
            v-show="isLogedIn"
            class="dropdown"
        >

            <div
                class="profile"
                @click="toggle"
            >
            </div>

            <div 
                class="dropdown__menu"
                :class="{active:showDropDown}"
            >
                <ul>
                    <li>User Name</li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="">Edit Profile</a></li>
                    <li><button @click="logout">Logout</button></li>
                </ul>

            </div>

        </div>

    </div>

</header>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

header{

    width: 100%;
    padding: 20px 30px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.header__left{
    font-size: 1.5rem;
}

.header__nav{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height:5vh;
}

.header__link{
    color:black;   
    text-decoration: none;
    
}

.header__link.router-link-exact-active{

    color:red;

}

.header__link:hover{
    border-bottom: 1px solid red;
}

.header__right{
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.header__btn{

    border: 1px solid blueviolet;
    padding: 0.15rem 0.6rem;
    border-radius: 0.3em;
    background:blueviolet;
    color:white;
    text-decoration: none;
}

.header__btn:hover{   
    background: none;
    color: black;
}

.dropdown{ 
    height: 100%;
    width:100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.notification{
    width:30px;
    height:30px;
}

.profile{
    width: 50px;
    height:50px;
    border-radius: 50%;
    background:blueviolet;
}

.dropdown__menu{
    background: whitesmoke;
    position: absolute;
    top:100%;
    opacity: 0;
}

.dropdown__menu.active{
    opacity: 1;
}



</style>