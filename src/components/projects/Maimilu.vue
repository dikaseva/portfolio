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
         <p>{{link}} <a href="www.maimilu.com" target="_blank">{{urlName}}</a></p>
         <div class="grid-img">
            <div>
               <video loop controls autoplay>
                  <source src="../../assets/works/maimilu_720.mp4" type="video/mp4">
                  Your browser does not support the video tag.
               </video>
            </div>
            <div>
               <img src="../../assets/works/maimilu-homepage.jpg" alt="">
               <img src="../../assets/works/maimilu-detailpage.jpg" alt="">
            </div>
         </div>
      </article>
   </div>
</template>

<script>
export default{
   data() {
    return {
      projectTitle: 'Maimilu',
      urlName: 'maimilu.com',

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