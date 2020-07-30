<template>
<div>
  <!--start homepage-->
  <div id="home" class="section-homepage is-centered m-hide">
    <img src="./../assets/theleaf.jpg">
  </div>
  <!--end homepage-->

  <!--start about-->
  <div id="about" class="section-about is-centered">
     <article>
    <h2>ABOUT</h2>
    <h3 class="title-summary">In a nutshell</h3>
      <p>He is someone who loves clean and simple design with seamless interaction &amp; a pixel perfect mindset.</p>
      <p>A CSS wizard, have strong ability to manipulates CSS &amp; HTML into amazing layouts with the most possible micro-interactions.</p>
      <p>A fan of <strong>Codrops</strong>, <strong>Medium</strong> &amp; <strong>Awwwards Blog</strong>.</p>
  </article>  
  </div>
  <!--end about-->

  <!--start skills-->
  <div id="skills" class="section-skills is-centered">
     <article>
    <h2>SKILLS</h2>
    <h3 class="title-summary">What I Do</h3>
      <div class="flex-container">
        <div class="flex-6">
          <div class="skill">
          <p>Sketch App</p>
          <div class="skill-bar"><span style="width:90%;"></span></div>
        </div>
        <div class="skill">
          <p>Adobe Photoshop</p>
          <div class="skill-bar"><span style="width:90%;"></span></div>
        </div>
        <div class="skill">
          <p>Adobe Illustrator</p>
          <div class="skill-bar"><span style="width:90%;"></span></div>
        </div>
        <div class="skill">
          <p>Adobe Premiere</p>
          <div class="skill-bar"><span style="width:80%;"></span></div>
        </div>
        <div class="skill">
          <p>Adobe After Effects</p>
          <div class="skill-bar"><span style="width:70%;"></span></div>
        </div>
        <div class="skill">
          <p>Blender 3D</p>
          <div class="skill-bar"><span style="width:60%;"></span></div>
        </div>
      </div>
      <div class="flex-6">
          <div class="skill">
          <p>HTML</p>
          <div class="skill-bar"><span style="width:95%;"></span></div>
        </div>
        <div class="skill">
          <p>CSS</p>
          <div class="skill-bar"><span style="width:95%;"></span></div>
        </div>
        <div class="skill">
          <p>JQuery</p>
          <div class="skill-bar"><span style="width:50%;"></span></div>
        </div>
        <div class="skill">
          <p>Wordpress</p>
          <div class="skill-bar"><span style="width:70%;"></span></div>
        </div>
        
      </div>
      </div>
  </article>
  </div>
  <!--end skills-->

  <!--start works-->
  <div id="works" class="section-works is-centered">
     <article>
    <h2>Works</h2>
    <h3 class="title-summary">Some of results</h3>
      <div class="works-container">
        <!-- start -->
        <a class="thumbnail" @click="openModal(0)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/rasatlaw.jpg" alt="">
          </div>
          <!-- <div class="project-summary">
            <h5>Ramadian &amp; Satari</h5>
          </div> -->
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(1)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/musinlawson.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(2)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/teammates.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(3)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/printhink.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(4)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/buzzbuddies.jpg" alt="">
          </div>
        </a>
        <!-- end -->

         <!-- start -->
        <a class="thumbnail" @click="openModal(5)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/sicepat.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(6)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/hanako.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(7)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/sentralcargo.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(8)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/jalankece.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(9)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/domusalba.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(10)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/ekoproperti.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(11)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/flightmaster.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(12)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/graphdes2.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(13)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/maimilu.jpg" alt="">
          </div>
        </a>
        <!-- end -->

        <!-- start -->
        <a class="thumbnail" @click="openModal(14)">
          <div class="project-img">
            <img src="../assets/works_thumbnail/mahanair.jpg" alt="">
          </div>
        </a>
        <!-- end -->
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
                      <img src="http://dikaseva.com/img/works_large/rasatlaw-large.jpg" alt="">
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
                  <button class="modal-close" @click="closeModal"><i class="icon-close"></i></button>
                  <button class="modal-nav is-left" v-if="activeImage !== 0" @click="activeImage = activeImage - 1"><i class="icon-angle-left"></i></button>
                  <button class="modal-nav is-right" v-if="activeImage < 14" @click="activeImage = activeImage + 1"><i class="icon-angle-right"></i></button>
                        </div>
            </div>
          </div>
        </div>
      </div>
      </transition>

  </article>
  </div>
  <!--end works-->

  <!--start works-->
  <div id="photography" class="section-photo is-centered">
     <article>
    <h2>Photography</h2>
    <h3 class="title-summary">Through the lens</h3>
      <div class="photo-container">
        <div><img src="../assets/photo_thumbnail/9.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/11.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/12.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/19.jpg" alt=""></div>

        <div><img src="../assets/photo_thumbnail/1.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/2.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/3.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/4.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/5.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/8.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/10.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/13.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/14.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/15.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/16.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/17.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/18.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/20.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/21.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/22.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/23.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/24.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/25.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/26.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/34.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/6.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/33.jpg" alt=""></div>
        <div><img src="../assets/photo_thumbnail/32.jpg" alt=""></div>
      </div>
  </article>
  </div>
  <!--end works-->

  <!--start trivia-->
  <div class="section-trivia">
    <img class="photo-profile" src="../assets/dikaseva.jpg" alt="">
    <ul class="contact">
        <li><a href="https://www.linkedin.com/in/dikasoulseva" target="_blank"><i class="icon-linkedin"></i></a></li>
        <li><a href="https://instagram.com/dikaseva" target="_blank"><i class="icon-instagram"></i></a></li>
        <li><a href="mailto:hello@dikaseva.com" title="hello@dikaseva.com"><i class="icon-mail"></i></a></li>
      </ul>
  </div>
  <!--end trivia-->

  <footer>
    <p class="warning"><strong>Attention</strong>: This site is using new CSS properties like CSS grid layout which won’t work in older browsers.</p>
    <p class="copyright"><span>&copy; dikaseva 2018 - v1.1</span></p>
  </footer>
  </div>
