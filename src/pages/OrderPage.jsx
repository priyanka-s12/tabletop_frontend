import { useState } from 'react';
import Header from '../components/Header';
import useMenu from '../context/MenuContext';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function OrderPage() {
  const { menuItems, menuLoading, menuError } = useMenu();
  const [params] = useSearchParams();
  const tableNumber = params.get('table');

  const [cart, setCart] = useState([]);

  const handleAdd = (item) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci._id === item._id);
      if (existing) {
        return prev.map((ci) =>
          ci._id === item._id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  console.log(cart);

  const handleConfirmOrder = async () => {
    try {
      const payload = {
        tableNumber: Number(tableNumber),
        selectedItems: cart.map((item) => ({
          menuId: item._id,
          quantity: item.quantity,
        })),
      };

      const response = await axios.post(
        'https://tabletop-backend.vercel.app/api/order',
        payload
      );
      console.log(response.data);
      alert(response.data.message);
      setCart([]);
    } catch (err) {
      console.error('Order failed:', err);
    }
  };
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">Menu</h2>
        {menuLoading && <p>Loading...</p>}
        {menuError && <p>Error: {error}</p>}

        <section>
          {cart.length > 0 && (
            <div className="mt-6 p-4 border-t">
              <h3 className="font-semibold mb-2">Selected Items</h3>
              <ul className="text-sm mb-4">
                {cart.map((item) => (
                  <li key={item._id}>
                    {item.name} × {item.quantity}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleConfirmOrder}
                className="px-4 py-2 rounded"
              >
                Confirm Order
              </button>
            </div>
          )}
        </section>

        <section>
          {menuItems && menuItems.length > 0 ? (
            <div className="row">
              {menuItems.map((menu) => (
                <div className="col-md-4 mb-3" key={menu._id}>
                  <div className="card">
                    <img
                      src={menu.image}
                      alt={`${menu.name} cover image`}
                      className="img-fluid rounded-start object-fit-cover"
                      style={{ height: '250px' }}
                    ></img>
                    <div className="card-body">
                      <h4 className="mb-3">{menu.name}</h4>
                      <p>
                        <span className="fw-medium">Category: </span>
                        {menu.category}
                      </p>
                      <p>
                        <span className="fw-medium">Price: </span>₹ {menu.price}
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAdd(menu)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No menu found</p>
          )}
        </section>
      </main>
    </>
  );
}

export default OrderPage;
