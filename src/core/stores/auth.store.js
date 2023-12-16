import {defineStore} from "pinia"
import {ref, reactive} from "vue"
import {socket} from "@/api/socket.js"

export const useAuthStore = defineStore("auth",()=>{

    const user = reactive( JSON.parse( localStorage.getItem('user') ) );
    const logedIn = ref(false);

    if(user?.accessToken){
        logedIn.value = true;
        socket.connect();
    }

    function setAuth(userDetails){

        socket.auth = {
            email:userDetails.email,
            password:userDetails.password
        }

        logedIn.value = true;

        localStorage.setItem('user',JSON.stringify(userDetails));
        socket.connect();

    }

    function resetAuth(){

        user.value = null;
        logedIn.value = false;

        localStorage.removeItem('user');
        socket.disconnect();

    }

    return{user, logedIn, setAuth, resetAuth}
})