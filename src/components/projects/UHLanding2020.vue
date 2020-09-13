<template>
   <div class="work-content">
      <header class="work-header">
           <h4>{{projectTitle}}</h4>
       </header>
      <article>
         <h1>{{projectTitle}}</h1>
         <p>
            <strong>{{role}} </strong>
            <span>{{roleDesign}}</span>,
            <span>{{roleConvert}}</span>
         </p>
         <p>{{link}} <a href="www.urbanhire.com" target="_blank">{{urlName}}</a></p>
         <div class="work-img">
            <div>
               <video loop controls autoplay>
                  <source src="../../assets/works/uh_landing2020_720.mp4" type="video/mp4">
                  Your browser does not support the video tag.
               </video>
            </div>
            <div>
               <img src="../../assets/works/urbanhire_landing2020.jpg" alt="">
            </div>
         </div>
      </article>
   </div>
</template>

<script>
export default{
   data() {
    return {
      projectTitle: 'Urbanhire Landing 2020',
      urlName: 'urbanhire.com',

      // lib
      role: 'Role:',
      roleDesign: 'Design Mockups',
      roleConvert: 'Convert HTML & CSS',
      rolePhoto: 'Photograph',
      roleWordpress: 'Wordpress PHP',
      link: 'Link:',
      demo: 'View Demo'
      
    }
  }
}
</script>