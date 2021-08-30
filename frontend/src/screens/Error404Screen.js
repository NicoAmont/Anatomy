const Error404Screen = {
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
        return `
        <head>
        <link rel="stylesheet" href="css/styles.css">
        
        </head>
        <header>

            <div class="hero">
                
                <p style="left:40%;" class="hero_texto">Error 404<br><span class="hero_texto_2" >Página no Encontrada</span><br></p>
                
                <div class="circulo1"></div>
                <div class="logof1"></div>
                <p class="loremf1">Ups! Ha ocurrido un error vuelve a buscar desde el inicio</p> 
            </div> 
        
        </header>`
    }
};
export default Error404Screen;