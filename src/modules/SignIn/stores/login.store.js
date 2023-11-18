import { ref } from "vue"
import {defineStore} from "pinia"
import { authStore } from "../../../core/stores/auth.store"
import { useRouter } from 'vue-router'
import { fetchWrapper } from "../api/fetchWrapper"

export const loginStore = defineStore("login",()=>{
    
    const loginErr = ref("");
    const auth = authStore();
    const router = useRouter();

    
    async function login(email,password){

        const baseUrl = import.meta.env.VITE_API_URL;

        const data = await fetchWrapper.post(`${baseUrl}/users/login`,{
            email,
            password
        });

        if(!data.success){
            
            loginErr.value = data.message;
            return router.push("/signin");
    
        }

        auth.setAuth(data.accessToken);

        return router.push("/");

            
    }

    function showLoginErr(){
        return loginErr;
    }
    
    return {login, showLoginErr};

})