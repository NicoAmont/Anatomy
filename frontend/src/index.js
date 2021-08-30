import HomeScreen from "./screens/Homescreen.js";
import AboutScreen from "./screens/AboutScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";
import Error404Screen from "./screens/Error404Screen.js";
import WomenScreen from "./screens/WomenScreen.js";
import MenScreen from "./screens/MenScreen.js";
import Womenp1Screen from "./screens/Womenp1Screen.js";
import CartScreen from "./screens/CartScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import SigninScreen from "./screens/SigninScreen.js";
import Header from "./components/header.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import DashboardScreen from "./screens/PanelScreen.js";
import OrderListScreen from "./screens/OrderListScreen.js";
import Menp1Screen from "./screens/Menp1Screen.js";
    
///Router function 
const routes =  {
    '/': HomeScreen,
    '/about': AboutScreen,
    '/women': WomenScreen,
    '/men': MenScreen,
    '/women/:id': Womenp1Screen,
    '/men/:id': Menp1Screen,
    '/order/:id': OrderScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/signin': SigninScreen,
    '/register': RegisterScreen,
    '/profile': ProfileScreen,
    '/shipping' : ShippingScreen,
    '/payment' : PaymentScreen,
    '/placeorder' : PlaceOrderScreen,
    '/dashboard' : DashboardScreen,
    '/orderlist' : OrderListScreen,
};
const router = async () => {
    showLoading();
    const request = parseRequestUrl();
    const parseUrl = 
        (request.resource ? `/${request.resource}`: '/') +
        (request.id ? '/:id': '') + 
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render();
    const main = document.getElementById("main-container");
    main.innerHTML = await screen.render(); 
    if(screen.after_render){await screen.after_render()};
    hideLoading();
};

window.addEventListener('load', () =>{ 
    
    router();
});
window.addEventListener('hashchange', router);



////WHATS APP FLOTANTE 
    $(function () {
        $('#myDiv').floatingWhatsApp({
            phone: '573228248344',
            popupMessage: 'Bienvenido a Anatomy, cualquier duda o requerimiento que tengas háznoslo saber. Tienes alguna duda?',
            showPopup: true,
            headerTitle: 'Anatomy chat',
            zIndex: 10000,
            size: '60px',
            position: 'right'
    
            });
        });



/*Link top */
const top = document.getElementById('top');
top.addEventListener('click', () =>{
    window.scrollTo(0,0);
});


/*SLIDER*/
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});

/*GALLERIA PRODUCTOS*/
// const preview = document.querySelector('.producto_preview_active');
// const productos = document.getElementsByClassName('producto_preview_2');
// const producto = document.querySelectorAll('.producto_preview_2 img');

// productos.addEventListener('click', productoClick);

// function productoClick(e) {
//     preview.src = e.target.src;
// }


// /*GUIA TALLAS*/
// const selectGuia = (s) => document.querySelector(s);
// selectGuia('.producto_guia_talla').addEventListener('click', () => {
//     selectGuia('.guia-talla').classList.add('active');
// });
// selectGuia('.guia_salida').addEventListener('click', () => {
//     selectGuia('.guia-talla').classList.remove('active');
// });
// /*GUIA COLORES*/
// const selectColor = (s) => document.querySelector(s);
// selectColor('.producto_guia_color').addEventListener('click', () => {
//     selectColor('.guia-color').classList.add('active');
// });
// selectColor('.guiacolor_salida').addEventListener('click', () => {
//     selectColor('.guia-color').classList.remove('active');
// });
// /* CONTADOR MAXIMO NOMBRE BORDADO*/

// var myText = document.getElementById("my-text");
// var resultado = document.getElementById("resultado");
// var limite = 20;
// resultado.textContent = 0 + "/" + limite;
// myText.addEventListener("input",function(){
//     var textlength = myText.value.length;
//     console.log(textlength);
//     resultado.textContent = textlength + "/" + limite;
    
//     if(textlength > limite){
//         resultado.textContent= "Limite superado de caracteres";
//         myText.value= myText.value.substring(0,20);
//     }
// });



// // /*VALOR LINEA*/
// // const valorUni = document.getElementById("valor-linea");
// // const bordadoNombre = 0;
// // const bordadoLogo = 0;
// // const textlength = myText.value.length;

// // valorUni.textContent = '$' 115000 + bordadoNombre + bordadoLogo; 

// // myText.addEventListener("input",function(){
    

// //     if(myText.value > 0){
// //         bordadoNombre = 3000;
        
// //     }
// // });




// /*BOTON AGREGAR ARCHIVO LOGO*/
// const BotonArchivo = document.getElementById("boton-archivo");
// const RealFile = document.getElementById("real-file");
// const BotonTexto = document.getElementById("boton-texto");
// BotonArchivo.addEventListener("click", function() {
//     RealFile.click();
// });
// RealFile.addEventListener("change", function() {
//     if(RealFile.value) { 
//         BotonArchivo.innerHTML = RealFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
//     }
// });
// /*VALIDACION EXTENSION DEL ARCHIVO*/
// function validarExt(){
//     var archivoInput = document.getElementById("real-file");
//     var archivoRuta = archivoInput.value;
//     var extPermitidas = /(.pdf|.png|.jpg)$/i;
    
//     let files = archivoInput.files;
    
//     if(files.length > 0){
//         if(files[0].size > 3000 * 1024){
//             alert('Asegurate de haber escogido un archivo con peso menor a 3Mb')
//             return ;
//         }
//     }
//     if(!extPermitidas.exec(archivoRuta)){
//         alert('Asegurate de haber escogido un archivo permitido.');
//         archivoInput.value='';
//         return false;
        
//     }
//     else{
//         if(archivoInput.files && archivoInput.files[0]){
//             var visor = new FileReader();
//             visor.onload=function(e){
//                 document.getElementById('visor-archivo').innerHTML=
//                 '<embed src="'+e.target.result+'" width="100%" height="100%" >';
//             };
//             visor.readAsDataURL(archivoInput.files[0]);
//         }
//     }
// }

// /*ANIMACION NOSOTROS-LEMA*/
// window.addEventListener('scroll', function(){
//     let animacion = document.getElementById('nosotros-lema');
//     let posicionObj1 = animacion.getBoundingClientRect().top;
//     console.log(posicionObj1);
// })







