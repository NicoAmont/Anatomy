const DashboardMenu = {
    render: (props) => {
        return `
        <head>
            <link rel="stylesheet" href="css/cart.css">
        </head>
        <div class="dashboard-menu">
            <ul>
            <li class="${props.selected === 'dashboard' ? 'selected' : ''}">
                <a href="/#/dashboard">Dashboard</a>
            </li>
            <li class="${props.selected === 'orders' ? 'selected' : ''}">
                <a href="/#/orderlist">Orders</a>
            </li>
            <li class="${props.selected === 'products' ? 'selected' : ''}">
                <a >Products</a>
            </li>
            </ul>
        </div>
        `;
    },
};
export default DashboardMenu;  