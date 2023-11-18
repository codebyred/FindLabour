<script setup>

import {ref} from 'vue'

import {loginStore} from "../stores/login.store"
// import {io} from  "socket.io-client"
import {validate_email, validate_password} from "../utils/formValidation.util.js"


const email = ref("");
const password = ref("");

const emailErr = ref("");
const passErr = ref("");


const userLogin = loginStore();
const loginErr = userLogin.showLoginErr();


const onSubmit = async (e)=>{

    e.preventDefault();

    emailErr.value = validate_email(email.value);

    passErr.value = validate_password(password.value);

    if(passErr.value) return;
    
    await userLogin.login(email.value, password.value);

}

</script>

<template>

<section>

    <div class="form-container">

        <form @submit="onSubmit">

            <span>Sign in</span>

            <p v-if="loginErr">{{ loginErr }}</p>

            <div class="form-group">

                <input
                    v-model="email"
                    type="email" name="email"
                    placeholder="Email"
                >

                <p v-if="emailErr"> {{ emailErr }} </p>

            </div>

            <div class="form-group">

                <input
                    v-model="password"
                    type="password" 
                    name="password" 
                    placeholder="Password"
                > 

                <p v-if="passErr"> {{ passErr }} </p>

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
    background: #3b52e9;
    transition: all 0.2 ease;
}
.btn:active{
    transform:scale(0.96)
}

</style>
