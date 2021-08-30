import { getUserInfo } from "../localStorage"

const Header = {
        after_render: () =>{
                    /*BARRA DE NAVEGACION*/ 

            const selectElemen = (s) => document.querySelector(s);
            selectElemen('.open').addEventListener('click', () => {
                selectElemen('.sidemenu').classList.add('active');
            });
            selectElemen('.close').addEventListener('click', () => {
                selectElemen('.sidemenu').classList.remove('active');
            });
            const closenav = () => {    
                const wom = document.getElementsByClassName('close2')
                if (wom){
                    const selectElemen = (s) => document.querySelector(s);
                    selectElemen('.close2').addEventListener('click', () => {
                        selectElemen('.sidemenu').classList.remove('active');
                    });
                }
            };
            closenav();
            const closenav2 = () => {    
                const wom = document.getElementsByClassName('close3')
                if (wom){
                    const selectElemen = (s) => document.querySelector(s);
                    selectElemen('.close3').addEventListener('click', () => {
                        selectElemen('.sidemenu').classList.remove('active');
                    });
                }
            };
            closenav2();
            const closenav3 = () => {    
                const wom = document.getElementsByClassName('close4')
                if (wom){
                    const selectElemen = (s) => document.querySelector(s);
                    selectElemen('.close4').addEventListener('click', () => {
                        selectElemen('.sidemenu').classList.remove('active');
                    });
                }
            };
            closenav3();
        },
                render: () => {
        const{name, isAdmin} = getUserInfo();
        return `
        <nav class="nav">
            <a id="top" class="nav_logo" href="/#/">
                <img class="icon_logo" src="img/Logo4.jpg" alt="Logo Image">
                <img class="icon_logoes" src="img/logonaves.png" alt="Logo Image">
            </a>
            <div class="menues">
                <a class="naves" href="/#/">NUEVO</a>
                <a class="naves" href="/#/women">MUJERES</a>
                <a class="naves" href="/#/men">HOMBRES</a>
                <a class="naves" href="/#/accesory">ACCESORIOS</a>
                <a class="naves" href="/#/about">CONOCENOS</a>
                    
                
            </div>
            <div class="iconos_nav">
                ${
                    name
                    ? `<a class="profile_icon " href="/#/profile">${name}</a>`
                    : `<a class="profile_icon " href="/#/signin">
                            <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00065 9C10.3018 9 12.1673 7.13452 12.1673 4.83334C12.1673 2.53215 10.3018 0.666672 8.00065 0.666672C5.69946 0.666672 3.83398 2.53215 3.83398 4.83334C3.83398 7.13452 5.69946 9 8.00065 9Z" stroke="white"/>
                                <path d="M12.167 10.6667H12.4604C13.0696 10.6668 13.6578 10.8895 14.1145 11.2927C14.5711 11.696 14.8648 12.2521 14.9404 12.8567L15.2662 15.46C15.2955 15.6945 15.2746 15.9326 15.2049 16.1584C15.1351 16.3843 15.0182 16.5927 14.8617 16.7698C14.7053 16.947 14.513 17.0889 14.2975 17.186C14.082 17.2832 13.8484 17.3334 13.612 17.3333H2.38871C2.15236 17.3334 1.9187 17.2832 1.70325 17.186C1.48779 17.0889 1.29546 16.947 1.13902 16.7698C0.982584 16.5927 0.865616 16.3843 0.79588 16.1584C0.726144 15.9326 0.705236 15.6945 0.734543 15.46L1.05954 12.8567C1.13512 12.2519 1.42906 11.6955 1.88607 11.2922C2.34308 10.8889 2.93169 10.6664 3.54121 10.6667H3.83371" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>`
                    }   

                ${isAdmin ? `<a class="profile_icon " href="/#/dashboard">Panel</a>` : ''}

                <a href="/#/cart" >
                    <svg class="bolsadecompra" width="26" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <path d="M13 2.04176C13.8525 2.04176 14.67 2.38715 15.2728 3.00193C15.8756 3.61672 16.2143 4.45055 16.2143 5.32V5.97564H9.78571V5.32C9.78571 4.45055 10.1244 3.61672 10.7272 3.00193C11.33 2.38715 12.1475 2.04176 13 2.04176ZM17.5 5.97564V5.32C17.5 4.10278 17.0259 2.93541 16.182 2.07471C15.3381 1.21401 14.1935 0.730469 13 0.730469C11.8065 0.730469 10.6619 1.21401 9.81802 2.07471C8.97411 2.93541 8.5 4.10278 8.5 5.32V5.97564H4V19.0886C4 19.7841 4.27092 20.4512 4.75315 20.943C5.23539 21.4349 5.88944 21.7112 6.57143 21.7112H19.4286C20.1106 21.7112 20.7646 21.4349 21.2468 20.943C21.7291 20.4512 22 19.7841 22 19.0886V5.97564H17.5ZM5.28571 7.28694H20.7143V19.0886C20.7143 19.4364 20.5788 19.7699 20.3377 20.0158C20.0966 20.2617 19.7696 20.3999 19.4286 20.3999H6.57143C6.23044 20.3999 5.90341 20.2617 5.66229 20.0158C5.42117 19.7699 5.28571 19.4364 5.28571 19.0886V7.28694Z" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0" y="0.730469" width="26" height="28.9807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </a>
                <div>
                    <a class="burger_contenedor open" >
                        <div class="burger open"   >
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>  
                    </a>
                </div>         
            </div>        
        </nav>
        <div class="sidemenu">
        
            <div class="mujeresmenu">
                <div>
                    <img class="sidemenu_salida close" src="img/x.png" alt="">
                </div> 
                <a  href="/#/women" class="close2" >
                    <p class="mujeres_texto">Mujeres</p>
                </a>                   
            </div>
            <a href="/#/men" class="hombresmenu close3">
                <p class="hombres_texto">Hombres</p>
            </a>
            <a class="accesoriosmenu">          
                <p class="accesorios_texto">Accesorios <br><span>Proximamente</span></p>
            </a>
            <a href="/#/about" class="nosotrosmenu close4">    
                <p class="nosotros_texto">Conocenos</p>
            </a>
        </div>
        `
    }
    
};

export default Header; 