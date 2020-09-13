<template>
   <div class="work-content">
       <header class="work-header">
           <h4>{{projectTitle}}</h4>
       </header>
      <article>
         <h1>{{projectTitle}}</h1>
         <p>
            <strong>{{role}} </strong>
            <span>{{roleDesign}}</span>
         </p>
         <p>{{link}} <a href="#" target="_blank">{{urlName}}</a></p>
         <div class="grid-img">
            <div>
               <img class="p-t" src="http://dikaseva.com/img/works_large/flightmaster_win8.jpg" alt="">
               <img class="p-t" src="http://dikaseva.com/img/works_large/flightmaster_win8_2.jpg" alt="">
               <img class="p-t" src="http://dikaseva.com/img/works_large/flightmaster_win8.jpg" alt="">
            </div>
         </div>
      </article>
   </div>
</template>

<script>
export default{
   data() {
    return {
      projectTitle: 'Flight Master App',
      urlName: '(Expired)',

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