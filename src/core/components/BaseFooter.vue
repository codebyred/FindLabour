<template>

    <footer class="footer">
    
        <div class="footer__texts-container">

            <div class="footer__text">
                <h5>Contact</h5>
    
                <span>Phone: 0111</span>

                <span>Email: m@gmail.com</span>
            </div>
    
            <div class="footer__text">
    
                <h5>About us</h5>

                <span>

                    We provide professionals

                </span>

            </div>

            <div class="footer__text">

                <h5>About us</h5>
    
                <span>

                    We provide professionals

                </span>

            </div>
    
        </div>
    
        <div class="footer__copyright">
            <p>All rights reserved to <a href="">@solomon grundy</a> </p>
        </div>
    
    </footer>
    
    </template>
    
    <style scoped>
    
    .footer{
        border-radius: 12px;
        min-height: 320px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        background-color: rgba(119, 67, 219, 0.75);
        padding: 50px 0;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    
    .footer__texts-container{
    
        display: flex;
        justify-content: space-between;
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

    .footer__copyright{
        font-size: 0.8rem;
        text-align: center;
    }

    .footer__copyright a{
        font-weight:bold;
        color:rgba(255, 0, 0, 0.529);
        text-decoration: none;
    }
    
    </style>