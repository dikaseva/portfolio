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
         <p>{{link}} <a href="#" target="_blank">{{urlName}}</a></p>
         <div class="grid-img">
            <div>
               <img class="p-t" src="http://dikaseva.com/img/works_large/graphdes.jpg" alt="Graphdes V1">
               <img class="p-t" src="http://dikaseva.com/img/works_large/graphdes2.jpg" alt="Graphdes V2">
            </div>
         </div>
      </article>
   </div>
</template>

<script>
export default{
   data() {
    return {
      projectTitle: 'Graphdes V1 & V2',
      urlName: 'graphdes.net (Expired)',

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