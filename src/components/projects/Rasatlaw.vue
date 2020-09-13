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
            <span>{{rolePhoto}}</span>,
            <span>{{roleConvert}}</span>
         </p>
         <p>{{link}} <a href="www.rasatlaw.com" target="_blank">{{urlName}}</a></p>
         <div class="grid-img">
            <div>
               <video loop controls autoplay>
                  <source src="../../assets/works/rasatlaw_720.mp4" type="video/mp4">
                  Your browser does not support the video tag.
               </video>
            </div>
            <div>
               <img src="../../assets/works/rasatlaw-homepage.jpg" alt="Rasatlaw homepage">
               <img src="../../assets/works/rasatlaw-pages.jpg" alt="Rasatlaw all pages">
            </div>
         </div>
      </article>
   </div>
</template>

<script>
export default{
   data() {
    return {
      projectTitle: 'Ramadian & Satari',
      urlName: 'rasatlaw.com',

      // lib
      role: 'Role:',
      roleDesign: 'Design',
      roleConvert: 'Convert HTML & CSS',
      rolePhoto: 'Photograph',
      roleWordpress: 'Wordpress PHP',
      link: 'Link:',
      demo: 'View Demo'
      
    }
  }
}
</script>