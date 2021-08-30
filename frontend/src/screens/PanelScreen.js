import DashboardMenu from "../components/Dashboard"; 
import { getSummary } from '../api';
import Chartist from 'Chartist'
import { formatter } from "../config";

let summary = {}; 
const DashboardScreen = {
    after_render: () => {
        new Chartist.Line(
            '.ct-chart-line',
            {
                labels: summary.dailyOrders.map((x) => x._id),
                series: [summary.dailyOrders.map((x) => x.sales)],
                },
                {
                showArea: true,
                }
            );
    },
    render: async () => {
        summary = await getSummary();
        const pformat = formatter.format;
    return `
    <div class="dashboard">
        ${DashboardMenu.render({ selected: 'dashboard' })}
        <div class="dashboard-content">
        <h1>Dashboard</h1>
            <ul class="summary-items">
            <li>
                <div class="summary-title color1">
                <span><i class="fa fa-users"></i>Usuarios</span>
                </div>
                <div class="summary-body">${(summary.users[0].numUsers)}</div>
            </li>
            <li>
                <div class="summary-title color2">
                <span><i class="fa fa-users"></i>Compras</span>
                </div>
                <div class="summary-body">${(summary.orders[0].numOrders)}</div>
            </li>
            <li>
                <div class="summary-title color3">
                <span><i class="fa fa-users"></i> Ventas</span>
                </div>
                <div class="summary-body">${pformat(summary.orders[0].totalSales)}</div>
            </li>
            </ul>
            <div class="charts">
                <div>
                    <h2>Ventas</h2>
                    <div class="ct-perfect-fourth ct-chart-line"></div>
                </div>
                <div>
                <div class="ct-perfect-fourth ct-chart-pie"></div>
                <h2>Fecha</h2>
                </div>
            </div>  
        </div> 
        </div>
    </div>
    `;
    },
};
export default DashboardScreen