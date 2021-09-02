import axios from 'axios';
import { getProduct, getProducts, tallan } from '../api';
import { formatter, seleccionartalla } from '../config';
import { hideLoading, parseRequestUrl, showLoading } from '../utils';

export var tallacnew;
export var tallapnew;
export var colornew;

export var precionew1 = 0;
export var precionew2 = 0;
export var textobordado = [94050513100];




const Menp1Screen = {
    after_render: async () => {
        const preview = document.querySelector('.producto_preview_active');
        const productosg = document.querySelector('.producto_preview_2');
        const prodcutog = document.querySelectorAll('.producto_preview_2 img');

        productosg.addEventListener('click', productoClick);

        function productoClick(e) {
            preview.src = e.target.src;
        };

                /*GUIA TALLAS*/
        const selectGuia = (s) => document.querySelector(s);
        selectGuia('.producto_guia_talla').addEventListener('click', () => {
            selectGuia('.guia-talla').classList.add('active');
        });
        selectGuia('.guia_salida').addEventListener('click', () => {
            selectGuia('.guia-talla').classList.remove('active');
        });
        /*GUIA COLORES*/
        const selectColor = (s) => document.querySelector(s);
        selectColor('.producto_guia_color').addEventListener('click', () => {
            selectColor('.guia-color').classList.add('active');
        });
        selectColor('.guiacolor_salida').addEventListener('click', () => {
            selectColor('.guia-color').classList.remove('active');
        });
        /* CONTADOR MAXIMO NOMBRE BORDADO*/

        var myText = document.getElementById("my-text");
        var resultado = document.getElementById("resultado");
        var limite = 20;
        resultado.textContent = 0 + "/" + limite;
        myText.addEventListener("input",function(){
            var textlength = myText.value.length;
            console.log(textlength);
            resultado.textContent = textlength + "/" + limite;
        
            if(textlength > limite){
                resultado.textContent= "Limite superado de caracteres";
                myText.value= myText.value.substring(0,20);
            }
        });



        /*BOTON AGREGAR ARCHIVO LOGO*/
        const BotonArchivo = document.getElementById("boton-archivo");
        const RealFile = document.getElementById("real-file");
        const BotonTexto = document.getElementById("boton-texto");
        BotonArchivo.addEventListener("click", function() {
            RealFile.click();
        });
        RealFile.addEventListener("change", function() {
            if(RealFile.value) { 
                BotonArchivo.innerHTML = RealFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
            }
        });
        /*VALIDACION EXTENSION DEL ARCHIVO*/
        function validarExt() {
            var archivoInput = document.getElementById("real-file");
            var archivoRuta = archivoInput.value;
            var extPermitidas = /(.pdf|.png|.jpg)$/i;
        
            let files = archivoInput.files;
        
            if(files.length > 0){
                if(files[0].size > 3000 * 1024){
                    alert('Asegurate de haber escogido un archivo con peso menor a 3Mb')
                    return ;
                }
            }
            if(!extPermitidas.exec(archivoRuta)){
                alert('Asegurate de haber escogido un archivo permitido.');
                archivoInput.value='';
                return false;
            
            }
            else{
                if(archivoInput.files && archivoInput.files[0]){
                    var visor = new FileReader;
                    visor.onload=function(e){
                        document.getElementById('visor-archivo').innerHTML=
                        '<embed src="'+e.target.result+'" width="100%" height="100%" >';
                    };
                    visor.readAsDataURL(archivoInput.files[0]);
                }
            }
        }

        document.getElementById('real-file').addEventListener('change',() =>{
            validarExt();
        });


    //    CARTSCREEN CALL TO ACTION 
    
        console.log(myText.value)
        
        const request = parseRequestUrl();
        document.getElementById('add-button').addEventListener('click', ()  =>{
            const valortallac = document.getElementById('talla1').value
            const valortallap = document.getElementById('talla2').value
            const valorcolor = document.getElementById('color').value
            
            
            function enviarDatos () {
                document.location.hash = `/cart/${request.id}`;
                if(myText.value !== 'Ninguno'){
                    textobordado.push(document.getElementById('textonombre').innerHTML);
                    if(textobordado[0] == 94050513100){
                        textobordado.splice(0,1);
                    }
                }else{
                    textobordado.push('Ninguno');
                    if(textobordado[0] == 94050513100){
                        textobordado.splice(0,1);
                    }
                }
        
                
            };
            if(valorcolor !== "0" && valortallac !== "0" && valortallap !== "0"){
                if(precionew1 == 3000 || myText.value !== 'Ninguno'){  
                    if(myText.value == 'Ninguno'){
                        swal('¡Ups! Te faltan datos', 'Agrega el texto que deseas bordar', 'warning')
                    }else if(precionew1 !== 3000){
                        swal('¡Ups! Te faltan datos', 'Agrega el valor del bordado al total', 'warning')
                    }else{
                        enviarDatos();
                    }  
                }else{  
                    enviarDatos();
                    console.log(textobordado[0])
                }

            }else{
                swal('¡Ups! Te faltan datos', 'Debes elegir tallas y color antes de continuar con tu compra', 'warning')
            }
        });



    // scroll top 
    const reloadscreen = () =>{
        window.scroll({
            top: 10,
            left: 0,
            behavior: 'smooth'
        });
    }
    reloadscreen();
    //talla camiseta select
    function seleccionartalla() {
        let tallace = document.getElementById('talla1');
        tallace.addEventListener('change',()=>{
            tallacnew = tallace.value;            
        });
    }
    seleccionartalla();
    //talla pantalon select
    function seleccionartalla2() {
        let tallape = document.getElementById('talla2');
        tallape.addEventListener('change',()=>{
            tallapnew = tallape.value;            
        });
    }
    seleccionartalla2();
    //talla color select
    function seleccionartalla3() {
        let colore = document.getElementById('color');
        colore.addEventListener('change',()=>{
            colornew = colore.value;            
        });
    }
    seleccionartalla3();

    //bordado1
    const products = await getProducts();
    let indice = products.findIndex((objeto)=>{
            return objeto._id == request.id;
    });
    const product = products[indice];
    const pformat = formatter.format;

    function sumatotal() {
        let bordado1 = document.getElementById('bordado1');
        let bordado2 = document.getElementById('bordado2');
        const sltcv = document.getElementById('prueba1');
        sltcv.textContent = pformat(parseInt(product.price));
        bordado1.addEventListener('change',()=>{
            precionew1 = parseInt(bordado1.value);
            precionew2 = parseInt(bordado2.value);
            console.log()
            if(precionew1 !== 0 | precionew1 !== null){
                if(precionew2 !== 6000 ) {
                    sltcv.textContent = pformat(parseInt(product.price) + precionew1 );
                    
                }else{
                    sltcv.textContent = pformat(parseInt(product.price) + precionew1 + precionew2);
                }
            
            }else{

                if(precionew1 == 0 && (precionew2 !== 0 | precionew2 !== null)){

                    sltcv.textContent = pformat(parseInt(product.price) + precionew2);
                    
                }else{

                    sltcv.textContent = pformat(parseInt(product.price));
                }
            }

            
        });
        bordado2.addEventListener('change',()=>{
            precionew2 = parseInt(bordado2.value);  
            if(precionew2 !== 0 | precionew2 !== null){
                if(precionew1 !==0 | precionew1 !== null) {
                    sltcv.textContent = pformat(parseInt(product.price) + precionew1 + precionew2 );
                }else{
                    sltcv.textContent = pformat(parseInt(product.price) + precionew2 );
                }
                
            }else{
                sltcv.textContent = pformat(parseInt(product.price)) ;
                
            }
            
        });
    };
    sumatotal();



    //text area 

    function obtener_textarea(){
        return document.getElementById("my-text")
    };

    function obtener_area_resultado(){
        return document.getElementById("textonombre")
    };

    function procesar_seleccion(texto,inicio_seleccion,fin_seleccion){
        var fin_texto = texto.length
    
        var inicio = texto.slice(0               ,inicio_seleccion);
        var centro = texto.slice(inicio_seleccion,fin_seleccion   );
        var fin    = texto.slice(fin_seleccion   ,fin_texto       );
    
        // centro="<b><big>"+centro+"</big></b>";
    
        return inicio+centro+fin
    }
    function procesar_seleccion_html(){
        var area_texto = obtener_textarea();
        var texto  = area_texto.value;
        var inicio = area_texto.selectionStart;
        var fin    = area_texto.selectionEnd;
    
        obtener_area_resultado().innerHTML=procesar_seleccion(texto,inicio,fin);
    };

    function agregar_eventos(elemento_html){
        var eventos = ["keyup","keydown","mousedown","mouseup","mousemove"]
        for(var i in eventos){
        elemento_html.addEventListener( eventos[i], procesar_seleccion_html )
        };
    };

    agregar_eventos( obtener_textarea() );

    },
    



    
    render: async () => {
        
        const request = parseRequestUrl();
        showLoading();
        const products = await getProducts();
        hideLoading();
        let indice = products.findIndex((objeto)=>{
            return objeto._id == request.id;
        });
        const product = products[indice];
        const pformat = formatter.format;
        

        if (product.error) {
            return `<div>${product.error}</div>`;
        }
        
        return `
        <head>
        <link rel="stylesheet" href="css/hclassic.css">
        </head>
    
    <main class="product" >
        

            

        <div class="overlay"></div>
        <div class="overlay_over">
            <p class="producto_mujeres">${product.category}</p>
            <h1 class="producto_tipo">${product.name}</h1>
            <div class="linea_divisoria"></div>
            <div class="producto_fotos">
                <div class="producto_preview" >
                    <img class="producto_preview_active" src="${product.img_1}">
                </div>
                <div class="producto_preview_2" >
                    <img class="producto_preview1" src="${product.img_1}" >
                    <img class="producto_preview2" src="${product.img_2}">
                    <img class="producto_preview3" src="${product.img_3}">
                    <img class="producto_preview4" src="${product.img_4}">
                    <img class="producto_preview5" src="${product.img_5}">
                    <img class="producto_preview6" src="${product.img_6}">
                </div>
            </div>
            <div class="linea_divisoria"></div>
        </div>
        <div class="cones">
            <p class="producto_info" style="font-weight: 700;">Descripción:</p>
            <p class="producto_info ">${product.info}</p>
            <p class="producto_info" style="font-weight: 700;">Personaliza tu linea:</p>
            
            
            <div class="info_guia" id="guia-tabla">
                <a class="producto_guia_talla" >
                    <p>Guia Talla</p>
                </a>
                <div class="producto_guia_color">
                    <p>Guia Color</p> 
                </div>
            </div>
            <div class="guia-talla">
                <div class="guia-talla-titulo">
                    <h1>Guia Talla</h1>
                    <img class="guia_salida close" src="img/x.png" alt="">
                </div>
                <img class="guia-imagen" src="img/TALLAJEMUJER.png" alt="">
                <img class="guia-imagen" src="img/guiatallamujeres.png" alt="">
            </div>
            <div class="guia-color">
                <div class="guia-color-titulo">
                    <h1>Guia color</h1>
                    <img class="guiacolor_salida close" src="img/x.png" alt="">
                </div>
                <div class="contenedor_colores">
                    <div class="contenedor_colores_texto">
                        <h1>Negro</h1>
                        <img class="guia_colores" src="img/negro.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Azul cielo</h1>
                        <img class="guia_colores" src="img/azul cielo.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto" >
                        <h1 style="color: black;">Blanco</h1>
                        <img class="guia_colores" src="img/blanco.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Azul Marino</h1>
                        <img class="guia_colores" src="img/azul marino.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Gris plata</h1>
                        <img class="guia_colores" src="img/gris plata.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Ciruela</h1>
                        <img class="guia_colores" src="img/ciruela.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Rojo vino</h1>
                        <img class="guia_colores" src="img/rojo vino.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Verde esmeralda</h1>
                        <img class="guia_colores" src="img/verde esmeralda.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Rosa lirio</h1>
                        <img class="guia_colores" src="img/rosa lirio.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Verde marino</h1>
                        <img class="guia_colores" src="img/verde marino.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Verde oscuro</h1>
                        <img class="guia_colores" src="img/verde oscuro.jpeg" alt="">
                    </div>
                    <div class="contenedor_colores_texto">
                        <h1>Coral</h1>
                        <img class="guia_colores" src="img/coral.jpeg" alt="">
                    </div>
                    
                </div>
            </div>

            <select class="producto_seleccion-talla" name="producto_talla" id="talla1">
                <option selected value="0">TALLA CAMISETA</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
            
            <select class="producto_seleccion-talla" name="producto_talla" id="talla2">
                <option selected value="0">TALLA PANTALON</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
            <select class="producto_seleccion-talla " name="producto_talla" id="color">
                <option selected value="0">COLOR</option>
                <option value="Negro">Negro </option>
                <option value="Azul cielo">Azul cielo</option>
                <option value="Blanco">Blanco</option>
                <option value="Azul marino">Azul marino</option>
                <option value="Gris plata">Gris plata</option>
                <option value="Morado">Ciruela</option>
                <option value="Rojo vino">Rojo vino</option>
                <option value="Verde esmeralda">Verde esmeralda</option>
                <option value="Rosa">Rosa lirio</option>
                <option value="Verde marino">Verde marino</option>
                <option value="Verde oscuro">Verde oscuro</option>
                <option value="Coral">Coral</option>
            </select>
            
            <p class="producto_info" style="font-weight:700;">Personaliza tu bordado:</p
            
            <div class="bordado_container">
            <div class="bordado_container">
            <div class="bordado-item" id="pregunta1">
                <input type="checkbox" id="section1" class="bordado-accordion">
                <label for="section1" class="bordado-item" style="color: white;">BORDADO</label>
                <div class="bordado-subitem">

                    <p class="producto_tipo" >Añade nombre bordado:</p>
                    <p class="producto_tipo" style="font-size: 0.8rem; position: relative; left: 3rem; color: rgba(255, 0, 0, 0.707);" > Valor adicional: $3.000</p>
                    
                    <select id="bordado1">
                        <option value="0" disabled selected >¿ Deseas agregar al total ?</option>
                        <option value="3000">SI</option>
                        <option value="0">NO</option>
                    </select>

                    <textarea name="Nombre bordado" id="my-text" cols="30" rows="2" placeholder="Maximo 20 caracteres">Ninguno</textarea>
                    <p class="bordado_info" id="resultado"></p>
                    <div id="textonombre"></div>

                    <div class="linea_divisoria"></div>

                    <p class="producto_tipo" >Añade tu logo:</p>
                    <p class="producto_tipo" style="font-size: 0.8rem; position: relative; left: 3rem; color: rgba(255, 0, 0, 0.707);" > Valor adicional: $6.000</p>
                    
                    <select id="bordado2">
                        <option value="0" disabled selected >¿ Deseas agregar al total ?</option>
                        <option value="6000">SI</option>
                        <option value="0">NO</option>
                    </select>

                    <input type="file" id="real-file" hidden="hidden">
                    <button type="button" id="boton-archivo" >Descarga aquí archivos jpg, png, pdf. <br>No mayores a 4Mb.</button>
                    <div id="visor-archivo"></div>  

                </div>   
            </div>
            
            </div>
        </div>
        <section class="section-info">
            <div class="contenedor-valor">
            
                <p class="contenedor-valor_texto">Valor : </p>
                <p id="prueba1" class="contenedor-valor_texto"> </p>
                <img style="width:4rem; position:relative; top:-2.5rem;" src="img/promo.png" alt="">
            </div>
            <button id="add-button" class="mycompra">Añade a <img src="img/mycompra.png" alt=""> compra</button>

    `
    
    },
};
export default Menp1Screen;

