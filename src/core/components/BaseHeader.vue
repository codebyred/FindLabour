<script setup>

import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.store';
import {computed, ref, watch, onMounted} from 'vue'
import BaseButton from '@/core/components/BaseButton.vue';

const auth = useAuthStore();
const router = useRouter();

const notifMenu = ref(false);
const profileMenu = ref(false);


function showNotificationMenu(){
    profileMenu.value = false;
    notifMenu.value = !notifMenu.value;
}

function showProfileMenu(){
    notifMenu.value = false;
    profileMenu.value = !profileMenu.value;
}

function logout(e){
    profileMenu.value = false;
    notifMenu.value = false;
    auth.resetAuth();
}

function goToSigninPage(){
    router.push("/signin");
}

onMounted(
  auth.reconnect
)


</script>

<template>

<header class="header">

    <div class="header__logo" >

        Kormi

    </div>

    <nav class="header__nav">
        <RouterLink class="header__link" to="/">Home</RouterLink>
        <RouterLink class="header__link header__featured" to="/hire">Find kormi</RouterLink>
        <RouterLink class="header__link" to="/apply">Become Kormi</RouterLink>
        <RouterLink class="header__link" to="/about">About</RouterLink>

    </nav>

    <div class="header__right">

        <BaseButton
            class="signin-btn"
            v-show="!auth.logedIn"
            value = "SignIn"
            @click="goToSigninPage"
        />
            
        

        <div
            v-show="auth.logedIn" 
            class="header__notification"
        >

            <img
                class="notification__icon"
                :class="{active:notifMenu}"
                src="@/assets/images/bell.png"
                @click="showNotificationMenu"
            />

            <div class="notification__menu-container" v-show="notifMenu">
                <div class="notification__menu">
                    <div class="notification__menu-list">Anwar Ahmed accepted you offer</div>
                    <div class="notification__menu-list">new notif</div>
                </div>
            </div>

        </div>

        <div 
            v-show="auth.logedIn"
            class="header__profile"
        >

            <div
                class="profile__img-container"
                @click="showProfileMenu"
            >
            </div>

            <div 
                class="profile__menu-container"
                v-show="profileMenu"
            >
                <div class="profile__menu">
                    <div class="profile__menu-list">{{ auth.user?.username }}</div>
                    <div class="profile__menu-list">Settings</div>
                    <div class="profile__menu-list">Edit Profile</div>
                    <div class="profile__menu-list" @click="logout">Logout</div>
                </div>

            </div>

        </div>

    </div>

</header>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.header{

    padding: 20px 10px;
    height:10vh;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.header__logo{
    font-size: 1.5rem;
    width: 200px;
    color: #7743DB;
    font-weight:bolder;
}

.header__nav{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
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
    justify-content: flex-end;
    flex-direction: row;
}

.signin-btn:hover{   
    background: none;
    color: black;
}

.header__profile{ 
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.header__notification{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.notification__icon{
    width:30px;
    height:auto;
}

.notification__menu-container{
    position: absolute;
    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
    z-index: 9;
    top:80%;
    right:0;
    width:500px;
    background-color: whitesmoke;
}

.notification__menu-list{
    padding:20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.profile__img-container{
    width: 50px;
    height:50px;
    border-radius: 50%;
    background:#7743DB;
}

.profile__menu-container{
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
    top:80%;
    right:0;
    text-decoration: none;
    position: absolute;
    z-index: 10;
    width:300px;
    background-color: whitesmoke;
}

.profile__menu-list{
    padding:20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

</style>