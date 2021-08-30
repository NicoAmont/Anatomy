import { getShipping, getUserInfo, setShipping } from '../localStorage';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingScreen = {
after_render: () => {
    document
    .getElementById('shipping-form')
    .addEventListener('submit', async (e) => {
        e.preventDefault();
        setShipping({
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            postalCode: document.getElementById('postalCode').value,
            country: document.getElementById('country').value,
        });
        document.location.hash = '/payment';
    });
},
render: () => {
    const { name } = getUserInfo();
    if (!name) {
        document.location.hash = '/';
    }
    const { phone, address, city, postalCode, country } = getShipping();
    
    return `
    <head>
    <link rel="stylesheet" href="css/cart.css">
    </head>   
    ${CheckoutSteps.render({ step1: true, step2: true })}
    <div class="form-container">
    <form id="shipping-form">
        <ul class="form-items">
        <li>
            <h1>Datos de compra</h1>
        </li>
        <li class="text_field">
            <label for="phone">Telefono</label>
            <input type="text" name="phone" id="phone" value ="${phone}" />
        </li>
        <li class="text_field">
            <label for="address">Direccion de entrega</label>
            <input type="text" name="address" id="address" value="${address}" />
        </li>
        <li class="text_field">
            <label for="city">Ciudad</label>
            <input type="text" name="city" id="city" value="${city}" />
        </li>
        <li class="text_field">
            <label for="postalCode">Codigo postal</label>
            <input type="text" name="postalCode" id="postalCode" value="${postalCode}" />
        </li>
        <li class="text_field">
            <label for="country">Departamento</label>
            <input type="text" name="country" id="country" value="${country}" />
        </li>

        <li >
            <button type="submit" class="primary">Continue</button>
        </li>        
        </ul>
    </form>
    </div>
    `;
    },
};
export default ShippingScreen;