</template>

<script>

export default {
  name: 'dikaseva',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to {
  /* .fade-leave-active below version 2.1.8 */
  opacity: 0;
}
.section-homepage, .section-about, .section-skills, .section-works, .section-photo {
  width: 100%;
  padding: 60px 40px 40px 40px;
  min-height: calc(100vh - 50px);
  position: relative;
}
.section-homepage img, .section-about img, .section-skills img, .section-works img, .section-photo img {
  display: block;
  margin: auto;
  max-width: 100%;
}
.section-homepage {
  min-height: 100vh;
  margin-top: -50px;
  padding-top: 40px;
}
.section-trivia {
  width: 100%;
  padding: 40px 40px 0px 40px;
  text-align: center;
  border-top: solid 1px #ddd;
}
.photo-profile {
  border-radius: 100px;
}
.outer {
  width: 100%;
  height: 100%;
  display: table;
}
.middle {
  display: table-cell;
  vertical-align: middle;
}
.inner {
  display: block;
  text-align: center;
}
.modal {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  padding: 50px;
  overflow: auto;
  visibility: visible;
}
.modal-close {
  position: fixed;
  z-index: 8888;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background: white;
  font-size: 2.2em;
  border: none;
  transition: font-size 0.15s ease-out;
}
.modal-close:hover {
  cursor: pointer;
  background: #ebebeb;
  font-size: 1.8em;
}
.modal-nav {
  border: none;
  width: 40px;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 1.5em;
  transition: 0.15s ease-out;
}
.modal-nav:hover {
  cursor: pointer;
  background: #ebebeb;
}
.modal-nav.is-left {
  left: 50px;
}
.modal-nav.is-right {
  right: 50px;
}
.modal-container {
  padding: 40px;
  background: white;
  min-height: calc(100vh - 100px);
}
.modal-content {
  position: relative;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 72% auto;
  min-height: calc(100vh - 180px);
}
@media (max-width: 800px) {
  .modal {
    background: white;
    padding: 0px;
  }
  .modal-container {
    padding: 40px;
    min-height: 100vh;
  }
  .modal-nav.is-left {
    left: 0px;
  }
  .modal-nav.is-right {
    right: 0px;
  }
  .modal-close {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 2em;
  }
  .modal-close:hover {
    font-size: 2em;
  }
}
.project-img {
  display: grid;
  align-content: space-evenly;
}
.project-detail {
  text-align: left;
  position: relative;
  height: 100%;
  background: #f8f8f8;
  padding: 20px;
}
.project-detail p strong {
  letter-spacing: 0.1em;
}
.project-title {
  font-weight: 300;
  font-size: 3em;
  line-height: 1em;
}
.project-title span {
  display: block;
  opacity: 0.54;
  font-size: 0.8em;
  margin: 10px 0 0 0;
  line-height: 1em;
}
.project-task {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.project-task li {
  display: inline-block;
}
.project-task img {
  max-width: 64px;
  opacity: 0.75;
  margin-right: 5px;
}
.project-task img:hover {
  opacity: 0.9;
}
.skill {
  width: 100%;
  margin: 10px 0;
}
.skill p {
  margin: 0;
}
.skill-bar {
  width: 100%;
  height: 15px;
  border-radius: 10px;
  background: #D8D8D8;
  overflow: hidden;
}
.skill-bar span {
  display: block;
  height: 15px;
  background: #242424;
}
.etc h4 {
  margin: 40px 0 10px 0;
  padding: 0;
  line-height: 1em;
}
.etc p {
  margin: 0;
}
.flex-container {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.flex-6 {
  width: 50%;
}
.flex-6:first-child {
  padding-right: 20px;
}
.flex-6:last-child {
  padding-left: 20px;
}
@media (max-width: 800px) {
  .flex-container {
    display: block;
  }
  .flex-6 {
    width: 100%;
  }
  .flex-6:first-child {
    padding-right: 0;
  }
  .flex-6:last-child {
    padding-left: 0;
  }
}
.contact {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.contact li {
  margin: 0;
  padding: 0;
  display: inline;
}
.contact a {
  display: inline-block;
  padding: 20px 10px;
  text-decoration: none;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.57);
}
.thumbnail {
  display: block;
  overflow: hidden;
  cursor: pointer;
}
.thumbnail img {
  -webkit-transition: all ease 0.2s;
  -moz-transition: all ease 0.2s;
  -o-transition: all ease 0.2s;
  transition: all ease 0.2s;
}
.thumbnail:hover img {
  transform: scale(1.1);
}
.warning {
  padding: 20px;
  text-align: center;
  font-style: italic;
  border: 1px dashed orangered;
}
.warning strong {
  color: orangered;
}
ul {
  margin: 0;
}
.pad-b {
  padding-bottom: 40px;
}
@media (max-width: 800px) {
  .modal-content {
    grid-template-columns: 100%;
  }
  .m-hide {
    display: none;
  }
}

</style>
