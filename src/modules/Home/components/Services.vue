<template>

<div class="services">

    <div class="services__header-container">

        <div class="services__header">

            <h1>Services</h1>

        </div>

    </div>

    
    <div class="services__icons-container">

        <div class="services__icon">

            <span class="material-symbols-outlined" id="ctg">category</span>
            <div> 
                <h1 class="services__icon-header">Hire</h1>
                <p class="services__icon-footer">Hire professional</p>
            </div>

        </div>

        <div class="services__icon">

            <span class="material-symbols-outlined" id="shake">handshake</span>
            <div>
                <h1 class="services__icon-header">Apply</h1>
                <p class="services__icon-footer">Apply For jobs</p>
            </div>

            </div>

        <div class="services__icon">

            <span class="material-symbols-outlined" id="pay">Payments</span>
            <div>
                <h1 class="services__icon-header">Payment</h1>
                <p class="services__icon-footer">Pay or get paid online</p>
            </div>

        </div>

    </div>

</div>

</template>

<style scoped>

.services{
  padding:30px 0;
  display: grid;
  background-color: #FFFBF5;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin:0px 0 100px 0;
}

.services__header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1rem;

  & h1{
    font-size: 1.5rem;
    font-weight: bold;
    color:red;
  }
}

.services__icons-container{
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;

}
.services__icon-header{
  font-size:1rem;
}

.services__icon-footer{
  font-size:0.8rem;
}

.services__icon{
  padding:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width:300px;
}


.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  width:fit-content;
}

#ctg{
  font-size:1.5rem;
  color:rgba(51, 102, 255, 1); 
  border-radius:5px;
  padding:0.3em;
  background-color: rgba(51, 102, 255, 0.2);
}

#shake{
  font-size:1.5rem;
  color:rgba(255, 80, 80, 1); 
  border-radius:5px;
  padding:0.3em;
  background-color: rgba(255, 80, 80, 0.2);
}

#pay{
  font-size:1.5rem;
  color:rgba(0, 255, 0, 1); 
  border-radius:5px;
  padding:0.3em;
  background-color: rgba(0, 255, 0, 0.2);
}

</style>