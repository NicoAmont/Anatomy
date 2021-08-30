
import { getProducts } from "../api";
import { hideLoading, showLoading } from "../utils";


const WomenScreen = {
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
    
    <link rel="stylesheet" href="css/mujeres.css">
    </head>
    <header>
    <div class="herom">
    <img class="nosotrosm_img" src="img/IMG_0074.JPG" alt="Nosotros Imagen">
    <p class="herom_texto">Siente<br><span class="hero_texto_2" >la</span><br>Comodidad</p>
    <img class="herom_anatomy_logo" src="img/logomujeres.png" alt="LogoAnatomyHead">
    <img class="herom_anatomyes" src="img/IMG_2389.JPG" alt="">
    </div>  
    </header>
    <!--SECCION HOMBRES-->
    <div class="secciones" >
    <div class="seccion-classic">
    <div class="seccionm" >
        <div class="colorhombres"></div>
        <img class="seccion_izq" src="img/IMG_2919.JPG" alt="Anatomy hombre">
        <img class="seccion_der" src="img/IMG_2903.JPG" alt="Anatomy hombre">
        <a href="/#/women/${products[0]._id}" class="seccionp_boton" ><img src="img/IMG_2921.JPG" alt=""></a> 
        <p class="seccion_texto">Vive el estilo,</p>   
        <p class="seccion_texto texto_corrido">sientete <span class="texto_italic">"classic"</span></p>   
    </div>
    <img class="seccion_anatomy_logo" src="img/logomujeres.png" alt="LogoAnatomyHead">      
    </div>      
    <!--SECCION MUJERES-->
    <div class="seccion-functional">
    <div class="seccionm secundaria" >
        <div class="colorhombres2"></div>
        <img class="seccion_izq izq-functional" src="img/IMG_2884.JPG" alt="Anatomy hombre">
        <img class="seccion_der der-functional" src="img/IMG_2886.JPG" alt="Anatomy hombre">
        <a href="/#/women/${products[1]._id}" class="seccionp_boton" ><img src="img/IMG_2898.JPG" alt=""></a> 
        <p class="seccion_texto texto2">Que nada te detenga,</p>   
        <p class="seccion_texto texto_corrido corrido2">Se <span class="texto_italic">"Functional"</span></p>       
        
    </div>
    <img class="seccion_anatomy_logo logosecundaria" src="img/logomujeres.png" alt="LogoAnatomyHead">
    </div>
    <div class="seccion-confort">
    <div class="seccionm secundaria" >
        <div class="colorhombres3"></div>
        <img class="seccion_izq izq-confort" src="img/CONFORTM1.jpeg" alt="Anatomy hombre">
        <img class="seccion_der der-confort" src="img/CONFORTM2.jpeg" alt="Anatomy hombre">
        <a href="/#/women/${products[2]._id}" class="seccionp_boton" ><img src="img/CONFORTM3.jpeg" alt=""></a> 
        <p class="seccion_texto texto2 texto3">No dejes la comodidad de lado,</p>   
        <p class="seccion_texto texto_corrido corrido2 corrido3">vive <span class="texto_italic">"Confort"</span></p>       
        
    </div>
    <img class="seccion_anatomy_logo logoterciaria" src="img/logomujeres.png" alt="LogoAnatomyHead">
    </div>

    <!--SECCION ACCESORIOS
    <div class="division" >
        <div class="division_linea izq" ></div>
        <img class="division_logo" src="img/my.png" alt="My logo">
        <div class="division_linea dere" ></div>
    </div>

    <div class="seccionm secundaria" >
        <img class="seccion_izq" src="img/gorro2.jpg" alt="Anatomy hombre">
        <img class="seccion_der" src="img/gorro1.jpg" alt="Anatomy hombre">
        <a href="#" class="seccionp_boton accesorios" >accesorios</a>       
    </div>
    -->
    
    `
    },
};
export default WomenScreen;