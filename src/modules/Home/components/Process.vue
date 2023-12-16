<template>

<div class="process">

    <div class="process__header">
        <h1>How to Hire?</h1>
    </div>

    <div class="process__video-container">
        <!-- <iframe class="process__video" width="100%" height="100%"
            src="https://www.youtube.com/embed/QSPBj6zzktg">
        </iframe> -->
    </div>

    <div class="process__texts-container">

        <div class="process__text">
            <span class="process__text-header">1</span>
            <h1>Select Category</h1>
            <p>Go to hire page and select a category</p>
        </div>

        <div class="process__text">
            <span class="process__text-header">2</span>
            <h1>Search and select</h1>
            <p>Search and select professional in your area</p>
        </div>

        <div class="process__text">
            <span class="process__text-header">3</span>
            <h1>Booking</h1>
            <p>Click on book to get in touch with employee</p>
        </div>

    </div>

</div>

</template>

<style scoped>

.process{
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:"a a "
                      "b c";
}

.process__header{
  grid-area:a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:20px;
  margin-bottom: 10px;
  & h1{
    font-size: 1.5rem;
    font-weight: bold;
    color:red;
  }

}

.process__video-container{

  grid-area:b;
  aspect-ratio: 16/9;
  margin-right: 10px;

}

.process__video{
  border-radius: 10px;
}

.process__texts-container{
  font-size: 0.8rem;
  padding: 20px;
  margin-left: 10px;
}

.process__text{
  padding: 0 20px 15px 20px;
  position: relative;
  border-left: 1px solid #7743DB;
}

.process__text-header{
  position: absolute;  
  top:10px;
  left:-15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width:30px;
  height:30px;
  border-radius: 50%;
  background:#7743DB;
  color:white;
}

</style>