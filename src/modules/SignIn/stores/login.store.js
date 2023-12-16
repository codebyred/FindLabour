import { ref } from "vue"
import {defineStore} from "pinia"
import { useAuthStore } from "@/core/stores/auth.store"
import { useRouter } from 'vue-router'
import { fetchWrapper } from "@/api/fetchWrapper"

export const loginStore = defineStore("login",()=>{
    
    const email = ref("");
    const password = ref("");

    const emailErr = ref("");
    const passErr = ref("");
    const loginErr = ref("");

    const router = useRouter();
    const auth = useAuthStore();

    function setEmail(newValue){
        email.value = newValue
    }

    function setEmailErr(newValue){
        emailErr.value = newValue;
    }

    function setPassErr(newValue){
        passErr.value = newValue
    }

    function setLoginErr(newValue){
        loginErr.value = newValue;
    }
    
    async function login(){

        try{
            const data = await fetchWrapper.post(`login`,{
                email:email.value,
                password:password.value,
                role:"user"
            });

            if(!data.success){
                
                loginErr.value = data.message;
                return router.push("/signin");
        
            }

            email.value = "";
            password.value = "";

            const {user, accessToken} = data;

            const userDetails = {
                email:user.email,
                username:user.username,
                accessToken
            }

            
            auth.setAuth(userDetails);
            return router.push("/");
            
        }catch(e){
            console.log(e);
        }
    }


    return {
        email, 
        password, 
        emailErr, 
        passErr, 
        loginErr, 
        login, 
        setEmail,
        setEmailErr,
        setPassErr,
        setLoginErr
    };

})