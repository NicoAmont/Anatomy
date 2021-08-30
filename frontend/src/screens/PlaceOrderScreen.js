import { cleanCart, getCartItems, getPayment, getShipping } from "../localStorage"
import CheckoutSteps from '../components/CheckoutSteps';
import { formatter } from "../config";
import { hideLoading, showLoading, showMessage } from "../utils";
import { createOrder } from "../api";


const convertCartToOrder = () => {
    const orderItems = getCartItems();
    if(orderItems.length === 0){
        document.location.hash = '/cart';
    }
    const shipping = getShipping();
    if (!shipping.adress){
        document.location.has = '/shipping'
    }
    const payment = getPayment();
    if(!payment.paymentMethod){
        document.location.hash = '/payment';
    }
    const itemsPrice = orderItems.reduce((a,c) => a +c.price*c.qty, 0)
    const shippingPrice = itemsPrice > 100? 0: 10;
    // const taxPrice = Math.round(0.15 * itemsPrice * 100 ) / 100;
    const taxPrice = 0;
    const totalPrice = itemsPrice +shippingPrice + taxPrice;
    return{
        orderItems,
        shipping,
        payment,
        itemsPrice,
        shippingPrice, 
        taxPrice,
        totalPrice
    };
};


const PlaceOrderScreen = {
    after_render: async () =>{
        document
        .getElementById('placeorder-button')
        .addEventListener('click', async () => {
        const order = convertCartToOrder();
        showLoading();
        const data = await createOrder(order);
        hideLoading();
        if (data.error) {
            showMessage(data.error);
        } else {
            cleanCart();
            document.location.hash = `/order/${data.order._id}`;
        }
        });
    },
    render: () => {
        const {
            orderItems,
            shipping,
            payment,
            itemsPrice,
            shippingPrice, 
            taxPrice,
            totalPrice
        } = convertCartToOrder();
        const pformat = formatter.format;
        
        return`
        <head>
            <link rel="stylesheet" href="css/cart.css">
        </head>
        <div>
            ${CheckoutSteps.render({
                step1: true,
                step2: true,
                step3: true,
                step4: true,
            })}
            <div class= "order">
                <div class="order-info">
                    <div class=""> 
                        <h2>Datos de envío</h2>
                        <h3>
                            ${shipping.phone}, ${shipping.address}, ${shipping.postalCode}, ${shipping.city},
                            ${shipping.country}
                        </h3>
                    </div>
                    <div> 
                        <h2>Método de pago<h2>
                        <h3>
                            Pago vía : ${payment.paymentMethod}
                        </h3>
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
                                            
                                            <h3 class="total-price">TOTAL ${pformat(item.price)}</h3>
                                            
                                        </div>
                                    </div>
        
                                </li>
                                    `)
                            }
                        </ul>
                    </div>
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
                                    fuera de los alrededores de Bogotá)</div> 
                            </li>
                            
                            <li class="total">
                                <div>Total</div> 
                                <div>${pformat(totalPrice)}</div> 
                            </li>
                            <li>
                                <button id="placeorder-button"class="primary fw">
                                    Generar Orden
                                </button>
                            </li>
                </div>
            </div>
        </div>

                        
        `
    },
}
export default PlaceOrderScreen;