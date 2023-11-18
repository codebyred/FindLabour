import {defineStore} from "pinia"
import {ref} from "vue"

export const authStore = defineStore("auth",()=>{
    
    const accessToken = ref("");
      
    function getAuth(){
        return accessToken;
    }

    function setAuth(Token){

        if(!Token){
            return;
        }

        return accessToken.value = Token;
    }

    function resetAuth(){
        return accessToken.value = "";
    }

    return{getAuth, setAuth, resetAuth}
})