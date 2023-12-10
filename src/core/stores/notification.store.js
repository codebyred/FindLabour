import {defineStore} from "pinia"
import {ref} from "vue"

import {socket} from "@/api/socket.js"

export const notificationStore = defineStore("notification",()=>{
    
    const notifications = ref(null);   

    function notifyWorker(sender, receiver){
        console.log("sending request")
        socket.emit("notify",{sender, receiver, message:`${sender} wants to hire you`});
    }


    return{notifications, notifyWorker}
})