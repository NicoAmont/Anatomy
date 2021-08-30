const CheckoutSteps = {
    render: (props) => {
      return `
      <div class="checkout-steps">
        <div class="${props.step1 ? 'active' : ''}">Inicio de sesión</div>
        <div class="${props.step2 ? 'active' : ''}">Datos del envío</div>
        <div class="${props.step3 ? 'active' : ''}">Método de pago </div>
        <div class="${props.step4? 'active' : ''}">Orden de pago</div>
      </div>
      `;
    },
  };
  export default CheckoutSteps;
  