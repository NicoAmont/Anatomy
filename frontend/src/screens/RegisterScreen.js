import { register } from "../api";
import { getUserInfo } from "../localStorage";
import { hideLoading, redirectUser, setUserInfo, showLoading } from "../utils";

const RegisterScreen={
    after_render: () =>{
        document.getElementById("register-form")
        .addEventListener("submit", async (e) =>{
            e.preventDefault();
            showLoading();
            const passw = document.getElementById('password').value
            const repassw = document.getElementById('repassword').value
            const data = await register({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            });
            hideLoading();
            
            if(repassw == passw){
                if(data.error){
                    swal('¡Ups!', data.error , 'error')
                }else{
                    setUserInfo(data);
                    
                    redirectUser();
                }
            }else{
                swal('¡Ups!', 'Las contraseñas no son iguales, intenta de nuevo' , 'warning')
            }
        });
    },
    render: () =>{
        if(getUserInfo().name){
            redirectUser();
        }
        return `
        <head>
            <link rel="stylesheet" href="css/cart.css">
        </head> 
        <div class="form-container">
            <form id="register-form">
                <ul class="form-items">
                    <li>
                        
                        <h1>Regístrate</h1>
                    </li>
                    <li class="text_field">    
                        <label for="name">Nombre<label>
                        <input type="name" name="name" id="name"/>
                    </li>
                    <li class="text_field">    
                        <label for="email">Email<label>
                        <input type="email" name="email" id="email"/>
                    </li>
                    <li class="text_field">     
                        <label for="password">Constraseña<label>
                        <input type="password" name="password" id="password"/>
                    </li>
                    <li class="text_field">     
                        <label for="repassword">Confirma  la constraseña<label>
                        <input type="password" name="repassword" id="repassword"/>
                    </li>
                    <li>
                        <button type="submit" class="primary" >Crear cuenta</button>
                    </li>
                    <li>
                        <div>
                            Ya tienes una cuenta Anatomy? 
                            <a href="/#/signin">Inicia sesión</a>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
        `;
    },
};

export default RegisterScreen;