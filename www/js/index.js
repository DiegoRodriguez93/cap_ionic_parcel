import Swal from 'sweetalert2'
import $ from 'jquery'

import * as slider from './components/slides.js';
import * as login from './components/login.js';

export class funciones {
    constructor() {
        this.myMethod();
    } // END constructor

    first() {
        console.log("myMethod");
    }
} // END myClass

$(document).ready(function(){


    if(localStorage.getItem('bienvenida') != 1){
        
        $('#app').html(slider.html);

        slider.start();
        
        $('#endSlider').click(()=>{
            slider.finish();
        });

    }else if(localStorage.getItem('bienvenida') == 1){

        $('#app').html(login.html);

    }

    $('#logIn').on('click',function(){
        alert($('#usuario').val());
    });

 



});