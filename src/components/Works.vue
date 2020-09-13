<template>
<!--start works-->
  <div id="works" class="section-works is-centered">
     <article>
    <h2>Works</h2>
    <h3 class="title-summary">Some of results</h3>
    <section class="works-container">
          <a class="thumbnail" @click="openModal(0)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/urbanhire-landing.png" alt="">
            </div>
          </a>
          <a class="thumbnail" @click="openModal(1)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/rasatlaw.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(2)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/maimilu.png" alt="">
            </div>
          </a>
        
          <a class="thumbnail" @click="openModal(3)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/gelora.png" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(4)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/urbanhire-all.png" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(5)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/musinlawson.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(6)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/teammates.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(7)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/printhink.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(8)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/buzzbuddies.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(9)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/sicepat.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(10)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/hanako.jpg" alt="">
            </div>
          </a>
  
          <a class="thumbnail" @click="openModal(11)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/sentralcargo.jpg" alt="">
            </div>
          </a>
              <a class="thumbnail" @click="openModal(12)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/jalankece.jpg" alt="">
            </div>
          </a>
          <a class="thumbnail" @click="openModal(13)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/domusalba.jpg" alt="">
            </div>
          </a>
          <a class="thumbnail" @click="openModal(14)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/ekoproperti.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(15)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/flightmaster.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(16)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/graphdes2.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(17)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/moreworks.png" alt="">
            </div>
          </a>
          </section>

      
      <transition name="fade">
      <div v-if="showModal" class="modal">
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <div class="modal-container">
                  <section v-if="activeImage === 0"><UHLanding2020 /></section>

                  <section v-if="activeImage === 1"><Rasatlaw /></section>

                  <section v-if="activeImage === 2"><Maimilu /></section>

                  <section v-if="activeImage === 3"><Gelora /></section>

                  <section v-if="activeImage === 4"><Urbanhire /></section>

                  <section v-if="activeImage === 5"><MusinLawson /></section>

                  <section v-if="activeImage === 6"><Teammates /></section>

                  <section v-if="activeImage === 7"><Printhink /></section>

                  <section v-if="activeImage === 8"><BuzzBuddies /></section>

                  <section v-if="activeImage === 9"><Sicepat /></section>

                  <section v-if="activeImage === 10"><Hanako /></section>

                  <section v-if="activeImage === 11"><SentralCargo /></section>

                  <section v-if="activeImage === 12"><Jalankece /></section>

                  <section v-if="activeImage === 13"><DomusAlba /></section>

                  <section v-if="activeImage === 14"><EkoProperti /></section>

                  <section v-if="activeImage === 15"><FlightMaster /></section>

                  <section v-if="activeImage === 16"><Graphdes /></section>

                  <section v-if="activeImage === 17"><MoreWorks /></section>

                  <!-- <button class="modal-close" @click="showModal = false"><i class="icon-close"></i></button> -->
                      <button class="modal-close" @click="closeModal" v-on:keyup.esc="closeModal"><i class="icon-close"></i></button>
                      <div class="modal-nav-container">
                    <button class="modal-nav is-left" v-if="activeImage !== 0" @click="activeImage = activeImage - 1" v-on:keyup.left="activeImage = activeImage -= 1"><i class="icon-angle-left"></i> PREV</button>
                    <button class="modal-nav is-right" v-if="activeImage < 17" @click="activeImage = activeImage + 1" v-on:keyup.right="activeImage = activeImage += 1">NEXT <i class="icon-angle-right"></i></button>
                  </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
      </transition>

  </article>
  </div>
  <!--end works-->
</template>

<script>

import UHLanding2020 from './projects/UHLanding2020'
import Urbanhire from './projects/Urbanhire'
import Rasatlaw from './projects/Rasatlaw'
import MusinLawson from './projects/MusinLawson'
import Teammates from './projects/Teammates'
import Printhink from './projects/Printhink'
import BuzzBuddies from './projects/BuzzBuddies'
import Sicepat from './projects/Sicepat'
import Hanako from './projects/Hanako'
import SentralCargo from './projects/SentralCargo'
import Jalankece from './projects/Jalankece'
import DomusAlba from './projects/DomusAlba'
import EkoProperti from './projects/EkoProperti'
import FlightMaster from './projects/FlightMaster'
import Graphdes from './projects/Graphdes'
import Maimilu from './projects/Maimilu'
import MoreWorks from './projects/MoreWorks'
import Gelora from './projects/Gelora'

export default {
  name: 'dikaseva',
  components:{
      UHLanding2020,
      Urbanhire,
      Rasatlaw,
      MusinLawson,
      Teammates,
      Printhink,
      BuzzBuddies,
      Sicepat,
      Hanako,
      SentralCargo,
      Jalankece,
      DomusAlba,
      EkoProperti,
      FlightMaster,
      Graphdes,
      Maimilu,
      Gelora,
      MoreWorks
  },
  data () {
    el: "modal"
    return {
      activeImage: 0,
      showModal: false
    }
  },
  
  methods: {
  scrollMeTo(refName) {
    var element = this.$refs[refName];
    var top = element.offsetTop;

    window.scrollTo(0, top);
  },
  openModal(idx) {
    this.activeImage = idx;
    this.showModal = true;
    document.documentElement.style.overflow = 'hidden';
  },
  closeModal(){
    this.showModal = false;
    document.documentElement.style.overflow = 'auto';
  }
}
  
}
</script>
