import { getProducts } from "../api";
import { formatter } from "../config";
import { getCartItems, setCartItems } from "../localStorage";
import { parseRequestUrl, redirectUser, rerender } from "../utils";
import { colornew, precionew1, precionew2, tallacnew, tallapnew, textobordado } from "./Womenp1Screen";
import { colornew2, precionew12, precionew22, tallacnew1, tallapnew1, textobordado1 } from "./Menp1Screen";

export const addToCart = (item, forceUpdate = false) => {
    let cartItems = getCartItems();
    const existItem = cartItems.find((x) => x.product === item.product);
    if (existItem) {
        if (forceUpdate) {
            cartItems = cartItems.map((x) =>
            x.product === existItem.product ? item : x
            );
        }
    } else {
            cartItems = [...cartItems, item];
    }
    setCartItems(cartItems);

    if (forceUpdate) {

    rerender(CartScreen);
    }
};

const removeFromCart = (id) => {
    setCartItems(getCartItems().filter((x) => x.product !== id));
    if (id === parseRequestUrl().id) {
    document.location.hash = '/cart';
    } else {
    rerender(CartScreen);
    }
};

const CartScreen = {
    after_render: () => {
        const qtySelects = document.getElementsByClassName('qty-select');
        Array.from(qtySelects).forEach((qtySelect) => {
            qtySelect.addEventListener('change', (e) => {
        const item = getCartItems().find((x) => x.product === qtySelect.id);
        addToCart({ ...item, qty : Number(e.target.value) }, true);
    });
    });
        const deleteButtons = document.getElementsByClassName('delete-btn');
        Array.from(deleteButtons).forEach((deleteButton) => {
            deleteButton.addEventListener('click', () => {
            removeFromCart(deleteButton.id);
                });
            });


        const reloadscreen = () =>{
            window.scroll({
                top: 10,
                left: 0,
                behavior: 'smooth'
            });
        };
        reloadscreen();  
    
        //eliminar variables 
        setTimeout(() => {
            precionew1 = 0;
            precionew12 = 0;
            precionew2 = 0;
            precionew22 = 0;
            textobordado.splice(0,1);
            textobordado[0] = 94050513100;
            textobordado1.splice(0,1);
            textobordado1[0] = 94050513100;
        }, 2000);

        document.getElementById('checkout-button').addEventListener('click', () => {
            document.location.hash = '/signin';
        });
    },

    render: async () => {
        const request = parseRequestUrl();
        
        if ( request.id){
            const products = await getProducts();
            let indice = products.findIndex((objeto)=>{
                return objeto._id == request.id;
            });
            const product = products[indice];
            
            addToCart({
                
                product: product._id,
                name: product.name,
                image: product.image,
                price: product.price + precionew1 + precionew12,
                tallac: tallacnew1 || tallacnew,
                tallap: tallapnew1 || tallapnew,
                color: colornew || colornew2,
                bordadonombre: textobordado[0] || textobordado1[0], 
                countInStock: product.countInStock,
                qty: 1,
                
            });
            
        }
        const cartItems = getCartItems();
        
        const pformat = formatter.format;
        


        return `

        <head>
            <link rel="stylesheet" href="css/cart.css">
        </head>
        
        <div class="mycompra2" >
            <svg width="198" height="73" viewBox="0 0 198 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="22" width="4" height="26" fill="#75FFDE"/>
                <rect y="21.5811" width="3.78905" height="29.7256" transform="rotate(-24.6588 0 21.5811)" fill="#75FFDE"/>
                <rect x="24.0811" y="1.8457" width="3.51704" height="47.4322" transform="rotate(14.2069 24.0811 1.8457)" fill="#75FFDE"/>
                <rect x="25" y="4" width="3" height="49" fill="#75FFDE"/>
                <ellipse cx="2" cy="21.5" rx="2" ry="2.5" fill="#75FFDE"/>
                <rect x="26" y="2" width="2" height="27" fill="#75FFDE"/>
                <ellipse cx="26" cy="2.5" rx="2" ry="2.5" fill="#75FFDE"/>
                <ellipse cx="33.5" cy="56" rx="2" ry="2.5" transform="rotate(-90 33.5 56)" fill="#75FFDE"/>
                <ellipse cx="2" cy="47.5" rx="2" ry="2.5" fill="#75FFDE"/>
                <path d="M79.36 51.2C77.9467 51.2 76.6667 50.8933 75.52 50.28C74.3867 49.6533 73.4933 48.7933 72.84 47.7C72.2 46.6067 71.88 45.3733 71.88 44C71.88 42.6267 72.2067 41.3933 72.86 40.3C73.5133 39.2067 74.4067 38.3533 75.54 37.74C76.6867 37.1133 77.9667 36.8 79.38 36.8C80.5267 36.8 81.5733 37 82.52 37.4C83.4667 37.8 84.2667 38.38 84.92 39.14L83.24 40.72C82.2267 39.6267 80.98 39.08 79.5 39.08C78.54 39.08 77.68 39.2933 76.92 39.72C76.16 40.1333 75.5667 40.7133 75.14 41.46C74.7133 42.2067 74.5 43.0533 74.5 44C74.5 44.9467 74.7133 45.7933 75.14 46.54C75.5667 47.2867 76.16 47.8733 76.92 48.3C77.68 48.7133 78.54 48.92 79.5 48.92C80.98 48.92 82.2267 48.3667 83.24 47.26L84.92 48.86C84.2667 49.62 83.46 50.2 82.5 50.6C81.5533 51 80.5067 51.2 79.36 51.2ZM97.6583 51.2C96.2316 51.2 94.9449 50.8933 93.7983 50.28C92.6516 49.6533 91.7516 48.7933 91.0983 47.7C90.4449 46.5933 90.1183 45.36 90.1183 44C90.1183 42.64 90.4449 41.4133 91.0983 40.32C91.7516 39.2133 92.6516 38.3533 93.7983 37.74C94.9449 37.1133 96.2316 36.8 97.6583 36.8C99.0849 36.8 100.372 37.1133 101.518 37.74C102.665 38.3533 103.565 39.2067 104.218 40.3C104.872 41.3933 105.198 42.6267 105.198 44C105.198 45.3733 104.872 46.6067 104.218 47.7C103.565 48.7933 102.665 49.6533 101.518 50.28C100.372 50.8933 99.0849 51.2 97.6583 51.2ZM97.6583 48.92C98.5916 48.92 99.4316 48.7133 100.178 48.3C100.925 47.8733 101.512 47.2867 101.938 46.54C102.365 45.78 102.578 44.9333 102.578 44C102.578 43.0667 102.365 42.2267 101.938 41.48C101.512 40.72 100.925 40.1333 100.178 39.72C99.4316 39.2933 98.5916 39.08 97.6583 39.08C96.7249 39.08 95.8849 39.2933 95.1383 39.72C94.3916 40.1333 93.8049 40.72 93.3783 41.48C92.9516 42.2267 92.7383 43.0667 92.7383 44C92.7383 44.9333 92.9516 45.78 93.3783 46.54C93.8049 47.2867 94.3916 47.8733 95.1383 48.3C95.8849 48.7133 96.7249 48.92 97.6583 48.92ZM124.814 51L124.794 41.72L120.194 49.4H119.034L114.434 41.84V51H111.954V37H114.094L119.654 46.28L125.114 37H127.254L127.274 51H124.814ZM140.816 37C142.029 37 143.082 37.2 143.976 37.6C144.882 38 145.576 38.5733 146.056 39.32C146.536 40.0667 146.776 40.9533 146.776 41.98C146.776 42.9933 146.536 43.88 146.056 44.64C145.576 45.3867 144.882 45.96 143.976 46.36C143.082 46.76 142.029 46.96 140.816 46.96H137.656V51H135.056V37H140.816ZM140.696 44.76C141.829 44.76 142.689 44.52 143.276 44.04C143.862 43.56 144.156 42.8733 144.156 41.98C144.156 41.0867 143.862 40.4 143.276 39.92C142.689 39.44 141.829 39.2 140.696 39.2H137.656V44.76H140.696ZM162.532 51L159.672 46.9C159.552 46.9133 159.372 46.92 159.132 46.92H155.972V51H153.372V37H159.132C160.346 37 161.399 37.2 162.292 37.6C163.199 38 163.892 38.5733 164.372 39.32C164.852 40.0667 165.092 40.9533 165.092 41.98C165.092 43.0333 164.832 43.94 164.312 44.7C163.806 45.46 163.072 46.0267 162.112 46.4L165.332 51H162.532ZM162.472 41.98C162.472 41.0867 162.179 40.4 161.592 39.92C161.006 39.44 160.146 39.2 159.012 39.2H155.972V44.78H159.012C160.146 44.78 161.006 44.54 161.592 44.06C162.179 43.5667 162.472 42.8733 162.472 41.98ZM181.081 47.76H174.081L172.701 51H170.021L176.321 37H178.881L185.201 51H182.481L181.081 47.76ZM180.221 45.72L177.581 39.6L174.961 45.72H180.221Z" fill="#FFFFFF"/>
                <rect x="39" y="33" width="4" height="15" fill="#FFFFFF"/>
                <ellipse cx="41" cy="47.5" rx="2" ry="2.5" fill="#FFFFFF"/>
                <rect x="33.293" y="24.7354" width="3.1887" height="11.7337" transform="rotate(-32.7241 33.293 24.7354)" fill="#FFFFFF"/>
                <ellipse cx="34.4187" cy="23.5384" rx="1.59435" ry="1.99294" transform="rotate(-32.7241 34.4187 23.5384)" fill="#FFFFFF"/>
                <rect width="3.1887" height="13.0243" transform="matrix(-0.841284 -0.540594 -0.540594 0.841284 49.8872 23.7354)" fill="#FFFFFF"/>
                <ellipse rx="1.59435" ry="1.99294" transform="matrix(-0.841284 -0.540594 -0.540594 0.841284 48.7615 22.5384)" fill="#FFFFFF"/>
                <rect width="3" height="26" transform="matrix(1 0 0 -1 25 71)" fill="#75FFDE"/>
                <rect width="4.17073" height="14.3758" transform="matrix(0.908809 0.417213 0.417213 -0.908809 25.1011 68.8799)" fill="#75FFDE"/>
                <rect width="3.78905" height="163.957" transform="matrix(0.00529493 0.999986 0.999986 -0.00529493 34 54.082)" fill="#75FFDE"/>
                <ellipse rx="2" ry="2.5" transform="matrix(1 0 0 -1 27 70.0957)" fill="#75FFDE"/>
                <ellipse cx="14" cy="47.5" rx="2" ry="2.5" fill="#75FFDE"/>
            </svg>
        </div>
        

        <div class="content cart">
            <div class="cart-list">
            <ul class="cart-list-container">
                <li>
                    <h3>PRODUCTO</h3>
                    <h3>PRECIO (COL)</h3>
                </li>
                    ${
                        cartItems.length === 0
                            ? '<div class="siguecomprando">Carrito vacio. <a class="continue_btn" href="/#/">Sigue Comprando</a>'
                            : cartItems
                                .map(
                                    (item) => `
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
                                                                    <select class="qty-select" id="${item.product}">
                                                                        ${[...Array(item.countInStock).keys()].map((x) =>
                                                                        item.qty === x + 1
                                                                            ? `<option selected value="${x + 1}">${x + 1}</option>`
                                                                            : `<option  value="${x + 1}">${x + 1}</option>`
                                                                        )}  
                                                                    </select>
                                                                    
                                                                </div>

                                                                </div>
                                                                
                                                    <div class="cart-price">
                                                        
                                                        TOTAL ${pformat(item.price)}
                                                        <button type="button" class="delete-button delete-btn" id="${item.product}">
                                                            x 
                                                        </button>
                                                        <a href="/#/women/${item.product}" class="modificarlinea delete-btn" id="${item.product}">
                                                            Modificar Linea 
                                                        </a>
                                                    </div>
                                                </div>
                    
                                            </li>
                                                `
                                    )
                        .join('\n')
                    } 
            </ul>
        </div>
        <div class="cart-action">
            <h3>
                Subtotal (${cartItems.reduce((a, c) => a + c.qty, 0)}  items)
                :   
                     ${pformat(cartItems.reduce((a, c) =>  a + c.price * c.qty, 0))}
            </h3>

            <button id="checkout-button" class="primary fw">
                Continua al Checkout
            </button>
        </div>
        <div class="envios-info">
            IMPORTANTE: Envios fuera de los alrededores de Bogota presentan cargos 
            por transporte. Los precios estan sujetos a modificaciones de temporada. 
            En la bolsa de compra puedes dejar temporalmente los productos que deseas, 
            modificarlos o eliminarlos.
        </div>
        
    
    `;
    },
};

export default CartScreen;