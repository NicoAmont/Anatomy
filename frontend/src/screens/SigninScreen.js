import { signin } from "../api";
import { getUserInfo } from "../localStorage";
import { hideLoading, redirectUser, setUserInfo, showLoading } from "../utils";

const SigninScreen={
    after_render: () =>{
        document.getElementById("signin-form")
        .addEventListener("submit", async (e) =>{
            e.preventDefault();
            showLoading();
            const data = await signin({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            });
            hideLoading();
            if(data.error){
                swal('¡Ups!', data.error , 'error')
            }else{
                setUserInfo(data);
                swal('¡Bienvenido!', 'Vive la experiencia Anatomy' , 'success')
                redirectUser();
            }
        });
    },
    render: () =>{
        if(getUserInfo().name){
            redirectUser();;
        }
        return `
        <head>
            <link rel="stylesheet" href="css/cart.css">
        </head> 
        <div class="form-container">
            <form id="signin-form">
                <ul class="form-items">
                    <li>
                        
                        <h1>Inicia Sesión</h1>
                    </li>
                    <li class="text_field">    
                        <label for="email">Email<label>
                        <input type="email" name="email" id="email"/>
                    </li>
                    <li class="text_field">     
                        <label for="password">Constraseña<label>
                        <input type="password" name="password" id="password"/>
                    </li>
                    <li>
                        <button type="submit" class="primary" >Iniciar sesión</button>
                    </li>
                    <li>
                        <div>
                            Nuevo en AnatomyCol Shop? 
                            <a href="/#/register">Crea tu cuenta</a>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
        `;
    },
};

export default SigninScreen;