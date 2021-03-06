const AboutScreen = {
    render: () => {
        return `<header>
        <!-- SECCION NOSOTROS -->
        <div class="hero nosotros-hero">
            <div class="heroes-izq"></div>
            <div class="heroes-cen"></div>
            <div class="heroes-der"></div>
            <img class="nosotros_img" src="/img/IMG_0064.JPG" alt="Nosotros Imagen">
            <p class="hero_texto"><span class="hero_texto_2" >No dejes la</span><br>Comodidad<br>de lado</p>
            <img class="hero_anatomy_logo" src="img/anatomynosotros.png" alt="LogoAnatomyHead">
            <a href="mujeres.html" class="boton-hero btn-ella">PARA ELLA</a>
            <a href="hombres.html" class="boton-hero btn-el">PARA EL</a>
        </div>  
    </header>
    <section class="nosotros-lema" id="nosotros-lema">
        <div  class="nosotros-contenedor">
            <div class="nosotros-lema_texto">
                
                <h1 class="nosotros-lema_texto_titulo">!NUNCA PARES <br> DE CRECER¡</h1>
                <p class="nosotros-lema_texto_lema">Somos la mejor opción de dotación para ti, tendrás la mejor calidad, diseño y garantía en todos nuestros productos.</p>
                <p class="nosotros-lema_texto_firma">-Anatomy</p>
                
            </div>
            <img class="nosotros-lema_imagen" src="img/huella.png" alt="">
            <img class="nosotros-lema_imagenes" src="img/huellaes.png">
            
        </div>
    </section>
    <div class="testimonials">
        <h1>Recomendado por <br> profesionales de <br> la salud</h1>
        <div class="testimonials_contenedor">
            <iframe class="testimonials_gif" src="img/giftestimonials.gif" frameborder="0" scrolling="no"></iframe>
            <h1 class="testimonials_texto">!Satisfaccion<br>asegurada¡</h1>
        </div>
    </div>
    <div class="caracteristicas">

        <h1>ESTANDARES DE CALIDAD EN NUESTRO SERVICIO</h1>
        <div></div>
        
        <div class="caracteristicas-contenedor">
            
            <div class="envios">
                <div class="caracteristicas_carrito carritoes">
                    <svg width="103" height="75" viewBox="0 0 103 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M102.999 27.881C102.998 27.7712 102.987 27.6617 102.968 27.5538C102.963 27.5295 102.959 27.5053 102.954 27.4813C102.934 27.3853 102.907 27.2911 102.873 27.1996L102.861 27.168L102.86 27.1647L96.6624 10.9435C96.2699 9.90642 95.588 9.0172 94.7057 8.39178C93.8234 7.76635 92.7816 7.43374 91.7162 7.43729H74.5862V1.85932C74.5862 1.3662 74.3991 0.893274 74.0661 0.544583C73.733 0.195893 73.2813 0 72.8103 0H5.32759C3.91509 0.00159952 2.56089 0.589791 1.5621 1.63552C0.563316 2.68124 0.00152772 4.09909 0 5.57797V57.639C0.00152772 59.1179 0.563316 60.5357 1.5621 61.5814C2.56089 62.6272 3.91509 63.2154 5.32759 63.217H12.5598C12.986 66.3149 14.4644 69.1482 16.7239 71.1976C18.9834 73.2469 21.8726 74.375 24.8621 74.375C27.8515 74.375 30.7408 73.2469 33.0003 71.1976C35.2598 69.1482 36.7381 66.3149 37.1644 63.217H65.8356C66.2619 66.3149 67.7402 69.1482 69.9997 71.1976C72.2592 73.2469 75.1485 74.375 78.1379 74.375C81.1274 74.375 84.0166 73.2469 86.2761 71.1976C88.5357 69.1482 90.014 66.3149 90.4402 63.217H97.6724C99.0849 63.2154 100.439 62.6272 101.438 61.5814C102.437 60.5357 102.998 59.1179 103 57.639V27.8898L102.999 27.881ZM91.7162 11.1559C92.0714 11.1547 92.4187 11.2656 92.7128 11.4742C93.007 11.6827 93.2343 11.9792 93.3651 12.325L98.6012 26.0305H74.5862V11.1559H91.7162ZM5.32759 3.71865H71.0345V37.1865H3.55172V5.57797C3.55219 5.085 3.73944 4.61236 4.07238 4.26377C4.40532 3.91519 4.85674 3.71914 5.32759 3.71865ZM3.55172 57.639V40.9051H71.0345V50.6856C69.6384 51.7043 68.4568 53.0119 67.5626 54.5277C66.6684 56.0435 66.0806 57.7353 65.8356 59.4983H37.1644C36.7381 56.4004 35.2598 53.567 33.0003 51.5177C30.7408 49.4683 27.8515 48.3403 24.8621 48.3403C21.8726 48.3403 18.9834 49.4683 16.7239 51.5177C14.4644 53.567 12.986 56.4004 12.5598 59.4983H5.32759C4.85674 59.4978 4.40532 59.3018 4.07238 58.9532C3.73944 58.6046 3.55219 58.132 3.55172 57.639ZM24.8621 70.6543C23.1059 70.6543 21.3892 70.109 19.929 69.0875C18.4688 68.066 17.3307 66.614 16.6587 64.9153C15.9866 63.2166 15.8108 61.3473 16.1534 59.544C16.496 57.7406 17.3417 56.0841 18.5834 54.7839C19.8252 53.4838 21.4074 52.5984 23.1298 52.2397C24.8522 51.881 26.6376 52.0651 28.26 52.7687C29.8825 53.4723 31.2693 54.6639 32.2449 56.1927C33.2206 57.7215 33.7414 59.5189 33.7414 61.3576C33.7388 63.8224 32.8025 66.1855 31.1378 67.9284C29.4732 69.6712 27.2162 70.6516 24.8621 70.6543ZM78.1379 70.6543C76.3818 70.6543 74.665 70.109 73.2048 69.0875C71.7447 68.066 70.6066 66.614 69.9345 64.9153C69.2625 63.2166 69.0866 61.3473 69.4292 59.544C69.7718 57.7406 70.6175 56.0841 71.8593 54.7839C73.1011 53.4838 74.6832 52.5984 76.4057 52.2397C78.1281 51.881 79.9134 52.0651 81.5359 52.7687C83.1584 53.4723 84.5451 54.6639 85.5208 56.1927C86.4965 57.7215 87.0172 59.5189 87.0172 61.3576C87.0147 63.8224 86.0783 66.1855 84.4137 67.9284C82.7491 69.6712 80.4921 70.6516 78.1379 70.6543ZM99.4483 57.639C99.4478 58.132 99.2606 58.6046 98.9276 58.9532C98.5947 59.3018 98.1433 59.4978 97.6724 59.4983H90.4402C90.186 57.6476 89.5536 55.876 88.5863 54.3042C87.619 52.7325 86.3394 51.3975 84.8347 50.3904C83.3301 49.3832 81.6357 48.7275 79.8672 48.4679C78.0986 48.2084 76.2974 48.3511 74.5862 48.8862V29.7492H99.4483V57.639Z" fill="white"/>
                    </svg>
                </div>
                <p class="caracteristicas_envios">Envío Gratis & Devoluciones</p>
                <p class="caracteristicas_envios_2" >Lorem ipsum dolor sit <br> amet, consectetur <br> adipiscing elit</p>
                
            </div>
            <div class="devoluciones">
                <div class="envioes caracteristicas_carrito ">
                    <svg width="93" height="98" viewBox="0 0 93 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72.169 31.035C72.1657 31.0284 72.1641 31.0218 72.1609 31.0152L72.1571 31.01C71.8672 30.48 71.4498 30.0419 70.948 29.741L47.188 15.5028C46.7025 15.2141 46.1557 15.0625 45.5996 15.0625C45.0436 15.0625 44.4967 15.2141 44.0112 15.5028L20.2512 29.741C19.7483 30.0427 19.3303 30.4822 19.0402 31.0138C19.0389 31.0166 19.0367 31.0184 19.0354 31.0212C19.0319 31.0281 19.03 31.0356 19.0267 31.0425C18.7476 31.5623 18.6004 32.1506 18.5996 32.7494V61.1227C18.6 61.7351 18.7532 62.3364 19.0434 62.865C19.3336 63.3937 19.7504 63.8307 20.2512 64.1314L44.0112 78.3695C44.4751 78.645 44.9955 78.7944 45.5264 78.8047C45.5488 78.8065 45.5702 78.8122 45.5929 78.8125H45.6028C45.6298 78.8125 45.6555 78.8062 45.682 78.8042C46.2098 78.7923 46.7268 78.643 47.188 78.3692L70.948 64.1311C71.4488 63.8305 71.8657 63.3936 72.1559 62.8649C72.4461 62.3363 72.5992 61.7351 72.5996 61.1227V32.7497C72.5989 32.148 72.4505 31.557 72.169 31.0353V31.035ZM45.0701 17.5082C45.232 17.412 45.4143 17.3614 45.5996 17.3614C45.785 17.3614 45.9672 17.412 46.1291 17.5082L69.3248 31.4087L58.8706 37.7359L34.859 23.6272L45.0701 17.5082ZM45.8504 45.6161L21.8909 31.3986L32.645 24.9544L56.6677 39.0691L45.8504 45.6161ZM21.3101 62.1257C21.1431 62.0255 21.0041 61.8798 20.9073 61.7036C20.8105 61.5273 20.7595 61.3269 20.7593 61.1227V33.3612L44.7704 47.6088L44.5355 76.0434L21.3101 62.1257ZM69.8891 62.1257L46.6961 76.0238L46.9304 47.6088L57.7556 41.0573V53.9864C57.7556 54.2915 57.8693 54.5842 58.0719 54.7999C58.2744 55.0157 58.5491 55.1369 58.8356 55.1369C59.122 55.1369 59.3967 55.0157 59.5992 54.7999C59.8018 54.5842 59.9156 54.2915 59.9156 53.9864V39.7499L70.4396 33.3805V61.1227C70.4395 61.3269 70.3884 61.5273 70.2916 61.7036C70.1948 61.8798 70.0558 62.0255 69.8888 62.1257H69.8891Z" fill="white"/>
                        <path d="M90.5999 49.0625C90.5999 77.1125 71.284 95.8125 47.4536 95.8125C28.0848 95.8125 12.456 84.8964 7 67.7625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 48.75C2 20.7 21.316 2 45.1464 2C64.5196 2 80.144 12.9161 85.5999 30.05" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24 72.1248L6.4 67.4497L2 86.1499" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M68 25.3748L85.6 30.0498L90 11.3496" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p class="caracteristicas_garantia">Garantía</p>
                <p class="caracteristicas_envios_2" >Lorem ipsum dolor sit <br> amet, consectetur <br> adipiscing elit</p>
            </div>
            <div class="entregas">
                <div class="caracteristicas_carrito">
                    <svg width="71" height="78" viewBox="0 0 71 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M53.6504 44.9834C53.6496 47.6615 52.7731 50.2591 51.1661 52.346C49.559 54.4329 47.3179 55.8841 44.8135 56.4592L43.6173 52.711C44.7127 52.5226 45.7545 52.0826 46.6675 51.423C47.5805 50.7633 48.3421 49.9003 48.8973 48.8962H44.2754C43.2808 48.8962 42.327 48.4835 41.6237 47.749C40.9205 47.0145 40.5254 46.0183 40.5254 44.9795V37.1462C40.5254 36.1074 40.9205 35.1112 41.6237 34.3767C42.327 33.6421 43.2808 33.2295 44.2754 33.2295H49.7841C49.3266 29.4438 47.5621 25.9627 44.8218 23.4391C42.0815 20.9156 38.5537 19.5233 34.9004 19.5233C31.2471 19.5233 27.7193 20.9156 24.979 23.4391C22.2387 25.9627 20.4742 29.4438 20.0166 33.2295H25.5254C26.52 33.2295 27.4738 33.6421 28.177 34.3767C28.8803 35.1112 29.2754 36.1074 29.2754 37.1462V44.9795C29.2754 46.0183 28.8803 47.0145 28.177 47.749C27.4738 48.4835 26.52 48.8962 25.5254 48.8962H19.9004C18.9058 48.8962 17.952 48.4835 17.2487 47.749C16.5455 47.0145 16.1504 46.0183 16.1504 44.9795V35.1878C16.1504 24.372 24.5448 15.6045 34.9004 15.6045C45.256 15.6045 53.6504 24.372 53.6504 35.1878V44.9834ZM49.9004 44.9795V37.1462H44.2754V44.9795H49.9004ZM19.9004 37.1462V44.9795H25.5254V37.1462H19.9004Z" fill="white"/>
                        <path d="M62.125 5.05293C63.3019 5.05293 64.4306 5.58529 65.2628 6.5329C66.095 7.48051 66.5625 8.76574 66.5625 10.1059V50.5293C66.5625 51.8694 66.095 53.1546 65.2628 54.1022C64.4306 55.0499 63.3019 55.5822 62.125 55.5822H51.0312C49.6535 55.5822 48.2946 55.9475 47.0622 56.6491C45.8299 57.3507 44.7579 58.3695 43.9312 59.6246L35.5 72.4236L27.0688 59.6246C26.2421 58.3695 25.1701 57.3507 23.9378 56.6491C22.7054 55.9475 21.3465 55.5822 19.9688 55.5822H8.875C7.6981 55.5822 6.56941 55.0499 5.73721 54.1022C4.90502 53.1546 4.4375 51.8694 4.4375 50.5293V10.1059C4.4375 8.76574 4.90502 7.48051 5.73721 6.5329C6.56941 5.58529 7.6981 5.05293 8.875 5.05293H62.125ZM8.875 0C6.5212 0 4.26381 1.06472 2.59943 2.95994C0.935042 4.85515 0 7.42562 0 10.1059L0 50.5293C0 53.2095 0.935042 55.78 2.59943 57.6752C4.26381 59.5704 6.5212 60.6351 8.875 60.6351H19.9688C20.6576 60.6351 21.3371 60.8178 21.9533 61.1686C22.5694 61.5194 23.1054 62.0288 23.5188 62.6563L31.95 75.4554C32.3633 76.0829 32.8993 76.5923 33.5155 76.9431C34.1317 77.2939 34.8111 77.4766 35.5 77.4766C36.1889 77.4766 36.8683 77.2939 37.4845 76.9431C38.1007 76.5923 38.6367 76.0829 39.05 75.4554L47.4813 62.6563C47.8946 62.0288 48.4306 61.5194 49.0467 61.1686C49.6629 60.8178 50.3424 60.6351 51.0312 60.6351H62.125C64.4788 60.6351 66.7362 59.5704 68.4006 57.6752C70.065 55.78 71 53.2095 71 50.5293V10.1059C71 7.42562 70.065 4.85515 68.4006 2.95994C66.7362 1.06472 64.4788 0 62.125 0L8.875 0Z" fill="white"/>
                    </svg>
                </div>
                <p class="caracteristicas_garantia">Soporte al cliente</p>
                <p class="caracteristicas_envios_2 caracteristicas_fin" >Lorem ipsum dolor sit <br> amet, consectetur <br> adipiscing elit</p>
    
            </div>
        </div>
    </div>
    
    <div class="producto">
        <h1 class="nuestrosproductos-titulo">TODO LO QUE NECESITAS <br><span class="nuestrosproductos-titulo2">PARA EL PERSONAL DE LA SALUD</span></h1>
        <div class="linea_divisoria"></div>
        <section class="slider">
            <ul id="autoWidth" class="cs-hidden nuestrosproductos-slider" style="height: 290px;">
                <li class="item-a">
                    <div class="contenedor-slider">
                        <div class="slide-img">
                            <img src="img/IMG_2414.JPG" alt="">
                            <div class="overlayslider">
                                <a href="mclassic.html" class="buy-btn">! Compra Ahora ¡</a>
                            </div>
                        </div>
                        <div class="texto-slider">
                            <div class="type">
                                <a href="mclassic.html">Linea Classic <br> Mujeres</a>
                            </div>
                            <a href="mclassic.html" class="price">$ 115.000</a>
                        </div>
                    </div>
                </li>
                <li class="item-b">
                    <div class="contenedor-slider">
                        <div class="slide-img">
                            <img src="img/IMG_2424.png" alt="">
                            <div class="overlayslider">
                                <a href="mfunctional.html" class="buy-btn">! Compra Ahora ¡</a>
                            </div>
                        </div>
                        <div class="texto-slider">
                            <div class="type">
                                <a href="mfunctional.html">Linea Functional <br> Mujeres</a>
                            </div>
                            <a href="mfunctional.html" class="price">$ 130.000</a>
                        </div>
                    </div>
                </li>
                <li class="item-c">
                    <div class="contenedor-slider">
                        <div class="slide-img">
                            <img src="img/IMG_2399.png" alt="">
                            <div class="overlayslider">
                                <a href="mconfort.html" class="buy-btn">! Compra Ahora ¡</a>
                            </div>
                        </div>
                        
                            <div class="texto-slider">
                                <div class="type">
                                    <a href="mconfort.html">Linea Confort <br> Mujeres</a>
                                </div>
                                <a href="mconfort.html" class="price">$ 100.000</a>
                            </div>
                    </div>
                </li>
        
                <li class="item-d">
                    <div class="contenedor-slider">
                        <div class="slide-img">
                            <img src="img/IMG_2421.png" alt="">
                            <div class="overlayslider">
                                <a href="hclassic.html" class="buy-btn">! Compra Ahora ¡</a>
                            </div>
                        </div>
                        
                            <div class="texto-slider">
                                <div class="type">
                                    <a href="hclassic.html">Linea Classic <br> Hombres</a>
                                </div>
                                <a href="hclassic.html" class="price">$ 115.000</a>
                            </div>
                    </div>
                </li>
                <li class="item-e">
                    <div class="contenedor-slider">
                        <div class="slide-img">
                            <img src="img/IMG_2411.png" alt="">
                            <div class="overlayslider">
                                <a href="hfunctional.html" class="buy-btn">! Compra Ahora ¡</a>
                            </div>
                        </div>
                        
                            <div class="texto-slider">
                                <div class="type">
                                    <a href="hfunctional.html">Linea Fucntional <br> hombres</a>
                                </div>
                                <a href="hfunctional.html" class="price">$ 130.000</a>
                            </div>
                    </div>
                </li>
                <li class="item-f">
                    <div class="contenedor-slider">
                        <div class="slide-img">
                            <img src="img/IMG_2385.JPG" alt="">
                            <div class="overlayslider">
                                <a href="hconfort.html" class="buy-btn">! Compra Ahora ¡</a>
                            </div>
                        </div>
                        
                            <div class="texto-slider">
                                <div class="type">
                                    <a href="hconfort.html">Linea Confort <br> Hombres</a>
                                </div>
                                <a href="hconfort.html" class="price">$ 100.000</a>
                            </div>
                    </div>
                </li>
                
            </ul>
        </section>
        <div class="linea_divisoria2"></div>

    </div>`
    }
}

export default ProductScreen