    import $ from 'jquery'
    import Swal from 'sweetalert2'
    import * as login from './login.js';

     module.exports = { 
         start: () => {
            var slides = document.querySelector('ion-slides');

            // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
            slides.options = {
            initialSlide: 0,
            speed: 400
            }
       
         },
         finish : function empezar(){

            $('#app').html(login.html);

            localStorage.setItem('bienvenida',1);

            Swal.fire(
                'Good Job!',
                'I can use ES6 without angular, react or ts',
                'success'
            )
    
         }, html : () => {
             return `<!-- slides -->
             <ion-slides style="height: 100%;"  pager="true">
                 <ion-slide>
                     <ion-grid>
                         <ion-row>
                           <ion-col class="ion-text-center">
                             <img src="https://ionicframework.com/docs/demos/api/slides/slide-1.png" alt="">
                             <h1>Bienvenido al tutorial</h1>
                             <h4>Tutorial educativo sobre el uso de <b>Ionic framework</b> más capacitor y parcel como transpilador para poder incluir ES6</h4>
                       </ion-col>
                     </ion-row>
                   </ion-grid>
                 </ion-slide>
             
                 <ion-slide>
                     <ion-grid>
                         <ion-row>
                           <ion-col class="ion-text-center">
                   <img src="https://ionicframework.com/docs/demos/api/slides/slide-2.png" alt="">
                   <h1>¿Que proporciona Ionic?</h1>
                   <h4>Ionic es un entorno de trabajo con componentes gráficos UI, hechos especificamente para el trabajo en dispositivos móviles</h4>
                 </ion-col>
               </ion-row>
             </ion-grid>
                 </ion-slide>
             
                 <ion-slide>
                     <ion-grid>
                         <ion-row>
                           <ion-col class="ion-text-center">
                             <img src="https://ionicframework.com/docs/demos/api/slides/slide-4.png" alt="">
                         <h1>¿Que proporciona capacitor?</h1>
                         <h4>Capacitor es un entorno de trabajo que compila aplicaciones javascript con rendimiento nativo
                            y su libreria tiene un core que permite interactuar con los modulos nativos de los smartphones</h4>
                            <ion-button fill="clear" id="endSlider" class="ios button button-clear ion-activatable ion-focusable hydrated">Empezar 
                              <ion-icon slot="end" name="arrow-forward" role="img" class="ios hydrated" aria-label="arrow forward"></ion-icon>
                             </ion-button>
                       </ion-col>
                     </ion-row>
                   </ion-grid>
                 </ion-slide>
               </ion-slides>
             <!-- slides end -->
             `;
         }
     }
    
    