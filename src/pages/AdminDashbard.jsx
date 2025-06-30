import React from 'react';
import AdminHeader from '../components/AdminHeader';
import useMenu from '../context/MenuContext';
import axios from 'axios';

function AdminDashbard() {
  const { order, orderLoading, orderError } = useMenu();

  //   const toggleStatus = async (order) => {
  //     try {
  //       const response = await axios.put(
  //         `https://tabletop-backend.vercel.app/api/order/${order._id}`,
  //         { status: 'Completed' }
  //       );
  //       console.log('updated', response.data);
  //       window.location.reload();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <AdminHeader />
      <main className="container py-3">
        <h2 className="mb-3">Hello Admin</h2>
        <h4 className="mb-3">You have received below orders: </h4>
        {orderLoading && <p>Loading...</p>}
        {orderError && <p>Error: {orderError}</p>}
        <div className="row">
          {order.length > 0 ? (
            <div>
              {order.map((order) => (
                <div key={order._id} className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <p>Table Number: {order.tableNumber}</p>
                        <p>Selected Items: </p>
                        {order.selectedItems.map((item) => (
                          <div key={item._id} className="d-flex gap-5">
                            <img
                              className="mb-3"
                              src={item.menuId.image}
                              style={{ height: '50px', width: '50px' }}
                            />
                            <p>{item.menuId.name}</p>
                            <p>₹ {item.menuId.price}</p>
                            <p>X {item.quantity}</p>
                          </div>
                        ))}
                        <p>Total Amount: ₹ {order.totalAmount}</p>
                        <p>Stutus: {order.status}</p>

                        {/* {order.status === 'Pending' && (
                          <button
                            className="btn btn-primary"
                            onClick={() => toggleStatus(order)}
                          >
                            Mark as Completed
                          </button>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <i
                className="bi bi-list-task"
                style={{ fontSize: '5rem', color: 'grey' }}
              ></i>
              <p className="fs-5">No orders found.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default AdminDashbard;
