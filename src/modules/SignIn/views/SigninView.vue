<script setup>

import {ref} from 'vue'
import { useAuthStore } from "@/core/stores/auth.store"
import {loginStore} from "../stores/login.store"
// import {io} from  "socket.io-client"
import {validate_email, validate_password} from "../utils/formValidation.util.js"


const userLogin = loginStore();

const onSubmit = async (e)=>{

    e.preventDefault()

    userLogin.setEmailErr(validate_email(userLogin.email));

    userLogin.setPassErr(validate_password(userLogin.password));

    userLogin.setLoginErr("");

    if(userLogin.emailErr|| userLogin.passErr) return;
    
    await userLogin.login();

}

</script>

<template>

<section>

    <div class="form-container">

        <form @submit="onSubmit">

            <span>Sign in</span>

            <p v-if="userLogin.loginErr">{{ userLogin.loginErr }}</p>

            <div class="form-group">

                <input
                    v-model="userLogin.email"
                    type="email" name="email"
                    placeholder="Email"
                >

                <p v-if="userLogin.emailErr"> {{ userLogin.emailErr }} </p>

            </div>

            <div class="form-group">

                <input
                    v-model="userLogin.password"
                    type="password" 
                    name="password" 
                    placeholder="Password"
                > 

                <p v-if="userLogin.passErr"> {{ userLogin.passErr }} </p>

            </div>

            <select name="roles" id="roles" form="signin">

                <option value="User">User</option>
                <option value="Admin">Admin</option>
                
            </select>

            <button class="btn signup-btn" type="submit">Sign in</button>

            <p style=
            "
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
            ">
                    
                Not Signed up?<RouterLink to="/signup">sign up</RouterLink>

            </p>
            
        </form>

    </div>

</section>
  
</template>

<style scoped>

section{

    min-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

}
.form-container{

    width: 30%;    
    padding: 50px 15px;
    /* border: 1px solid green; */
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, .2);

}

form{

    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:20px;

}

.form-group p{

    color:red;
    border-radius: 5px;
    padding: 0 5px;

}

form #roles:focus,
form #roles:hover{

    outline: none;

}

form span{

    text-align: center;
    font-size: 30px;
    font-weight: bold;

}

form input,
form select{
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
    background: none;
    border-radius: 5px;
    border: 1px solid gray;
}
form .btn{
    width: 100%;
    color:#fff;
    padding:8px 20px;    
    border: none;
    border-radius: 6px;
    background-color: #7743DB;
    transition: all 0.2 ease;
}
.btn:active{
    transform:scale(0.96)
}

</style>
