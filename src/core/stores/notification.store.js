import {defineStore} from "pinia"
import {ref} from "vue"

import {socket} from "@/api/socket.js"
import { useAuthStore } from "./auth.store"

export const useNotificationStore = defineStore("notification",()=>{
    
    const list = ref([]);   
    const auth = useAuthStore();

    function notifyWorker(receiver){
        
        return socket.emit("notify",{
            sender: auth.user?.email,
            receiver,
            message:`${auth.user?.email} wants to hire you`
        });
        
    }

    function clearErr(){
        Err.value = false;
    }


    return{
        list, 
        notifyWorker,         
        clearErr}
})