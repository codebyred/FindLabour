<template>

    <footer>
    
        <div class="contact">
    
            <h5>Contact</h5>
    
            <span>Phone: 0111</span>
    
            <span>Email: m@gmail.com</span>
    
        </div>
    
        <div class="about">
    
            <h5>About us</h5>
    
            <span>
    
               We provide professionals
    
            </span>
    
        </div>
    
    </footer>
    
    </template>
    
    <style scoped>
    
    footer{
    
        border-radius: 10px;
        margin: auto;
        width: 98%;
        flex: 0 1 300px;
        background-color: rgb(6, 11, 28);
        display: grid;
        grid-auto-flow:column;
        grid-template-columns: repeat(auto-fill,minmax(400px, 1fr));
        padding: 50px 0;
    
    }
    
    footer div{
    
        display: flex;
        flex-direction: column;
        padding: 0 80px;

    }
    
    footer div span{
    
        color:white;
        font-size: 20px;
    
    }
    
    footer div h5{
    
        color: white;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 20px;
    
    }
    
    </style>