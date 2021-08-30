
import { hideLoading, parseRequestUrl, rerender, showLoading, showMessage } from "../utils";
import { deliverOrder, getOrder, getPaypalClientId, paidtransfOrder, payOrder} from "../api";
import { formatter } from "../config";
import { getUserInfo } from "../localStorage";

// const addPaypalSdk = async (totalPrice) => {
//     const clientId = await getPaypalClientId();
//     showLoading();
//     if(!window.paypal){
//         const script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = 'https://www.paypalobjects.com/api/checkout.js';
//         script.async = true;
//         script.onload = () => handlePayment(clientId, totalPrice);
//         document.body.appendChild(script);
//     }else{
//         handlePayment(clientId, totalPrice);
//     }
// };
// const handlePayment = (clientId, totalPrice) =>{
//     window.paypal.Button.render({
//         env:'sandbox',
//         client: {
//             sandbox: clientId,
//             production:'',
//         },
//         locale: 'en_US',
//         style: {
//             size:'responsive',
//             color:'gold',
//             shape: 'pill',
//         },

//         commit: true,
//         payment(data,actions){
//             return actions.payment.create({
//                 transactions:[
//                     {
//                         amount: {
//                             total: totalPrice,
//                             currency: 'USD', 
//                         },
//                     },
//                 ],
//             });
//         },
//         onAuthorized(data, actions){
//             return actions.payment.execute().then(async () =>{
//                 showLoading();
//                 await payOrder(parseRequestUrl().id, {
//                     orderID: data.orderID,
//                     payerID: data.payerID,
//                     paymentID: data.paymentID,
//                 }) 
//                 hideLoading();
//                 showMessage('Payment was succesful', () => {
//                     rerender(OrderScreen);
//                 });
//             });
//         },
//     }, '#paypal-button'
//     ).then(() => {
//         hideLoading();
//     });
// };

const OrderScreen = {
    after_render: async () =>{
        const request = parseRequestUrl();
        const {isAdmin} = getUserInfo();
        const {
            isPaid
        } = await getOrder(request.id);
        !isPaid && isAdmin
        ?document
            .getElementById('paidtransf-order-button')
            .addEventListener('click', async () => {
                showLoading();
                await paidtransfOrder(request.id);
                hideLoading();
                swal('¡Pago exitoso!', 'No olvides cambiar el estado del envio' , 'success');
                rerender(OrderScreen);
            })
        :document
            .getElementById('deliver')
            .addEventListener('click', async () => {
                showLoading();
                await deliverOrder(request.id);
                hideLoading();
                swal('Envío exitoso!', 'Se ha realizado otra compra y envíos exitosos' , 'success');
                rerender(OrderScreen);
            })
    
    
    },
    render: async ()  => {
        const {isAdmin} = getUserInfo();
        showLoading();
        const request = parseRequestUrl();
        const {
            _id,
            shipping,
            payment,
            orderItems,
            shippingPrice,
            itemsPrice,
            taxPrice,
            totalPrice,
            isDelivered,
            deliveredAt,
            isPaid,
            paidAt
        } = await getOrder(request.id);
        hideLoading();
        const pformat = formatter.format;
        return`
        <head>
            <link rel="stylesheet" href="css/cart.css">
        </head>
        <div class= "factura_compra">
        
            <div class= "order">
                <div class="order-info">
                    <div class=""> 
                        <h2>Datos de envío</h2>
                        <h3>
                            ${shipping.phone}, ${shipping.address}, ${shipping.postalCode}, ${shipping.city},
                            ${shipping.country}
                        </h3>
                        ${isDelivered
                            ? `<div class="success">Envíado el ${deliveredAt}</div>`
                            : `<div class="error">No ha sido enviado</div>`
                        }
                    </div>
                    <div> 
                        <h2>Método de pago<h2>
                        <h3>
                            Pago vía : ${payment.paymentMethod}
                        </h3>
                        ${isPaid
                            ? `<div class="success">Pagado el ${paidAt}</div>`
                            : `<div class="error">No ha sido pagado</div>`
                        }
                    </div>
                    <div> 
                        <ul class="cart-list-container">
                            <h2>Carrito de compras</h2>
                            
                            ${
                                orderItems.map(item => `
                                <li class="product-info">
                                    <div class="cart-image">
                                        <img src="${item.image}" alt="${item.name}" />
                                    </div>

                                    <div class="cart-name">
                                        <div>
                                            <a class="delete-btn product-link" id="${item.product}" href="/#/women/${item.product}">
                                                ${item.name}
                                            </a>
                                            <p class="sub-info">Talla camiseta :  ${item.tallac}</p>
                                            <p class="sub-info">Talla pantalon :  ${item.tallap}</p>
                                            <p class="sub-info">Color          :  ${item.color}</p>
                                            <p class="sub-info">Texto bordado:               ${item.bordadonombre}</p>
                                        </div>

                                        

                                        <div class="cantidad_producto">
                                                Cantidad : 
                                                    <div>
                                                    <p class="sub-info" >
                                                    ${item.qty}
                                                    </p>
                                                        
                                                    </div>

                                                    </div>
                                                    
                                        <div class="cart-price">
                                            
                                            <h3>TOTAL ${pformat(item.price)}</h3>
                                            
                                        </div>
                                    </div>
                                                                
                                </li>
                                    `)
                            }
                        </ul>
                    </div>
                    <h1 class="reference">Referencia de Compra Num ${_id}</h1>
                    
                </div>
                
                <div class="order-action" >
                    <ul> 
                            <li>
                                <h2>Lista de Precios</h2> 
                            </li>
                            <li>
                                <div>Items</div> 
                                <div>${pformat(itemsPrice)}</div> 
                            </li>
                            <li>
                                <div>Gastos de envío asumidos por el comprador (Aplica para envios
                                    fuera de los alrededores de Bogotá</div> 
                            </li>
                            
                            <li class="total">
                                <div>Total</div> 
                                <div>${pformat(totalPrice)}</div> 
                            </li>
                            <div class"pagotransferencia">
                                <li >
                                    <img class ="pagoimg" src="./img/bancolombia.png" />
                                </li>
                                <li>
                                    <div>Cuenta de Ahorros</div> 
                                    <div>No 11112455123</div> 
                                </li>
                            </div>
                            
                            <li>
                            ${
                                !isPaid && isAdmin?
                                `<button id="paidtransf-order-button" class="primary editbtn">Pagado</button>`
                                :''
                            }
                            </li>
                            <li>
                            ${
                                isPaid && !isDelivered && isAdmin?
                                `<button id="deliver" class="primary editbtn">Enviado</button>`
                                :''
                            }
                            </li>
                            
                    </ul>     
                </div>
                
            </div>
            
        </div>

                        
        `
    },
}
export default OrderScreen;