<script setup>

</script>

<template>

<section id="hero">

  <div class="texts">

    <h1>Welcome to Kormi </h1>
    
    <p> Hire professionals as your needs </p>

    <nav>
      <a href="#services">Our services</a>
    </nav>


  </div>

  <img src="../assets/images/2133_SkVNQSBGQU1PIDk5Mi0zNQ.jpg" />

</section>

<section id="services">

  <h1>What we offer</h1>
  
  <p>We provide professionals on different fields</p>

  <div class="service-container">

    <div class="service">

      <img />
      <h1>Plumber</h1>
      <p>Hire plumbers</p>

    </div>

  </div>

  <div>

    <RouterLink to="/hire">Ready to hire?</RouterLink>

    <p>Want to get hired?</p>
    <RouterLink to="/apply">click here</RouterLink>

  </div>


</section>

</template>

<style scoped>

section {

  width: 100%;
  height: 100vh;

}

section:nth-child(1) {

  height: 90vh;
  display: flex;

}

.texts{

  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.texts h1{

  font-size:2.5rem;

}
.texts p{

  font-size:1rem;
  max-width: 30ch;
  display: block;
  
  
}

nav{
  padding:20px 0;
}

nav a{

  font-size: 1rem;
  margin-right: 1em;
  width: fit-content;
  text-decoration: none;
  color:white;
  border: 1px solid blueviolet;
  padding: 0.32em 0.6em;
  border-radius: 0.6em;
  background:blueviolet;
  transition: all 0.2s ease-in-out;
  
}

nav a:hover{

  color: rgba(255, 255, 255, 1);
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);

}


</style>
