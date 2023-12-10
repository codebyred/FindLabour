<script setup>

import {ref} from 'vue'
import { validate_email, validate_password, match_password } from '../utils/formValidation.util.js';

const username = ref("");
const email = ref("");
const password = ref("");
const confPassword = ref("");

const emailErr = ref("");
const passErr = ref("");
const confPassErr = ref("");


const onSubmit = async (e)=>{

    e.preventDefault();

    emailErr.value = validate_email(email.value);
    passErr.value = validate_password(password.value);
    confPassErr.value = match_password(password.value, confPassword.value);

    
}


</script>

<template>

<section>

<div class="form-container">

    <form @submit="onSubmit">

        <span>Sign Up</span>

        <div class="form-group">

            <input
                v-model="username"
                type="username" name="username"
                placeholder="Username"
            >

            <p v-if="emailErr"> {{ emailErr }} </p>

        </div>

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

        <div class="form-group">

            <input
                v-model="confPassword"
                type="password" 
                name="confirm-password" 
                placeholder="Confirm password"
            > 

            <p v-if="confPassErr"> {{ confPassErr }} </p>

        </div>


        <button class="btn signup-btn" type="submit">Sign up</button>

        <p style=
        "
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
        ">
                
            <RouterLink to="/signin">sing in</RouterLink>

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
background: #7743DB;
transition: all 0.2 ease;
}

.btn:active{
transform:scale(0.96)
}

</style>