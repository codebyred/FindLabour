import {defineStore} from "pinia"
import {ref} from "vue"
import {socket} from "@/api/socket.js"

export const authStore = defineStore("auth",()=>{

    const user = ref(JSON.parse( localStorage.getItem('userDetails') )?.user) ;  
    const accessToken = ref( JSON.parse( localStorage.getItem('userDetails') )?.accessToken );

    if(accessToken.value){
        socket.connect();
    }

    function setAuth(){
        user.value = JSON.parse( localStorage.getItem('userDetails') )?.user;
        accessToken.value = JSON.parse( localStorage.getItem('userDetails') )?.accessToken;
        socket.connect();
    }

    function resetAuth(){
        socket.disconnect();
        localStorage.removeItem('userDetails');
        accessToken.value = null;
        user.value = null;
    }

    return{user, accessToken, setAuth, resetAuth}
})