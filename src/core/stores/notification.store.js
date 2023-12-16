import {defineStore} from "pinia"
import {ref} from "vue"

import {socket} from "@/api/socket.js"
import { useAuthStore } from "./auth.store"

export const notificationStore = defineStore("notification",()=>{
    
    const list = ref([]);   
    const Err = ref(false);
    const auth = useAuthStore();

    function notifyWorker(receiver){

        console.log("sending")
        
        return socket.emit("notify",{
            sender: auth.user?.email,
            receiver,
            message:`${auth.user?.email} wants to hire you`
        });
        
    }

    function set(newNotification){
        notifications.value.push(newNotification);
    }

    function clearErr(){
        Err.value = false;
    }


    return{
        list, 
        Err, 
        set, 
        notifyWorker,         
        clearErr}
})