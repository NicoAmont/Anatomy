import DashboardMenu from "../components/Dashboard";
import { getOrders, deleteOrder } from '../api';
import { showLoading, hideLoading, rerender, showMessage } from '../utils';

const OrderListScreen = {
  after_render: () => {
    const deleteButtons = document.getElementsByClassName('delete-button2');
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener('click', async () => {
        if (confirm('¿ Estas seguro de eliminar la orden ?')) {
          showLoading();
          const data = await deleteOrder(deleteButton.id);
          if (data.error) {
            showMessage(data.error);
          } else {
            rerender(OrderListScreen);
          }
          hideLoading();
        }
      });
    });
    const editButtons = document.getElementsByClassName('edit-button');
    Array.from(editButtons).forEach((editButton) => {
      editButton.addEventListener('click', async () => {
        document.location.hash = `/order/${editButton.id}`;
      });
    });
  },
  render: async () => {
    const orders = await getOrders();
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: 'orders' })}
    <div class="dashboard-content">
      <h1>ORDENES DE COMPRA</h1>
      
      <div class="order-list">
        <table>
          <thead>
            <tr>
              <th>REF DE COMPRA</th>
              <th>FECHA</th>
              <th>TOTAL</th>
              <th>USUARIO</th>
              <th>PAGO</th>
              <th>ENVIADO</th>
              <th class="tr-action">AJUSTES</th>
            <tr>
          </thead>
          <tbody>
            ${orders
              .map(
                (order) => `
            <tr>
              <td>${order._id}</td>
              <td>${order.createdAt}</td>
              <td>${order.totalPrice}</td>
              <td>${order.user.name}</td>
              <td>${order.paidAt || 'No'}</td>
              <td>${order.deliveredAt || 'No'}</td>
              <td>
              <button id="${order._id}" class="edit-button ">...</button>
              <button id="${order._id}" class="delete-button2">x</button>
              </td>
            </tr>
            `
              )
              .join('\n')}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    `;
  },
};
export default OrderListScreen;
