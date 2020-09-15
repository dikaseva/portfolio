<template>
  <div id="app">

    <!-- start sidebar menu -->
    <Sidebar />
    <!-- end sidebar menu -->
    
    <div class="wrap">
      
      <div class="main-hero">
        <div class="hero">
          <h1 class="aside-heading">DIKA <br> <span>SOUL</span> <br> SEVA</h1>
        <h2 class="aside-subheading">WEB, UI &amp; UX DESIGNER</h2>
        </div>
      </div>

      <div class="main-view">
        <Hero />
        <About />
        <Skills />
        <Works />
        <Photography />
        <Footer />

         <!--view start-->
        <!-- <router-view/> -->
        <!--view end-->
      </div>
    </div>
    
  </div>
</template>

<script>
import Sidebar from '@/components/Menu'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Photography from '@/components/Photography'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Sidebar,
    Hero,
    About,
    Skills,
    Works,
    Photography,
    Footer
  },
  data() {
    return {
      // hello: 'some helo'
    }
  }
}
</script>
<style src="../static/css/style.css"></style>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style scoped>
.wrap{
    margin:0 auto;
    padding-left:400px;
    position: relative;
}
@media all and (max-width:1024px){
    .wrap{
        width:90%;
    }
}
.main-hero{
    min-height:calc(100vh - 50px);
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    width:400px;
    margin-left:-400px;
    position: fixed;
    z-index:999;
    /* outline: solid 1px blue; */
}
.main-view{
    width:100%;
    position: relative;
    min-height:calc(100vh - 50px);
}
@media all and (max-width:800px){
    .wrap{
        padding-left:0;
    }
    .main-hero{
      margin-left:0;
      width:100%;
      position: absolute;
    }
}
.aside-heading{
    font-size:6.5em;
    line-height:1.2em;
    letter-spacing:.1em;
    color:#222222;
    font-weight:100;
    padding:20px 0 40px 0;
    position: relative;
    margin-bottom:20px;
    
  }
  .aside-heading span{
    color:#9B9B9B;
  }
  .aside-heading:after{
    content:'';
    width:72px;
    height:5px;
    display:block;
    background:#222222;
    position: absolute;
    bottom:0;
    left:0;
  }
  .aside-subheading{
    font-size:1.8em;
    color:#222222;
    font-weight: 100;
  }
</style>

