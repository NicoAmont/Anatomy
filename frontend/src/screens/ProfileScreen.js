import { getMyOrders, update } from "../api";
import { formatter } from "../config";
import { getUserInfo, clearUser } from "../localStorage";
import { hideLoading, setUserInfo, showLoading } from "../utils";

const ProfileScreen={
    after_render: () =>{
        document.getElementById("signout-button")
        .addEventListener("click", () => {
            clearUser();
            document.location.hash = '/';
        });
        document.getElementById("profile-form")
        .addEventListener("submit", async (e) =>{
            e.preventDefault();
            showLoading();
            const data = await update({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            });
            hideLoading();
            
            if(data.error){
                swal('¡Ups!', data.error , 'error')
            }else{
                setUserInfo(data);
                
                document.location.hash = '/';
            }
            
        });
    },
    render: async () => {
        const { name, email } = getUserInfo();
        if (!name) {
            document.location.hash = '/';
        }
        const orders = await getMyOrders();
        const pformat = formatter.format;
        return `
        <head>
            <link rel="stylesheet" href="css/cart.css">
        </head>
            <div class="content profile">
            <div class="profile-info">
            <div class="form-container">
            <form id="profile-form">
                <ul class="form-items">
                <li>
                    <h1>Perfil de Usuario</h1>
                </li>
                <li class="text_field">
                    <label for="name">Nombre</label>
                    <input type="name" name="name" id="name" value="${name}" />
                </li>
                <li class="text_field">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value="${email}" />
                </li>
                <li class="text_field">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" />
                </li>
                <li>
                    <button type="submit" class="primary">Cambiar</button>
                </li>
                <li>
                <button type="button" id="signout-button" class="primary" >Cerrar Sesión</button>
                </li>        
                </ul>
            </form>
            </div>
            </div>
            <div class="profile-orders">
            <h1>HISTORIAL DE COMPRAS</h1>
                <table>
                <thead>
                    <tr>
                    <th>REF DE COMPRA</th>
                    <th>FECHA</th>
                    <th>TOTAL</th>
                    <th>PAGO</th>
                    <th>ENVIADO</th>
                    <th>AJUSTES</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                    orders.length === 0
                        ? `<tr><td colspan="6">No Order Found.</tr>`
                        : orders.map(
                            (order) => `
                <tr>
                    <td>${order._id}</td>
                    <td>${order.createdAt}</td>
                    <td>${pformat(order.totalPrice)}</td>
                    <td>${order.paidAt || 'No'}</td>
                    <td>${order.deliveryAt || 'No'}</td>
                    <td><a class="detailsbuy" href="/#/order/${order._id}">DETIALS</a> </td>
                </tr>
                `
                            )
                            .join('\n')
                    }
                </tbody>
                </table>
            </div>
            </div>
            
            `;
    },
};

export default ProfileScreen;