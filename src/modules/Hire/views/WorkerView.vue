<script setup>

import {useRouter} from "vue-router"
import { useWorkerStore } from "../stores/worker.store.js";
import {useNotificationStore} from "@/core/stores/notification.store.js"
import {useAuthStore} from "@/core/stores/authStore.store.js"

const router = useRouter();

const worker = workerStore();
const notificationStore = useNotificationStore();
const authStore = useAuthStore();

const workerId = window.location.pathname.split('/').pop();
const workerDetails = worker.get(workerId);

const showError = ref(false);


const notifyWorker = (workerEmail)=>{

    if(!authStore.logedIn)
        return showError.value = true;

    notification.notifyWorker(workerEmail);

}

</script>

<template>

<div class="worker-information-container">

    <div class="worker-profile">

        <div class="worker-profile__img-container">

        </div>

        <div class="worker-profile__texts">
            <p class="worker-profile__name">{{ `${workerDetails.firstName} ${workerDetails.lastName}` }}</p>
            <p>{{ workerDetails.email }}</p>
        </div>

        <div class="worker-profile__buttons">
            <button @click="notifyWorker(workerDetails.email)">Hire</button>
        </div>

        <div class="dialog" v-show="showError">
            <p>You are not Signedin</p>
            <button @click="router.push('/signin')">Signin</button>
            <button @click="showError = false">Close</button>
        </div>
        
    </div>

    <div class="worker-service-container">
        
        <!-- <div class="worker-service" v-for="service in workerDetails">
            
            <p>{{ service[0] }}</p>
            <p>{{ service[1] }}</p>
            
        </div> -->

    </div>

    <div class="worker-review">

    </div>
    
</div>

</template>

<style scoped>
.worker-information-container{
    padding:30px 0px;
    height:90vh;
    display:grid;
    grid-template-columns:2fr 1fr;
    grid-template-rows:2fr 1fr;
    grid-template-areas:"a b"
                        "c b";

    gap:30px;
}

.worker-profile{
    grid-area:a;
    border-radius:10px;
    padding:30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.worker-service-container{
    grid-area:b;
    border-radius:10px;
    padding:30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.worker-review{
    grid-area:c;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius:10px;
}

.worker-service{
    display: flex;
    justify-content:space-between;
    margin-bottom:30px;
}

.worker-profile__name{
    font-size:1.5rem;
    font-weight: bolder;
}
</style>