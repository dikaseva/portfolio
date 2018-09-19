<template>
<div>
  <header class="header"> 
    {{message}}
    <div class="logo-wrap">
      <a v-scroll-to="'#home'" :class="isActive(0)" class="logo"><img src="../assets/logo.svg"></a>
    </div>
    <ul class="contact">
        <li><a href="https://www.linkedin.com/in/dikasoulseva" target="_blank"><i class="icon-linkedin"></i></a></li>
        <li><a href="https://instagram.com/dikaseva" target="_blank"><i class="icon-instagram"></i></a></li>
        <li><a href="mailto:hi@dikaseva.com"><i class="icon-mail"></i> <span>hi@dikaseva.com</span></a></li>
      </ul>
    </header>
    <aside class="aside">
    <div class="menu">
          <ul>
              <li><a v-scroll-to="'#home'" :class="isActive(0)">Home</a></li>
              <li><a v-scroll-to="'#about'" :class="activeTab === 1 ? 'isactive' : ''">About</a></li>
              <li><a v-scroll-to="'#skills'" :class="activeTab === 2 ? 'isactive' : ''">Skills</a></li>
              <li><a v-scroll-to="'#works'" :class="activeTab === 3 ? 'isactive' : ''">Works</a></li>
              <li><a v-scroll-to="'#photography'" :class="activeTab === 4 ? 'isactive' : ''">Photography</a></li>
            </ul>
        </div>
    </aside>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0,
      animateSkill: true
    }
  },
  props: ['message'],
  methods: {
    changeActiveClass(newActiveClass) {
      // this.activeTab = newActiveClass
    },
    isActive(tabIndex) {
      return tabIndex === this.activeTab ? 'isactive' : ''
    },
    handleScroll(){
      console.log(window.scrollY);
      switch (true) {
        case window.scrollY < this.aboutOffset:
          this.activeTab = 0
          break;
        case window.scrollY >= this.aboutOffset && window.scrollY < this.skillsOffset:
          this.activeTab = 1
          break;
        case window.scrollY >= this.skillsOffset && window.scrollY < this.worksOffset:
          this.activeTab = 2
          if (this.animateSkill) {
            
            this.animateSkill = false;
          }
          break; 
        case window.scrollY >= this.worksOffset && window.scrollY < this.photographyOffset:
          this.activeTab = 3
          break; 
        case window.scrollY >= this.photographyOffset:
          this.activeTab = 4
          break;      
        default:
          break;

      }
    }
  },
  computed: {
    aboutOffset() {
      return document.getElementById('about').offsetTop
    },
    skillsOffset() {
      return document.getElementById('skills').offsetTop
    },
    worksOffset() {
      return document.getElementById('works').offsetTop
    },
    photographyOffset() {
      return document.getElementById('photography').offsetTop
    },
  },
  created(){
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
 
</style>


