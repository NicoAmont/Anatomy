
import { getProducts } from "../api";
import { hideLoading, showLoading } from "../utils";    


const MenScreen = {
    after_render: () => {        
    },
    render: async () => {

        showLoading();
        const products = await getProducts();
        hideLoading();
        if (products.error) {
            return `<div class="error">${products.error}</div>`;
        }
        const reloadscreen = () =>{
            window.scroll({
                top: 10,
                left: 0,
                behavior: 'smooth'
            });
        }
        reloadscreen();
        return `
    <head>
    <link rel="stylesheet" href="css/hombres.css"> 
    </head>
    
    <div class="herohom">
    <img class="nosotrosh_img" src="img/IMG_0101.JPG" alt="Nosotros Imagen">
    <img class="logohombreses" src="img/logohombreses.png" alt="">
    <img class="logohombreses2" src="img/IMG_2696.jpg" alt="">
    <p class="herohom_texto">CONCÉNTRATE EN<br> <span class="hero_texto2" > CALIDAD</span></p>
    <img class="hero_anatomy_logo" src="img/logohombres.png" alt="LogoAnatomyHead">
    </div>  

    <!--SECCION HOMBRES-->
    <div class="secciones" >
    <div class="seccion-classic">
    <div class="seccionhom" >
        <div class="colorhombres"></div>
        <img class="seccion_izq" src="img/IMG_2990.JPG" alt="Anatomy hombre">
        <img class="seccion_der" src="img/IMG_2995.JPG" alt="Anatomy hombre">
        <a href="/#/men/${products[3]._id}" class="seccionp_boton" ><img src="img/IMG_2982.JPG" alt=""></a> 
        <p class="seccion_texto">Vive el estilo,</p>   
        <p class="seccion_texto texto_corrido">siente <span class="texto_italic">"Classic"</span></p>             
    </div>
    <img class="seccion_anatomy_logo" src="img/logohombres.png" alt="LogoAnatomyHead">
    </div>       

    <!--SECCION MUJERES-->
    <div class="seccion-functional">
        <div class="seccionhom secundaria" >
            <div class="colorhombres2"></div>
            <img class="seccion_izq izq-functional" src="img/IMG_2969.JPG" alt="Anatomy hombre">
            <img class="seccion_der der-functional" src="img/IMG_2964.JPG" alt="Anatomy hombre">
            <a href="/#/men/${products[4]._id}" class="seccionp_boton" ><img src="img/IMG_2976.JPG" alt=""></a> 
            <p class="seccion_texto texto2">Que nada te detenga,</p>   
            <p class="seccion_texto texto_corrido corrido2">se <span class="texto_italic">"Functional"</span></p>       
            
        </div>
        <img class="seccion_anatomy_logo logosecundaria" src="img/logohombres.png" alt="LogoAnatomyHead">
    </div>
    <div class="seccion-confort">
        <div class="seccionhom secundaria" >
            <div class="colorhombres3"></div>
            <img class="seccion_izq izq-confort" src="img/CONFORTH5.jpeg" alt="Anatomy hombre">
            <img class="seccion_der der-confort" src="img/CONFORTH4.jpeg" alt="Anatomy hombre">
            <a href="/#/men/${products[5]._id}" class="seccionp_boton" ><img src="img/CONFORTH1.jpeg" alt=""></a> 
            <p class="seccion_texto texto2 texto3">No dejes la comodidad de lado,</p>   
            <p class="seccion_texto texto_corrido corrido2 corrido3">vive <span class="texto_italic">"Confort"</span></p>       
            
        </div>
        <img class="seccion_anatomy_logo logoterciaria" src="img/logohombres.png" alt="LogoAnatomyHead">
    </div>
    <!--SECCION ACCESORIOS
    <div class="division" >
        <div class="division_linea izq" ></div>
        <img class="division_logo" src="img/my.png" alt="My logo">
        <div class="division_linea dere" ></div>
    </div>

    <div class="seccionhom secundaria" >
        <img class="seccion_izq" src="img/gorro2.jpg" alt="Anatomy hombre">
        <img class="seccion_der" src="img/gorro1.jpg" alt="Anatomy hombre">
        <a href="#" class="seccionp_boton accesorios" >accesorios</a>       
    </div>
    -->
    `
    },
};
export default MenScreen;