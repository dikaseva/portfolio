<template>
  <!--start homepage-->
  <div id="home" class="section-homepage is-centered">
    <div class="hero-image">
      <img src="./../assets/dika.png">
    </div>
  </div>
  <!--end homepage-->
</template>

<style scoped>
.hero-image{
  background:#f1f1f1;
  width:100%;
  text-align:center;
}
.hero-image img{
  max-height: 70vh;
}
@media all and (max-width: 800px){
  .hero-image{
    position: absolute;
    top:0;
    right: 0;
    z-index: 1;
    visibility: hidden;
  }
}
</style>