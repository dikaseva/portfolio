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
         <p>{{link}} <a href="https://www.gelora.id/" target="_blank">{{urlName}}</a></p>
         <div class="work-img">
            <div>
               <video loop controls autoplay>
                  <source src="../../assets/works/gelora_720.mp4" type="video/mp4">
                  Your browser does not support the video tag.
               </video>
               <video loop controls autoplay>
                  <source src="../../assets/works/gelora_venue_720.mp4" type="video/mp4">
                  Your browser does not support the video tag.
               </video>
            </div>
            <div>
               <img src="../../assets/works/gelora-1.jpg" alt="">
               <img src="../../assets/works/gelora-2.jpg" alt="">
               <img src="../../assets/works/gelora-3.jpg" alt="">
            </div>
         </div>
      </article>
   </div>
</template>

<script>
export default{
   data() {
    return {
      projectTitle: 'Gelora',
      urlName: 'gelora.id',

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