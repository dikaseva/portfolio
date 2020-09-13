<template>
   <div class="work-content">
       <header class="work-header">
           <h4>{{projectTitle}}</h4>
       </header>
      <article>
         <h1>{{projectTitle}}</h1>
         <p>
            <strong>{{role}} </strong>
            <span>{{roleConvert}}</span>
         </p>
         <p>{{link}} <a href="www.domusalba.com" target="_blank">{{urlName}}</a></p>
         <div class="grid-img">
            <div>
               <img class="p-t" src="http://dikaseva.com/img/works_large/domusalba.jpg" alt="">
            </div>
         </div>
      </article>
   </div>
</template>

<script>
export default{
   data() {
    return {
      projectTitle: 'Domus Alba',
      urlName: 'domusalba.com',

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
