const HomeScreen = {
    after_render: () => {        
    },
    render: () => {
        const reloadscreen = () =>{
            window.scroll({
                top: 10,
                left: 0,
                behavior: 'smooth'
            });
        }
        reloadscreen();
        return`
        <head>
        <link rel="stylesheet" href="css/styles.css">
        
        </head>
        <header>

            <div class="hero">
                <div class="contenedor-imghero">
                    <img class="nosotros_img" src="/img/IMG_0157.JPG" alt="Nosotros Imagen">
                </div>
                <p class="hero_texto">vive<br><span class="hero_texto_2" >la</span><br>experiencia</p>
                <img class="hero_anatomy_logo" src="img/logohead.jpg" alt="LogoAnatomyHead">
                <div class="circulo1"></div>
                <div class="logof1"></div>
                <div class="imgf1"></div>
                
                <a href="/#/about" class="seccion_boton herobtn"><p> CONOCENOS </p></a>  
            </div> 
        
        </header>
    
        
        <!--SECCION HOMBRES-->
        <div class="secciones" >
            <div class="seccion seccionmujeres" >
                <img class="seccion_izq" src="img/IMG_0115.jpg" alt="Anatomy hombre">
                <img class="seccion_der" src="img/IMG_0114.JPG" alt="Anatomy hombre">
                <a href="/#/women" class="seccion_boton mujeres" >mujeres</a>  
                <div class="logof2"></div>     
                <h1 class="titulof2">SÉ TU MISMA</h1>
                
                
            </div>
            
            <div class="division" >
                <div class="division_linea izq" ></div>
                <img class="division_logo" src="img/my.png" alt="My logo">
                <div class="division_linea dere" ></div>
            </div>  
            <!--SECCION MUJERES-->
            <div class="seccion  secundaria seccionhombres" >
                <img class="seccion_izq izqh" src="img/IMG_2696.jpg" alt="Anatomy hombre">
                <img class="seccion_der derh" src="img/IMG_0163.JPG" alt="Anatomy hombre">
                <a href="/#/men" class="seccion_boton btnh" >hombres</a>      
                <div class="figf3"></div>    
                <div class="imgf3"></div> 
                <h1 class="titulof3">CONCENTRATE EN <br><span class="titulof2_2">CALIDAD</span></h1>
                
            </div>
            <!--SECCION ACCESORIOS
            <div class="division" >
                <div class="division_linea izq" ></div>
                <img class="division_logo" src="img/my.png" alt="My logo">
                <div class="division_linea dere" ></div>
            </div>
            
            <div class="seccion secundaria" >
                <img class="seccion_izq" src="img/gorro2.jpg" alt="Anatomy hombre">
                <img class="seccion_der" src="img/gorro1.jpg" alt="Anatomy hombre">
                <a href="/#/accesory" class="seccion_boton accesorios" >accesorios</a>       
            </div>
            -->
        </div>

        `
    }, 
};
export default HomeScreen;