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
    
                Maid Hiring Management System Maid Hiring System offers trained
                personnel that are pandemic prepared for your home. Select the best maid 
                service and maid agency for your new domestic help. 
    
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
        grid-template-columns: 400px 400px;
        padding: 50px 300px;
    
    }
    
    footer div{
    
        display: flex;
        flex-direction: column;
    
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