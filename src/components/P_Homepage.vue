<template>
<div>
  <!--start works-->
  <div id="works" class="section-works is-centered">
     <article>
    <h2>Works</h2>
    <h3 class="title-summary">Some of results</h3>
    <!-- <ul>
      <li>Urbanhire landing page 2020</li>
      <li>Urbanhire comprehensive platform
          <ul>
            <li>ATS - web + app</li>
            <li>Resume search</li>
            <li>MPP</li>
            <li>Assessments</li>
            <li>Urbanhire Enterprise</li>
            <li>Referrals</li>
          </ul>
      </li>
      <li>Urbanhire Job portal (web &amp; app)</li>
      <li>Urbanhire Recruiter &amp; JS Blogs</li>
      <li>Urbanhire Career page &amp; editor</li>
      <li>Gelora id</li>
      <li>Update maimilu</li>
      <li></li>

    </ul> -->
      <a class="" v-if="activeSlide !== 0" @click="activeSlide = activeSlide - 1"><i class="icon-angle-left"></i></a>
      <a class="" v-if="activeSlide < 2" @click="activeSlide = activeSlide + 1"><i class="icon-angle-right"></i></a>
      <div class="slide-container">
        <!-- start slide  -->
        <div class="slide" v-if="activeSlide === 0">
          <div class="slide-content">
          <a class="thumbnail" @click="openModal(0)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/rasatlaw.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(1)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/musinlawson.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(2)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/teammates.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(3)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/printhink.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(4)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/buzzbuddies.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(5)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/sicepat.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(6)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/hanako.jpg" alt="">
            </div>
          </a>
  
          <a class="thumbnail" @click="openModal(7)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/sentralcargo.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(8)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/jalankece.jpg" alt="">
            </div>
          </a>

        </div>
        </div>
        <!-- end slide -->
       <!-- start slide  -->
        <div class="slide" v-if="activeSlide === 1">
          <div class="slide-content">
          

          <a class="thumbnail" @click="openModal(2)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/teammates.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(3)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/printhink.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(0)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/rasatlaw.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(1)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/musinlawson.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(4)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/buzzbuddies.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(5)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/sicepat.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(6)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/hanako.jpg" alt="">
            </div>
          </a>
  
          <a class="thumbnail" @click="openModal(7)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/sentralcargo.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(8)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/jalankece.jpg" alt="">
            </div>
          </a>

        </div>
        </div>
        <!-- end slide -->

        <!-- start slide  -->
        <div class="slide" v-if="activeSlide === 2">
          <div class="slide-content">
          <a class="thumbnail" @click="openModal(9)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/domusalba.jpg" alt="">
            </div>
          </a>
          <a class="thumbnail" @click="openModal(10)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/ekoproperti.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(11)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/flightmaster.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(12)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/graphdes2.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(13)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/maimilu.jpg" alt="">
            </div>
          </a>

          <a class="thumbnail" @click="openModal(14)">
            <div class="project-img">
              <img src="../assets/works_thumbnail/mahanair.jpg" alt="">
            </div>
          </a>
        </div>
        </div>
        <!-- end slide  -->

      </div>
      
      <transition name="fade">
      <div v-if="showModal" class="modal">
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <div class="modal-container">
                  <!-- image 1 -->
                  <div class="modal-content" v-if="activeImage === 0">
                    <div class="project-img">
                      <!-- <img src="http://dikaseva.com/img/works_large/rasatlaw-large.jpg" alt=""> -->
                      <video style="width:100%; border: solid 1px #d5d5d5;" loop controls autoplay>
                        <source src="../assets/works/uh_landing2020_720.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>
                      <img src="../assets/works/urbanhire_landing2020.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Ramadian &amp; Satari <span>Firma Hukum</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                      <ul>
                          <li>Design Mockups</li>
                          <li>Photograph</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                        </p>
                        <p><strong>RESULT</strong><br>
                        <a href="http://rasatlaw.com/" target="_blank">www.rasatlaw.com</a>
                        </p>
                      </div>
                    
                  </div>

                  <!-- image 2 -->
                   <div class="modal-content" v-if="activeImage === 1">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/musinlawson-large.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Musin Lawson <span>Communication</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <span>www.musinlawson.co.id</span>
                        <a href="#" target="_blank">(link expired)</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 3 -->
                   <div class="modal-content" v-if="activeImage === 2">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/teammates-large.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Teammates <span>Sports Booking</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="http://dikaseva.com/teammates/" target="_blank">View mockup</a><br>
                        <a href="http://www.team-mates.co/" target="_blank">www.team-mates.co</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 4 -->
                   <div class="modal-content" v-if="activeImage === 3">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/printhink-large.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Printhink <span>Online Prints</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="http://dikaseva.com/printhink/" target="_blank">View mockup</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 5 -->
                   <div class="modal-content" v-if="activeImage === 4">
                    <div class="project-img">
                      <img class="pad-b" src="http://dikaseva.com/img/works_large/buzzbuddies.jpg" alt="">
                      <img class="pad-b" src="http://dikaseva.com/img/works_large/buzzbuddies2.jpg" alt="">
                      <img src="http://dikaseva.com/img/works_large/buzzbuddies3.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Buzzbuddies <span>Social Media</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                          <li>Mobile App Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="https://buzzbuddies.com/" target="_blank">buzzbuddies.com</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 6 -->
                   <div class="modal-content" v-if="activeImage === 5">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/sicepat.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">SICEPAT EKSPRES <span>Courier Agent</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="http://dikaseva.com/sicepat/" target="_blank">View mockup</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 7 -->
                   <div class="modal-content" v-if="activeImage === 6">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/hanako.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Hanako <span>Baby Shop</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="http://dikaseva.com/hanako/" target="_blank">View mockup</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 8 -->
                   <div class="modal-content" v-if="activeImage === 7">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/sentralcargo.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Sentral Cargo <span>Courier Agent</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="https://www.sentralcargo.co.id/" target="_blank">sentralcargo.co.id</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 9 -->
                   <div class="modal-content" v-if="activeImage === 8">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/jalankece.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Jalankece <span>Traveler Blog</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Wordpress (PHP)</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="http://www.jalankece.com/" target="_blank">jalankece.com</a>
                        </p>
                     
                      </div>
                    
                  </div>

                   <!-- image 10 -->
                   <div class="modal-content" v-if="activeImage === 9">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/domusalba.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Domus Alba</h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="http://domusalba.com/" target="_blank">domusalba.com</a>
                        </p>
                     
                      </div>
                    
                  </div>

                   <!-- image 11 -->
                   <div class="modal-content" v-if="activeImage === 10">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/ekoproperti.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Eko Property</h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="#" target="_blank">(link expired))</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 12 -->
                   <div class="modal-content" v-if="activeImage === 11">
                    <div class="project-img">
                      <img class="pad-b" src="http://dikaseva.com/img/works_large/flightmaster_win8.jpg" alt="">
                      <img src="http://dikaseva.com/img/works_large/flightmaster_win8_2.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Flight Master <span>Digital Pilot Charts</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>App Design</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="#" target="_blank">(link expired))</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 13 -->
                   <div class="modal-content" v-if="activeImage === 12">
                    <div class="project-img">
                      <img class="padd-b" src="http://dikaseva.com/img/works_large/graphdes.jpg" alt="">
                      <img src="http://dikaseva.com/img/works_large/graphdes2.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Graphdes 1 &amp; 2 <span>Digital Prints</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="#" target="_blank">(link expired : graphdes.net))</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 14 -->
                   <div class="modal-content" v-if="activeImage === 13">
                    <div class="project-img">
                      <img src="http://dikaseva.com/img/works_large/maimilu.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">Maimilu<span>Online Ticketing</span></h2>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>Web Development</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design Mockups</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                      </p>
                      <p><strong>RESULT</strong><br>
                        <a href="https://maimilu.com/" target="_blank">maimilu.com</a>
                        </p>
                     
                      </div>
                    
                  </div>

                  <!-- image 15 -->
                   <div class="modal-content" v-if="activeImage === 14">
                    <div class="project-img">
                      <img class="pad-b" src="http://dikaseva.com/img/works_large/mahanair.jpg" alt="">
                      <img class="pad-b" src="http://dikaseva.com/img/works_large/mahanair2.jpg" alt="">
                      <img class="pad-b" src="http://dikaseva.com/img/works_large/mahanair3.jpg" alt="">
                      <img src="http://dikaseva.com/img/works_large/airchina.jpg" alt="">
                    </div>
                    <div class="project-detail">
                      <h2 class="project-title">3D Design</h2>
                      <p>Low poly aircraft 3D model for web-based flight simulator running on Cesium JS</p>
                      <p><strong>TYPE</strong>
                      <ul>
                          <li>3D Modeling</li>
                        </ul>
                      </p>
                      <p><strong>WHAT I DO</strong>
                        <ul>
                          <li>Design</li>
                        </ul>
                      </p>
                     
                      </div>
                    
                  </div>

                  <!-- <button class="modal-close" @click="showModal = false"><i class="icon-close"></i></button> -->
                  <button class="modal-close" @click="closeModal" v-on:keyup.esc="closeModal"><i class="icon-close"></i></button>
                  <button class="modal-nav is-left" v-if="activeImage !== 0" @click="activeImage = activeImage - 1" v-on:keyup.left="activeImage = activeImage -= 1"><i class="icon-angle-left"></i></button>
                  <button class="modal-nav is-right" v-if="activeImage < 14" @click="activeImage = activeImage + 1" v-on:keyup.right="activeImage = activeImage += 1"><i class="icon-angle-right"></i></button>
                        </div>
            </div>
          </div>
        </div>
      </div>
      </transition>

  </article>
  </div>
  <!--end works-->
  </div>
</template>

<script>

export default {
  name: 'dikaseva',
  data () {
    el: "modal"
    return {
      activeImage: 0,
      activeSlide: 0,
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
