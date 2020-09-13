<template>
   <div class="work-content">
       <header class="work-header">
           <h4>{{projectTitle}}</h4>
       </header>
      <article>
         <h1>{{projectTitle}}</h1>
         <p>
            <!-- <strong>Caution: </strong><span><i>Long contents ahead</i></span> -->
         </p>
         <div class="grid-img">
            <section>
               <h3>3D Design Modeling</h3>
               <div class="row p-t">
                  <img class="col-xs-12" src="http://dikaseva.com/img/works_large/mahanair.jpg" alt="">
                  <img class="col-xs-4" src="http://dikaseva.com/img/works_large/mahanair2.jpg" alt="">
                  <img class="col-xs-4" src="http://dikaseva.com/img/works_large/mahanair3.jpg" alt="">
                  <img class="col-xs-4" src="http://dikaseva.com/img/works_large/airchina.jpg" alt="">
               </div>
            </section>
            <hr>
            <section>
               <h3>Navigatech</h3>
               <p>{{link}} <a href="http://navigatech.com/" target="_blank">navigatech.com</a></p>
               <div class="row">
                  <img class="col-xs-9" src="http://dikaseva.com/img/works_large/navigatech.jpg" alt="">
               </div>
            </section>
            <hr>
            <section>
               <h3>Aerosource</h3> 
               <p>{{link}} <a href="http://www.aerostratos.com/aerosource/" target="_blank">Aerosource login</a></p>
               <div class="row">
                  <img class="col-xs-9" src="http://dikaseva.com/img/works_large/aerosource.jpg" alt="">
                  <img class="col-xs-6 p-r" src="http://dikaseva.com/img/works_large/airportviewer.jpg" alt="">
                  <img class="col-xs-6 p-l" src="http://dikaseva.com/img/works_large/enrouteviewer.jpg" alt="">
               </div>
            </section>
            <hr>
            <section>
               <h3>Fligth Progress Basic - App</h3>
               <div class="row">
                  <img class="col-xs-8" src="http://dikaseva.com/img/works_large/fligthProgressBasic.jpg" alt="">
                  <div class="col-xs-4 p-l">
                    <img class="col-xs-12" src="http://dikaseva.com/img/works_large/fligthProgressBasic_2.jpg" alt="">
                    <img class="col-xs-12 p-t" src="http://dikaseva.com/img/works_large/fligthProgressBasic_3.jpg" alt=""> 
                  </div>
               </div>
            </section>
            <hr>
            <section>
               <h3>Orderanku</h3>
               <p>{{link}} <a href="www.orderanku.com" target="_blank">orderanku.com</a></p>
               <br>
               <div class="row">
                  <img class="col-xs-6 p-r" src="http://dikaseva.com/img/works_large/orderanku.jpg" alt="">
                  <img class="col-xs-6 p-l" src="http://dikaseva.com/img/works_large/orderanku2.jpg" alt="">
               </div>
            </section>
            <hr>
            <section>
               <h3>Dive Indonesia</h3>
               <br>
               <div class="row">
                  <img class="col-xs-9" src="http://dikaseva.com/img/works_large/divetripindonesia.jpg" alt="">
               </div>
            </section>
         </div>
      </article>
   </div>
</template>

<script>
export default{
   data() {
    return {
      projectTitle: 'More Works',
      urlName: '',

      // lib
      role: 'Role:',
      roleDesign: 'Design',
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

<style scoped>
.row {
  box-sizing: border-box;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex: 0 1 auto;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  -ms-flex-direction: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.row.reverse {
  -ms-flex-direction: row-reverse;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  flex-direction: row-reverse;
}

.col.reverse {
  -ms-flex-direction: column-reverse;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  flex-direction: column-reverse;
}

.col-xs,
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12 {
  box-sizing: border-box;
  -ms-flex: 0 0 auto;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  /* padding-right: 8px;
  padding-left: 8px; */
}

.col-xs {
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  max-width: 100%;
}

.col-xs-1 {
  -ms-flex-preferred-size: 8.333%;
  flex-basis: 8.333%;
  max-width: 8.333%;
}

.col-xs-2 {
  -ms-flex-preferred-size: 16.667%;
  flex-basis: 16.667%;
  max-width: 16.667%;
}

.col-xs-3 {
  -ms-flex-preferred-size: 25%;
  flex-basis: 25%;
  max-width: 25%;
}

.col-xs-4 {
  -ms-flex-preferred-size: 33.333%;
  flex-basis: 33.333%;
  max-width: 33.333%;
}

.col-xs-5 {
  -ms-flex-preferred-size: 41.667%;
  flex-basis: 41.667%;
  max-width: 41.667%;
}

.col-xs-6 {
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  max-width: 50%;
}

.col-xs-7 {
  -ms-flex-preferred-size: 58.333%;
  flex-basis: 58.333%;
  max-width: 58.333%;
}

.col-xs-8 {
  -ms-flex-preferred-size: 66.667%;
  flex-basis: 66.667%;
  max-width: 66.667%;
}

.col-xs-9 {
  -ms-flex-preferred-size: 75%;
  flex-basis: 75%;
  max-width: 75%;
}

.col-xs-10 {
  -ms-flex-preferred-size: 83.333%;
  flex-basis: 83.333%;
  max-width: 83.333%;
}

.col-xs-11 {
  -ms-flex-preferred-size: 91.667%;
  flex-basis: 91.667%;
  max-width: 91.667%;
}

.col-xs-12 {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  max-width: 100%;
}

.col-xs-offset-1 {
  margin-left: 8.333%;
}

.col-xs-offset-2 {
  margin-left: 16.667%;
}

.col-xs-offset-3 {
  margin-left: 25%;
}

.col-xs-offset-4 {
  margin-left: 33.333%;
}

.col-xs-offset-5 {
  margin-left: 41.667%;
}

.col-xs-offset-6 {
  margin-left: 50%;
}

.col-xs-offset-7 {
  margin-left: 58.333%;
}

.col-xs-offset-8 {
  margin-left: 66.667%;
}

.col-xs-offset-9 {
  margin-left: 75%;
}

.col-xs-offset-10 {
  margin-left: 83.333%;
}

.col-xs-offset-11 {
  margin-left: 91.667%;
}

.start-xs {
  -ms-flex-pack: start;
  -webkit-box-pack: start;
  justify-content: flex-start;
  text-align: start;
}

.center-xs {
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
}

.end-xs {
  -ms-flex-pack: end;
  -webkit-box-pack: end;
  justify-content: flex-end;
  text-align: end;
}

.top-xs {
  -ms-flex-align: start;
  -webkit-box-align: start;
  align-items: flex-start;
}

.middle-xs {
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
}

.bottom-xs {
  -ms-flex-align: end;
  -webkit-box-align: end;
  align-items: flex-end;
}

.around-xs {
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.between-xs {
  -ms-flex-pack: justify;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.first-xs {
  -ms-flex-order: -1;
  -webkit-box-ordinal-group: 0;
  order: -1;
}

.last-xs {
  -ms-flex-order: 1;
  -webkit-box-ordinal-group: 2;
  order: 1;
}

.show-xs {
  display: inherit;
}

.hide-xs {
  display: none;
}
</style>