<template>
   <div class="work-content">
       <header class="work-header">
           <h4>{{projectTitle}}</h4>
       </header>
      <article>
         <h1>{{projectTitle}}</h1>
         <p>
            <strong>{{role}} </strong>
            <span>{{role3D}}</span>
         </p>
         <!-- <p>{{link}} <a href="www.maimilu.com" target="_blank">{{urlName}}</a></p> -->
         <div class="grid-img">
            <div>
               <img src="http://dikaseva.com/img/works_large/mahanair.jpg" alt="">
               <img src="http://dikaseva.com/img/works_large/mahanair2.jpg" alt="">
               <img src="http://dikaseva.com/img/works_large/mahanair3.jpg" alt="">
               <img src="http://dikaseva.com/img/works_large/airchina.jpg" alt="">
            </div>
         </div>
      </article>
   </div>
</template>

<script>
export default{
   data() {
    return {
      projectTitle: '3D Design',
      urlName: '',

      // lib
      role: 'Role:',
      roleDesign: 'Design Mockups',
      roleConvert: 'Convert HTML & CSS',
      rolePhoto: 'Photograph',
      roleWordpress: 'Wordpress PHP',
      role3D: '3D modeling',
      link: 'Link:',
      demo: 'View Demo'
      
    }
  }
}
</script>